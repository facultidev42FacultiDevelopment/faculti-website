import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { transformPost } from '../route';

const categorySlugSchema = z.object({
    slug: z.string().min(1, { message: 'Category slug must be a non-empty string' }),
    limit: z.string().optional().transform(val => {
        const parsed = val ? parseInt(val, 10) : 25;
        return isNaN(parsed) ? 25 : Math.min(Math.max(1, parsed), 50);
    }),
    page: z.string().optional().transform(val => {
        const parsed = val ? parseInt(val, 10) : 1;
        return isNaN(parsed) || parsed < 1 ? 1 : parsed;
    }),
    sort: z.string().optional().transform(val => {
        return val === 'asc' ? 'asc' : 'desc';
    }),
    filter: z.string().optional(),
});

const CACHE = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000;

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');
    const limit = url.searchParams.get('limit');
    const page = url.searchParams.get('page');
    const sort = url.searchParams.get('sort');
    const filter = url.searchParams.get('filter');

    const queryObj = {
        slug: slug || '',
        limit: limit || undefined,
        page: page || undefined,
        sort: sort || undefined,
        filter: filter || undefined
    };
    const parsedQuery = categorySlugSchema.safeParse(queryObj);

    if (!parsedQuery.success) {
        return NextResponse.json(
            {
                error: {
                    message: 'Invalid query parameters',
                    details: parsedQuery.error.flatten().fieldErrors,
                },
            },
            { status: 400 }
        );
    }

    const {
        slug: validatedSlug,
        limit: validatedLimit,
        page: validatedPage,
        sort: validatedSort,
        filter: validatedFilter
    } = parsedQuery.data;

    const skip = (validatedPage - 1) * validatedLimit;

    const cacheKey = `category-posts-${validatedSlug}-${validatedLimit}-${validatedPage}-${validatedSort}-${validatedFilter || 'all'}`;
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
        const category = await prisma.category.findFirst({
            where: {
                slug: validatedSlug,
                type: {
                    in: ['PARENT', 'DAUGHTER']
                }
            },
            include: {
                parent: true
            }
        });

        if (!category) {
            return NextResponse.json(
                {
                    error: {
                        message: `Category with slug '${validatedSlug}' not found or is not a valid category type`
                    },
                },
                { status: 404 }
            );
        }

        let whereClause: any = {
            categories: {
                some: {
                    categoryId: category.id
                }
            },
            status: 'publish'
        };


        if (validatedFilter) {
            whereClause = {
                AND: [
                    whereClause,
                    {
                        categories: {
                            some: {
                                categoryId: validatedFilter
                            }
                        }
                    }
                ]
            };
        }

        const totalPosts = await prisma.post.count({
            where: whereClause
        });

        const categoryPosts = await prisma.post.findMany({
            where: whereClause,
            orderBy: {
                date: validatedSort || 'desc'
            },
            skip: skip,
            take: validatedLimit,
            include: {
                author: true,
                categories: {
                    include: {
                        category: true
                    }
                },
                tags: {
                    include: {
                        tag: true
                    }
                },
                institutions: {
                    include: {
                        institution: true
                    }
                },
                writers: {
                    include: {
                        writer: true
                    }
                }
            }
        });

        const transformedPosts = categoryPosts.map(post => transformPost(post));

        const totalPages = Math.ceil(totalPosts / validatedLimit);
        const hasNextPage = validatedPage < totalPages;
        const hasPrevPage = validatedPage > 1;

        let response;

        if (category.type === 'PARENT') {
            const daughterCategories = await prisma.category.findMany({
                where: {
                    parentId: category.id,
                    type: 'DAUGHTER'
                },
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    type: true
                },
                orderBy: {
                    name: 'asc'
                }
            });

            response = {
                parentCategory: {
                    id: category.id,
                    name: category.name,
                    slug: category.slug,
                    type: category.type
                },
                posts: transformedPosts,
                pagination: {
                    total: totalPosts,
                    page: validatedPage,
                    limit: validatedLimit,
                    totalPages: totalPages,
                    hasNextPage: hasNextPage,
                    hasPrevPage: hasPrevPage,
                    sortOrder: validatedSort
                },
                filterOptions: daughterCategories,
                activeFilter: validatedFilter || 'all'
            };
        } else if (category.type === 'DAUGHTER') {
            const subCategories = await prisma.category.findMany({
                where: {
                    daughterId: category.id,
                    type: 'SUB'
                },
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    type: true
                },
                orderBy: {
                    name: 'asc'
                }
            });

            response = {
                parentCategory: category.parent ? {
                    id: category.parent.id,
                    name: category.parent.name,
                    slug: category.parent.slug,
                    type: category.parent.type
                } : null,
                daughterCategory: {
                    id: category.id,
                    name: category.name,
                    slug: category.slug,
                    type: category.type
                },
                posts: transformedPosts,
                pagination: {
                    total: totalPosts,
                    page: validatedPage,
                    limit: validatedLimit,
                    totalPages: totalPages,
                    hasNextPage: hasNextPage,
                    hasPrevPage: hasPrevPage,
                    sortOrder: validatedSort
                },
                filterOptions: subCategories,
                activeFilter: validatedFilter || 'all'
            };
        }

        CACHE.set(cacheKey, { data: response, timestamp: Date.now() });

        return NextResponse.json(response, {
            headers: {
                'Cache-Control': 'max-age=3600, s-maxage=3600',
                'X-Cache': 'MISS',
            },
        });
    } catch (error) {
        console.error(`Failed to fetch posts for category '${validatedSlug}':`, error);
        return NextResponse.json(
            {
                error: { message: 'An unexpected error occurred' },
            },
            { status: 500 }
        );
    }
}