import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Very small in-memory rate limiter (per server instance). For production
// scale on Vercel, swap this for a durable store (Upstash/Redis) if needed.
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

function sanitize(input: unknown, maxLen = 2000): string {
  if (typeof input !== "string") return "";
  return input.replace(/[<>]/g, "").trim().slice(0, maxLen);
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = sanitize(body.name, 200);
  const email = sanitize(body.email, 200);
  const subject = sanitize(body.subject, 200);
  const message = sanitize(body.message, 4000);

  if (!name || !email || !emailRegex.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name and email." },
      { status: 400 }
    );
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail) {
    // Server misconfiguration — never leak this detail to the client.
    console.error("CONTACT_EMAIL env var is not set.");
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or message Paul directly on WhatsApp." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT ?? 587),
      secure: Number(process.env.EMAIL_SERVER_PORT) === 465,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_SERVER_USER,
      to: contactEmail,
      replyTo: email,
      subject: subject ? `[Website] ${subject}` : "[Website] New contact form message",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or message Paul directly on WhatsApp." },
      { status: 500 }
    );
  }
}
