"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots tend to fill every field, humans never see this one.
    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim(),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="grid md:grid-cols-2">
      <Reveal from="left" className="order-2 md:order-1 px-5 sm:px-8 md:px-12 py-16 sm:py-20">
        <p className="text-sm font-semibold mb-6">Got questions? Just contact me below</p>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

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

          <button type="submit" disabled={status === "loading"} className="btn-accent px-8">
            {status === "loading" ? "Sending…" : "Submit"}
          </button>

          {status === "success" && (
            <p role="status" className="text-sm text-accent-dark">
              Thanks for reaching out. Your message has been sent to Paul. He&apos;ll
              get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-red-600">
              Something went wrong. Please try again or message Paul directly on
              WhatsApp.
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
