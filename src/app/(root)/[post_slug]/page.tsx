import { headers } from 'next/headers';
import { Metadata, ResolvingMetadata } from 'next/types';
import { PostResponse } from '@/app/api/v1/posts/types';
import VideoPlayer from '@/components/layout/video-page/video-player';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BookOpen, FileText } from 'lucide-react';
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import TranscriptAndNoteTab from '@/components/layout/video-page/tabs';

async function getBaseUrl() {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    return "https://0gzmmx2m-4000.uks1.devtunnels.ms";
}

async function fetchPostBySlug(slug: string): Promise<PostResponse> {
    try {
        const baseUrl = await getBaseUrl();
        const response = await fetch(`${baseUrl}/api/v1/posts/by-slug?slug=${encodeURIComponent(slug)}`, {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch post with slug '${slug}': ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching post with slug '${slug}':`, error);
        throw error;
    }
}

function cleanContent(content: string | null): string {
    if (!content) return "";

    let cleaned = content.replace(/<[^>]*>/g, "");
    cleaned = cleaned.replace(/https?:\/\/[^\s]+|vimeo\.com\/[^\s]+/g, "");
    cleaned = cleaned.replace(/\s+/g, " ").trim();
    return cleaned.length > 160 ? cleaned.substring(0, 157) + "..." : cleaned;
}

export async function generateMetadata(
    { params }: { params: Promise<{ post_slug: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    try {
        const { post_slug } = await params;
        const post = await fetchPostBySlug(post_slug);

        const previousImages = (await parent).openGraph?.images || [];

        const categories = post.categories?.map(cat => cat.category.name) || [];
        const tags = post.tags?.map(tag => tag.tag.name) || [];
        const keywords = [...categories, ...tags];

        const author = post.writers?.[0]?.writer?.name || post.author?.name || "Faculti";
        const description = cleanContent(post.content || post.excerpt);
        const baseUrl = await getBaseUrl();

        return {
            title: post.title,
            description: description,
            keywords: keywords,
            authors: [{ name: author }],
            openGraph: {
                title: post.title,
                description: description,
                url: `${baseUrl}/${post_slug}`,
                siteName: "Faculti",
                images: post.imageUrl
                    ? [post.imageUrl, ...previousImages]
                    : previousImages,
                locale: "en_US",
                type: "video.other",
                videos: post.vimeoVideoId
                    ? [{
                        url: `https://vimeo.com/${post.vimeoVideoId}`,
                        type: "text/html",
                    }]
                    : undefined,
            },
            twitter: {
                card: "summary_large_image",
                title: post.title,
                description: description,
                creator: author,
                images: post.imageUrl ? [post.imageUrl] : undefined,
            },
            alternates: {
                canonical: `${baseUrl}/${post_slug}`,
            },
            formatDetection: {
                telephone: false,
            },
            category: categories.length > 0 ? categories[0] : "Video",
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: "Video - Faculti",
            description: "Academic video content from Faculti",
        };
    }
}

export default async function VideoPage({ params }: { params: Promise<{ post_slug: string }> }) {
    try {
        const { post_slug } = await params;
        const postDetails = await fetchPostBySlug(post_slug);

        postDetails.vimeoVideoId = "1070054231";

        return (
            <div className="w-full flex justify-center mb-16">
                <div className="w-[80%] flex flex-col md:flex-row gap-6">

                    <div className="w-full md:w-[60%]">
                        <VideoPlayer post={postDetails} />
                    </div>

                    <div className="w-full md:w-[40%]">
                        <TranscriptAndNoteTab post={postDetails} />
                    </div>

                </div>
            </div>
        );
    } catch (error) {
        console.error("Error rendering video page:", error);
        notFound();
    }
}