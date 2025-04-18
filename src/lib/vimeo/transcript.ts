import { TextTrack, Transcript, TranscriptChunk } from "./types";

const VIMEO_API_TOKEN = process.env.VIMEO_API_TOKEN || '';
const VIMEO_API_ENDPOINT = 'https://api.vimeo.com';
const MAX_CHUNK_DURATION = 25;
const MAX_CUE_GAP = 10;

const transcriptCache = new Map<string, Transcript>();
const textTrackCache = new Map<string, TextTrack[]>();

export async function getTextTracks(videoId: string): Promise<TextTrack[]> {
    if (textTrackCache.has(videoId)) {
        return textTrackCache.get(videoId)!;
    }

    const response = await fetch(`${VIMEO_API_ENDPOINT}/videos/${videoId}/texttracks`, {
        headers: {
            'Authorization': `Bearer ${VIMEO_API_TOKEN}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch text tracks: ${response.statusText}`);
    }

    const data = await response.json();
    textTrackCache.set(videoId, data.data);

    return data.data;
}

function timecodeToSeconds(timecode: string): number {
    const parts = timecode.split(':');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const seconds = parseFloat(parts[2]);
    return hours * 3600 + minutes * 60 + seconds;
}

function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function processWebVttTranscript(webVttContent: string, videoId: string): Transcript {
    const lines = webVttContent.split('\n');
    const chunks: TranscriptChunk[] = [];
    let fullText = '';
    let formattedText = '';

    let tempChunk: TranscriptChunk | null = null;
    let cueText = '';
    let startTime = 0;
    let endTime = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === '' || line === 'WEBVTT') continue;

        const timeMatch = line.match(/(\d{2}:\d{2}:\d{2}\.\d{3}) --> (\d{2}:\d{2}:\d{2}\.\d{3})/);
        if (timeMatch) {
            if (cueText && tempChunk) {
                if (
                    startTime - tempChunk.endTime > MAX_CUE_GAP ||
                    endTime - tempChunk.startTime > MAX_CHUNK_DURATION
                ) {
                    chunks.push(tempChunk);
                    fullText += tempChunk.text + ' ';
                    formattedText += `<span class="sa-lv" id="sa-lv-${tempChunk.id}" data-cpos="${Math.round(tempChunk.startTime)}">${tempChunk.formattedTime} - ${tempChunk.text}</span><br /><br />`;
                    tempChunk = null;
                } else {
                    tempChunk.text += ' ' + cueText.trim().replace(/\b(ah|um|oh|er|uh)\b,?/gi, '');
                    tempChunk.endTime = endTime;
                    tempChunk.formattedTime = formatTime(tempChunk.startTime);
                }
                cueText = '';
            }

            startTime = timecodeToSeconds(timeMatch[1]);
            endTime = timecodeToSeconds(timeMatch[2]);
            continue;
        }

        if (/^\d+$/.test(line)) continue;

        cueText += (cueText ? ' ' : '') + line;

        if (!tempChunk) {
            tempChunk = {
                id: `chunk-${chunks.length + 1}`,
                startTime,
                endTime,
                text: cueText.trim().replace(/\b(ah|um|oh|er|uh)\b,?/gi, ''),
                formattedTime: formatTime(startTime)
            };
        }
    }

    if (tempChunk) {
        chunks.push(tempChunk);
        fullText += tempChunk.text + ' ';
        formattedText += `<span class="sa-lv" id="sa-lv-${tempChunk.id}" data-cpos="${Math.round(tempChunk.startTime)}">${tempChunk.formattedTime} - ${tempChunk.text}</span><br /><br />`;
    }

    return {
        videoId,
        chunks,
        fullText: fullText.trim(),
        formattedText
    };
}

export async function getTranscript(videoId: string): Promise<Transcript> {
    if (transcriptCache.has(videoId)) {
        return transcriptCache.get(videoId)!;
    }

    try {
        const textTracks = await getTextTracks(videoId);

        if (!textTracks || textTracks.length === 0) {
            throw new Error('No transcripts found for this video');
        }

        const activeTrack = textTracks.find(track => track.active) || textTracks[0];

        if (!activeTrack) {
            throw new Error('No active transcript found for this video');
        }

        const trackResponse = await fetch(activeTrack.link);

        if (!trackResponse.ok) {
            throw new Error(`Failed to fetch transcript content: ${trackResponse.statusText}`);
        }

        const webVttContent = await trackResponse.text();
        const processed = processWebVttTranscript(webVttContent, videoId);

        transcriptCache.set(videoId, processed);

        return processed;
    } catch (error) {
        console.error('Error in getTranscript:', error);
        throw error;
    }
}
