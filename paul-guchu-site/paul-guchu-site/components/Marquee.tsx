import { Dumbbell } from "lucide-react";

const ITEMS = Array.from({ length: 6 });

export default function Marquee() {
  return (
    <div className="bg-dark text-white overflow-hidden py-6 border-y border-white/10">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center shrink-0">
            {ITEMS.map((_, i) => (
              <div key={`${rep}-${i}`} className="flex items-center gap-6 px-6">
                <span className="font-display text-3xl sm:text-4xl uppercase whitespace-nowrap">
                  Train With Purpose
                </span>
                <Dumbbell size={26} aria-hidden="true" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
