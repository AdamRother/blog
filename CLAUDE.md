**\# Project Overview**

**A Next.js site optimised for SEO. Pages are pre-rendered to static HTML at build time.**

**\---**

**\# Voice — read before writing any content**

**When writing \*\*any blog post, service page, or customer-facing copy\*\*, read the files in \`./references/\`:**

**| File | What it is |**  
**|------|-----------|**  
**| \`references/voice.md\` | Writing style, sentence rhythm, vocabulary, terminology, competitor positioning, anti-patterns |**  
**| \`references/product.md\` | What CI is, three-layer architecture, five differentiators, ICP, features, onboarding |**  
**| \`references/humour.md\` | How the brand handles humour |**  
**| \`references/stats.md\` | Canonical real numbers — pricing, response times, jobs, reviews |**  
**| \`references/stories.md\` | Recurring anecdotes the brand uses |**  
**| \`references/opinions.md\` | Hot takes and strong opinions backed by numbers |**

**\*\*Content rules:\*\***

**\- Never use AI-tell phrases (e.g. "unlock", "leverage", "seamless", "world-class", "in today's fast-paced world"), exclamation marks, or emojis**  
**\- Start with the answer; add context after**  
**\- Use real numbers from \`stats.md\`, never round**  
**\- One story per post max (from \`stories.md\`, don't invent new ones)**  
**\- One strong opinion per post max (from \`opinions.md\`, backed by a number)**  
**\- Tell people when NOT to hire you — biggest voice tell**

**Before shipping any writing, re-read \`references/voice.md\` → "Tells that it's AI-written" and delete anything that matches.**

**\---**

**\# Content Generation**

**When generating or editing a blog post, read both files below before starting:**

**| File | What it is |**  
**|------|-----------|**  
**| \`references/blog-optimization-instructions.md\` | 10-layer SEO+GEO system — what every page must include (keyword strategy, schema, GEO/AI citation, full pre-publish checklist) |**  
**| \`references/client-intel-content-templates.md\` | 6 post templates + generation workflow — which template to use, how to structure each type, output format |**

**Template selection:**  
**\- Broad definition / pillar post → Template 1**  
**\- Step-by-step how-to → Template 2 (supply \`howToSteps\` for HowTo schema)**  
**\- Comparison / "vs" / alternatives → Template 3**  
**\- Persona landing page → Template 4**  
**\- Case study → Template 5**  
**\- FAQ-only page → Template 6**

**\---**

**\# On-page SEO**

**When generating or editing a blog post, read \`references/on-page-seo.md\` for the quick checklist. The full publishing checklist is in \`references/blog-optimization-instructions.md\` Layer 10. Every item applicable to the page type must be satisfied.**

**Required for every long-form post:**  
**\- FAQ section with FAQPage schema (JSON-LD)**  
**\- Breadcrumbs \+ BreadcrumbList schema**  
**\- Author byline \+ Person schema**  
**\- Table of contents with anchor links**  
**\- 3–5 internal links, 2–3 external links to authoritative sources**  
**\- Open Graph \+ Twitter Card meta**  
**\- Length within 20% of SERP top-3 for the target keyword**

**\---**

**\# Technical SEO**

**Site-wide:**  
**\- \`app/sitemap.ts\` — auto-generated sitemap covering all routes**  
**\- \`app/robots.ts\` — allows all crawlers, points to sitemap**  
**\- Canonical URLs on every page (via \`metadata.alternates.canonical\`)**  
**\- Open Graph images (1200×630) — \`/public/og/\*.png\`**  
**\- Image width/height attributes for CLS**  
**\- Semantic HTML5 (\`\<header\>\`, \`\<nav\>\`, \`\<main\>\`, \`\<article\>\`, \`\<footer\>\`)**  
**\- Static pre-rendering — Vercel handles build output natively**  
**\- Mobile viewport — set in \`app/layout.tsx\`**

**\---**

**\# Design**

**Premium, modern, elegant. Subtle animations, proper spacing, clear visual hierarchy. No emoji icons. No generic gradients. One accent colour (pick one and stick to it).**

**\---**

**\# Development Rules**

**\*\*Rule 1: Always read first\*\* — before any action, read \`CLAUDE.md\`.**

**\*\*Rule 2: Define before you build\*\* — no code before spec approval.**

**\*\*Rule 3: Look before you create\*\* — check existing files before creating new ones.**

**\*\*Rule 4: Test before you respond\*\* — run \`npm run build\` before saying "done".**

**\*\*Core Rule\*\* — do exactly what is asked. Nothing more, nothing less.**

**\---**

**\# Tech Stack**

**\- \*\*Language:\*\* TypeScript**  
**\- \*\*Framework:\*\* Next.js 15 (App Router)**  
**\- \*\*Rendering:\*\* Static Site Generation via Next.js App Router. Vercel handles build output natively.**  
**\- \*\*Styling:\*\* Tailwind CSS**  
**\- \*\*Content:\*\* Flat TypeScript files in \`/content/\*.ts\`. No database.**  
**\- \*\*Deployment:\*\* Vercel**

**\*\*SSG constraints — do NOT break these:\*\***  
**\- No \`cookies()\`, \`headers()\`, or \`searchParams\` in server components**  
**\- No \`fetch(..., { cache: 'no-store' })\` or \`export const dynamic \= 'force-dynamic'\`**  
**\- No runtime API routes**  
**\- Dynamic routes (\`\[slug\]\`) must implement \`generateStaticParams\`**  
**\- All data fetched at \*\*build time\*\*, not request time**

**\---**

**\# Running the Project**

**1\. \`npm install\`**  
**2\. \`npm run dev\` — opens on \`http://localhost:3000\`**  
**3\. To ship: push to GitHub — Vercel auto-deploys on every commit to \`main\`**  
**Note: after \`npm run build\`, always run \`rm -rf .next\` before \`npm run dev\` to clear the cache.**

**\---**

**\# Organisation Rules**

**\- One component per file**  
**\- Shared components live in \`/components/\`**  
**\- Page-specific content lives in \`/content/\*.ts\`**  
**\- Don't create new top-level folders without asking**

**\---**

**\# Testing**

**Before marking any task done:**  
**\- \`npm run build\` completes with no errors**  
**\- Every route shows \`○ (Static)\` in the build log**  
**\- \*\*View-source check:\*\* the HTML contains the actual rendered content and any JSON-LD schema**  
**\- \*\*Voice check\*\* (for content changes): re-read \`references/voice.md\` → "Tells that it's AI-written" and delete anything that matches**

**Never say "done" if the build is failing, there are console errors, the voice reads as AI, or the feature hasn't been tested in the browser.**

**\---**

**\# Scope**

**Only build what's requested. If anything is unclear, ask before starting.**

