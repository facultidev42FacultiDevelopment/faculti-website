import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { transformPost } from '../route';
import { Post, User, CategoryToPost, TagToPost, InstitutionToPost, WriterToPost } from '@/lib/db/generated/prisma';

const CACHE_DURATION = 60 * 60 * 1000;
const DEFAULT_TAKE = 10;
const CACHE = new Map<string, { data: CategoryPostGroup[]; timestamp: number }>();

type PostWithRelations = Post & {
  author: User;
  categories: (CategoryToPost & { category: { id: string; name: string; slug: string } })[];
  tags: (TagToPost & { tag: { id: string; name: string; slug: string } })[];
  institutions: (InstitutionToPost & { institution: { id: string; name: string; slug: string } })[];
  writers: (WriterToPost & { writer: { id: string; name: string; slug: string; imgUrl: string | null } })[];
};

interface PostResponse {
  id: string;
  title: string;
  content: string;
  date: string | Date;
  author: {
    id: string;
    slug: string;
    name: string;
    email: string | null;
    url: string | null;
    avatarUrl: string | null;
  };
  categories: { category: { id: string; name: string; slug: string } }[];
  tags: { tag: { id: string; name: string; slug: string } }[];
  institutions: { institution: { id: string; name: string; slug: string } }[];
  writers: { writer: { id: string; name: string; slug: string; imgUrl: string | null } }[];
}

type CategoryPostGroup = {
  category: string;
  posts: PostResponse[];
};

const querySchema = z.object({
  map: z
    .string()
    .nullable()
    .transform(val => {
      if (!val) return [];
      return val.split(',').map(pair => {
        const [main, fallbackRaw] = pair.split(':');
        const [fallbackPart, takePart] = fallbackRaw?.split(';') ?? [];
        const fallback = fallbackPart?.split('|') ?? [];
        const take = parseInt(takePart ?? '', 10);
        return {
          main: main.trim(),
          fallback: fallback.map(f => f.trim()).filter(Boolean),
          take: Number.isNaN(take) ? DEFAULT_TAKE : take,
        };
      });
    }),
});

const postInclude = {
  author: true,
  categories: { include: { category: true } },
  tags: { include: { tag: true } },
  institutions: { include: { institution: true } },
  writers: { include: { writer: true } },
};

const transformPostResponse = (post: PostResponse) => {
  return {
    ...post,
    date: post.date instanceof Date ? post.date.toISOString() : post.date,
  };
};

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const mapParam = url.searchParams.get('map') ?? '';
  const cacheKey = `by-map-${mapParam}`;
  const cached = CACHE.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return NextResponse.json(cached.data, {
      headers: { 'X-Cache': 'HIT' },
    });
  }

  const parsed = querySchema.safeParse({ map: mapParam });
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { map } = parsed.data;
  const result: CategoryPostGroup[] = [];


  const usedPostIds = new Set<string>();

  for (const { main, fallback, take } of map) {

    const mainPosts = await prisma.post.findMany({
      where: {
        categories: { some: { category: { slug: main } } },
        id: { notIn: Array.from(usedPostIds) }
      },
      include: postInclude,
      orderBy: { date: 'desc' },
      take,
    });

    let finalPosts: PostWithRelations[] = [...mainPosts];

    mainPosts.forEach(post => usedPostIds.add(post.id));

    if (mainPosts.length < take && fallback.length > 0) {
      const remaining = take - mainPosts.length;
      const fallbackPosts = await prisma.post.findMany({
        where: {
          categories: {
            some: {
              category: { slug: { in: fallback } },
            },
          },
          id: { notIn: Array.from(usedPostIds) },
        },
        include: postInclude,
        orderBy: { date: 'desc' },
        take: remaining,
      });

      fallbackPosts.forEach(post => usedPostIds.add(post.id));

      finalPosts = [...finalPosts, ...fallbackPosts];
    }

    result.push({
      category: main,
      posts: finalPosts
        .filter((post): post is NonNullable<typeof post> => post !== undefined)
        .map(post => transformPostResponse(transformPost(post))),
    });
  }

  CACHE.set(cacheKey, { data: result, timestamp: Date.now() });

  return NextResponse.json(result, {
    headers: { 'X-Cache': 'MISS' },
  });
}