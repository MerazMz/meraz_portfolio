import { Redis } from "@upstash/redis";
import type { NextApiRequest, NextApiResponse } from "next";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const VISITOR_COUNT_KEY = "portfolio:visitor_count";
const VISITOR_SET_KEY = "portfolio:visitor_ids";

// Returns the best-guess real IP from Vercel / Next.js headers
function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress ?? "unknown";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // ── GET ──────────────────────────────────────────────────────────────────
    if (req.method === "GET") {
      const count = (await redis.get<number>(VISITOR_COUNT_KEY)) ?? 0;
      return res.status(200).json({ count });
    }

    // ── POST ─────────────────────────────────────────────────────────────────
    if (req.method === "POST") {
      const { visitorId } = (req.body as { visitorId?: unknown }) ?? {};

      // Basic validation – visitorId comes from the client's localStorage UUID
      if (
        !visitorId ||
        typeof visitorId !== "string" ||
        visitorId.length > 64
      ) {
        return res.status(400).json({ error: "Invalid visitorId" });
      }

      const ip = getClientIp(req);
      const ipKey = `portfolio:ip_rate:${ip}`;

      // ── Layer 1: IP rate-limit (1 registration per IP per 24 h) ─────────
      // This stops spam.js-style bots dead: even though they send random UUIDs
      // every call, their IP is blocked after the very first successful registration.
      const ipAlreadyRegistered = await redis.get(ipKey);
      if (ipAlreadyRegistered) {
        const count = (await redis.get<number>(VISITOR_COUNT_KEY)) ?? 0;
        return res.status(200).json({ count, new: false });
      }

      // ── Layer 2: visitorId deduplication (stable browser fingerprint) ────
      // SADD returns 1 if new, 0 if the member already existed.
      const isNewVisitor = await redis.sadd(VISITOR_SET_KEY, visitorId);

      if (isNewVisitor === 1) {
        // Genuine new visitor – increment count and stamp the IP for 24 h.
        const [count] = await Promise.all([
          redis.incr(VISITOR_COUNT_KEY),
          redis.set(ipKey, "1", { ex: 86400 }), // 86400 s = 24 h
        ]);
        return res.status(200).json({ count, new: true });
      }

      // Returning visitor (known visitorId) – still stamp the IP so bots
      // can't cycle through stored IDs to probe the system.
      await redis.set(ipKey, "1", { ex: 86400 });
      const count = (await redis.get<number>(VISITOR_COUNT_KEY)) ?? 0;
      return res.status(200).json({ count, new: false });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("Visitor counter error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
