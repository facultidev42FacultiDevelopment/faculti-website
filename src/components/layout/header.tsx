"use client";

import React from "react";
import SearchBar from "@/components/layout/search-bar";

export default function Header() {
    return (
        <div className="sticky top-0 z-20 w-full bg-background/80 backdrop-blur-md pb-4">
            <div className="flex flex-col gap-4 mt-8">
                <SearchBar />
            </div>
        </div>
    );
}