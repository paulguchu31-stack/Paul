import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { trainingPlans } from "@/lib/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-dark text-white py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <span className="tag-label mb-10 sm:mb-12 inline-block">Choose Your Plan</span>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5">
          {trainingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100}>
              <div className="bg-white text-foreground flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={plan.image}
                    alt={`${plan.name} — Paul Guchu personal training`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl uppercase mb-1">{plan.name}</h3>
                  <p className="mb-1">
                    <span className="text-2xl font-bold">{plan.price}</span>{" "}
                    <span className="text-xs text-muted">{plan.priceNote}</span>
                  </p>

                  
                    href={createWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent w-full mt-4 mb-5 hover:scale-[1.02] active:scale-95"
                  >
                    Enquire Now <ArrowUpRight size={16} />
                  </a>

                  <ul className="space-y-2 text-sm text-muted">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
