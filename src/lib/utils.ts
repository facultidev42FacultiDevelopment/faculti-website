import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Handles all types of unicode escape sequences
 * - \u00XX (standard unicode escapes)
 * - \u{XXXXX} (extended unicode escapes)
 * - HTML entities (like &amp; &lt; &gt;)
 * 
 * @param input - The string containing escape sequences
 * @returns The cleaned string with proper characters
 */
export function cleanUnicodeEscapes(input: string): string {
  if (!input) return input;

  let result = input.replace(/\\u([0-9a-fA-F]{4})/g, (_, codePoint) =>
    String.fromCodePoint(parseInt(codePoint, 16))
  );

  result = result.replace(/\\u\{([0-9a-fA-F]+)\}/g, (_, codePoint) =>
    String.fromCodePoint(parseInt(codePoint, 16))
  );

  const htmlEntities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
  };

  Object.entries(htmlEntities).forEach(([entity, char]) => {
    result = result.replace(new RegExp(entity, 'g'), char);
  });

  return result;
}

/**
 * Processes an entire object and cleans all string values recursively
 * 
 * @param obj - The object to process
 * @returns A new object with all unicode escapes cleaned
 */
export function cleanObjectUnicodeEscapes<T>(obj: T): T {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === 'string') {
    return cleanUnicodeEscapes(obj) as unknown as T;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => cleanObjectUnicodeEscapes(item)) as unknown as T;
  }

  if (typeof obj === 'object') {
    return Object.entries(obj).reduce((result, [key, value]) => {
      return {
        ...result,
        [key]: cleanObjectUnicodeEscapes(value)
      };
    }, {}) as T;
  }

  return obj;
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)
  }
}
