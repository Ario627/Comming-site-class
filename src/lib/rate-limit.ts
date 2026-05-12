const LIMIT = 3;
const WINDOW_MS = 5 * 60 * 1000; // 1 minute in milliseconds

const request = new Map<string, { count: number, resetTime: number }>();

export function rateLimit(ip: string): {allowed: boolean, remaining: number} {
    const now = Date.now();

    for(const [key, entry] of request) {
        if(now > entry.resetTime) request.delete(key);
    }

    const existing = request.get(ip)!;

    if (!existing || now > existing.resetTime) {
      request.set(ip, { count: 1, resetTime: now + WINDOW_MS });
      return { allowed: true, remaining: LIMIT - 1 };
    }

    if(existing.count >= LIMIT) {
        return { allowed: false, remaining: 0 };
    }

    existing.count += 1;
    return { allowed: true, remaining: LIMIT - existing.count };
}