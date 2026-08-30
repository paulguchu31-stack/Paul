import { faqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="container-x py-16 sm:py-20 faq-question">
      <h2 className="font-display text-3xl sm:text-4xl uppercase mb-8 faq-question">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-border max-w-3xl faq-question">
        {faqs.map((f) => (
          <details key={f.question} className="group py-4 faq-question">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold focus-ring rounded faq-question">
              {f.question}
              <span className="text-accent ml-4 group-open:rotate-45 transition-transform faq-question">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted leading-relaxed faq-question">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
