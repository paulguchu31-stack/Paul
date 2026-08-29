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
              src="/images/WhatsApp_Image_2026-08-28_at_6_00_11_PM.jpeg"
              alt="Paul Guchu performing a strict pull-up at the gym"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[center_15%] grayscale"
            />
          </div>
        </Reveal>

        <Reveal from="right" delay={100} className="flex items-center bg-white">
          <div className="px-5 sm:px-8 md:px-12 py-12 md:py-0 max-w-md">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
              My Story
            </p>
            <p className="text-muted leading-relaxed">
              I'm Paul Guchu, a certified fitness trainer based in Dubai. My
              approach is built on structured training, consistency, and
              personalized guidance — helping clients build strength,
              confidence, and sustainable fitness habits through a plan made
              for their goals, not a generic template.
            </p>
            
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
