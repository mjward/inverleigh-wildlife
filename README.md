# Inverleigh Wildlife

Photos, calls and notes on the wildlife of Inverleigh, Victoria, starting with 38 local birds.

Built with Next.js (App Router), TypeScript and Tailwind. Every page is statically generated, and every image and sound is a static file in `public/`. The site needs no environment variables.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project** and import `mjward/inverleigh-wildlife`.
2. Keep the detected **Next.js** preset and the default build settings. Don't add any environment variables.
3. Select **Deploy**. Each push to `main` redeploys the site.

## Local development

```bash
npm install
npm run dev
```

## Sources and checks

- `docs/SPECIES-SOURCES.md` explains how the species were chosen: the Atlas of Living Australia queries, the record counts and which species were excluded.
- `docs/RESEARCH-REVIEW.md` and `docs/research/` hold the fact-check notes behind `content/birds.ts`.
- `lib/birds.json` holds the photo, recording and video metadata, including licences and authors. All credits are listed on the `/credits` page.
- `npm run check:media` confirms each photo and call is labelled with the bird's scientific name at its source. It needs network access. For the xeno-canto recordings it also needs the `XENO_CANTO_API_KEY` environment variable, which is used only locally and never committed.

Media licences vary. Several calls are CC BY-NC or CC BY-NC-SA, so they can't be used commercially.
