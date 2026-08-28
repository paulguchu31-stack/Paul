"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, trainer } from "@/lib/site";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-40">
      <div className="container-x flex items-center justify-between h-20 sm:h-24">
        <a href="#top" className="focus-ring rounded leading-tight">
          <span className="block font-display text-base sm:text-lg tracking-wide text-white">
            {trainer.name.toUpperCase()}
          </span>
          <span className="block text-[11px] sm:text-xs text-white/80">
            {trainer.title}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors focus-ring rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={createWhatsAppUrl(whatsappMessages.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-white text-foreground font-semibold text-sm px-5 py-2.5 hover:bg-white/90 transition-colors focus-ring"
        >
          WhatsApp Paul
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white focus-ring rounded p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-dark px-5 pb-6 pt-2 flex flex-col gap-1"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-white/90 border-b border-white/10 last:border-none focus-ring rounded"
            >
              {item.label}
            </a>
          ))}
          <a
            href={createWhatsAppUrl(whatsappMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white text-foreground font-semibold text-sm px-5 py-3 focus-ring"
          >
            WhatsApp {trainer.name.split(" ")[0]}
          </a>
        </nav>
      )}
    </header>
  );
}
