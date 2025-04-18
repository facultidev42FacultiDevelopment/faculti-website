"use client"

import type React from "react"

import type { PostResponse } from "@/app/api/v1/posts/types"
import { useCallback, useState, useEffect, useRef, useMemo, forwardRef, useImperativeHandle } from "react"
import { FileText, Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area" // Assuming this is shadcn/ui ScrollArea
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { debounce } from "@/lib/utils"

interface VideoTranscriptProps {
    post: PostResponse
}

interface TranscriptSegment {
    text: string
    startTime: number
}

interface VideoData {
    post: PostResponse | null
    transcript: {
        segments: TranscriptSegment[] | null
        loading: boolean
        error: string | null
    }
    loading: boolean
    error: string | null
}

export interface VideoTranscriptHandle {
    highlightSegment: (index: string) => void
}

const transcriptCache = new Map<
    string,
    {
        segments: TranscriptSegment[] | null
        error: string | null
    }
>()

const VideoTranscript = forwardRef<VideoTranscriptHandle, VideoTranscriptProps>(({ post }, ref) => {
    const [videoData, setVideoData] = useState<VideoData>({
        post: post,
        transcript: {
            segments: null,
            loading: false,
            error: null,
        },
        loading: true,
        error: null,
    })
    const [activeSegment, setActiveSegment] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [showCopied, setShowCopied] = useState(false)
    const [filteredSegments, setFilteredSegments] = useState<TranscriptSegment[] | null>(null)
    const [searchInputValue, setSearchInputValue] = useState("")

    const transcriptRef = useRef<HTMLDivElement>(null)
    const scrollAreaRef = useRef<any>(null)
    const segmentRefs = useRef<Record<string, HTMLDivElement | null>>({})
    const hasFetchedRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => ({
        highlightSegment: (index: string) => {
            if (!index) {
                setActiveSegment(null);
                return;
            }

            const segIndex = `segment-${index}`
            setActiveSegment(segIndex);
        },
    }))

    useEffect(() => {
        if (!activeSegment) return;

        const timeoutId = setTimeout(() => {
            const segmentEl = segmentRefs.current[activeSegment];

            if (!segmentEl) {
                console.warn("Could not find segment element for scrolling.", activeSegment);
                return;
            }

            if (!scrollAreaRef.current) {
                console.warn("Could not find scroll container for scrolling.");
                return;
            }

            const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');

            if (!viewport) {
                const scrollableElement = scrollAreaRef.current.querySelector('div[style*="overflow"]');
                if (scrollableElement) {
                    const scrollTop = segmentEl.offsetTop - scrollableElement.clientHeight / 2 + segmentEl.offsetHeight / 2;
                    scrollableElement.scrollTo({
                        top: scrollTop,
                        behavior: "smooth"
                    });
                } else {
                    console.warn("Could not find any scrollable element inside the ScrollArea.");
                }
                return;
            }

            const scrollTop = segmentEl.offsetTop - viewport.clientHeight / 2 + segmentEl.offsetHeight / 2;

            viewport.scrollTo({
                top: scrollTop,
                behavior: "smooth",
            });
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [activeSegment]);

    const fetchTranscript = useCallback(async () => {
        if (!post.vimeoVideoId) return

        if (hasFetchedRef.current) return
        hasFetchedRef.current = true

        const cacheKey = `transcript-${post.vimeoVideoId}`
        if (transcriptCache.has(cacheKey)) {
            const cachedData = transcriptCache.get(cacheKey)!
            setVideoData((prev) => ({
                ...prev,
                transcript: {
                    segments: cachedData.segments,
                    loading: false,
                    error: cachedData.error,
                },
                loading: false,
            }))
            setFilteredSegments(cachedData.segments)
            return
        }

        try {
            setVideoData((prev) => ({
                ...prev,
                transcript: {
                    ...prev.transcript,
                    loading: true,
                    error: null,
                },
            }))

            const transcriptResponse = await fetch(`/api/v1/vimeo/transcript?videoId=${post.vimeoVideoId}`)

            if (!transcriptResponse.ok) {
                const errorData = await transcriptResponse.json()
                throw new Error(errorData.error || "Failed to fetch transcript")
            }

            const transcriptData = await transcriptResponse.json()

            const segments =
                transcriptData.chunks?.map((chunk: TranscriptSegment) => ({
                    text: chunk.text,
                    startTime: chunk.startTime,
                })) || []

            transcriptCache.set(cacheKey, {
                segments,
                error: null,
            })

            setVideoData((prev) => ({
                ...prev,
                transcript: {
                    segments,
                    loading: false,
                    error: null,
                },
                loading: false,
            }))

            setFilteredSegments(segments)
        } catch (err) {
            console.error("Error fetching transcript:", err)
            const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"

            transcriptCache.set(cacheKey, {
                segments: null,
                error: errorMessage,
            })

            setVideoData((prev) => ({
                ...prev,
                transcript: {
                    ...prev.transcript,
                    loading: false,
                    error: errorMessage,
                },
                loading: false,
            }))
        }
    }, [post.vimeoVideoId])

    useEffect(() => {
        fetchTranscript()
    }, [fetchTranscript])

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

    const filterSegments = useMemo(() => {
        if (!videoData.transcript.segments) return null
        if (!searchQuery.trim()) return videoData.transcript.segments

        const query = searchQuery.toLowerCase()
        return videoData.transcript.segments.filter((segment) => segment.text.toLowerCase().includes(query))
    }, [searchQuery, videoData.transcript.segments])

    useEffect(() => {
        setFilteredSegments(filterSegments)
    }, [filterSegments])

    const jumpToTime = useCallback((seconds: number) => {
        const iframe = document.querySelector("iframe")
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(
                {
                    method: "seekTo",
                    value: seconds,
                },
                "*",
            )
        }
    }, [])

    const copyTranscript = useCallback(() => {
        if (videoData.transcript.segments && videoData.transcript.segments.length > 0) {
            const transcriptText = videoData.transcript.segments
                .map(
                    (segment) =>
                        `[${Math.floor(segment.startTime / 60)}:${Math.floor(segment.startTime % 60)
                            .toString()
                            .padStart(2, "0")}] ${segment.text}`,
                )
                .join("\n\n")

            navigator.clipboard.writeText(transcriptText)
        } else {
            navigator.clipboard.writeText("Transcript not available for this interview.")
        }

        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 2000)
    }, [videoData.transcript.segments])

    const handleSetSegmentRef = useCallback((id: string, element: HTMLDivElement | null) => {
        segmentRefs.current[id] = element
    }, [])

    const formatText = useCallback((text: string): React.ReactNode => {
        if (!text) return null

        const parts = text.split(/(\*\*.*?\*\*)/g)

        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>
            }
            return <span key={index}>{part}</span>
        })
    }, [])

    const renderTranscriptSkeleton = () => (
        <>
            {[...Array(5)].map((_, i) => (
                <div key={i} className="group animate-pulse">
                    <div className="flex items-start space-x-2 mb-1">
                        <div className="h-5 w-16 bg-muted rounded-md"></div>
                        <div className="h-5 w-5 bg-transparent"></div>
                    </div>
                    <div className="h-16 bg-muted rounded-md"></div>
                </div>
            ))}
        </>
    )

    const renderTranscriptContent = () => {
        if (videoData.loading) {
            return renderTranscriptSkeleton()
        }

        if (videoData.error) {
            return (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                    <h3 className="text-lg font-medium">Transcript unavailable</h3>
                    <p className="text-muted-foreground mt-2 max-w-md">
                        {videoData.error === "Interview not found"
                            ? "The transcript for this content has been removed."
                            : "We couldn't load the transcript for this interview."}
                    </p>
                </div>
            )
        }

        if (videoData.transcript.loading) {
            return renderTranscriptSkeleton()
        }

        if (videoData.transcript.error) {
            return (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                    <h3 className="text-lg font-medium">Transcript unavailable</h3>
                    <p className="text-muted-foreground mt-2 max-w-md">{videoData.transcript.error}</p>
                </div>
            )
        }

        if (filteredSegments && filteredSegments.length > 0) {
            return filteredSegments.map((segment, i) => {
                const segmentId = `segment-chunk-${i}`;
                return (
                    <div
                        id={segmentId}
                        key={i}
                        ref={(el) => handleSetSegmentRef(segmentId, el)}
                        className={cn(
                            "group hover:bg-accent/5 p-2 -mx-2 rounded-md transition-colors cursor-pointer",
                            activeSegment === segmentId && "bg-primary/10 border-l-4 border-primary",
                        )}
                        onClick={() => {
                            jumpToTime(segment.startTime)
                        }}
                    >
                        <div className="flex items-start space-x-2 mb-1">
                            <Badge variant="outline" className="bg-muted/30 text-xs font-mono">
                                {Math.floor(segment.startTime / 60)
                                    .toString()
                                    .padStart(2, "0")}
                                :
                                {Math.floor(segment.startTime % 60)
                                    .toString()
                                    .padStart(2, "0")}
                            </Badge>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Play className="h-3 w-3" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Jump to this timestamp</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <p className="text-sm leading-relaxed break-words">
                            {searchQuery ? highlightSearchText(segment.text, searchQuery) : formatText(segment.text)}
                        </p>
                    </div>
                );
            })
        }

        return (
            <div className="flex flex-col items-center justify-center py-8 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                <h3 className="text-lg font-medium">No transcript available</h3>
                <p className="text-muted-foreground mt-2 max-w-md">This video doesn't have a transcript yet.</p>
            </div>
        )
    }

    const highlightSearchText = (text: string, query: string): React.ReactNode => {
        if (!query.trim()) return formatText(text)

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

    const calculateVideoDuration = (): string => {
        if (!videoData.transcript.segments || videoData.transcript.segments.length === 0) return "00:00"

        const lastSegment = videoData.transcript.segments[videoData.transcript.segments.length - 1]
        const totalSeconds = Math.round(lastSegment.startTime + (lastSegment.text.length / 15));
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }

    const clearSearch = () => {
        setSearchInputValue("")
        setSearchQuery("")
    }

    return (
        <div
            className="flex flex-col bg-card text-card-foreground rounded-md overflow-hidden border shadow-sm w-full"
            style={{ height: "500px" }}
        >
            <div className="flex flex-col p-3 border-b">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Video Transcript</div>
                    <div className="flex items-center space-x-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={copyTranscript}
                                        disabled={!videoData.transcript.segments || videoData.transcript.segments.length === 0}
                                    >
                                        <FileText className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>{showCopied ? "Copied!" : "Copy transcript"}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Search transcript..."
                        className="w-full px-3 py-1.5 text-sm bg-muted/30"
                        value={searchInputValue}
                        onChange={handleSearchInputChange}
                        disabled={!videoData.transcript.segments || videoData.transcript.segments.length === 0}
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
                {filteredSegments && filteredSegments.length > 0 && searchQuery && (
                    <div className="mt-1 text-xs text-muted-foreground">
                        Found {filteredSegments.length} matches out of {videoData.transcript.segments?.length || 0} segments
                    </div>
                )}
            </div>
            <div className="flex-1 overflow-hidden">
                <div ref={transcriptRef} className="h-full">
                    <ScrollArea
                        className="h-full"
                        ref={scrollAreaRef}
                    >
                        <div className="p-3 space-y-3 w-full break-words" data-transcript-content>
                            {renderTranscriptContent()}
                        </div>
                    </ScrollArea>
                </div>
            </div>
            <div className="p-2 border-t flex justify-between items-center text-xs text-muted-foreground">
                <div>Video length: {calculateVideoDuration()}</div>
                {filteredSegments && filteredSegments.length > 0 && <div>{filteredSegments.length} segments</div>}
            </div>
        </div>
    )
})

VideoTranscript.displayName = "VideoTranscript"

export default VideoTranscript