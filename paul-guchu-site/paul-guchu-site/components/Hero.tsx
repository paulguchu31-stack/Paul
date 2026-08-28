import Image from "next/image";
import { ArrowUpRight, Dumbbell } from "lucide-react";
import Header from "./Header";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <Image
        src="/images/Editing_gym_image_and_barbell_202608281934.jpeg"
        alt="Paul Guchu training on the gym floor at My PT Academy"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />

      <Header />

      <div className="relative z-10 h-full container-x flex flex-col justify-end pb-16 sm:pb-20">
        <h1 className="font-display text-white text-[13vw] leading-[0.92] sm:text-6xl md:text-7xl uppercase max-w-3xl">
          Train With Purpose.
          <br />
          Build Your Stronger Self.
        </h1>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#pricing" className="btn-outline text-white border-white/70 hover:bg-white hover:text-foreground">
            My Plans <ArrowUpRight size={16} />
          </a>
          <a
            href={createWhatsAppUrl(whatsappMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-white border-white/70 hover:bg-white hover:text-foreground"
          >
            Contact Now <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="absolute left-5 sm:left-8 bottom-6 z-10 hidden sm:flex">
        <div className="relative h-24 w-24 text-white/80">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_16s_linear_infinite]">
            <defs>
              <path id="badgeCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fill="currentColor" fontSize="8.2" letterSpacing="2">
              <textPath href="#badgeCircle" startOffset="0%">
                CERTIFIED TRAINER • CERTIFIED TRAINER •
              </textPath>
            </text>
          </svg>
          <Dumbbell
            size={22}
            className="absolute inset-0 m-auto text-white"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
