import { Award, Dumbbell, HeartPulse, BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/site";
import Reveal from "./Reveal";

const icons = {
  certificate: Award,
  dumbbell: Dumbbell,
  heart: HeartPulse,
} as const;

export default function Certifications() {
  return (
    <section className="bg-white border-b border-border">
      <div className="container-x py-14 sm:py-16">
        <Reveal className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-2">
            Verified Credentials
          </p>
          <h2 className="font-display text-2xl sm:text-3xl uppercase">
            Qualifications &amp; Certifications
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => {
            const Icon = icons[cert.icon];
            return (
              <Reveal key={cert.name} delay={i * 120}>
                <div className="group relative h-full border border-border rounded-sm p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1 bg-white">
                  <BadgeCheck
                    size={18}
                    className="absolute top-3 right-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-dark text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {cert.name}
                  </p>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-accent">
                    Certified
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
