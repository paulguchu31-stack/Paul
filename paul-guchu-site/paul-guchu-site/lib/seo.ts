import type { Metadata } from "next";
import { siteUrl, trainer } from "./site";

export const siteTitle = "Paul Guchu | Certified Fitness Trainer & Personal Training";
export const siteDescription =
  "Paul Guchu is a certified fitness trainer offering personalized personal training, structured workout programs, fitness guidance, and group training.";

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteTitle,
      template: `%s | ${trainer.name}`,
    },
    description: siteDescription,
    alternates: { canonical: "/" },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      siteName: `${trainer.name} - Personal Training`,
      images: [
        {
          url: "/images/WhatsApp_Image_2026-08-28_at_5_59_17_PM.jpeg",
          width: 1200,
          height: 1600,
          alt: `${trainer.name}, ${trainer.title}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: ["/images/WhatsApp_Image_2026-08-28_at_5_59_17_PM.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}
