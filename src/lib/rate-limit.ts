/**
 * Rate limiting with Upstash Redis (production) and in-memory fallback (development).
 * Supports both distributed and single-instance deployments.
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Development fallback - simple in-memory
interface InMemoryEntry {
  count: number;
  resetTime: number;
}

const memoryStore = new Map<string, InMemoryEntry>();

// Cleanup old entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of memoryStore.entries()) {
      if (now > entry.resetTime) {
        memoryStore.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

interface RateLimitOptions {
  limit: number;
  windowSeconds: number;
}

const DEFAULT_OPTIONS: RateLimitOptions = {
  limit: 30,
  windowSeconds: 60,
};

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

let upstashRatelimit: Ratelimit | null = null;

// Initialize Upstash rate limiter if credentials are available
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  upstashRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(DEFAULT_OPTIONS.limit, `${DEFAULT_OPTIONS.windowSeconds} s`),
    analytics: true,
  });
}

/**
 * Check rate limit for a given identifier.
 * Uses Upstash Redis in production, in-memory fallback for development.
 */
export async function checkRateLimit(
  identifier: string,
  options: Partial<RateLimitOptions> = {}
): Promise<RateLimitResult> {
  const { limit, windowSeconds } = { ...DEFAULT_OPTIONS, ...options };

  // Use Upstash if available
  if (upstashRatelimit) {
    const result = await upstashRatelimit.limit(identifier);
    return {
      allowed: result.success,
      remaining: result.remaining,
      resetAt: result.reset,
    };
  }

  // In-memory fallback
  const now = Date.now();
  const resetTime = now + windowSeconds * 1000;
  const entry = memoryStore.get(identifier);

  if (!entry || now > entry.resetTime) {
    memoryStore.set(identifier, { count: 1, resetTime });
    return { allowed: true, remaining: limit - 1, resetAt: resetTime };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetTime };
  }

  entry.count++;
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetTime };
}

export function getClientIdentifier(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  return ip;
}
