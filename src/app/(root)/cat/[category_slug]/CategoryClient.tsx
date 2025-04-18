'use client';

import { useState, useEffect, useMemo, useRef } from "react";
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PostCard from "@/components/layout/category/post-card";
import { ParentCategoryResponse, PostResponse } from "@/app/api/v1/posts/types";

interface CategoryClientProps {
    categoryData: ParentCategoryResponse;
    categorySlug: string;
}

export default function CategoryClient({ categoryData, categorySlug }: CategoryClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = categoryData.pagination?.page || 1;
    const totalPages = categoryData.pagination?.totalPages || 1;
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const mobileScrollRef = useRef<HTMLDivElement>(null);


    const categoryOptions = useMemo(() => {
        return [
            { id: 'all', name: 'All', slug: '' },
            ...(categoryData.filterOptions || [])
        ];
    }, [categoryData.filterOptions]);


    const [activeFilter, setActiveFilter] = useState(() => {
        const filterParam = searchParams.get('filter');
        return filterParam && categoryOptions.some(cat => cat.id === filterParam)
            ? filterParam
            : 'all';
    });


    const [filteredPosts, setFilteredPosts] = useState<PostResponse[]>(categoryData.posts || []);

    const navigateFilters = (direction: 'prev' | 'next', isMobile = false) => {
        const ref = isMobile ? mobileScrollRef : scrollRef;
        if (ref.current) {
            const container = ref.current;
            const scrollAmount = isMobile ? 150 : 200;

            if (direction === 'prev') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const scrollToActiveFilter = () => {
        setTimeout(() => {

            if (scrollRef.current) {
                const activeButton = scrollRef.current.querySelector(`button[class*="border-primary"]`);
                if (activeButton) {
                    activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            }

            if (mobileScrollRef.current) {
                const activeButton = mobileScrollRef.current.querySelector(`button[class*="border-primary"]`);
                if (activeButton) {
                    activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            }
        }, 100);
    };


    useEffect(() => {
        scrollToActiveFilter();
    }, [activeFilter]);


    useEffect(() => {
        const filterParam = searchParams.get('filter');
        if (filterParam && categoryOptions.some(cat => cat.id === filterParam)) {
            setActiveFilter(filterParam);
        } else {
            setActiveFilter('all');
        }

        setFilteredPosts(categoryData.posts || []);
    }, [categoryData.parentCategory.id, categoryData.daughterCategory?.id, searchParams, categoryOptions]);


    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredPosts(categoryData.posts || []);
            return;
        }

        const filtered = categoryData.posts?.filter(post => {
            return post.categories.some(cat => cat.category.id === activeFilter);
        }) || [];

        setFilteredPosts(filtered);
    }, [activeFilter, categoryData.posts, categoryData.daughterCategory]);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [dropdownRef]);


    const handleFilterChange = (filterId: string) => {
        setActiveFilter(filterId);

        const params = new URLSearchParams(searchParams.toString());

        if (filterId === 'all') {
            params.delete('filter');
        } else {
            params.set('filter', filterId);
        }

        const pageParam = searchParams.get('page');
        if (pageParam) {
            params.set('page', pageParam);
        }

        const newUrl = `/cat/${categorySlug}${params.toString() ? `?${params.toString()}` : ''}`;

        router.push(newUrl);
    };


    const generatePageUrl = (pageNum: number) => {
        const params = new URLSearchParams(searchParams.toString());

        if (pageNum === 1) {
            params.delete('page');
        } else {
            params.set('page', pageNum.toString());
        }

        if (activeFilter !== 'all') {
            params.set('filter', activeFilter);
        }

        return `/cat/${categorySlug}${params.toString() ? `?${params.toString()}` : ''}`;
    };

    return (
        <div className="container mx-auto px-4 py-8 mb-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">{categoryData.parentCategory.name}</h1>
                    {categoryData.daughterCategory && (
                        <h2 className="text-2xl font-semibold">{categoryData.daughterCategory.name}</h2>
                    )}
                </div>

                <div className="flex flex-col items-end gap-2 w-full sm:w-auto">

                    {totalPages > 1 && (
                        <div className="flex gap-1 mt-2">
                            <Link
                                href={generatePageUrl(currentPage - 1)}
                                aria-label="Previous page"
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full h-7 w-7 bg-slate-900/80 text-white hover:bg-slate-800"
                                    disabled={currentPage <= 1}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link
                                href={generatePageUrl(currentPage + 1)}
                                aria-label="Next page"
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full h-7 w-7 bg-slate-900/80 text-white hover:bg-slate-800"
                                    disabled={currentPage >= totalPages}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    )}

                    {categoryOptions.length > 1 && (
                        <div className="flex items-center w-full">

                            <div className="flex flex-col w-full sm:hidden">
                                <div className="flex justify-between items-center w-full">
                                    <div className="relative overflow-hidden w-full pr-16">
                                        <div className="flex overflow-x-auto scrollbar-hide"
                                            ref={mobileScrollRef}
                                            style={{
                                                scrollbarWidth: 'none',
                                                msOverflowStyle: 'none',
                                                WebkitOverflowScrolling: 'touch',
                                                width: '100%'
                                            }}>
                                            {categoryOptions.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => handleFilterChange(category.id)}
                                                    className={cn(
                                                        "text-sm py-1 px-3 flex-shrink-0 whitespace-nowrap transition-all duration-200",
                                                        activeFilter === category.id
                                                            ? "text-foreground border-b-2 border-primary font-medium"
                                                            : "text-foreground/60 hover:text-foreground/80",
                                                    )}
                                                    style={{ marginRight: '0.75rem' }}
                                                >
                                                    {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>


                                    <div className="flex absolute right-4">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => navigateFilters('prev', true)}
                                            className="rounded-full h-7 w-7 bg-slate-900/80 text-white hover:bg-slate-800 mr-1"
                                            aria-label="Previous filters"
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => navigateFilters('next', true)}
                                            className="rounded-full h-7 w-7 bg-slate-900/80 text-white hover:bg-slate-800"
                                            aria-label="Next filters"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>


                            <div className="hidden sm:flex flex-col w-full">
                                <div className="flex justify-between items-center w-full">
                                    <div className="relative overflow-hidden max-w-md w-full pr-16">
                                        <div className="flex overflow-x-auto scrollbar-hide"
                                            ref={scrollRef}
                                            style={{
                                                scrollbarWidth: 'none',
                                                msOverflowStyle: 'none',
                                                WebkitOverflowScrolling: 'touch',
                                                width: '100%'
                                            }}>
                                            {categoryOptions.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => handleFilterChange(category.id)}
                                                    className={cn(
                                                        "text-sm py-1 px-3 flex-shrink-0 whitespace-nowrap transition-all duration-200",
                                                        activeFilter === category.id
                                                            ? "text-foreground border-b-2 border-primary font-medium"
                                                            : "text-foreground/60 hover:text-foreground/80",
                                                    )}
                                                    style={{ marginRight: '1rem' }}
                                                >
                                                    {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {categoryOptions.length > 1 && (
                        <div className="flex gap-1 mt-2">

                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-7 w-7 bg-slate-900/80 text-white hover:bg-slate-800"
                                onClick={() => navigateFilters('prev')}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>


                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-7 w-7 bg-slate-900/80 text-white hover:bg-slate-800"
                                onClick={() => navigateFilters('next')}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>

                        </div>
                    )}
                </div>
            </div>

            {filteredPosts.length === 0 ? (
                <div className="py-8 text-center">
                    <p className="text-lg text-foreground/60">No posts found in this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredPosts.map((post: PostResponse) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}