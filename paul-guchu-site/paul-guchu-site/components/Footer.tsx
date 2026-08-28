import Link from "next/link";
import { trainer, nav, socialLinks } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container-x py-14">
        <p className="font-display text-2xl uppercase">{trainer.name}</p>
        <p className="text-sm text-white/70 mb-10">{trainer.title}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-2xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide mb-3 text-white/60">
              Follow Me
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={socialLinks.instagram} className="hover:text-accent transition-colors focus-ring rounded">
                  Instagram
                </a>
              </li>
              <li>
                <a href={socialLinks.facebook} className="hover:text-accent transition-colors focus-ring rounded">
                  Facebook
                </a>
              </li>
              <li>
                <a href={socialLinks.youtube} className="hover:text-accent transition-colors focus-ring rounded">
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide mb-3 text-white/60">
              Quick Menu
            </p>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-accent transition-colors focus-ring rounded">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide mb-3 text-white/60">
              Legal Pages
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors focus-ring rounded">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors focus-ring rounded">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-white/50 mt-12">
          © {year} {trainer.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
