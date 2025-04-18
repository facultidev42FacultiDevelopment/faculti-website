import { generateSummary } from '@/lib/vimeo/ai';
import { getTranscript } from '@/lib/vimeo/transcript';
import { NextRequest, NextResponse } from 'next/server';

const summaryCache = new Map<string, { summary: object; timestamp: number }>();

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

        const cached = summaryCache.get(videoId);
        const cacheTTL = 24 * 60 * 60 * 1000;

        if (cached && Date.now() - cached.timestamp < cacheTTL) {
            return NextResponse.json({
                videoId,
                summary: cached.summary,
                generatedAt: new Date(cached.timestamp).toISOString()
            });
        }

        const transcript = await getTranscript(videoId);
        const { summary } = await generateSummary(transcript.fullText);

        summaryCache.set(videoId, {
            summary,
            timestamp: Date.now()
        });

        return NextResponse.json({
            videoId,
            summary,
            generatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error generating summary:', error);
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    error: 'Failed to generate summary',
                    details: error.message ?? String(error)
                },
                { status: 500 }
            );
        }
        return NextResponse.json(
            {
                error: 'Failed to generate summary'
            },
            { status: 500 }
        );
    }
}