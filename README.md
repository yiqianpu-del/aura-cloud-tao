# Aura Cloud Tao — Hand-Written Taoist Talismans

> Next.js 14 static site for selling authentic hand-written Taoist talismans.
> Payment via WhatsApp. Built for the US spiritual market.

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repo
3. Vercel auto-detects Next.js — just click Deploy
4. Add custom domain: `auracloudtao.com`
5. Done.

## Project Structure

```
├── app/            Next.js App Router pages
│   ├── page.tsx          Homepage
│   ├── layout.tsx        Root layout with Header/Footer
│   ├── talismans/        22 talisman catalog
│   │   └── [slug]/       Individual talisman pages
│   ├── about/            About page
│   ├── blog/             Blog
│   └── contact/          Contact page
├── components/    React components
│   ├── header.tsx        Navigation
│   ├── footer.tsx        Footer
│   ├── hero.tsx          Homepage hero
│   ├── features.tsx      Category cards
│   ├── how-it-works.tsx  Ritual process
│   ├── packages.tsx      Pricing packages
│   └── faq.tsx           FAQ accordion
├── data/          static data files
│   ├── site-config.ts    Brand config
│   └── talismans.ts      22 talismans + packages
└── public/         Static assets
```

## To Replace Before Launch

1. `data/site-config.ts` → `whatsapp` number
2. `data/site-config.ts` → `masterName`, `masterBio`
3. Add real product images to `public/images/`
4. Add real logo to header
5. Update GTM ID in `app/layout.tsx`
