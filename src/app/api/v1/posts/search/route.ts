import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { PostResponse, RawPost } from '../types';
import { transformPost } from '../route';
import { prisma } from '@/lib/db';

const searchSchema = z.object({
    query: z.string().min(1, { message: 'Search query must be a non-empty string' }),
    limit: z.coerce.number().int().positive().default(10),
    offset: z.coerce.number().int().min(0).default(0),
});

const CACHE = new Map<string, { data: PostResponse[]; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000;

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
    const limit = url.searchParams.get('limit');
    const offset = url.searchParams.get('offset');

    const queryObj = {
        query: query || '',
        limit: limit || '10',
        offset: offset || '0'
    };

    const parsedQuery = searchSchema.safeParse(queryObj);

    if (!parsedQuery.success) {
        return NextResponse.json(
            {
                error: {
                    message: 'Invalid search parameters',
                    details: parsedQuery.error.flatten().fieldErrors,
                },
            },
            { status: 400 }
        );
    }

    const { query: searchQuery, limit: limitValue, offset: offsetValue } = parsedQuery.data;

    const cacheKey = `search-${searchQuery}-${limitValue}-${offsetValue}`;
    const cachedData = CACHE.get(cacheKey);

    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
        return NextResponse.json(
            {
                results: cachedData.data,
                meta: {
                    query: searchQuery,
                    limit: limitValue,
                    offset: offsetValue,
                }
            },
            {
                headers: {
                    'Cache-Control': 'max-age=300, s-maxage=300',
                    'X-Cache': 'HIT',
                },
            }
        );
    }

    try {
        let posts = await searchByTitle(searchQuery, limitValue, offsetValue);

        if (posts.length === 0) {
            posts = await searchByContent(searchQuery, limitValue, offsetValue);
        }

        const transformedPosts = posts.map((post: RawPost) => transformPost(post));

        CACHE.set(cacheKey, { data: transformedPosts, timestamp: Date.now() });

        return NextResponse.json(
            {
                results: transformedPosts,
                meta: {
                    query: searchQuery,
                    limit: limitValue,
                    offset: offsetValue,
                    total: transformedPosts.length,
                }
            },
            {
                headers: {
                    'Cache-Control': 'max-age=300, s-maxage=300',
                    'X-Cache': 'MISS',
                },
            }
        );
    } catch (error) {
        console.error(`Failed to search posts with query '${searchQuery}':`, error);
        return NextResponse.json(
            {
                error: { message: 'An unexpected error occurred while searching posts' },
            },
            { status: 500 }
        );
    }
}

/**
 * Search posts by title using Prisma
 */
async function searchByTitle(query: string, limit = 10, offset = 0) {
    if (process.env.DATABASE_USE_FULLTEXT === 'true') {
        return prisma.post.findMany({
            where: {
                title: {
                    search: query.split(' ').join(' & '),
                },
                status: 'publish',
            },
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
            orderBy: {
                date: 'desc',
            },
            take: limit,
            skip: offset,
        });
    }

    return prisma.post.findMany({
        where: {
            title: {
                contains: query,
                mode: 'insensitive',
            },
            status: 'publish',
        },
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
        orderBy: {
            date: 'desc',
        },
        take: limit,
        skip: offset,
    });
}

/**
 * Search posts by content using Prisma
 */
async function searchByContent(query: string, limit = 10, offset = 0) {
    if (process.env.DATABASE_USE_FULLTEXT === 'true') {
        return prisma.post.findMany({
            where: {
                content: {
                    search: query.split(' ').join(' & '),
                },
                status: 'publish',
            },
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
            orderBy: {
                date: 'desc',
            },
            take: limit,
            skip: offset,
        });
    }

    return prisma.post.findMany({
        where: {
            content: {
                contains: query,
                mode: 'insensitive',
            },
            status: 'publish',
        },
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
        orderBy: {
            date: 'desc',
        },
        take: limit,
        skip: offset,
    });
}