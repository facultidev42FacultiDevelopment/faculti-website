

/**
 * Represents a single chunk of a transcript with timing information
 */
export interface TranscriptChunk {
    id: string;
    startTime: number;
    endTime: number;
    text: string;
    formattedTime: string;
}

/**
 * Represents a complete transcript with all chunks and formatted text
 */
export interface Transcript {
    videoId: string;
    chunks: TranscriptChunk[];
    fullText: string;
    formattedText: string;
}

/**
 * Enhanced transcript with AI-generated features
 */
export interface EnhancedTranscript extends Transcript {
    summary: string;
    keyPoints: string;
    keyQuotes: string;
    similarArticles: string;
    chapters: string;
    questions: Question[];
}

/**
 * Represents a question generated from the transcript
 */
export interface Question {
    question: string;
    index: string;
}

/**
 * Basic video metadata
 */
export interface VideoMetadata {
    id: string;
    title: string;
    description: string;
    thumbnailUrl?: string;
}

/**
 * Text track information from Vimeo API
 */
export interface TextTrack {
    uri: string;
    active: boolean;
    type: string;
    language: string;
    link: string;
    id: number;
    name: string;
}

/**
 * Combined video information
 */
export interface VideoInfo {
    metadata: VideoMetadata;
    transcript?: Transcript;
}

/**
 * Configuration for the transcript processor
 */
export interface TranscriptProcessorConfig {
    chunkingThreshold?: number; // Time in seconds (default: 30)
    chunkGroupSize?: number; // Number of chunks to group for chapters (default: 3)
    removeFillerWords?: boolean; // Whether to remove filler words (default: true)
    fillerWords?: string[]; // Custom list of filler words to remove
}