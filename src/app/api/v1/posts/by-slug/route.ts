import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { postRepo } from '@/lib/db';
import { PostResponse, RawPost } from '../types';
import { transformPost } from '../route';

const slugSchema = z.object({
    slug: z.string().min(1, { message: 'Slug must be a non-empty string' }),
});

const CACHE = new Map<string, { data: PostResponse; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000;

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');

    const queryObj = { slug: slug || '' };
    const parsedQuery = slugSchema.safeParse(queryObj);

    if (!parsedQuery.success) {
        return NextResponse.json(
            {
                error: {
                    message: 'Invalid slug parameter',
                    details: parsedQuery.error.flatten().fieldErrors,
                },
            },
            { status: 400 }
        );
    }

    const { slug: validatedSlug } = parsedQuery.data;

    const cacheKey = `post-${validatedSlug}`;
    const cachedData = CACHE.get(cacheKey);
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
        return NextResponse.json(cachedData.data, {
            headers: {
                'Cache-Control': 'max-age=3600, s-maxage=3600',
                'X-Cache': 'HIT',
            },
        });
    }

    try {
        const post = await postRepo.findBySlug(validatedSlug);

        if (!post) {
            return NextResponse.json(
                {
                    error: { message: `Post with slug '${validatedSlug}' not found` },
                },
                { status: 404 }
            );
        }

        const transformedPost = transformPost(post as RawPost);

        CACHE.set(cacheKey, { data: transformedPost, timestamp: Date.now() });

        return NextResponse.json(transformedPost, {
            headers: {
                'Cache-Control': 'max-age=3600, s-maxage=3600',
                'X-Cache': 'MISS',
            },
        });
    } catch (error) {
        console.error(`Failed to fetch post with slug '${validatedSlug}':`, error);
        return NextResponse.json(
            {
                error: { message: 'An unexpected error occurred' },
            },
            { status: 500 }
        );
    }
}