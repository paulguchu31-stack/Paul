"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { trainer } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subjectField = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const fullName = `${firstName} ${lastName}`.trim();
    const subject = subjectField || `Personal training enquiry from ${fullName}`;
    const body = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${trainer.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSent(true);
  }

  return (
    <section id="contact" className="grid md:grid-cols-2">
      <Reveal from="left" className="order-2 md:order-1 px-5 sm:px-8 md:px-12 py-16 sm:py-20">
        <p className="text-sm font-semibold mb-6">Got questions? Just contact me below</p>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold mb-1">
                First name *
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                className="w-full border border-border px-3 py-2 focus-ring"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold mb-1">
                Last name *
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                className="w-full border border-border px-3 py-2 focus-ring"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold mb-1">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full border border-border px-3 py-2 focus-ring"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className="w-full border border-border px-3 py-2 focus-ring"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold mb-1">
              Long answer
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-border px-3 py-2 focus-ring"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="btn-accent px-8">
              Submit
            </button>
            <a
              href={`mailto:${trainer.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors focus-ring rounded"
            >
              <Mail size={16} aria-hidden="true" />
              Or email me directly
            </a>
          </div>

          {sent && (
            <p role="status" className="text-sm text-accent-dark">
              Your email draft is ready in your email app, subject and
              message already filled in. Just hit send from there.
            </p>
          )}
        </form>
      </Reveal>

      <Reveal from="right" delay={100} className="order-1 md:order-2 relative min-h-[320px]">
        <span className="tag-label absolute top-5 right-5 sm:top-8 sm:right-8 z-10">
          Reach Out
        </span>
        <Image
          src="/images/WhatsApp_Image_2026-08-28_at_5_59_17_PM.jpeg"
          alt="Paul Guchu, certified fitness trainer"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </Reveal>
    </section>
  );
}
