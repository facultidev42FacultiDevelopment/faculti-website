import { generateQuestions } from '@/lib/vimeo/ai';
import { getTranscript } from '@/lib/vimeo/transcript';
import { Question } from '@/lib/vimeo/types';
import { NextRequest, NextResponse } from 'next/server';

const questionsCache = new Map<string, { questions: Question[], timestamp: number }>();

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const videoId = searchParams.get('videoId');

        if (!videoId) {
            return NextResponse.json(
                { error: 'Missing videoId parameter' },
                { status: 400 }
            );
        }

        const cachedQuestions = questionsCache.get(videoId);
        const cacheValidityPeriod = 24 * 60 * 60 * 1000;

        if (cachedQuestions && (Date.now() - cachedQuestions.timestamp < cacheValidityPeriod)) {
            return NextResponse.json({
                videoId,
                questions: cachedQuestions.questions,
                generatedAt: new Date(cachedQuestions.timestamp).toISOString()
            });
        }

        const transcript = await getTranscript(videoId);

        const questions = await generateQuestions(transcript.chunks);

        questionsCache.set(videoId, {
            questions,
            timestamp: Date.now()
        });

        return NextResponse.json({
            videoId,
            questions,
            generatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error generating questions:', error);
        if (error instanceof Error) {
            return NextResponse.json(
                { error: 'Failed to generate questions', details: error.message },
                { status: 500 }
            );
        }
        return NextResponse.json(
            { error: 'Failed to generate questions' },
            { status: 500 }
        );
    }
}