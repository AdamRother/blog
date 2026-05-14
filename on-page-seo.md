# On-Page SEO Checklist

Run through this before marking any content task done.

## Every page (all types)
- [ ] `<title>` — primary keyword near the front, under 60 chars
- [ ] Meta description — 150–160 chars, includes keyword, reads like copy not a list
- [ ] `metadata.alternates.canonical` set to full URL
- [ ] Open Graph: title, description, image (1200×630 at `/public/og/*.png`), url
- [ ] Twitter Card: `summary_large_image`, title, description
- [ ] Single `<h1>` per page
- [ ] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- [ ] All images have `width`, `height`, and descriptive `alt` text
- [ ] Mobile viewport set in layout (inherited from `app/layout.tsx`)

## Long-form blog posts (when individual post pages are built)
- [ ] Target keyword in: H1, first 100 words, at least one H2, image alt, URL slug
- [ ] FAQ section with `FAQPage` JSON-LD schema
- [ ] Breadcrumbs with `BreadcrumbList` JSON-LD schema
- [ ] Author byline with `Person` JSON-LD schema (name, role, url)
- [ ] `Article` JSON-LD schema with `datePublished`, `dateModified`, `author`
- [ ] Table of contents with anchor links (for posts over 1,500 words)
- [ ] 3–5 internal links to related posts/services
- [ ] 2–3 external links to authoritative sources (.gov, .edu, major publications)
- [ ] Word count within 20% of SERP top-3 for the target keyword
- [ ] Reading level: Grade 8–10 (Hemingway App)

## Index pages (blog, services)
- [ ] H1 describes the page type and audience
- [ ] Descriptive intro paragraph (100–150 words) before the grid
- [ ] At least one internal link to a featured/pillar post

## Build verification
- [ ] `npm run build` completes with no errors
- [ ] Every route shows `○ (Static)` in the build log
- [ ] View-source: HTML contains rendered content and any JSON-LD
- [ ] Voice check: re-read `references/voice.md` → "Tells that it's AI-written"

## GEO — AI citation layer (long-form posts)
- [ ] Opening paragraph (40–80 words): direct, standalone answer to the primary query — reads correctly if quoted alone by an AI
- [ ] Every H2 section is self-contained (readable without context from earlier in the post)
- [ ] At least 50% of H2/H3 headings phrased as questions the avatar would ask Claude, ChatGPT, or Perplexity
- [ ] FAQ questions use exact natural-language phrasing (how someone actually types into an AI tool)
- [ ] `<DefinitionBox>` added for any new category term (Intelligence as a Service, per-client AI memory, etc.)
- [ ] At least one original observation or framing not found in competitor content
- [ ] Consistent entity language throughout: "Intelligence as a Service", "Client Intelligence", "per-client AI memory", "isolated client workspace", "centralized IP"
- [ ] `public/llms.txt` updated with new post URL and one-line description
- [ ] AI crawlers confirmed in `app/robots.ts`: GPTBot, ClaudeBot, PerplexityBot, Google-Extended
