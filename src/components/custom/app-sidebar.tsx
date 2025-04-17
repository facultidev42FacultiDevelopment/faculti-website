"use client";

import React, { useState, useEffect, createContext, useContext, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import {
  Menu,
  Compass,
  BookOpen,
  Info,
  Library,
  ChevronDown,
  HelpCircle,
  FileText,
  Shield,
  Building,
  BriefcaseBusiness,
  Landmark,
  LineChart,
  Ruler,
  FlaskConical,
  Globe,
  ArrowRight,
  Users,
  School,
  Star,
} from "lucide-react";
import { BiSolidHome } from "react-icons/bi";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => { },
  sidebarWidth: "5rem"
});

export const useSidebar = () => useContext(SidebarContext);

const POPULAR_CATEGORIES = [
  { name: "Law", icon: <FileText className="h-4 w-4" />, href: "/categories/law" },
  { name: "Economics", icon: <LineChart className="h-4 w-4" />, href: "/categories/economics" },
  { name: "Finance", icon: <Landmark className="h-4 w-4" />, href: "/categories/finance" },
  { name: "Political Science", icon: <Globe className="h-4 w-4" />, href: "/categories/political-science" },
  { name: "Business", icon: <BriefcaseBusiness className="h-4 w-4" />, href: "/categories/business" },
  { name: "Engineering", icon: <Ruler className="h-4 w-4" />, href: "/categories/engineering" },
  { name: "Science", icon: <FlaskConical className="h-4 w-4" />, href: "/categories/science" },
];

const ALL_CATEGORIES = [
  ...POPULAR_CATEGORIES,
  { name: "Literature", icon: <BookOpen className="h-4 w-4" />, href: "/categories/literature" },
  { name: "History", icon: <FileText className="h-4 w-4" />, href: "/categories/history" },
  { name: "Mathematics", icon: <FileText className="h-4 w-4" />, href: "/categories/mathematics" },
  { name: "Computer Science", icon: <FileText className="h-4 w-4" />, href: "/categories/computer-science" },
  { name: "Philosophy", icon: <FileText className="h-4 w-4" />, href: "/categories/philosophy" },
  { name: "Psychology", icon: <FileText className="h-4 w-4" />, href: "/categories/psychology" },
  { name: "Biology", icon: <FileText className="h-4 w-4" />, href: "/categories/biology" },
  { name: "Chemistry", icon: <FileText className="h-4 w-4" />, href: "/categories/chemistry" },
];

const SUPPORT_LINKS = [
  { name: "For Universities", icon: <School className="h-4 w-4" />, href: "/for-universities" },
  { name: "For Teams", icon: <Users className="h-4 w-4" />, href: "/for-teams" },
  { name: "About", icon: <Info className="h-4 w-4" />, href: "/about" },
  { name: "Helpdesk", icon: <HelpCircle className="h-4 w-4" />, href: "/helpdesk" },
  { name: "Privacy", icon: <Shield className="h-4 w-4" />, href: "/privacy" },
  { name: "Terms", icon: <FileText className="h-4 w-4" />, href: "/terms" },
];

const MAIN_MENU = [
  { name: "Home", icon: <BiSolidHome className="h-5 w-5" />, href: "/" },
];

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [desktopOpen, setDesktopOpen] = useState(false);

  const toggleSidebar = () => setDesktopOpen(!desktopOpen);

  const value = {
    isOpen: desktopOpen,
    toggleSidebar,
    sidebarWidth: desktopOpen ? "16rem" : "0rem"
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export function AppSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [allCategoriesOpen, setAllCategoriesOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  const handleMouseEnter = () => {
    setHoverOpen(true);
  };

  const handleMouseLeave = () => {
    setHoverOpen(false);
    setAllCategoriesOpen(false);
  };

  const toggleAllCategories = () => {
    setAllCategoriesOpen(!allCategoriesOpen);
  };

  const SidebarContent = ({ isDesktop = false }: { isDesktop?: boolean }) => {
    const isCollapsed = isDesktop && !hoverOpen;
    const showAllCategories = allCategoriesOpen && (!isDesktop || !isCollapsed);

    return (
      <div className="flex h-full flex-col bg-secondary text-sidebar-foreground z-50 relative overflow-hidden backdrop-blur-sm">
        <div className={cn(
          "flex h-16 items-center",
          isCollapsed ? "justify-center px-0" : "px-6"
        )}>
          <Link href="/" className="flex items-center gap-2 relative h-10">
            <Image
              src="/faculti_logo.png"
              alt="Faculti Logo"
              width={isCollapsed ? 36 : 32}
              height={isCollapsed ? 36 : 32}
              className="object-contain drop-shadow-md rounded-full"
            />
          </Link>
        </div>

        <div className={cn(
          "flex-1 overflow-auto py-2 transition-all duration-300 hide-scrollbar",
          isCollapsed ? "px-1.5" : "px-5"
        )}>
          <div className={cn(
            "py-2 transition-all duration-300 flex flex-col h-full",
            isCollapsed ? "px-0" : "px-2"
          )}>

            {/* Main Navigation Items */}
            <div className="space-y-2">
              {MAIN_MENU.map((item) => {
                const isActive = item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

                if (isCollapsed) {
                  return (
                    <TooltipProvider key={item.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex justify-center items-center rounded-lg p-2 transition-all",
                              "hover:bg-secondary/40 w-full group",
                              isActive
                                ? "bg-secondary-foreground/5"
                                : "bg-transparent"
                            )}
                          >
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                              className={cn(
                                "rounded-md p-2 transition-all duration-300",
                                isActive
                                  ? "bg-destructive text-primary-foreground shadow-md shadow-primary/20"
                                  : "bg-secondary/60 text-sidebar-foreground/70 group-hover:bg-secondary/80 group-hover:text-sidebar-foreground/90"
                              )}
                            >
                              {item.icon}
                            </motion.span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="bg-popover/90 backdrop-blur-lg border-sidebar-border shadow-lg"
                        >
                          {item.name}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-5 rounded-lg py-3 px-3 transition-all group",
                      "hover:bg-secondary/20",
                      isActive
                        ? "bg-destructive/10"
                        : "bg-transparent"
                    )}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "rounded-md p-2 transition-all duration-300",
                        isActive
                          ? "bg-destructive text-primary-foreground shadow-md shadow-primary/20"
                          : "bg-secondary/60 text-sidebar-foreground/70 group-hover:bg-secondary/80 group-hover:text-sidebar-foreground/90"
                      )}
                    >
                      {item.icon}
                    </motion.span>
                    <span className={cn(
                      "font-medium transition-colors duration-200",
                      isActive
                        ? "font-semibold text-white"
                        : "font-medium text-sidebar-foreground/80 group-hover:text-sidebar-foreground/95"
                    )}>
                      {item.name}
                    </span>

                    {isActive && (
                      <motion.div
                        className="absolute right-0 w-1 h-8 bg-destructive rounded-l-md"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Categories Section */}
            <div className={cn(
              "mt-6",
              isCollapsed ? "px-0" : ""
            )}>
              {!isCollapsed && (
                <div className="text-xs font-semibold text-sidebar-foreground/50 mb-2 uppercase">
                  Categories
                </div>
              )}

              {/* All Categories Button */}
              <button
                onClick={toggleAllCategories}
                className={cn(
                  "flex items-center w-full transition-all",
                  isCollapsed ? "justify-center p-2" : "justify-between py-1.5 px-3 rounded-md text-sm",
                  "hover:bg-secondary/20 text-sidebar-foreground/70 hover:text-sidebar-foreground/90"
                )}
              >
                {isCollapsed ? (
                  <Compass className="h-4 w-4" />
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <Compass className="h-4 w-4" />
                      <span>All Categories</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        allCategoriesOpen ? "rotate-180" : ""
                      )}
                    />
                  </>
                )}
              </button>

              {/* All Categories Dropdown */}
              {showAllCategories && (
                <div className="pl-8 mt-1 space-y-1 border-l border-secondary/20 ml-4">
                  {ALL_CATEGORIES.map((category) => {
                    const isCategoryActive = pathname === category.href || pathname.startsWith(`${category.href}/`);

                    return (
                      <Link
                        key={category.name}
                        href={category.href}
                        className={cn(
                          "flex items-center gap-2 py-1 px-2 rounded-md text-xs transition-all",
                          "hover:bg-secondary/20",
                          isCategoryActive
                            ? "text-white bg-secondary/20"
                            : "text-sidebar-foreground/70"
                        )}
                      >
                        {category.icon}
                        <span>{category.name}</span>
                      </Link>
                    );
                  })}
                  <Link
                    href="/categories"
                    className="flex items-center gap-2 py-1 px-2 text-xs text-primary hover:underline mt-1"
                  >
                    <span>View all categories</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}

              {/* Popular Categories Section */}
              {!isCollapsed && (
                <div className="text-xs font-semibold text-sidebar-foreground/50 mt-4 mb-2 uppercase">
                  Popular Categories
                </div>
              )}

              {isCollapsed ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex justify-center items-center rounded-lg p-2 transition-all w-full">
                        <Star className="h-4 w-4 text-sidebar-foreground/70 hover:text-sidebar-foreground/90" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="bg-popover/90 backdrop-blur-lg border-sidebar-border shadow-lg"
                    >
                      Popular Categories
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <div className="space-y-1 mt-2">
                  {POPULAR_CATEGORIES.map((category) => {
                    const isCategoryActive = pathname === category.href || pathname.startsWith(`${category.href}/`);

                    return (
                      <Link
                        key={category.name}
                        href={category.href}
                        className={cn(
                          "flex items-center gap-3 py-1.5 px-3 rounded-md text-sm transition-all",
                          "hover:bg-secondary/20",
                          isCategoryActive
                            ? "text-white bg-secondary/20"
                            : "text-sidebar-foreground/70"
                        )}
                      >
                        {category.icon}
                        <span>{category.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Institutions Section */}
            <div className={cn(
              "mt-6",
              isCollapsed ? "px-0" : ""
            )}>
              {isCollapsed ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/institutions"
                        className="flex justify-center items-center rounded-lg p-2 transition-all hover:bg-secondary/40 w-full"
                      >
                        <Building className="h-4 w-4 text-sidebar-foreground/70 hover:text-sidebar-foreground/90" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="bg-popover/90 backdrop-blur-lg border-sidebar-border shadow-lg"
                    >
                      Institutions
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Link
                  href="/institutions"
                  className="flex items-center gap-3 py-1.5 px-3 rounded-md text-sm transition-all hover:bg-secondary/20 text-sidebar-foreground/70 hover:text-sidebar-foreground/90"
                >
                  <Building className="h-4 w-4" />
                  <span>Institutions</span>
                </Link>
              )}
            </div>

            {/* Knowledge Base Section */}
            <div className={cn(
              "mt-2",
              isCollapsed ? "px-0" : ""
            )}>
              {isCollapsed ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/knowledge-base"
                        className="flex justify-center items-center rounded-lg p-2 transition-all hover:bg-secondary/40 w-full"
                      >
                        <Library className="h-4 w-4 text-sidebar-foreground/70 hover:text-sidebar-foreground/90" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="bg-popover/90 backdrop-blur-lg border-sidebar-border shadow-lg"
                    >
                      Knowledge Base
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Link
                  href="/knowledge-base"
                  className="flex items-center gap-3 py-1.5 px-3 rounded-md text-sm transition-all hover:bg-secondary/20 text-sidebar-foreground/70 hover:text-sidebar-foreground/90"
                >
                  <Library className="h-4 w-4" />
                  <span>Knowledge Base</span>
                  <sup className="text-xs text-primary">Beta</sup>
                </Link>
              )}
            </div>

            {/* Support Links with Solutions incorporated */}
            {isCollapsed ? (
              <div className="mt-auto pt-4 flex flex-col-reverse space-y-reverse space-y-1 px-0">
                {SUPPORT_LINKS.map((link) => {
                  const isLinkActive = pathname === link.href;
                  return (
                    <TooltipProvider key={link.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={link.href}
                            className={cn(
                              "flex justify-center items-center rounded-lg p-1.5 transition-all",
                              "hover:bg-secondary/40 w-full",
                              isLinkActive
                                ? "bg-secondary-foreground/5"
                                : "bg-transparent"
                            )}
                          >
                            <span className={cn(
                              "transition-all duration-300",
                              isLinkActive
                                ? "text-primary-foreground"
                                : "text-sidebar-foreground/50 hover:text-sidebar-foreground/80"
                            )}>
                              {link.icon}
                            </span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className="bg-popover/90 backdrop-blur-lg border-sidebar-border shadow-lg"
                        >
                          {link.name}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            ) : (
              <div className={cn("mt-10")}>
                <div className="text-xs font-semibold text-sidebar-foreground/50 uppercase">
                  Support
                </div>
                <div className="space-y-1">
                  {SUPPORT_LINKS.map((link) => {
                    const isLinkActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 py-1.5 px-3 rounded-md text-sm transition-all",
                          "hover:text-sidebar-foreground/90",
                          isLinkActive
                            ? "text-white"
                            : "text-sidebar-foreground/60"
                        )}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Copyright notice */}
                <div className="mt-4 px-3 py-2 text-xs text-sidebar-foreground/40 text-center">
                  Copyright Faculti 2013-2025. All Rights Reserved.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        ref={sidebarRef}
        className="hidden md:block h-screen overflow-hidden border-r border-sidebar-border bg-sidebar shadow-xl shadow-background/10 z-50 relative transition-all duration-300 ease-in-out"
        style={{ width: hoverOpen ? "16rem" : "5rem" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SidebarContent isDesktop={true} />
      </div>

      <div className="md:hidden fixed top-3 left-4 z-40">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-md border border-sidebar-border shadow-lg hover:bg-background/90 transition-all duration-200"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 border-r-0 w-[300px] bg-sidebar shadow-2xl overflow-hidden"
          >
            <VisuallyHidden asChild>
              <h2>Navigation Menu</h2>
            </VisuallyHidden>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}