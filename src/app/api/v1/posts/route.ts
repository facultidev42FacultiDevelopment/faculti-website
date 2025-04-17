import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { categoryRepo, postRepo } from '@/lib/db';
import { ApiResponse, CategoryPosts, PostResponse, RawPost } from './types';

const DEFAULT_TAKE = 30;
const DEFAULT_SKIP = 0;
const MAX_TAKE = 100;
const MIN_CATEGORIES = 3;
const DEFAULT_ORDER: 'latest' | 'random' = 'random';

const CACHE = new Map<string, { data: ApiResponse; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000;

const querySchema = z.object({
  category: z
    .string()
    .transform(val => val.split(',').map(name => name.trim()).filter(Boolean))
    .refine(val => val.every(name => name.length > 0), {
      message: 'Category names must be non-empty strings',
    })
    .refine(val => val.length > 0, {
      message: 'At least one category name is required',
    }),
  take: z
    .string()
    .transform(val => parseInt(val, 10))
    .refine(val => Number.isInteger(val) && val > 0 && val <= MAX_TAKE, {
      message: `take must be a positive integer up to ${MAX_TAKE}`,
    })
    .optional()
    .default(DEFAULT_TAKE.toString()),
  skip: z
    .string()
    .transform(val => parseInt(val, 10))
    .refine(val => Number.isInteger(val) && val >= 0, {
      message: 'skip must be a non-negative integer',
    })
    .optional()
    .default(DEFAULT_SKIP.toString()),
  order: z
    .enum(['latest', 'random'])
    .optional()
    .default(DEFAULT_ORDER),
  categories: z
    .string()
    .transform(val => parseInt(val, 10))
    .refine(val => Number.isInteger(val) && val > 0 && val <= 10, {
      message: 'categories must be a positive integer up to 10',
    })
    .optional()
    .default(MIN_CATEGORIES.toString()),
});



export function transformPost(post: RawPost): PostResponse {
  if (!post.author) {
    throw new Error(`Post ${post.id} is missing author data`);
  }

  return {
    id: post.id,
    title: post.title,
    content: post.content.replace(/\\u003C/g, '<').replace(/\\u003E/g, '>'),
    excerpt: post.excerpt,
    imageUrl: post.imageUrl,
    date: post.date.toISOString(),
    dateGmt: post.dateGmt.toISOString(),
    modified: post.modified ? post.modified.toISOString() : null,
    modifiedGmt: post.modifiedGmt ? post.modifiedGmt.toISOString() : null,
    slug: post.slug,
    status: post.status,
    commentStatus: post.commentStatus,
    pingStatus: post.pingStatus,
    guid: post.guid,
    menuOrder: post.menuOrder,
    vimeoVideoId: post.vimeoVideoId,
    author: {
      id: post.author.id,
      name: post.author.name,
      slug: post.author.slug,
      email: post.author.email,
      url: post.author.url,
      avatarUrl: post.author.avatarUrl,
    },
    categories: post.categories.map((c) => ({
      category: {
        id: c.category.id,
        name: c.category.name,
        slug: c.category.slug,
      },
    })),
    tags: post.tags.map((t) => ({
      tag: {
        id: t.tag.id,
        name: t.tag.name,
        slug: t.tag.slug,
      },
    })),
    institutions: post.institutions.map((i) => ({
      institution: {
        id: i.institution.id,
        name: i.institution.name,
        slug: i.institution.slug,
      },
    })),
    writers: post.writers.map((w) => ({
      writer: {
        id: w.writer.id,
        name: w.writer.name,
        slug: w.writer.slug,
        imgUrl: w.writer.imgUrl,
      },
    })),
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  };
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const categoryParam = url.searchParams.get('category');
  const takeParam = url.searchParams.get('take');
  const skipParam = url.searchParams.get('skip');
  const orderParam = url.searchParams.get('order');
  const categoriesCountParam = url.searchParams.get('categories');

  const cacheKey = `${categoryParam || 'random'}-${takeParam || DEFAULT_TAKE}-${skipParam || DEFAULT_SKIP}-${orderParam || DEFAULT_ORDER}-${categoriesCountParam || MIN_CATEGORIES}`;

  const cachedData = CACHE.get(cacheKey);
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    return NextResponse.json(cachedData.data, {
      headers: {
        'Cache-Control': 'max-age=3600, s-maxage=3600',
        'X-Cache': 'HIT'
      }
    });
  }

  if (!categoryParam) {
    try {

      const allCategories = await categoryRepo.findAll({
        select: { name: true }
      });

      if (allCategories.length === 0) {
        return NextResponse.json(
          {
            error: { message: 'No categories available' },
          },
          { status: 404 }
        );
      }


      const requestedCategoriesCount = parseInt(categoriesCountParam || MIN_CATEGORIES.toString(), 10);


      const randomCount = Math.min(requestedCategoriesCount, allCategories.length);


      const shuffled = allCategories.sort(() => 0.5 - Math.random());
      const randomCategories = shuffled.slice(0, randomCount);

      const randomCategoryNames = randomCategories.map(c => c.name);
      const take = parseInt(takeParam || DEFAULT_TAKE.toString(), 10);
      const skip = parseInt(skipParam || DEFAULT_SKIP.toString(), 10);
      const order = (orderParam as 'latest' | 'random') || DEFAULT_ORDER;


      const categoryResults = await postRepo.findByCategoryNames(randomCategoryNames, take, skip, order);


      const nonEmptyResults = categoryResults.filter(result => result.posts.length > 0);


      if (nonEmptyResults.length === 0 && randomCategoryNames.length < allCategories.length) {
        const allCategoryNames = allCategories.map(c => c.name);
        const allCategoryResults = await postRepo.findByCategoryNames(allCategoryNames, take, skip, order);
        const nonEmptyAllResults = allCategoryResults.filter(result => result.posts.length > 0);


        const limitedResults = nonEmptyAllResults.slice(0, randomCount);

        const responseData: CategoryPosts[] = limitedResults.map(({ categoryName, posts, total }) => ({
          categoryName,
          posts: posts.map(post => transformPost(post as RawPost)),
          total,
        }));

        const response: ApiResponse = {
          data: responseData,
          meta: {
            take,
            skip,
            order,
            randomSelection: true,
            categories: responseData.length
          }
        };

        CACHE.set(cacheKey, { data: response, timestamp: Date.now() });

        return NextResponse.json(response, {
          headers: {
            'Cache-Control': 'max-age=3600, s-maxage=3600',
            'X-Cache': 'MISS'
          }
        });
      }


      const responseData: CategoryPosts[] = nonEmptyResults.map(({ categoryName, posts, total }) => ({
        categoryName,
        posts: posts.map(post => transformPost(post as RawPost)),
        total,
      }));

      const response: ApiResponse = {
        data: responseData,
        meta: {
          take,
          skip,
          order,
          randomSelection: true,
          categories: responseData.length
        }
      };

      CACHE.set(cacheKey, { data: response, timestamp: Date.now() });

      return NextResponse.json(response, {
        headers: {
          'Cache-Control': 'max-age=3600, s-maxage=3600',
          'X-Cache': 'MISS'
        }
      });
    } catch (error) {
      console.error('Failed to fetch random posts:', error);
      return NextResponse.json(
        {
          error: { message: 'An unexpected error occurred' },
        },
        { status: 500 }
      );
    }
  }

  const queryObj = {
    category: categoryParam || '',
    ...(takeParam && { take: takeParam }),
    ...(skipParam && { skip: skipParam }),
    ...(orderParam && { order: orderParam as 'latest' | 'random' }),
    ...(categoriesCountParam && { categories: categoriesCountParam }),
  };

  try {
    const parsedQuery = querySchema.safeParse(queryObj);
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

    const { category: categoryNames, take, skip, order } = parsedQuery.data;

    const existingCategories = await categoryRepo.findAll({
      where: { name: { in: categoryNames } },
      select: { name: true },
    });

    const foundCategoryNames = new Set(existingCategories.map(c => c.name));
    const missingCategories = categoryNames.filter(name => !foundCategoryNames.has(name));

    if (missingCategories.length > 0) {
      return NextResponse.json(
        {
          error: {
            message: 'Invalid category names provided',
            details: missingCategories,
          },
        },
        { status: 400 }
      );
    }

    const categoryResults = await postRepo.findByCategoryNames(categoryNames, take, skip, order);


    const nonEmptyResults = categoryResults.filter(result => result.posts.length > 0);

    const responseData: CategoryPosts[] = nonEmptyResults.map(({ categoryName, posts, total }) => ({
      categoryName,
      posts: posts.map(post => transformPost(post as RawPost)),
      total,
    }));

    const response: ApiResponse = {
      data: responseData,
      meta: {
        take,
        skip,
        order,
        categories: responseData.length
      }
    };

    CACHE.set(cacheKey, { data: response, timestamp: Date.now() });

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'max-age=3600, s-maxage=3600',
        'X-Cache': 'MISS'
      }
    });
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return NextResponse.json(
      {
        error: { message: 'An unexpected error occurred' },
      },
      { status: 500 }
    );
  }
}