"use client"

import { useState, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Updated PostResponse type to match the provided data structure
interface Writer {
  id: string
  name: string
  slug: string
  imgUrl: string | null
}

interface Institution {
  institution: {
    id: string
    name: string
    slug: string
  }
}

export interface LatestPostResponse {
  id: string
  title: string
  content: string
  excerpt: string
  date: string
  imageUrl: string;
  slug: string
  author: {
    id: string
    name: string
    slug: string
    email: string
    url: string | null
    avatarUrl: string | null
  }
  writers: { writer: Writer }[]
  institutions: Institution[]
}

interface FeaturedLatestPostsProps {
  posts: LatestPostResponse[]
}

export default function FeaturedLatestPosts({ posts }: FeaturedLatestPostsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliding, setSliding] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchY, setTouchY] = useState(0)

  const sliderRef = useRef<HTMLDivElement>(null)

  const direction = useRef<"next" | "prev">("next")
  const prevIndex = useRef(activeIndex)

  const handleNext = useCallback((): void => {
    if (sliding || posts.length === 0) return

    direction.current = "next"
    setSliding(true)
    prevIndex.current = activeIndex

    setActiveIndex((prev) => (prev + 1) % posts.length)

    setTimeout(() => {
      setSliding(false)
    }, 600)
  }, [activeIndex, sliding, posts.length])

  const handlePrev = useCallback((): void => {
    if (sliding || posts.length === 0) return

    direction.current = "prev"
    setSliding(true)
    prevIndex.current = activeIndex

    setActiveIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1))

    setTimeout(() => {
      setSliding(false)
    }, 600)
  }, [activeIndex, sliding, posts.length])

  const goToSlide = (index: number): void => {
    if (sliding || index === activeIndex || posts.length === 0) return

    direction.current = index > activeIndex ? "next" : "prev"
    setSliding(true)
    prevIndex.current = activeIndex

    setActiveIndex(index)

    setTimeout(() => {
      setSliding(false)
    }, 600)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
    setTouchY(e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (sliding || !sliderRef.current) return

    const touchMove = e.touches[0].clientX
    const diff = touchMove - touchStart
    const yDiff = Math.abs(e.touches[0].clientY - touchY)

    if (Math.abs(diff) > yDiff && Math.abs(diff) < 100) {
      sliderRef.current.style.transform = `translateX(${diff * 0.2}px)`
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = ""
    }

    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    const threshold = window.innerWidth < 480 ? 40 : 60

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  // Enhanced HTML stripping to remove tags and scripts
  const stripHtmlTags = (html: string | null) => {
    if (!html) return ""
    // Remove script tags and their content
    let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    // Remove HTML tags
    clean = clean.replace(/<[^>]*>/g, "").trim()
    return clean
  }

  const getInstitution = (post: LatestPostResponse) => {
    return post.institutions && post.institutions.length > 0
      ? post.institutions[0].institution.name
      : "Uncategorized"
  }

  const getWriterImage = (post: LatestPostResponse) => {
    return `https://faculti.net${post.imageUrl}` || "/api/placeholder/100/100"
  }

  const nextIndex = posts.length > 0 ? (activeIndex + 1) % posts.length : 0
  const secondNextIndex = posts.length > 0 ? (activeIndex + 2) % posts.length : 0
  const thirdNextIndex = posts.length > 0 ? (activeIndex + 3) % posts.length : 0
  const fourthNextIndex = posts.length > 0 ? (activeIndex + 4) % posts.length : 0

  const slideVariants = {
    enter: (customDirection: "next" | "prev") => ({
      x: customDirection === "next" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (customDirection: "next" | "prev") => ({
      x: customDirection === "next" ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };


  if (posts.length === 0) {
    return (
      <section className="w-full bg-slate-950">
        <div className="w-full mx-auto py-2 sm:py-3 px-2">
          <div className="bg-slate-900 rounded-lg p-8 text-center text-white/80">
            No posts available at the moment.
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full bg-slate-950">
      <div className="w-full mx-auto py-2 sm:py-3">
        <div className="flex items-center justify-between mb-2 px-2">
          <h2 className="text-lg sm:text-xl font-bold text-white text-left">Featured</h2>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-7 w-7 bg-slate-900/80 text-white hover:bg-slate-800"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-7 w-7 bg-slate-900/80 text-white hover:bg-slate-800"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="relative w-full px-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-[35%] lg:w-[30%]">
              <AnimatePresence initial={false} custom={direction.current} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction.current}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-[160px] xs:h-[180px] sm:h-[220px]"
                >
                  <div className="flex h-full">
                    <div className="w-2/3 h-full p-3 sm:p-4 flex flex-col justify-between bg-slate-900">
                      <div className="text-left">
                        <div className="mb-1">
                          <p className="text-white/80 text-xs">
                            {posts[activeIndex]?.writers?.[0]?.writer?.name || "Unknown Author"}
                          </p>
                          <p className="text-white/60 text-xs -mt-0.5">
                            {getInstitution(posts[activeIndex])}
                          </p>
                        </div>
                        <h2 className="text-white text-sm md:text-base font-bold mb-1">
                          {posts[activeIndex].title}
                        </h2>
                      </div>
                      <div className="flex items-center justify-start mt-auto">
                        <Button
                          className="bg-blue-500 hover:bg-blue-400 text-white text-xs py-1 h-6 sm:h-7 px-3 sm:px-4 flex items-center gap-1"
                          size="sm"
                        >
                          Watch
                          <ArrowRight className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-2/3 h-full bg-slate-800 relative">
                      {posts[activeIndex]?.imageUrl ? (
                        <Image
                          src={getWriterImage(posts[activeIndex])}
                          alt={`${posts[activeIndex]?.writers?.[0]?.writer?.name || "Author"} avatar`}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full bg-gray-700">
                          <span className="text-white/60 text-xs">Image Not Available</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden md:flex md:w-[65%] lg:w-[70%] gap-2">
              <div
                className="w-1/4 h-[220px] cursor-pointer group"
                onClick={() => goToSlide(nextIndex)}
              >
                <div className="relative h-full w-full bg-slate-900 group-hover:bg-slate-800 transition-duration-300">
                  <div className="h-full p-3 flex flex-col justify-between">
                    <div className="text-left">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full overflow-hidden">
                          {posts[nextIndex]?.imageUrl ? (
                            <Image
                              src={getWriterImage(posts[nextIndex])}
                              alt={`${posts[nextIndex]?.writers?.[0]?.writer?.name || "Author"} avatar`}
                              width={20}
                              height={20}
                              className="object-cover"
                              loading="eager"
                            />
                          ) : (
                            <div className="h-full w-full bg-gray-700 flex items-center justify-center">
                              <span className="text-white/60 text-[8px]">N/A</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-white/80 text-xs truncate">
                            {posts[nextIndex]?.writers?.[0]?.writer?.name || "Unknown Author"}
                          </p>
                          <p className="text-white/60 text-xs truncate -mt-0.5">
                            {getInstitution(posts[nextIndex])}
                          </p>
                        </div>
                      </div>
                      <h2 className="text-white text-sm md:text-base font-bold line-clamp-3 mt-2">
                        {posts[nextIndex].title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-1/4 h-[220px] cursor-pointer group"
                onClick={() => goToSlide(secondNextIndex)}
              >
                <div className="relative h-full w-full bg-slate-900 group-hover:bg-slate-800 transition-duration-300">
                  <div className="h-full p-3 flex flex-col justify-between">
                    <div className="text-left">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full overflow-hidden">
                          {posts[secondNextIndex]?.imageUrl ? (
                            <Image
                              src={getWriterImage(posts[secondNextIndex])}
                              alt={`${posts[secondNextIndex]?.writers?.[0]?.writer?.name || "Author"} avatar`}
                              width={20}
                              height={20}
                              className="object-cover"
                              loading="eager"
                            />
                          ) : (
                            <div className="h-full w-full bg-gray-700 flex items-center justify-center">
                              <span className="text-white/60 text-[8px]">N/A</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-white/80 text-xs truncate">
                            {posts[secondNextIndex]?.writers?.[0]?.writer?.name || "Unknown Author"}
                          </p>
                          <p className="text-white/60 text-xs truncate -mt-0.5">
                            {getInstitution(posts[secondNextIndex])}
                          </p>
                        </div>
                      </div>
                      <h2 className="text-white text-sm md:text-base font-bold line-clamp-3 mt-2">
                        {posts[secondNextIndex].title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-1/4 h-[220px] cursor-pointer group"
                onClick={() => goToSlide(thirdNextIndex)}
              >
                <div className="relative h-full w-full bg-slate-900 group-hover:bg-slate-800 transition-duration-300">
                  <div className="h-full p-3 flex flex-col justify-between">
                    <div className="text-left">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full overflow-hidden">
                          {posts[thirdNextIndex]?.imageUrl ? (
                            <Image
                              src={getWriterImage(posts[thirdNextIndex])}
                              alt={`${posts[thirdNextIndex]?.writers?.[0]?.writer?.name || "Author"} avatar`}
                              width={20}
                              height={20}
                              className="object-cover"
                              loading="eager"
                            />
                          ) : (
                            <div className="h-full w-full bg-gray-700 flex items-center justify-center">
                              <span className="text-white/60 text-[8px]">N/A</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-white/80 text-xs truncate">
                            {posts[thirdNextIndex]?.writers?.[0]?.writer?.name || "Unknown Author"}
                          </p>
                          <p className="text-white/60 text-xs truncate -mt-0.5">
                            {getInstitution(posts[thirdNextIndex])}
                          </p>
                        </div>
                      </div>
                      <h2 className="text-white text-sm md:text-base font-bold line-clamp-3 mt-2">
                        {posts[thirdNextIndex].title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-1/4 h-[220px] cursor-pointer group"
                onClick={() => goToSlide(fourthNextIndex)}
              >
                <div className="relative h-full w-full bg-slate-900 group-hover:bg-slate-800 transition-duration-300">
                  <div className="h-full p-3 flex flex-col justify-between">
                    <div className="text-left">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full overflow-hidden">
                          {posts[fourthNextIndex]?.imageUrl ? (
                            <Image
                              src={getWriterImage(posts[fourthNextIndex])}
                              alt={`${posts[fourthNextIndex]?.writers?.[0]?.writer?.name || "Author"} avatar`}
                              width={20}
                              height={20}
                              className="object-cover"
                              loading="eager"
                            />
                          ) : (
                            <div className="h-full w-full bg-gray-700 flex items-center justify-center">
                              <span className="text-white/60 text-[8px]">N/A</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-white/80 text-xs truncate">
                            {posts[fourthNextIndex]?.writers?.[0]?.writer?.name || "Unknown Author"}
                          </p>
                          <p className="text-white/60 text-xs truncate -mt-0.5">
                            {getInstitution(posts[fourthNextIndex])}
                          </p>
                        </div>
                      </div>
                      <h2 className="text-white text-sm md:text-base font-bold line-clamp-3 mt-2">
                        {posts[fourthNextIndex].title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start mt-2 gap-1 px-2 ml-5">
            {posts.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => goToSlide(index)}
                className={`rounded-full focus:outline-none ${index === activeIndex
                  ? "w-2 h-2 bg-blue-500"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}