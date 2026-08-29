"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [ready, setReady] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setReady(true), 900);
    // Briefly self-expand once on load to draw the eye, then settle to icon-only.
    const expand = setTimeout(() => setExpanded(true), 1800);
    const collapse = setTimeout(() => setExpanded(false), 4600);
    return () => {
      clearTimeout(show);
      clearTimeout(expand);
      clearTimeout(collapse);
    };
  }, []);

  if (!ready) return null;

  return (
    <a
      href={createWhatsAppUrl(whatsappMessages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Paul on WhatsApp"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center focus-ring rounded-full animate-pop-in"
    >
      {/* Expanding rings */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ring-pulse motion-reduce:hidden" />
      <span
        className="absolute inset-0 rounded-full bg-whatsapp animate-ring-pulse motion-reduce:hidden"
        style={{ animationDelay: "0.6s" }}
      />

      <span
        className={`overflow-hidden whitespace-nowrap bg-foreground text-white text-sm font-semibold rounded-full shadow-lg transition-all duration-300 ease-out flex items-center ${
          expanded ? "max-w-[220px] opacity-100 px-4 py-4 mr-[-28px]" : "max-w-0 opacity-0 px-0 py-4"
        }`}
      >
        Chat with Paul on WhatsApp
      </span>

      <span className="relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-whatsapp shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95">
        <MessageCircle size={30} className="text-white" aria-hidden="true" />
        <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-accent border-2 border-white" />
      </span>
    </a>
  );
}
