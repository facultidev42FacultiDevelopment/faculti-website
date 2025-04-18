'use client';

import Image from "next/image";
import { PostResponse } from "@/app/api/v1/posts/types";
import { cn } from "@/lib/utils";

interface PostCardProps {
    post: PostResponse;
    className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
    const stripHtmlTags = (html: string | null) => {
        if (!html) return "";
        return html.replace(/<[^>]*>/g, "");
    };

    const getInstitution = (post: PostResponse) => {
        return post.institutions && post.institutions.length > 0
            ? post.institutions[0].institution.name
            : "Uncategorized";
    };

    return (
        <div className={cn("group flex flex-col h-full cursor-pointer", className)} onClick={() => window.location.href = `/${post.slug}`}>
            <div className="bg-card h-full flex flex-col overflow-hidden hover:shadow-md transition-all border border-border/10">
                <div className="relative">
                    <div className="aspect-[16/9] overflow-hidden">
                        <Image
                            src={`https://faculti.net/${post.imageUrl}`}
                            alt={post.title}
                            loading="lazy"
                            width={400}
                            height={225}
                            className="w-full h-full object-fit transition-all duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className="p-2 flex flex-col flex-grow">
                    <h3 className="text-xs font-medium text-foreground/80 line-clamp-1">
                        {getInstitution(post)}
                    </h3>
                    <h2 className="text-sm font-bold text-foreground my-1 line-clamp-2">
                        {post.title}
                    </h2>
                    <div className="text-xs text-foreground/60 line-clamp-2">
                        {post.writers.length > 0 ? stripHtmlTags(post.writers[0].writer.name) : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}