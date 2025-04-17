import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { PostResponse, ErrorResponse } from '../types';
import { transformPost } from '../route';

const CACHE = new Map<string, { data: PostResponse[]; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000;
const DEFAULT_TAKE = 5;

const querySchema = z.object({
  take: z
    .string()
    .transform(val => parseInt(val, 10))
    .refine(val => Number.isInteger(val) && val > 0 && val <= DEFAULT_TAKE, {
      message: `take must be a positive integer up to ${DEFAULT_TAKE}`,
    })
    .optional()
    .default(DEFAULT_TAKE.toString()),
});

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const takeParam = url.searchParams.get('take');
  const cacheKey = `latest-${takeParam || DEFAULT_TAKE}`;

  const cachedData = CACHE.get(cacheKey);
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    return NextResponse.json(cachedData.data, {
      headers: {
        'Cache-Control': 'max-age=3600, s-maxage=3600',
        'X-Cache': 'HIT'
      }
    });
  }

  try {
    const parsedQuery = querySchema.safeParse({ take: takeParam ?? undefined });
    if (!parsedQuery.success) {
      return NextResponse.json(
        {
          error: {
            message: 'Invalid query parameters',
            details: parsedQuery.error.flatten().fieldErrors,
          },
        } as ErrorResponse,
        { status: 400 }
      );
    }

    const { take } = parsedQuery.data;

    const posts = await prisma.post.findMany({
      take,
      orderBy: { date: 'desc' },
      where: { status: 'publish' },
      include: {
        author: true,
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        institutions: {
          include: {
            institution: true,
          },
        },
        writers: {
          include: {
            writer: true,
          },
        },
      },
    });

    const transformedPosts = posts.map((post) => transformPost(post));

    CACHE.set(cacheKey, { data: transformedPosts, timestamp: Date.now() });
    console.log(transformedPosts[0])
    return NextResponse.json(transformedPosts, {
      headers: {
        'Cache-Control': 'max-age=3600, s-maxage=3600',
        'X-Cache': 'MISS'
      }
    });
  } catch (error) {
    console.error('Failed to fetch latest posts:', error);
    return NextResponse.json(
      {
        error: { message: 'An unexpected error occurred' },
      } as ErrorResponse,
      { status: 500 }
    );
  }
}