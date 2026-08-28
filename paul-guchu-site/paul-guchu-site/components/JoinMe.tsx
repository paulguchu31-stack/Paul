import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function JoinMe() {
  return (
    <section id="join" className="container-x py-16 sm:py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95] max-w-xl">
          Take The First Step On A Journey That Pushes You To The Limit
        </h2>
        <a
          href={createWhatsAppUrl(whatsappMessages.joinMe)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline self-start sm:self-auto shrink-0 text-foreground border-foreground/70"
        >
          Join Now <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/WhatsApp_Image_2026-08-28_at_6_01_33_PM__1_.jpeg"
          alt="Paul Guchu coaching a training session at the gym"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <p className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-sm sm:text-base max-w-md">
          Structured programs, real accountability, and a plan built around
          your goals — this is what training with Paul looks like.
        </p>
      </div>
    </section>
  );
}
