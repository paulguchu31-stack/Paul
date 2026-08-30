import { Dumbbell } from "lucide-react";

const PHRASES = [
  "Train With Purpose",
  "Build Real Strength",
  "Consistency Over Perfection",
  "Certified. Structured. Effective.",
  "Your Stronger Self Starts Here",
  "Progress You Can Measure",
];

export default function Marquee() {
  return (
    <div className="bg-dark text-white overflow-hidden py-6 border-y border-white/10">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center shrink-0">
            {PHRASES.map((phrase, i) => (
              <div key={`${rep}-${i}`} className="flex items-center gap-6 px-6">
                <span className="font-display text-3xl sm:text-4xl uppercase whitespace-nowrap">
                  {phrase}
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
