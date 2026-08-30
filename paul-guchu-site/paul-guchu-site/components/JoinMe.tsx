import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import { stockImages } from "@/lib/site";
import Reveal from "./Reveal";

export default function JoinMe() {
  return (
    <section id="join" className="container-x py-16 sm:py-20">
      <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95] max-w-xl">
          Take The First Step On A Journey That Pushes You To The Limit
        </h2>
        <a
          href={createWhatsAppUrl(whatsappMessages.joinMe)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline self-start sm:self-auto shrink-0 text-foreground border-foreground/70 hover:scale-[1.03] active:scale-95"
        >
          Join Now <ArrowUpRight size={16} />
        </a>
      </Reveal>

      <Reveal delay={150} className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden group">
        <Image
          src={stockImages.groupWorkout}
          alt="Women training together during a group dumbbell session"
          fill
          sizes="100vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <p className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-sm sm:text-base max-w-md">
          Structured programs, real accountability, and a plan built around
          your goals - this is what training with Paul looks like.
        </p>
      </Reveal>
    </section>
  );
}
