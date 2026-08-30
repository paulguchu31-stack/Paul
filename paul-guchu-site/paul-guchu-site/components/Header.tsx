"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, trainer } from "@/lib/site";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[1000] transition-colors duration-300 ${
        solid ? "bg-white shadow-sm text-foreground" : "bg-transparent text-white"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 sm:h-20 py-3">
        <a href="#top" className="focus-ring rounded leading-tight">
          <span className="block font-display text-lg sm:text-xl tracking-wide">
            {trainer.name.toUpperCase()}
          </span>
          <span
            className={`block text-[11px] sm:text-xs ${
              solid ? "text-muted" : "text-white/80"
            }`}
          >
            {trainer.title}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium group focus-ring rounded py-1"
            >
              {item.label}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={createWhatsAppUrl(whatsappMessages.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center rounded-full font-semibold text-sm px-5 py-2.5 transition-colors focus-ring ${
            solid
              ? "bg-foreground text-white hover:bg-black"
              : "bg-white text-foreground hover:bg-white/90"
          }`}
        >
          WhatsApp Paul
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-[70] focus-ring rounded p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer: fixed to the viewport, fully opaque, always above everything else. */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[1100]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            className="absolute top-0 right-0 h-full w-[min(20rem,85vw)] max-w-[85vw] bg-white text-foreground px-6 pt-24 pb-8 flex flex-col gap-1 shadow-2xl"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base border-b border-border last:border-none focus-ring rounded"
              >
                {item.label}
              </a>
            ))}
            <a
              href={createWhatsAppUrl(whatsappMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-accent text-white font-semibold text-sm px-5 py-3 focus-ring"
            >
              WhatsApp {trainer.name.split(" ")[0]}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
