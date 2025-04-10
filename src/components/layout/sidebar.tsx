"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Menu,
    Compass,
    BookOpen,
    Info,
    GraduationCap,
    Library
} from "lucide-react";
import { BiSolidHome } from "react-icons/bi";

type IconMapType = {
    [key: string]: React.ReactNode;
};

const getNavIcon = (name: string): React.ReactNode => {
    const iconMap: IconMapType = {
        "Home": <BiSolidHome className="h-5 w-5" />,
        "Categories": <Compass className="h-5 w-5" />,
        "Institutions": <GraduationCap className="h-5 w-5" />,
        "About": <Info className="h-5 w-5" />,
        "Library": <Library className="h-5 w-5" />,
        "Resources": <BookOpen className="h-5 w-5" />,
    };

    return iconMap[name] || <Compass className="h-5 w-5" />;
};

export function Sidebar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);

        const handleResize = () => window.innerWidth >= 768 && setOpen(false);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [pathname]);

    const SidebarContent = () => (
        <div className="flex h-full flex-col text-sidebar-foreground">
            {/* Logo - AMPLIFIED */}
            <div className="flex h-16 items-center px-6 m-5">
                <Link href="/" className="text-2xl font-serif text-white font-semibold">
                    Faculti
                </Link>
            </div>

            <div className="flex-1 overflow-auto py-2 m-5">
                <div className="px-4 py-2">
                    <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground ">
                        MENU
                    </h2>
                    <div className="space-y-1 px-1">
                        {navigationItems.map((item) => (
                            <div>
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-5 rounded-lg py-3 transition-all",
                                        "hover:text-accent-foreground",
                                        pathname === item.href
                                            ? "text-primary-foreground"
                                            : "text-sidebar-foreground"
                                    )}
                                >

                                    <span className={cn(
                                        "rounded-md p-2",
                                        pathname === item.href
                                            ? "bg-secondary-foreground"
                                            : "bg-secondary text-gray-400"
                                    )}>
                                        {getNavIcon(item.name)}
                                    </span>

                                    <span className={cn(pathname === item.href ? "font-semibold text-white " : "font-medium text-gray-400")}>{item.name}</span>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>

            </div>
        </div >
    );

    return (
        <>
            <div className="hidden md:flex md:w-64 lg:w-72 fixed top-0 bottom-0 left-0 z-30 ">
                <SidebarContent />
            </div>

            <div className="md:hidden fixed top-4 left-4 z-40">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 border-r-0 w-[300px] bg-[#0B0B13]">
                        <SidebarContent />
                    </SheetContent>
                </Sheet>
            </div>

            <div className="hidden md:block md:w-64 lg:w-72" />
        </>
    );
}