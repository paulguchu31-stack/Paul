import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function Trainer() {
  return (
    <section id="trainer" className="relative">
      <div className="grid md:grid-cols-2">
        <Reveal from="left" className="relative">
          <span className="tag-label absolute top-5 left-5 sm:top-8 sm:left-8 z-10">
            This Is How I Made It
          </span>
          <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
            <Image
              src="/images/WhatsApp_Image_2026-08-28_at_5_59_20_PM__1_.jpeg"
              alt="Paul Guchu, certified fitness trainer, at My PT Academy"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top grayscale"
            />
          </div>
        </Reveal>

        <Reveal from="right" delay={100} className="flex items-center bg-white">
          <div className="px-5 sm:px-8 md:px-12 py-12 md:py-0 max-w-md">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
              My Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-[0.95] mb-4">
              Built On Consistency, Not Shortcuts
            </h2>
            <p className="text-muted leading-relaxed">
              I'm Paul Guchu, a certified fitness trainer based in Dubai. My
              approach is built on structured training, consistency, and
              personalized guidance, helping clients build strength,
              confidence, and sustainable fitness habits through a plan made
              for their goals, not a generic template.
            </p>
            <a
              href={createWhatsAppUrl(whatsappMessages.about)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-6 text-foreground border-foreground/70 hover:scale-[1.03] active:scale-95"
            >
              Read More <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
