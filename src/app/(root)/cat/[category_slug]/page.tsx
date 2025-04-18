import { headers } from 'next/headers';
import { Metadata, ResolvingMetadata } from 'next/types';
import { notFound } from 'next/navigation';
import CategoryClient from './CategoryClient';
import { ParentCategoryResponse } from '@/app/api/v1/posts/types';

interface ParentCategoryPageProps {
    params: Promise<{
        category_slug: string;
    }>;
    searchParams: Promise<{
        page?: string;
        limit?: string;
        filter?: string;
    }>;
}

async function getBaseUrl() {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    return 'https://0gzmmx2m-4000.uks1.devtunnels.ms';
}

async function fetchCategoryBySlug(
    slug: string,
    page: number = 1,
    limit: number = 25,
    filter?: string
): Promise<ParentCategoryResponse> {
    try {
        const baseUrl = await getBaseUrl();

        const url = new URL(`${baseUrl}/api/v1/posts/by-category-v1`);
        url.searchParams.append('slug', slug);
        url.searchParams.append('limit', limit.toString());
        url.searchParams.append('page', page.toString());

        if (filter && filter !== 'all') {
            url.searchParams.append('filter', filter);
        }

        const response = await fetch(url.toString(), {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch category with slug '${slug}': ${response.statusText}`);
        }

        const data = await response.json();

        return {
            parentCategory: data.parentCategory,
            daughterCategory: data.daughterCategory || null,
            posts: data.posts || [],
            pagination: data.pagination || {
                total: 0,
                page: page,
                limit: limit,
                totalPages: 0,
                hasNextPage: false,
                hasPrevPage: false
            },
            filterOptions: data.filterOptions
        };
    } catch (error) {
        console.error(`Error fetching category with slug '${slug}':`, error);
        throw error;
    }
}

export async function generateMetadata(
    { params, searchParams }: ParentCategoryPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    try {
        const { category_slug } = await params;
        const searchParamsResolved = await searchParams;
        const page = searchParamsResolved.page ? parseInt(searchParamsResolved.page) : 1;
        const limit = searchParamsResolved.limit ? parseInt(searchParamsResolved.limit) : 25;
        const filter = searchParamsResolved.filter;

        const categoryData = await fetchCategoryBySlug(category_slug, page, limit, filter);

        const previousImages = (await parent).openGraph?.images || [];
        const baseUrl = await getBaseUrl();

        const categoryName = categoryData.daughterCategory
            ? `${categoryData.daughterCategory.name} - ${categoryData.parentCategory.name}`
            : categoryData.parentCategory.name;

        let filterInfo = '';
        if (filter && filter !== 'all') {
            const filterOption = categoryData.filterOptions?.find(opt => opt.id === filter);
            if (filterOption) {
                filterInfo = ` - ${filterOption.name}`;
            }
        }

        const pagePart = page > 1 ? ` - Page ${page}` : '';
        const title = `${categoryName}${filterInfo}${pagePart} | Faculti`;
        const description = `Explore posts in the ${categoryName}${filterInfo} category on Faculti.`;

        const keywords = categoryData.posts?.flatMap(post => [
            ...post.categories.map(cat => cat.category.name),
            ...post.tags.map(tag => tag.tag.name),
        ]);

        const urlParams = new URLSearchParams();
        if (page > 1) {
            urlParams.append('page', page.toString());
        }
        if (filter && filter !== 'all') {
            urlParams.append('filter', filter);
        }
        const canonicalUrl = `${baseUrl}/cat/${category_slug}${urlParams.toString() ? `?${urlParams.toString()}` : ''}`;

        return {
            title,
            description,
            keywords: [...new Set(keywords)],
            openGraph: {
                title,
                description,
                url: canonicalUrl,
                siteName: 'Faculti',
                images: previousImages,
                locale: 'en_US',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
                images: previousImages,
            },
            alternates: {
                canonical: canonicalUrl,
            },
            formatDetection: {
                telephone: false,
            },
            category: categoryData.parentCategory.name,
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Category - Faculti',
            description: 'Explore academic categories on Faculti',
        };
    }
}

export default async function ParentCategoryPage({ params, searchParams }: ParentCategoryPageProps) {
    try {
        const { category_slug } = await params;
        const searchParamsResolved = await searchParams;
        const page = searchParamsResolved.page ? parseInt(searchParamsResolved.page) : 1;
        const limit = searchParamsResolved.limit ? parseInt(searchParamsResolved.limit) : 25;
        const filter = searchParamsResolved.filter;

        const categoryData = await fetchCategoryBySlug(category_slug, page, limit, filter);

        return (
            <div>
                <CategoryClient
                    categoryData={categoryData}
                    categorySlug={category_slug}
                />
            </div>
        );
    } catch (error) {
        console.error('Error rendering category page:', error);
        notFound();
    }
}