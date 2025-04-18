"use client";

import { PostResponse } from "@/app/api/v1/posts/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ArrowRightCircleIcon, BookOpen, FileText } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import VideoTranscript, { VideoTranscriptHandle } from "./transcript";
import { Question } from "@/lib/vimeo/types";
import VideoNotes from "./video-notes";

interface TranscriptAndNoteTabProps {
    post: PostResponse;
}

interface QuestionsResponse {
    videoId: string;
    questions: Question[];
    generatedAt: string;
}

export default function TranscriptAndNoteTab({ post }: TranscriptAndNoteTabProps) {
    const [activeTab, setActiveTab] = useState("transcript");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isHighlighting, setIsHighlighting] = useState(false);
    const transcriptRef = useRef<VideoTranscriptHandle>(null);

    const formatText = useCallback((text: string): React.ReactNode => {
        if (!text) return null;
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return <span key={index}>{part}</span>;
        });
    }, []);

    const handleQuestionClick = useCallback((question: Question) => {
        if (isHighlighting) return;

        setIsHighlighting(true);

        setActiveTab("transcript");

        setTimeout(() => {
            if (transcriptRef.current) {
                transcriptRef.current.highlightSegment(question.index);

                setTimeout(() => {
                    setIsHighlighting(false);
                }, 500);
            } else {
                setIsHighlighting(false);
            }
        }, 50);
    }, [isHighlighting]);

    useEffect(() => {
        const fetchQuestions = async () => {
            if (!post.vimeoVideoId) return;

            try {
                const res = await fetch(`/api/v1/vimeo/ai/transcript-questions?videoId=${post.vimeoVideoId}`);
                if (res.ok) {
                    const data: QuestionsResponse = await res.json();
                    setQuestions(data.questions || []);
                }
            } catch (error) {
                console.error("Failed to fetch transcript questions:", error);
            }
        };

        fetchQuestions();
    }, [post.vimeoVideoId]);

    return (
        <div className="py-4 md:py-6 w-full h-full flex flex-col">
            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="flex flex-col h-full"
                orientation="vertical"
            >
                <div className="mb-4">
                    <div className="relative mb-4">
                    </div>
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="transcript" className="flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Transcript
                        </TabsTrigger>
                        <TabsTrigger value="notes" className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Reference
                        </TabsTrigger>
                    </TabsList>
                </div>
                <div className="flex-1 overflow-hidden">
                    <TabsContent
                        value="transcript"
                        className="m-0 h-full flex-1 data-[state=active]:flex data-[state=active]:flex-col"
                    >
                        {questions.length > 0 && (
                            <div className="space-y-2 mb-4">
                                {questions.map((question, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "relative group p-4 bg-accent/5 rounded-md border border-accent/20 cursor-pointer transition-all",
                                            "hover:bg-accent/10 hover:border-blue-800",
                                            isHighlighting && "pointer-events-none opacity-80"
                                        )}
                                        onClick={() => handleQuestionClick(question)}
                                    >
                                        <ArrowRightCircleIcon className="absolute top-4 right-3 w-5 h-5 text-blue-800" />
                                        <p className="text-sm leading-relaxed font-medium break-words pr-8">
                                            {formatText(question.question)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="h-full w-full overflow-hidden">
                            <VideoTranscript ref={transcriptRef} post={post} />
                        </div>
                    </TabsContent>
                    <TabsContent
                        value="notes"
                        className="m-0 h-full flex-1 data-[state=active]:flex data-[state=active]:flex-col"
                    >
                        <div className="h-full w-full overflow-hidden p-4 bg-card rounded-lg border shadow-sm">

                            <VideoNotes post={post} />

                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}