import { trainer } from "./site";

/**
 * Build a wa.me deep link with a URL-encoded, contextual message.
 * Never hardcode wa.me URLs elsewhere - always go through this helper.
 */
export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${trainer.whatsappNumber}?text=${encoded}`;
}

export const whatsappMessages = {
  hero: "Hi Paul, I found your website and I'd like to learn more about your personal training programs.",
  about: "Hi Paul, I'd like to learn more about your personal training approach.",
  joinMe:
    "Hi Paul, I'd like to get started with personal training. Could you please share the next steps?",
  contact: "Hi Paul, I'd like to get in touch about personal training.",
  floating: "Hi Paul, I have a question about your personal training services.",
} as const;
