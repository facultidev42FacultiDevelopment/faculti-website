"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X, Loader2, ArrowRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { PostResponse } from "@/app/api/v1/posts/types"


interface Author {
    id: string
    name: string
    slug: string
}

interface Category {
    id: string
    name: string
    slug: string
}

interface Tag {
    id: string
    name: string
    slug: string
}


interface SearchResponse {
    results: PostResponse[]
    meta: {
        query: string
        limit: number
        offset: number
        total: number
    }
}

function debounce<T extends (...args: string[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }
}

export default function SearchBar() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [query, setQuery] = useState<string>(searchParams.get("q") || "")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [results, setResults] = useState<PostResponse[]>([])
    const [showResults, setShowResults] = useState<boolean>(false)
    const [activeIndex, setActiveIndex] = useState<number>(-1)

    const searchContainerRef = useRef<HTMLDivElement>(null)
    const resultsRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const fetchResults = useCallback(async (searchQuery: string): Promise<void> => {
        if (!searchQuery || searchQuery.length < 2) {
            setResults([])
            return
        }

        setIsLoading(true)
        try {
            const response = await fetch(`/api/v1/posts/search?query=${encodeURIComponent(searchQuery)}&limit=5`)
            if (!response.ok) throw new Error("Search failed")

            const data = (await response.json()) as SearchResponse
            setResults(data.results || [])
        } catch (error) {
            console.error("Search error:", error instanceof Error ? error.message : String(error))
            setResults([])
        } finally {
            setIsLoading(false)
        }
    }, [])

    const debouncedSearch = useCallback(
        debounce((query: string) => {
            fetchResults(query)
        }, 300),
        [fetchResults],
    )

    useEffect(() => {
        debouncedSearch(query)

        if (query) {
            const params = new URLSearchParams(window.location.search)
            params.set("q", query)
            const newUrl = `${window.location.pathname}?${params.toString()}`
            window.history.replaceState({ path: newUrl }, "", newUrl)
        }
    }, [query, debouncedSearch])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value)
        setShowResults(e.target.value.length > 0)
        setActiveIndex(-1)
    }

    const handleClear = (): void => {
        setQuery("")
        setResults([])
        setShowResults(false)
        setActiveIndex(-1)
        inputRef.current?.focus()
    }

    const handleKeyDown = (e: React.KeyboardEvent): void => {
        if (!showResults || results.length === 0) return

        if (e.key === "ArrowDown") {
            e.preventDefault()
            setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0))
        } else if (e.key === "ArrowUp") {
            e.preventDefault()
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1))
        } else if (e.key === "Enter" && activeIndex >= 0) {
            e.preventDefault()
            router.push(`/${results[activeIndex].slug}`)
            setShowResults(false)
        } else if (e.key === "Escape") {
            e.preventDefault()
            setShowResults(false)
        }
    }

    useEffect(() => {
        if (activeIndex >= 0 && resultsRef.current) {
            const activeElement = resultsRef.current.querySelector(`[data-index="${activeIndex}"]`)
            if (activeElement) {
                activeElement.scrollIntoView({ block: "nearest" })
            }
        }
    }, [activeIndex])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent): void => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
                setShowResults(false)
            }
        }

        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    return (
        <div className="w-full relative" ref={searchContainerRef}>
            <form onClick={(e) => e.stopPropagation()} className="w-full">
                <div className="relative flex-1 group">
                    <Input
                        ref={inputRef}
                        type="text"
                        placeholder="Search 8000+ researchers, policy-makers and analysts"
                        value={query}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onFocus={() => query && setShowResults(true)}
                        className="pl-10 pr-12 bg-background/50 h-12 md:h-11 rounded-md text-left w-full transition-all 
                    
                      shadow-sm hover:shadow group-hover:border-primary/40"
                        aria-label="Search"
                        aria-expanded={showResults}
                        aria-controls={showResults ? "search-results" : undefined}
                        aria-autocomplete="list"
                        role="combobox"
                    />

                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        {isLoading && <Loader2 className="h-4 w-4 text-muted-foreground animate-spin" />}

                        {!isLoading && query && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-muted-foreground hover:text-foreground rounded-full"
                                onClick={handleClear}
                                type="button"
                                aria-label="Clear search"
                            >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Clear search</span>
                            </Button>
                        )}

                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-muted-foreground hover:text-foreground rounded-full"
                            type="submit"
                            aria-label="Submit search"
                        >
                            <ArrowRight className="h-4 w-4" />
                            <span className="sr-only">Search</span>
                        </Button>
                    </div>
                </div>
            </form>

            {showResults && (
                <div
                    id="search-results"
                    ref={resultsRef}
                    className="absolute z-50 top-full left-0 right-0 mt-2 bg-popover rounded-xl shadow-lg  max-h-[min(70vh,600px)] overflow-y-auto w-full sm:w-[min(100%,600px)] mx-auto"
                    onClick={(e) => e.stopPropagation()}
                    role="listbox"
                >
                    {results.length > 0 ? (
                        <ul className="py-2">
                            {results.map((post, index) => (
                                <li key={post.id} data-index={index} role="option" aria-selected={activeIndex === index}>
                                    <Link
                                        href={`/${post.slug}`}
                                        className={`flex items-start gap-3 px-4 py-3 transition-colors ${activeIndex === index
                                            ? "bg-accent text-accent-foreground"
                                            : "hover:bg-accent/50 hover:text-accent-foreground"
                                            }`}
                                        onClick={() => setShowResults(false)}
                                    >
                                        {post.imageUrl && (
                                            <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden relative">
                                                <Image
                                                    src={post.imageUrl || "/placeholder.svg"}
                                                    alt={post.title}
                                                    fill
                                                    sizes="64px"
                                                    className="object-cover"
                                                    priority={index < 2}
                                                />
                                            </div>
                                        )}
                                        <div className={`flex-1 min-w-0 ${!post.imageUrl ? "pl-0" : ""}`}>
                                            <div className="font-medium line-clamp-1 text-base">{post.title}</div>
                                            {post.excerpt && (
                                                <div className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
                                                    {post.excerpt.replace(/<[^>]*>/g, "")}
                                                </div>
                                            )}
                                            {post.author && (
                                                <div className="text-xs text-muted-foreground mt-1.5 flex flex-wrap items-center">
                                                    <span>{post?.writers[0]?.writer?.name || post.author.name}</span>
                                                    {post.categories && post.categories.length > 0 && (
                                                        <>
                                                            <span className="mx-1.5 inline-block w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                                                            <span>{post.categories[0].category.name}</span>
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        query.length >= 2 &&
                        !isLoading && (
                            <div className="px-4 py-6 text-sm text-center text-muted-foreground">No results found for "{query}"</div>
                        )
                    )}
                </div>
            )}
        </div>
    )
}
