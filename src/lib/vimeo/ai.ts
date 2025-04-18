import { Question, TranscriptChunk } from "./types";

const DEEPSEEK_API_TOKEN = process.env.DEEPSEEK_API_TOKEN || '';
const DEEPSEEK_API_ENDPOINT = 'https://api.deepseek.com/v1';

const CACHE = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000;

/**
 * Generates thought-provoking questions from a transcript with caching
 */
export async function generateQuestions(transcript: TranscriptChunk[], videoId?: string): Promise<Question[]> {
    const cacheKey = videoId
        ? `questions-${videoId}`
        : `questions-${hashTranscript(transcript)}`;

    const cached = CACHE.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        console.log(`[CACHE HIT] Returning cached questions for key: ${cacheKey}`);
        return cached.data;
    }

    const formattedTranscript = transcript.map(({ id, startTime, text }) => ({
        id,
        startTime,
        text,
    }));

    const payload = {
        model: "deepseek-chat",
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
            {
                role: "system",
                content:
                    `You are an insightful, articulate tutor with a talent for distilling complex thoughts into meaningful, human-centered questions. ` +
                    `You aim to spark curiosity, reflection, and deeper thinking while aligning closely with the content you're given. ` +
                    `Keep responses accurate, emotionally aware, and useful for learners.`,
            },
            {
                role: "user",
                content:
                    `Based on the transcript below, generate exactly 4 short, thought-provoking questions (5–8 words max).\n\n` +
                    `The output must be **raw JSON only** with no explanation, no code block, no comments.\n\n` +
                    `Each item should follow this format:\n` +
                    `{ "question": "...", "index": "chunk-id" }\n\n` +
                    `Transcript:\n${JSON.stringify(formattedTranscript, null, 2)}`,
            },
        ],
    };

    try {
        const response = await fetch(`${DEEPSEEK_API_ENDPOINT}/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${DEEPSEEK_API_TOKEN}`,
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const result = await response.json();
        const content = result.choices?.[0]?.message?.content as string | undefined;

        if (!content) {
            throw new Error("Empty AI response");
        }

        const cleaned = content.replace(/```json|```/g, "").replace(/\u200B/g, "").replace(/[""]/g, '"').trim();

        let parsed: Question[];

        try {
            const raw = JSON.parse(cleaned);

            if (Array.isArray(raw)) {
                parsed = raw;
            } else if (typeof raw === "object" && Array.isArray(raw.questions)) {
                parsed = raw.questions;
            } else {
                throw new Error("Unexpected JSON structure: Must be a flat array or a { questions: [] } wrapper");
            }
        } catch (jsonErr) {
            const jsonMatch = cleaned.match(/\[(.|\n)*?\]/);
            if (!jsonMatch) {
                console.error("Raw AI response:", cleaned);
                throw new Error("Failed to extract valid JSON array from AI response");
            }
            parsed = JSON.parse(jsonMatch[0]);
        }

        if (
            !Array.isArray(parsed) ||
            !parsed.every(
                q => q && typeof q === "object" && typeof q.question === "string" && typeof q.index === "string"
            )
        ) {
            console.error("Parsed but invalid:", parsed);
            throw new Error("Invalid format for parsed questions");
        }

        CACHE.set(cacheKey, { data: parsed, timestamp: Date.now() });

        return parsed;
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("generateQuestions error:", err);
        throw new Error(`Question generation failed: ${errorMessage}`);
    }
}

/**
 * Generates a student-friendly summary of a transcript using DeepSeek API,
 * returned as structured HTML-style JSON with TailwindCSS classes.
 * Now includes 3 key points and more accurate summaries with caching.
 */
export async function generateSummary(transcript: string, videoId?: string): Promise<{ summary: object, keyPoints: string[] }> {
    const cacheKey = videoId
        ? `summary-${videoId}`
        : `summary-${hashString(transcript)}`;

    const cached = CACHE.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        console.log(`[CACHE HIT] Returning cached summary for key: ${cacheKey}`);
        return cached.data;
    }

    try {
        const response = await fetch(`${DEEPSEEK_API_ENDPOINT}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_TOKEN}`,
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                temperature: 0.7,
                response_format: { type: "json_object" },
                messages: [
                    {
                        role: "system",
                        content: `You are an expert academic tutor who creates concise, accurate summaries with key points. Your summaries highlight the most important concepts and make complex topics accessible to students. Structure your response with clearly defined HTML-style JSON using TailwindCSS classes for optimal readability.`
                    },
                    {
                        role: "user",
                        content: `
Summarize the transcript to make it super simple and friendly for students.

📌 Return the summary as valid **JSON** with TWO main parts:
1. A "summary" object with HTML-style tags as object keys
2. A "keyPoints" array with exactly 3 most important takeaways

Summary object should follow this structure:
{
  "summary": {
    "div": {
      "class": "text-base",
      "children": [
        {
          "h2": {
            "class": "text-lg font-bold mb-2",
            "text": "Key Concepts"
          }
        },
        {
          "ul": {
            "class": "list-disc ml-5 mb-4",
            "children": [
              { "li": { "class": "mb-1", "text": "Main idea simplified." }},
              { "li": { "class": "mb-1", "text": "Another helpful point." }}
            ]
          }
        },
        {
          "p": {
            "class": "text-sm italic",
            "text": "This makes it easy for students to follow."
          }
        }
      ]
    }
  },
  "keyPoints": [
    "First critical takeaway from the content",
    "Second essential concept from the material",
    "Third most important insight from the lecture"
  ]
}

✅ Use ANY HTML tag (h1–h6, p, ul, ol, li, em, strong, code, etc.)  
✅ Always include "class" and "text"/"children" fields
✅ Make sure summary is accurate and factually aligned with the transcript
✅ The 3 keyPoints must be concise (10-15 words each) and truly capture the most important ideas
✅ Only respond with a **valid JSON object**  

Transcript:
${transcript}
          `.trim()
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Failed to generate summary: ${response.statusText}`);
        }

        const data = await response.json();
        const raw = data.choices?.[0]?.message?.content;

        if (!raw) {
            throw new Error("Empty AI response");
        }

        const parsed = JSON.parse(raw);

        if (!parsed.summary || !Array.isArray(parsed.keyPoints) || parsed.keyPoints.length !== 3) {
            throw new Error("Invalid response structure from AI");
        }

        const result = {
            summary: parsed.summary,
            keyPoints: parsed.keyPoints
        };


        CACHE.set(cacheKey, { data: result, timestamp: Date.now() });

        return result;
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("Error generating summary:", err);
        throw new Error(`Failed to generate summary: ${errorMessage}`);
    }
}

/**
 * Helper function to create a simple hash of a transcript for caching purposes
 */
function hashTranscript(transcript: TranscriptChunk[]): string {
    const str = transcript.map(chunk => `${chunk.id}:${chunk.text.substring(0, 10)}`).join('|');
    return hashString(str);
}

/**
 * Simple string hashing function
 */
function hashString(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(16);
}