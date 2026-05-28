import { NextRequest, NextResponse } from "next/server";

import { saveContactMessage } from "@/lib/firebase/portfolio";

export const runtime = "nodejs";

const canonicalOrigin = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://danielflockhart.com").origin;
const maxBodyBytes = 10_000;
const maxNameLength = 120;
const maxEmailLength = 254;
const maxMessageLength = 5000;
const rateLimitWindowMs = 60 * 60 * 1000;
const maxMessagesPerWindow = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowedOrigins = new Set([
    canonicalOrigin,
    request.nextUrl.origin,
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
  ]);

  return allowedOrigins.has(origin);
}

function isRateLimited(key: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (existing.count >= maxMessagesPerWindow) return true;

  existing.count += 1;

  if (rateLimitStore.size > 1000) {
    for (const [storedKey, entry] of rateLimitStore.entries()) {
      if (entry.resetAt <= now) rateLimitStore.delete(storedKey);
    }
  }

  return false;
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, error: "This request origin is not allowed." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxBodyBytes) {
    return NextResponse.json({ ok: false, error: "Message payload is too large." }, { status: 413 });
  }

  const key = clientKey(request);
  if (isRateLimited(key)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages sent recently. Please email me directly using the address on this page." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const website = typeof body?.website === "string" ? body.website.trim() : "";

  if (website) {
    return NextResponse.json({ ok: true, saved: false });
  }

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Name must be at least 2 characters." }, { status: 400 });
  }

  if (name.length > maxNameLength) {
    return NextResponse.json({ ok: false, error: "Name must be under 120 characters." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  if (email.length > maxEmailLength) {
    return NextResponse.json({ ok: false, error: "Email must be under 254 characters." }, { status: 400 });
  }

  if (message.length < 10) {
    return NextResponse.json({ ok: false, error: "Message must be at least 10 characters." }, { status: 400 });
  }

  if (message.length > maxMessageLength) {
    return NextResponse.json({ ok: false, error: "Message must be under 5000 characters." }, { status: 400 });
  }

  try {
    const result = await saveContactMessage({
      name,
      email,
      message,
      userAgent: request.headers.get("user-agent") ?? undefined,
    });

    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("Contact message failed", error);
    return NextResponse.json(
      { ok: false, error: "I could not send this through the form. Please email me directly using the address on this page." },
      { status: 500 },
    );
  }
}
