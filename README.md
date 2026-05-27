# Client Intelligence — Blog

Content marketing site for [Client Intelligence](https://clientintelligence.ai). Built with Next.js 15 App Router, Tailwind CSS, and TypeScript. Deployed on Vercel at [learn.clientintelligence.ai](https://learn.clientintelligence.ai).

## Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Fonts:** Geist Sans + Geist Mono (via `next/font/google`)
- **Content:** Flat TypeScript files in `/content/` — no CMS, no database
- **Deployment:** Vercel (auto-deploys on push to `main`)

## Running locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

> After running `npm run build`, always clear the cache before `npm run dev`:
> ```bash
> rm -rf .next && npm run dev
> ```

## Adding a blog post

Use the `/blog` Claude Code command — it walks through every step (keyword selection, template, image sourcing, SEO checks, build verification).

## Structure

```
app/              Next.js pages and layout
components/       Shared UI components
content/
  blog.ts         Post metadata (slug, title, excerpt, keywords, author, dates)
  posts/          One TSX file per post (Body component, TOC, FAQ, images)
public/
  images/pexels/  WebP images (all sourced from Pexels, AI-themed)
  llms.txt        AI-readable site summary
references/       Brand voice, stats, stories, and opinions (read before writing)
```
