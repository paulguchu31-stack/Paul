import { Award, Dumbbell, HeartPulse } from "lucide-react";
import { certifications } from "@/lib/site";

const icons = {
  certificate: Award,
  dumbbell: Dumbbell,
  heart: HeartPulse,
} as const;

export default function Certifications() {
  return (
    <section className="bg-white border-b border-border">
      <div className="container-x py-10 sm:py-12">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted mb-8">
          Qualifications &amp; Certifications
        </p>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 max-w-3xl mx-auto">
          {certifications.map((cert) => {
            const Icon = icons[cert.icon];
            return (
              <div key={cert.name} className="flex flex-col items-center text-center gap-3">
                <Icon size={28} className="text-accent" aria-hidden="true" />
                <p className="text-sm font-medium text-foreground max-w-[220px]">
                  {cert.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
