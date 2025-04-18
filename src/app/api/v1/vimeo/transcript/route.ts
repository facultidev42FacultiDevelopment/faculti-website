import { getTranscript } from '@/lib/vimeo/transcript';
import { Transcript } from '@/lib/vimeo/types';
import { NextRequest, NextResponse } from 'next/server';

const TRANSCRIPT_CACHE = new Map<string, { data: Transcript; timestamp: number }>();
const TRANSCRIPT_CACHE_DURATION = 60 * 60 * 1000;


export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const videoId = searchParams.get('videoId');
        const cacheKey = `transcript-${videoId}`;

        if (!videoId) {
            return NextResponse.json(
                { error: 'Missing videoId parameter' },
                { status: 400 }
            );
        }

        const cached = TRANSCRIPT_CACHE.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < TRANSCRIPT_CACHE_DURATION) {
            return NextResponse.json(cached.data, {
                headers: {
                    'Cache-Control': 'max-age=3600, s-maxage=3600',
                    'X-Cache': 'HIT',
                },
            });
        }


        const transcript = await getTranscript(videoId);

        TRANSCRIPT_CACHE.set(cacheKey, { data: transcript, timestamp: Date.now() });

        return NextResponse.json(transcript, {
            headers: {
                'Cache-Control': 'max-age=3600, s-maxage=3600',
                'X-Cache': 'MISS',
            },
        });

    } catch (error) {
        console.error('Error fetching transcript:', error);

        if (error instanceof Error) {
            return NextResponse.json(
                { error: 'Failed to fetch transcript', details: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to fetch transcript' },
            { status: 500 }
        );
    }
}