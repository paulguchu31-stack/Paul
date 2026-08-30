import Image from "next/image";
import { Flame, Smile, Repeat } from "lucide-react";
import { stockImages } from "@/lib/site";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: Flame,
    title: "Build Strength & Confidence",
    text: "Structured resistance training builds real strength over time, and with it, the confidence that comes from seeing consistent progress.",
  },
  {
    icon: Smile,
    title: "Boost Your Mood",
    text: "Regular training is a proven way to support your mood and mental wellbeing - training sessions are built to fit that into your week.",
  },
  {
    icon: Repeat,
    title: "Consistency & Discipline",
    text: "A structured plan and regular check-ins help turn training into a sustainable habit, not a one-off effort.",
  },
];

const gridImages = [
  {
    src: "/images/WhatsApp_Image_2026-08-28_at_5_59_21_PM.jpeg",
    alt: "Paul Guchu at My PT Academy gym",
    position: "object-top",
  },
  {
    src: stockImages.womenWarmup,
    alt: "Women warming up together before a training session",
    position: "object-center",
  },
  {
    src: "/images/WhatsApp_Image_2026-08-28_at_5_59_19_PM.jpeg",
    alt: "Paul Guchu, certified fitness trainer",
    position: "object-top",
  },
  {
    src: stockImages.womenDumbbells,
    alt: "Women exercising with dumbbells in a gym",
    position: "object-center",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="container-x py-16 sm:py-20">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase mb-10 sm:mb-12">
          Benefits Of Working Out
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-10 mb-12">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 120}>
            <b.icon size={28} className="text-accent mb-4" aria-hidden="true" />
            <h3 className="font-display text-xl uppercase mb-2">{b.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{b.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {gridImages.map((img, i) => (
          <Reveal key={img.src} delay={i * 90} className="relative aspect-square overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className={`object-cover ${img.position} hover:scale-105 transition-transform duration-500`}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
