"use client";

import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, Clock, Eye } from 'lucide-react';

interface Author {
    name: string;
    institution: string;
    avatar: string;
}

interface ResearchSlide {
    id: number;
    title: string;
    description: string;
    author: Author;
    background: string;
    image: string;
    views: string;
    timePosted: string;
    duration: string;
}

const RESEARCH_SLIDES: ResearchSlide[] = [
    {
        id: 1,
        title: "Clinical Supervision: A Competency-Based Approach",
        description: "What is clinical supervision and why is it important for mental health professionals?",
        author: {
            name: "Edward Shafranske",
            institution: "Pepperdine University",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        background: "bg-blue-800",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "53K",
        timePosted: "2 weeks ago",
        duration: "35 min"
    },
    {
        id: 2,
        title: "Tackling Tax Evasion Via Ghost Firms: Insights From Ecuador",
        description: "How do ghost firms contribute to tax evasion, and what can we learn from Ecuador's tax data?",
        author: {
            name: "Paul Carrillo",
            institution: "George Washington University",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        background: "bg-cyan-800",
        image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "42K",
        timePosted: "3 weeks ago",
        duration: "28 min"
    },
    {
        id: 3,
        title: "Industry-Mix, Local Labor Markets, And The Resilience Of Trade Shocks",
        description: "How does industry composition affect a region's ability to withstand economic trade shocks?",
        author: {
            name: "Mateus Yi",
            institution: "U.S Census Bureau",
            avatar: "https://randomuser.me/api/portraits/men/67.jpg"
        },
        background: "bg-indigo-800",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "38K",
        timePosted: "1 month ago",
        duration: "42 min"
    },
    {
        id: 4,
        title: "Digital Platforms And Labor Market Inequality",
        description: "How are digital platforms reshaping workforce dynamics and contributing to economic disparities?",
        author: {
            name: "Alex Rivera",
            institution: "MIT Economics",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        background: "bg-purple-800",
        image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "65K",
        timePosted: "2 weeks ago",
        duration: "31 min"
    },
    {
        id: 5,
        title: "Climate Change Adaptation Strategies In Urban Planning",
        description: "What innovative approaches are cities implementing to enhance resilience against climate impacts?",
        author: {
            name: "Sandra Chen",
            institution: "Columbia University",
            avatar: "https://randomuser.me/api/portraits/women/28.jpg"
        },
        background: "bg-emerald-800",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        views: "47K",
        timePosted: "4 weeks ago",
        duration: "39 min"
    }
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [sliding, setSliding] = useState<boolean>(false);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [touchStart, setTouchStart] = useState<number>(0);
    const [touchEnd, setTouchEnd] = useState<number>(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const slideRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [activeIndex, isPaused]);

    const startAutoSlide = (): void => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        if (!isPaused) {
            intervalRef.current = setTimeout(() => {
                handleNext();
            }, 5000);
        }
    };
    const pauseAutoSlide = (): void => {
        setIsPaused(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const resumeAutoSlide = (): void => {
        setIsPaused(false);
        startAutoSlide();
    };

    const handleNext = (): void => {
        if (sliding) return;

        setSliding(true);
        setDirection('next');

        setActiveIndex((prevIndex: number) => {
            const newIndex = (prevIndex + 1) % RESEARCH_SLIDES.length;
            return newIndex;
        });

        setTimeout(() => {
            setSliding(false);
        }, 600);
    };

    const handlePrev = (): void => {
        if (sliding) return;

        setSliding(true);
        setDirection('prev');

        setActiveIndex((prevIndex: number) => {
            const newIndex = prevIndex === 0 ? RESEARCH_SLIDES.length - 1 : prevIndex - 1;
            return newIndex;
        });

        setTimeout(() => {
            setSliding(false);
        }, 600);
    };

    const goToSlide = (index: number): void => {
        if (sliding || index === activeIndex) return;

        setSliding(true);
        setDirection(index > activeIndex ? 'next' : 'prev');
        setActiveIndex(index);

        setTimeout(() => {
            setSliding(false);
        }, 600);
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
        pauseAutoSlide();
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (): void => {
        if (touchStart - touchEnd > 75) {
            handleNext();
        } else if (touchStart - touchEnd < -75) {
            handlePrev();
        }
        setTouchStart(0);
        setTouchEnd(0);
        resumeAutoSlide();
    };

    const errorHandler = (error: Error) => {
        console.error("SLIDER ERROR DETECTED:", error);
        return (
            <div className="w-full h-64 bg-red-900 text-white flex items-center justify-center rounded-lg p-4">
                <p>Error loading research content. Please try refreshing the page.</p>
            </div>
        );
    };

    try {
        return (
            <div
                className="w-full overflow-hidden py-4 sm:py-6 px-3 sm:px-4 md:px-8 lg:px-12"
                onMouseEnter={pauseAutoSlide}
                onMouseLeave={resumeAutoSlide}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-1 sm:px-2">Research</h1>


                <div className="mb-4 sm:mb-6 flex flex-wrap gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-1">
                    <span className="text-white opacity-90 text-xs sm:text-sm border-b-2 border-white py-1 cursor-pointer whitespace-nowrap">Professional</span>
                    <span className="text-white opacity-60 text-xs sm:text-sm py-1 cursor-pointer hover:opacity-80 whitespace-nowrap">Social Sciences</span>
                    <span className="text-white opacity-60 text-xs sm:text-sm py-1 cursor-pointer hover:opacity-80 whitespace-nowrap">Sciences</span>
                    <span className="text-white opacity-60 text-xs sm:text-sm py-1 cursor-pointer hover:opacity-80 whitespace-nowrap">Arts and Humanities</span>
                </div>


                <div
                    className="relative w-full h-auto"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >

                    <div className="flex items-stretch gap-2 sm:gap-4 transition-transform duration-600 ease-in-out">
                        {RESEARCH_SLIDES.map((slide, index) => {

                            let width = 'w-full md:w-3/4';
                            let height = 'h-auto aspect-[16/9] sm:aspect-[21/9]';
                            let opacity = 'opacity-100';
                            let scale = 'scale-100';
                            let zIndex = 10;
                            let transform = 'translate-x-0';


                            if (index !== activeIndex) {
                                width = 'w-0 md:w-1/5';
                                opacity = 'opacity-40';
                                scale = 'scale-95';
                                zIndex = 5;
                            }

                            if (sliding) {
                                if (direction === 'next') {
                                    if (index === activeIndex) {
                                        transform = 'translate-x-0';
                                        opacity = 'opacity-100';
                                    } else if (index === ((activeIndex - 1 + RESEARCH_SLIDES.length) % RESEARCH_SLIDES.length)) {
                                        transform = '-translate-x-full';
                                        opacity = 'opacity-0';
                                    }
                                } else if (direction === 'prev') {
                                    if (index === activeIndex) {
                                        transform = 'translate-x-0';
                                        opacity = 'opacity-100';
                                    } else if (index === ((activeIndex + 1) % RESEARCH_SLIDES.length)) {
                                        transform = 'translate-x-full';
                                        opacity = 'opacity-0';
                                    }
                                }
                            }

                            return (
                                <div
                                    key={slide.id}

                                    ref={(el) => { slideRef.current[index] = el; }}
                                    className={`
                                        relative flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden
                                        ${width} ${height} ${opacity} ${scale} ${transform}
                                        transition-all duration-600 ease-in-out cursor-pointer
                                        shadow-lg
                                    `}
                                    style={{ zIndex }}
                                    onClick={() => index !== activeIndex && goToSlide(index)}
                                >

                                    <div className={`absolute inset-0 ${slide.background} bg-opacity-80`}></div>


                                    <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-between z-10">
                                        <div className="flex flex-col md:flex-row items-start gap-2 sm:gap-4 w-full">

                                            {index === activeIndex && (
                                                <div className="hidden md:block md:w-1/3 lg:w-1/4 h-full">
                                                    <img
                                                        src={slide.author.avatar}
                                                        alt={slide.author.name}
                                                        className="w-12 h-12 lg:w-16 lg:h-16 object-cover rounded-full mb-2"
                                                    />
                                                    <h3 className="text-white text-base lg:text-lg font-semibold">{slide.author.name}</h3>
                                                    <p className="text-white text-xs sm:text-sm opacity-80">{slide.author.institution}</p>
                                                </div>
                                            )}

                                            <div className={`${index === activeIndex ? 'md:w-2/3 lg:w-3/4' : 'w-full'}`}>

                                                {index === activeIndex && (
                                                    <div className="md:hidden flex items-center gap-2 mb-2 sm:mb-3">
                                                        <img
                                                            src={slide.author.avatar}
                                                            alt={slide.author.name}
                                                            className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                                                        />
                                                        <div>
                                                            <h3 className="text-white text-sm sm:text-base font-semibold">{slide.author.name}</h3>
                                                            <p className="text-white text-xs opacity-80">{slide.author.institution}</p>
                                                        </div>
                                                    </div>
                                                )}


                                                <h2 className={`text-white font-bold ${index === activeIndex
                                                    ? 'text-lg sm:text-xl md:text-2xl'
                                                    : 'text-sm sm:text-base truncate'}`}
                                                >
                                                    {slide.title}
                                                </h2>


                                                {index === activeIndex && (
                                                    <p className="text-white opacity-80 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3">
                                                        {slide.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>


                                        <div className="flex items-center justify-between mt-2 sm:mt-3">
                                            <div className="flex items-center gap-2 sm:gap-4">
                                                <div className="flex items-center text-white text-xs opacity-80">
                                                    <Eye className="w-3 h-3 mr-1" />
                                                    <span>{slide.views}</span>
                                                </div>
                                                <div className="hidden sm:flex items-center text-white text-xs opacity-80">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    <span>{slide.timePosted}</span>
                                                </div>
                                            </div>

                                            {index === activeIndex && (
                                                <div className="bg-black bg-opacity-40 text-white text-xs px-2 py-1 rounded">
                                                    {slide.duration}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    <button
                        className="absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 z-20 hover:bg-opacity-70 focus:outline-none"
                        onClick={handlePrev}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>

                    <button
                        className="absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 z-20 hover:bg-opacity-70 focus:outline-none"
                        onClick={handleNext}
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>


                    <div className="flex justify-center mt-3 sm:mt-4 gap-1 sm:gap-2">
                        {RESEARCH_SLIDES.map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'w-6 sm:w-8 bg-white'
                                    : 'w-1.5 sm:w-2 bg-white bg-opacity-40 hover:bg-opacity-60'
                                    }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        return errorHandler(error as Error);
    }
}