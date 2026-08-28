import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { buildMetadata } from "@/lib/seo";
import { trainer, siteUrl, certifications } from "@/lib/site";
import { faqs } from "@/lib/site";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: trainer.name,
      jobTitle: trainer.title,
      url: siteUrl,
      hasCredential: certifications.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        name: c.name,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${trainer.name} — Personal Training`,
      areaServed: "Dubai, UAE",
      url: siteUrl,
      provider: {
        "@type": "Person",
        name: trainer.name,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
  ];

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        {children}
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
