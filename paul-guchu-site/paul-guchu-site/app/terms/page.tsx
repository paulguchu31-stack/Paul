import { buildMetadata } from "@/lib/seo";
import { trainer } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  alternates: { canonical: "/terms" },
});

export default function TermsPage() {
  return (
    <main className="container-x py-24 max-w-2xl">
      <h1 className="font-display text-4xl uppercase mb-8">Terms &amp; Conditions</h1>

      <div className="space-y-6 text-sm leading-relaxed text-muted">
        <p>
          This website is operated by {trainer.name}, a {trainer.title.toLowerCase()}{" "}
          based in {trainer.location}. By using this site, you agree to the
          following terms.
        </p>

        <section>
          <h2 className="font-semibold text-foreground mb-2">Services</h2>
          <p>
            Information about training packages on this site is for general
            informational purposes. Enrollment, scheduling, and payment
            details for any package are arranged directly with{" "}
            {trainer.name.split(" ")[0]} via WhatsApp or the contact form -
            this site does not process payments or bookings.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">No medical advice</h2>
          <p>
            Content on this site is not medical advice. Consult a physician
            before starting any new exercise program, particularly if you
            have an existing health condition.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">Changes</h2>
          <p>
            These terms may be updated from time to time. Continued use of
            the site after changes are posted constitutes acceptance of the
            revised terms.
          </p>
        </section>
      </div>
    </main>
  );
}
