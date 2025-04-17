"use client"

import type React from "react"

import Header from "@/components/layout/header"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import "locomotive-scroll/dist/locomotive-scroll.css"
import { SidebarProvider, useSidebar } from "@/components/custom/app-sidebar"
import { AppSidebar } from "@/components/custom/app-sidebar"

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { sidebarWidth } = useSidebar()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      ; (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default

          const scroll = new LocomotiveScroll({
            el: scrollRef.current!,
            smooth: true,
            multiplier: 1.0,
            lerp: 0.1,
            getDirection: true,
            smartphone: {
              smooth: true,
              direction: "vertical",
            },
            tablet: {
              smooth: true,
              direction: "vertical",
              breakpoint: 100,
            },
          })

          const resizeObserver = new ResizeObserver(() => {
            scroll?.update()
          })

          if (scrollRef.current) {
            resizeObserver.observe(scrollRef.current)
          }

          return () => {
            scroll?.destroy()
            if (scrollRef.current) resizeObserver.unobserve(scrollRef.current)
          }
        } catch (error) {
          console.error("Failed to initialize scroll:", error)
        }
      })()
    }
  }, [])

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AppSidebar />

      <motion.div
        className="flex-1 flex flex-col h-full relative"
        initial={false}
        animate={{
          width: sidebarWidth === "0" ? "100%" : `calc(100% - ${sidebarWidth})`,
          marginLeft: sidebarWidth,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <div className="sticky top-0 left-0 w-full z-50">
          <Header />
        </div>

        <main
          className="flex-1 overflow-y-auto scroll-smooth hide-scrollbar w-full"
          ref={scrollRef}
          data-scroll-container
        >
          {children}
        </main>
      </motion.div>
    </div>
  )
}

export default function ClientLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <Layout>{children}</Layout>
    </SidebarProvider>
  )
}
