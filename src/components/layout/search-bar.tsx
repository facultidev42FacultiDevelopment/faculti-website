"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetClose
} from "@/components/ui/sheet";

type FilterOption = {
    id: string;
    label: string;
};

const filterOptions: FilterOption[] = [
    { id: "video", label: "Videos" },
    { id: "institute", label: "Institutions" },
    { id: "academic", label: "Academics" },
    { id: "topic", label: "Topics" },
    { id: "research", label: "Research Papers" },
    { id: "course", label: "Courses" },
];

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const sheetRef = useRef(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const checkScreenSize = () => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                setIsSmallScreen(window.innerWidth < 640);
            }, 100);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize, { passive: true });

        return () => {
            window.removeEventListener('resize', checkScreenSize);
            clearTimeout(timeoutId);
        };
    }, []);

    const toggleFilter = (filterId: string) => {
        setActiveFilters((prev) =>
            prev.includes(filterId)
                ? prev.filter((id) => id !== filterId)
                : [...prev, filterId]
        );
    };

    const removeFilter = (filterId: string, e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        setActiveFilters((prev) => prev.filter((id) => id !== filterId));
    };

    const clearAllFilters = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        setActiveFilters([]);
    };

    const visibleFilters = isSmallScreen ? activeFilters.slice(0, 2) : activeFilters;
    const hiddenFiltersCount = isSmallScreen ? activeFilters.length - visibleFilters.length : 0;

    const handleBadgeClick = (filterId: string) => {
        removeFilter(filterId);
    };

    const renderFilterButton = () => {
        if (!isSmallScreen) {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className={cn(
                                "bg-secondary/30 border-secondary hover:bg-accent h-full w-[50px] relative",
                                activeFilters.length > 0 && "border-primary text-primary"
                            )}
                        >
                            <Filter className="h-5 w-5" />
                            {activeFilters.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                                    {activeFilters.length}
                                </span>
                            )}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        {filterOptions.map((option) => (
                            <DropdownMenuCheckboxItem
                                key={option.id}
                                checked={activeFilters.includes(option.id)}
                                onCheckedChange={() => toggleFilter(option.id)}
                            >
                                {option.label}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }

        return (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "bg-secondary/30 border-secondary hover:bg-accent h-full w-[50px] relative",
                            activeFilters.length > 0 && "border-primary text-primary"
                        )}
                    >
                        <Filter className="h-5 w-5" />
                        {activeFilters.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                                {activeFilters.length}
                            </span>
                        )}
                    </Button>
                </SheetTrigger>
                <SheetContent
                    ref={sheetRef}
                    side="bottom"
                    className="pt-6 rounded-t-2xl px-4 sm:px-6 pb-8 max-h-[85vh] overflow-auto"
                >
                    <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-6"></div>
                    <SheetHeader>
                        <SheetTitle className="text-center text-xl">Filter Content</SheetTitle>
                        <SheetDescription className="text-center">
                            Select filters to narrow your search results
                        </SheetDescription>
                    </SheetHeader>
                    <div className="py-6 grid grid-cols-2 gap-4">
                        {filterOptions.map((option) => (
                            <div
                                key={option.id}
                                className={cn(
                                    "border rounded-xl p-4 flex justify-center items-center cursor-pointer transition-all shadow-sm",
                                    activeFilters.includes(option.id)
                                        ? "bg-primary/20 border-primary"
                                        : "bg-secondary/20 border-secondary"
                                )}
                                onClick={() => toggleFilter(option.id)}
                            >
                                {option.label}
                                {activeFilters.includes(option.id) && (
                                    <X
                                        className="ml-2 h-3 w-3 cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFilter(option.id, e);
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <SheetFooter className="flex-row justify-center space-x-4 mt-4">
                        <SheetClose asChild>
                            <Button
                                variant="outline"
                                onClick={(e) => clearAllFilters(e)}
                                className="w-full sm:w-auto"
                                disabled={activeFilters.length === 0}
                            >
                                Clear All
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button variant="default" className="w-full sm:w-auto">
                                Apply Filters
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        );
    };

    return (
        <div className="w-full flex flex-col items-start gap-3 mb-6 sm:mb-8 mx-auto px-3 sm:px-5 md:px-0 max-w-full sm:max-w-[600px]">
            {/* Search Bar Container */}
            <div className="flex gap-2 w-full h-[46px] sm:h-[50px]">
                {/* Search Input */}
                <div className="relative flex-1 flex items-start justify-start">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="pl-9 pr-10 bg-foreground/10 h-full rounded-md"
                    />
                    {query && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground hover:text-foreground"
                            onClick={() => setQuery("")}
                            type="button"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    )}
                </div>


                {renderFilterButton()}
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 w-full mt-2">
                    {visibleFilters.map((filterId) => {
                        const filter = filterOptions.find((f) => f.id === filterId);
                        return (
                            <Badge
                                key={filterId}
                                variant="secondary"
                                className="px-2 py-1 bg-primary/20 text-primary-foreground hover:bg-primary/30 flex items-center text-xs sm:text-sm cursor-pointer"
                                onClick={() => handleBadgeClick(filterId)}
                            >
                                {filter?.label}
                                <X
                                    className="ml-1 h-3 w-3 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFilter(filterId, e);
                                    }}
                                />
                            </Badge>
                        );
                    })}

                    {hiddenFiltersCount > 0 && (
                        <Badge
                            variant="outline"
                            className="px-2 py-1 bg-secondary/20 text-secondary-foreground flex items-center text-xs cursor-pointer"
                            onClick={() => setIsSheetOpen(true)}
                        >
                            +{hiddenFiltersCount} more
                        </Badge>
                    )}

                    {activeFilters.length > 1 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs h-6 px-2 text-muted-foreground hover:text-foreground ml-auto"
                            onClick={(e) => clearAllFilters(e)}
                            type="button"
                        >
                            Clear all
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}