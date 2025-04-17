"use client"

import type React from "react"
import { useState, useRef, useEffect, useMemo, useCallback } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { PostResponse } from "@/app/api/v1/posts/types"

interface PolicyCarouselProps {
  posts: PostResponse[]
}

const CATEGORIES = [
  { id: "all", name: "All Policies", active: true },
  { id: "environmental", name: "Environmental", active: false },
  { id: "healthcare", name: "Healthcare", active: false },
  { id: "technology", name: "Social Policy", active: false },
  { id: "economics", name: "Global and Regional Policy Authorities", active: false },
]

export default function PolicyCarousel({ posts }: PolicyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(5)
  const [touchStart, setTouchStart] = useState(0)
  const [activeCategory, setActiveCategory] = useState("all")
  const sliderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setVisibleCount(2)
      else if (width < 768) setVisibleCount(3)
      else if (width < 1024) setVisibleCount(4)
      else setVisibleCount(5)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (activeIndex > posts.length - visibleCount) {
      setActiveIndex(Math.max(0, posts.length - visibleCount))
    }
  }, [visibleCount, activeIndex, posts])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < posts.length - visibleCount ? prev + 1 : 0))
  }, [visibleCount, posts])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : posts.length - visibleCount))
  }, [visibleCount, posts])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
  }

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setActiveIndex(0)
  }

  const getTransform = useCallback(() => {
    if (!sliderRef.current || !containerRef.current) return 0
    const containerWidth = containerRef.current.offsetWidth
    const itemWidth = containerWidth / visibleCount
    return -activeIndex * itemWidth
  }, [activeIndex, visibleCount])

  const getCardWidth = useCallback(() => {
    const gap = 0.5
    const totalGapWidth = gap * (visibleCount - 1)
    const percentWidth = (100 - totalGapWidth) / visibleCount
    return `calc(${percentWidth}% - ${gap / visibleCount}rem)`
  }, [visibleCount])

  const stripHtmlTags = (html: string | null) => {
    if (!html) return ""
    return html.replace(/<[^>]*>/g, "")
  }

  const getInstitution = (post: PostResponse) => {
    return post.institutions && post.institutions.length > 0
      ? post.institutions[0].institution.name
      : "Uncategorized"
  }

  const policyCards = useMemo(
    () =>
      posts.map((researcher) => (
        <div
          key={researcher.id}
          style={{ width: getCardWidth() }}
          className="flex-shrink-0 group"
        >
          <div className="bg-card h-full flex flex-col overflow-hidden hover:shadow-md transition-all border border-border/10">
            <div className="relative">
              {/* Changed aspect ratio to 16/9 for YouTube-style thumbnails */}
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={`https://faculti.net${researcher.imageUrl}`}
                  alt=""
                  loading="lazy"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="p-2 flex flex-col flex-grow">
              <h3 className="text-xs font-medium text-foreground/80 line-clamp-1">{getInstitution(researcher)}</h3>
              <h2 className="text-sm font-bold text-foreground my-1 line-clamp-2">
                {researcher.title}
              </h2>
              <div className="text-xs text-foreground/60 line-clamp-2">
                {stripHtmlTags(researcher?.writers[0]?.writer?.name) || ""}
              </div>

            </div>
          </div>
        </div>
      )),
    [getCardWidth, activeCategory, posts],
  )

  return (
    <section className="w-full bg-background py-2">
      <div className="w-full px-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
          <h2 className="text-lg sm:text-xl font-bold">Policy</h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "text-xs py-1 px-1 cursor-pointer whitespace-nowrap",
                  activeCategory === category.id
                    ? "text-foreground border-b-2 border-primary"
                    : "text-foreground/60 hover:text-foreground/80",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div ref={containerRef} className="relative w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-2 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(${getTransform()}px)` }}
            >
              {policyCards}
            </div>
          </div>
          <Button
            className="absolute top-1/2 -right-1 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card rounded-full p-2 shadow-md border border-border/10 z-10"
            onClick={handleNext}
            aria-label="Next"
            size="icon"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}