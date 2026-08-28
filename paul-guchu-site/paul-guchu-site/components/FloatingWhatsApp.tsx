"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

const tooltips = [
  "Chat with Paul",
  "Start your fitness journey",
  "Have a question?",
  "Let's talk fitness",
];

export default function FloatingWhatsApp() {
  const [index, setIndex] = useState(0);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const rotate = setInterval(() => {
      setIndex((i) => (i + 1) % tooltips.length);
    }, 6000);
    const reveal = setTimeout(() => setShowTip(true), 2000);
    return () => {
      clearInterval(rotate);
      clearTimeout(reveal);
    };
  }, []);

  return (
    <a
      href={createWhatsAppUrl(whatsappMessages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Paul on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group focus-ring rounded-full"
    >
      {showTip && (
        <span
          role="tooltip"
          className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-white text-xs font-medium px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {tooltips[index]}
        </span>
      )}
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-whatsapp shadow-lg animate-pulse-soft motion-reduce:animate-none">
        <MessageCircle size={28} className="text-white" aria-hidden="true" />
      </span>
    </a>
  );
}
