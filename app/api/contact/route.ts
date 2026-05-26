import { NextRequest, NextResponse } from "next/server";

import { saveContactMessage } from "@/lib/firebase/portfolio";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Name must be at least 2 characters." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  if (message.length < 10) {
    return NextResponse.json({ ok: false, error: "Message must be at least 10 characters." }, { status: 400 });
  }

  if (message.length > 5000) {
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
    return NextResponse.json({ ok: false, error: "Could not save message." }, { status: 500 });
  }
}
