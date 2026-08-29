"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Dumbbell } from "lucide-react";
import Header from "./Header";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = window.scrollY * 0.35;
        if (imgRef.current) {
          imgRef.current.style.transform = `translateY(${offset}px) scale(1.1)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src="/images/Editing_gym_image_and_barbell_202608281934.jpeg"
          alt="Paul Guchu training on the gym floor at My PT Academy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_35%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />

      <Header />

      <div className="relative z-10 h-full container-x flex flex-col justify-end pb-20 sm:pb-24">
        <h1 className="font-display text-white text-[12vw] leading-[0.92] sm:text-6xl md:text-7xl uppercase max-w-3xl animate-fade-up">
          Train With Purpose.
          <br />
          Build Your Stronger Self.
        </h1>

        <div
          className="mt-6 flex flex-wrap gap-3 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <a
            href="#pricing"
            className="btn-outline text-white border-white/70 hover:bg-white hover:text-foreground hover:scale-[1.03] active:scale-95"
          >
            My Plans <ArrowUpRight size={16} />
          </a>
          <a
            href={createWhatsAppUrl(whatsappMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-white border-white/70 hover:bg-white hover:text-foreground hover:scale-[1.03] active:scale-95"
          >
            Contact Now <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="absolute left-5 sm:left-8 bottom-6 z-10 hidden sm:flex">
        <div className="relative h-24 w-24 text-white/80">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_16s_linear_infinite] motion-reduce:animate-none">
            <defs>
              <path id="badgeCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fill="currentColor" fontSize="8.2" letterSpacing="2">
              <textPath href="#badgeCircle" startOffset="0%">
                CERTIFIED TRAINER • CERTIFIED TRAINER •
              </textPath>
            </text>
          </svg>
          <Dumbbell size={22} className="absolute inset-0 m-auto text-white" aria-hidden="true" />
        </div>
      </div>

      <div className="absolute right-6 sm:right-8 bottom-8 z-10 hidden sm:flex-flex-col items-center gap-1 text-white/70">
        <span className="text-[10px] tracking-widest uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce motion-reduce:animate-none" />
      </div>
    </section>
  );
}
