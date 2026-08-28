import { buildMetadata } from "@/lib/seo";
import { trainer } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
});

export default function PrivacyPage() {
  return (
    <main className="container-x py-24 max-w-2xl">
      <h1 className="font-display text-4xl uppercase mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-sm leading-relaxed text-muted">
        <p>
          This policy explains how {trainer.name} collects and uses
          information submitted through this website.
        </p>

        <section>
          <h2 className="font-semibold text-foreground mb-2">Contact form data</h2>
          <p>
            When you submit the contact form, your name, email address, and
            message are sent privately to {trainer.name.split(" ")[0]} to
            respond to your enquiry. This information is not published on the
            site, sold, or shared with third parties, and is used solely to
            reply to you.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">WhatsApp</h2>
          <p>
            WhatsApp buttons on this site open a chat directly with{" "}
            {trainer.name.split(" ")[0]} via WhatsApp. Messages sent this way
            are subject to WhatsApp&apos;s own privacy policy and terms of
            service.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">Cookies &amp; analytics</h2>
          <p>
            This site does not currently use tracking cookies or third-party
            analytics. If that changes, this policy will be updated to
            reflect it.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground mb-2">Contact</h2>
          <p>
            Questions about this policy can be sent using the contact form on
            this site or via WhatsApp.
          </p>
        </section>
      </div>
    </main>
  );
}
