# Paul Guchu - Personal Training Website

A Next.js (App Router) + TypeScript + Tailwind CSS site for Paul Guchu,
Certified Fitness Trainer, built to match the visual structure of the
supplied Wix reference template ("Roy Pratt - Certified Fitness Trainer")
with Paul's own content, photos, packages, and WhatsApp-first contact flow.

## Tech stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS
- lucide-react icons
- Nodemailer (contact form email delivery)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

### Production build

```bash
npm run build
npm run start
```

> Note: this project was written and organized in an environment without
> package-registry network access, so `npm install` / `npm run build` have
> not been executed here. Run them locally before deploying - see
> "Before you deploy" below.

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values:

```
CONTACT_EMAIL=            # Paul's private inbox - never exposed to the client
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

`CONTACT_EMAIL` is only ever read on the server (`app/api/contact/route.ts`)
and is never sent to the browser, printed in HTML, or included in structured
data. Do not rename it to `NEXT_PUBLIC_CONTACT_EMAIL`.

The `EMAIL_SERVER_*` variables should point at an SMTP provider (e.g.
Gmail with an app password, SendGrid, Resend's SMTP endpoint, etc.).

## Images

All photos live in `public/images/` with their **original filenames
unchanged**. See `IMAGE-MANIFEST.md` for exactly which file is used where,
and `IMAGE-GUIDE.md` for the upload checklist. No stock imagery is used
anywhere - every image slot is filled by one of Paul's own photos.

## WhatsApp

All WhatsApp CTAs go through `lib/whatsapp.ts` (`createWhatsAppUrl`), which
builds a `wa.me/971555420634` link with a URL-encoded, context-specific
message. Update the number or message copy centrally in `lib/site.ts` /
`lib/whatsapp.ts`.

## Editing content

Everything editable - trainer name/title, certifications, nav, packages,
FAQ, social links - lives in `lib/site.ts`.

## Before you deploy

1. Run `npm install` locally.
2. Run `npm run build` and fix anything that surfaces (this file set has
   not been build-tested in this environment).
3. Set up `.env.local` with real values.

## GitHub

```bash
git init
git add .
git commit -m "Initial Paul Guchu fitness website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Deploying on Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Add the environment variables from `.env.example` in the Vercel project
   settings (Production + Preview).
4. Deploy.
5. Add your custom domain in Vercel's Domains tab, then update
   `NEXT_PUBLIC_SITE_URL` to match and redeploy.

## SEO / AEO

- Metadata, Open Graph, and Twitter cards: `lib/seo.ts`
- Sitemap: `app/sitemap.ts` → `/sitemap.xml`
- Robots: `app/robots.ts` → `/robots.txt`
- JSON-LD (`Person`, `ProfessionalService`, `FAQPage`): `app/layout.tsx`
- FAQ content used for both the on-page FAQ section and FAQPage structured
  data lives in `lib/site.ts`

## File structure

```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD
  page.tsx           Homepage - assembles all sections
  globals.css
  sitemap.ts
  robots.ts
  privacy/page.tsx
  terms/page.tsx
  api/contact/route.ts
components/
  Header.tsx  Hero.tsx  Trainer.tsx  Certifications.tsx  JoinMe.tsx
  Benefits.tsx  Pricing.tsx  Marquee.tsx  FAQ.tsx  Contact.tsx  Footer.tsx
  FloatingWhatsApp.tsx
lib/
  site.ts        Central config: trainer, nav, packages, FAQ, socials
  whatsapp.ts    wa.me link builder + message copy
  seo.ts         Metadata builder
public/images/   Paul's 11 supplied photos, original filenames
```
