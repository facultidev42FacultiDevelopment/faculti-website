"use client"

import type { PostResponse } from "@/app/api/v1/posts/types"
import { useState, useEffect, useCallback, useRef } from "react"
import { FileText, Building, User2, Home } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
    post: PostResponse
    className?: string
}

export default function VideoPlayer({ post, className }: VideoPlayerProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [categories, setCategories] = useState<Array<{ id: string; name: string; slug: string }>>([])
    const [isHovering, setIsHovering] = useState(false)
    const playerRef = useRef<HTMLIFrameElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsLoaded(true)

        if (post?.categories && post.categories.length > 0) {
            const sortedCategories = [...post.categories]
                .map((cat) => cat.category)
                .sort((a, b) => {
                    if (a.name.includes("and") || a.name.length < 10) return -1
                    if (b.name.includes("and") || b.name.length < 10) return 1
                    return 0
                })

            setCategories(sortedCategories)
        }

    }, [post])

    const cleanContent = useCallback((content: string | null): string => {
        if (!content) return ""
        let cleaned = content.replace(/<[^>]*>/g, "")
        cleaned = cleaned.replace(/https?:\/\/[^\s]+|vimeo\.com\/[^\s]+/g, "")
        cleaned = cleaned.replace(/\s+/g, " ").trim()
        return cleaned
    }, [])

    const handleIframeError = useCallback(() => {
        setHasError(true)
    }, [])

    return (
        <div className={cn("container mx-auto py-4 md:py-6 w-full", className)}>
            <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden border shadow-md rounded-xl">
                    <div
                        ref={containerRef}
                        className="relative aspect-video bg-black/90"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className="absolute inset-0 w-full h-full">
                            {!isLoaded ? (
                                <div className="w-full h-full flex items-center justify-center bg-card">
                                    <div className="w-16 h-16 rounded-full bg-muted animate-pulse"></div>
                                </div>
                            ) : hasError ? (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-card p-6 text-center">
                                    <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                                    <h3 className="text-lg font-medium">Video unavailable</h3>
                                    <p className="text-muted-foreground mt-2">This video could not be loaded. Please try again later.</p>
                                </div>
                            ) : (
                                <>
                                    <iframe
                                        ref={playerRef}
                                        src={`https://player.vimeo.com/video/${post.vimeoVideoId}?title=0&byline=0&portrait=0&controls=0&player_id=0&app_id=58479`}
                                        title={post.title}
                                        width="100%"
                                        height="100%"
                                        allow="autoplay; fullscreen"
                                        allowFullScreen
                                        className="w-full h-full"
                                        onError={handleIframeError}
                                        loading="lazy"
                                    ></iframe>

                                    {/* Custom video controls overlay */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30",
                                            "opacity-0 transition-opacity duration-300",
                                            (isHovering) && "opacity-100",
                                        )}
                                    >
                                        <div className="absolute top-0 left-0 right-0 p-4 text-white">
                                            <h3 className="text-lg font-medium line-clamp-1">{post.title}</h3>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </Card>

                <Card className="bg-card text-card-foreground shadow-md rounded-xl">
                    <CardHeader className="pb-1 pt-4 px-4">
                        <CardTitle className="text-2xl font-semibold">{post.title || "Untitled"}</CardTitle>
                    </CardHeader>

                    <div className="px-4 py-1 mb-2">
                        <div className="flex items-center space-x-2 text-sm overflow-x-auto whitespace-nowrap">
                            <Button variant="ghost" size="sm" className="p-0 h-auto">
                                <Home className="h-3.5 w-3.5 mr-1" />
                                <span className="text-muted-foreground hover:text-primary">Home</span>
                            </Button>

                            {categories.map((category, index) => (
                                <span key={category.id} className="flex items-center">
                                    <span className="text-muted-foreground mx-1">•</span>
                                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                                        <span
                                            className={cn(
                                                "hover:text-primary",
                                                index === categories.length - 1
                                                    ? "text-primary font-medium"
                                                    : "text-muted-foreground",
                                            )}
                                        >
                                            {category.name}
                                        </span>
                                    </Button>
                                </span>
                            ))}

                            {categories.length === 0 && (
                                <>
                                    <span className="text-muted-foreground">•</span>
                                    <span className="text-primary truncate font-medium">This Interview</span>
                                </>
                            )}
                        </div>
                    </div>

                    <CardContent className="px-4 pb-4">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <User2 className="h-4 w-4 text-muted-foreground" />
                                <span>{post?.writers?.[0]?.writer?.name || post?.author?.name || "Unknown Author"}</span>
                            </div>

                            {post?.institutions && post.institutions.length > 0 && (
                                <div className="flex items-center space-x-2">
                                    <Building className="h-4 w-4 text-muted-foreground" />
                                    <span>{post.institutions[0].institution?.name || ""}</span>
                                </div>
                            )}

                            <Separator />

                            <p className="text-muted-foreground">
                                {cleanContent(post.content || post.excerpt || "No description available.")}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
