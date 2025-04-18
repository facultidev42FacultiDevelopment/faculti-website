"use client"

import type React from "react"

import type { PostResponse } from "@/app/api/v1/posts/types"
import { useCallback, useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react"
import { FileText, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { debounce } from "@/lib/utils"

interface VideoNotesProps {
    post: PostResponse
}

interface SummaryResponse {
    videoId: string
    summary: {
        div: {
            class: string
            children: Array<{
                [tagName: string]: {
                    class?: string
                    text?: string
                    children?: Array<{
                        [childTagName: string]: {
                            class?: string
                            text?: string
                        }
                    }>
                }
            }>
        }
    }
    generatedAt: string
}

export interface VideoNotesHandle {
    highlightSection: (sectionId: string) => void
}

const summaryCache = new Map<
    string,
    {
        summary: SummaryResponse | null
        error: string | null
    }
>()

const VideoNotes = forwardRef<VideoNotesHandle, VideoNotesProps>(({ post }, ref) => {
    const [summaryData, setSummaryData] = useState<{
        summary: SummaryResponse | null
        loading: boolean
        error: string | null
    }>({
        summary: null,
        loading: true,
        error: null,
    })
    const [activeSection, setActiveSection] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [showCopied, setShowCopied] = useState(false)
    const [searchInputValue, setSearchInputValue] = useState("")

    const notesRef = useRef<HTMLDivElement>(null)
    const scrollAreaRef = useRef<HTMLDivElement | null>(null)
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})
    const hasFetchedRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => ({
        highlightSection: (sectionId: string) => {
            if (!sectionId) return

            setActiveSection(sectionId)

            setTimeout(() => {
                const sectionEl = sectionRefs.current[sectionId]
                if (sectionEl && scrollAreaRef.current) {
                    const container = scrollAreaRef.current

                    const scrollTop =
                        sectionEl.offsetTop - container.offsetTop - container.clientHeight / 2 + sectionEl.offsetHeight / 2

                    container.scrollTo({
                        top: scrollTop,
                        behavior: "smooth",
                    })
                }
            }, 100)
        },
    }))

    const fetchSummary = useCallback(async () => {
        if (!post.vimeoVideoId) return

        if (hasFetchedRef.current) return
        hasFetchedRef.current = true

        const cacheKey = `summary-${post.vimeoVideoId}`
        if (summaryCache.has(cacheKey)) {
            const cachedData = summaryCache.get(cacheKey)!
            setSummaryData({
                summary: cachedData.summary,
                loading: false,
                error: cachedData.error,
            })
            return
        }

        try {
            setSummaryData({
                summary: null,
                loading: true,
                error: null,
            })

            const summaryResponse = await fetch(`/api/v1/vimeo/ai/generate-summary?videoId=${post.vimeoVideoId}`)

            if (!summaryResponse.ok) {
                const errorData = await summaryResponse.json()
                throw new Error(errorData.error || "Failed to fetch summary")
            }

            const summaryData: SummaryResponse = await summaryResponse.json()

            summaryCache.set(cacheKey, {
                summary: summaryData,
                error: null,
            })

            setSummaryData({
                summary: summaryData,
                loading: false,
                error: null,
            })
        } catch (err) {
            console.error("Error fetching summary:", err)
            const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"

            summaryCache.set(cacheKey, {
                summary: null,
                error: errorMessage,
            })

            setSummaryData({
                summary: null,
                loading: false,
                error: errorMessage,
            })
        }
    }, [post.vimeoVideoId])

    useEffect(() => {
        fetchSummary()
    }, [fetchSummary])

    const debouncedSearch = useCallback(
        debounce((query: string) => {
            setSearchQuery(query)
        }, 300),
        [],
    )

    const handleSearchInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            setSearchInputValue(value)
            debouncedSearch(value)
        },
        [debouncedSearch],
    )

    const handleSetSectionRef = useCallback((id: string, element: HTMLDivElement | null) => {
        sectionRefs.current[id] = element
    }, [])

    const parseSummaryContent = useCallback(
        (summaryData: SummaryResponse): React.ReactNode => {
            if (!summaryData || !summaryData.summary || !summaryData.summary.div) {
                return null
            }

            const renderChildren = (children: any[]): React.ReactNode[] => {
                return children
                    .map((child, index) => {
                        const tagName = Object.keys(child)[0]
                        const content = child[tagName]
                        const sectionId = `section-${tagName}-${index}`

                        if (searchQuery && content.text && !content.text.toLowerCase().includes(searchQuery.toLowerCase())) {
                            if (tagName !== "ul" || !content.children) {
                                return null
                            }

                            const hasMatch = content.children.some((listItem: any) => {
                                const liTagName = Object.keys(listItem)[0]
                                const liContent = listItem[liTagName]
                                return liContent.text && liContent.text.toLowerCase().includes(searchQuery.toLowerCase())
                            })

                            if (!hasMatch) {
                                return null
                            }
                        }

                        const isActive = activeSection === sectionId

                        if (tagName === "h2") {
                            return (
                                <div
                                    key={index}
                                    id={sectionId}
                                    ref={(el) => handleSetSectionRef(sectionId, el)}
                                    className={cn(
                                        "group hover:bg-accent/5 p-2 -mx-2 rounded-md transition-colors",
                                        isActive && "bg-primary/10 border-l-4 border-primary",
                                    )}
                                >
                                    <h2 className={content.class || "text-lg font-bold mb-1"}>
                                        {searchQuery ? highlightSearchText(content.text || "", searchQuery) : content.text}
                                    </h2>
                                </div>
                            )
                        } else if (tagName === "p") {
                            return (
                                <div
                                    key={index}
                                    id={sectionId}
                                    ref={(el) => handleSetSectionRef(sectionId, el)}
                                    className={cn(
                                        "group hover:bg-accent/5 p-2 -mx-2 rounded-md transition-colors",
                                        isActive && "bg-primary/10 border-l-4 border-primary",
                                    )}
                                >
                                    <p className={content.class || "mb-2"}>
                                        {searchQuery ? highlightSearchText(content.text || "", searchQuery) : content.text}
                                    </p>
                                </div>
                            )
                        } else if (tagName === "ul" && content.children) {
                            // For lists, filter list items that match the search query
                            const filteredChildren = searchQuery
                                ? content.children.filter((listItem: any) => {
                                    const liTagName = Object.keys(listItem)[0]
                                    const liContent = listItem[liTagName]
                                    return !liContent.text || liContent.text.toLowerCase().includes(searchQuery.toLowerCase())
                                })
                                : content.children

                            if (filteredChildren.length === 0) {
                                return null
                            }

                            return (
                                <div
                                    key={index}
                                    id={sectionId}
                                    ref={(el) => handleSetSectionRef(sectionId, el)}
                                    className={cn(
                                        "group hover:bg-accent/5 p-2 -mx-2 rounded-md transition-colors",
                                        isActive && "bg-primary/10 border-l-4 border-primary",
                                    )}
                                >
                                    <ul className={content.class || "list-disc ml-5 mb-3"}>
                                        {filteredChildren.map((listItem: any, listIndex: number) => {
                                            const liTagName = Object.keys(listItem)[0]
                                            const liContent = listItem[liTagName]
                                            return (
                                                <li key={listIndex} className={liContent.class || "mb-1"}>
                                                    {searchQuery ? highlightSearchText(liContent.text || "", searchQuery) : liContent.text}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        }

                        return (
                            <div
                                key={index}
                                id={sectionId}
                                ref={(el) => handleSetSectionRef(sectionId, el)}
                                className={cn(
                                    "group hover:bg-accent/5 p-2 -mx-2 rounded-md transition-colors",
                                    isActive && "bg-primary/10 border-l-4 border-primary",
                                )}
                            >
                                {content.text || ""}
                            </div>
                        )
                    })
                    .filter(Boolean) // Filter out null elements (non-matching search results)
            }

            return (
                <div className={summaryData.summary.div.class || "text-base"}>
                    {renderChildren(summaryData.summary.div.children)}
                </div>
            )
        },
        [activeSection, handleSetSectionRef, searchQuery],
    )

    const highlightSearchText = (text: string, query: string): React.ReactNode => {
        if (!query.trim()) return text

        const parts = text.split(new RegExp(`(${query})`, "gi"))

        return parts.map((part, index) => {
            if (part.toLowerCase() === query.toLowerCase()) {
                return (
                    <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-0.5 rounded">
                        {part}
                    </mark>
                )
            }
            return <span key={index}>{part}</span>
        })
    }

    const renderNotesSkeleton = () => (
        <>
            {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse space-y-3">
                    <div className="h-6 w-3/4 bg-muted rounded-md mb-2"></div>
                    <div className="h-4 w-full bg-muted rounded-md"></div>
                    <div className="h-4 w-full bg-muted rounded-md"></div>
                    <div className="h-4 w-2/3 bg-muted rounded-md"></div>
                    <div className="h-16 space-y-2 ml-5">
                        <div className="h-4 w-full bg-muted rounded-md"></div>
                        <div className="h-4 w-full bg-muted rounded-md"></div>
                        <div className="h-4 w-3/4 bg-muted rounded-md"></div>
                    </div>
                </div>
            ))}
        </>
    )

    const renderNotesContent = () => {
        if (summaryData.loading) {
            return renderNotesSkeleton()
        }

        if (summaryData.error) {
            return (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                    <h3 className="text-lg font-medium">Notes unavailable</h3>
                    <p className="text-muted-foreground mt-2 max-w-md">
                        {summaryData.error === "Summary not found"
                            ? "The notes for this content have been removed."
                            : "We couldn't load the notes for this video."}
                    </p>
                </div>
            )
        }

        if (!summaryData.summary) {
            return (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                    <h3 className="text-lg font-medium">No notes available</h3>
                    <p className="text-muted-foreground mt-2 max-w-md">This video doesn't have notes yet.</p>
                </div>
            )
        }

        const content = parseSummaryContent(summaryData.summary)

        // If we have a search query but no results
        if (searchQuery && Array.isArray(content) && content.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Search className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                    <h3 className="text-lg font-medium">No matches found</h3>
                    <p className="text-muted-foreground mt-2 max-w-md">No notes matching "{searchQuery}" were found.</p>
                </div>
            )
        }

        return content
    }

    const copyNotes = useCallback(() => {
        if (summaryData.summary) {
            const plainTextContent = extractPlainText(summaryData.summary)
            navigator.clipboard.writeText(plainTextContent)
        } else {
            navigator.clipboard.writeText("Notes not available for this video.")
        }

        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 2000)
    }, [summaryData.summary])

    const extractPlainText = (summaryData: SummaryResponse): string => {
        if (!summaryData || !summaryData.summary || !summaryData.summary.div) {
            return ""
        }

        let text = ""

        summaryData.summary.div.children.forEach((child) => {
            const tagName = Object.keys(child)[0]
            const content = child[tagName]

            if (tagName === "h2") {
                text += `${content.text}\n\n`
            } else if (tagName === "p") {
                text += `${content.text}\n\n`
            } else if (tagName === "ul" && content.children) {
                content.children.forEach((listItem: any) => {
                    const liTagName = Object.keys(listItem)[0]
                    const liContent = listItem[liTagName]
                    text += `• ${liContent.text}\n`
                })
                text += "\n"
            } else if (content.text) {
                text += `${content.text}\n\n`
            }
        })

        return text
    }

    const clearSearch = () => {
        setSearchInputValue("")
        setSearchQuery("")
    }

    const formatDate = (dateString: string): string => {
        if (!dateString) return ""

        try {
            const date = new Date(dateString)
            return new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }).format(date)
        } catch (e) {
            return dateString
        }
    }

    return (
        <div
            className="flex flex-col bg-card text-card-foreground rounded-md overflow-hidden shadow-sm w-full"
            style={{ height: "700px" }}
        >
            <div className="flex flex-col p-3 border-b">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Video Notes</div>
                    <div className="flex items-center space-x-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={copyNotes}
                                        disabled={!summaryData.summary}
                                    >
                                        <FileText className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>{showCopied ? "Copied!" : "Copy notes"}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Search notes..."
                        className="w-full px-3 py-1.5 text-sm bg-muted/30"
                        value={searchInputValue}
                        onChange={handleSearchInputChange}
                        disabled={!summaryData.summary}
                    />
                    {searchInputValue && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
                            onClick={clearSearch}
                        >
                            <span className="sr-only">Clear search</span>
                            <X className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
            <div className="flex-1 overflow-hidden">
                <div ref={notesRef} className="h-full">
                    <ScrollArea
                        className="h-full"
                        ref={(el) => {
                            scrollAreaRef.current = el ? el.querySelector('[role="presentation"]') : null
                        }}
                    >
                        <div className="p-3 space-y-3 w-full break-words">{renderNotesContent()}</div>
                    </ScrollArea>
                </div>
            </div>
            <div className="p-2 border-t flex justify-between items-center text-xs text-muted-foreground">
                {summaryData.summary?.generatedAt && <div>Generated: {formatDate(summaryData.summary.generatedAt)}</div>}
                {!summaryData.summary?.generatedAt && <div></div>}
                <div>{searchQuery && summaryData.summary && <span>Showing filtered results</span>}</div>
            </div>
        </div>
    )
})

VideoNotes.displayName = "VideoNotes"

export default VideoNotes
