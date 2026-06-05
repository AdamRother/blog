# /blog — Generate a new blog post

**Usage:** `/blog [keyword or phrase]`
**Example:** `/blog "how to price consulting services"`

Execute every step in order. Do not skip steps. Do not ask for confirmation between
steps unless something genuinely cannot be resolved from the files.

---

## STEP 0 — Read everything before writing a single word

Read ALL of these files before proceeding. Non-negotiable.

1. `references/voice.md` — Josh's formula, phrasing patterns, tone, hard stops, terminology, competitor positioning
2. `references/product.md` — what CI is, three-layer architecture, five differentiators, ICP, features, onboarding
3. `references/humour.md` — his triggers, frequency rules, what never works
4. `references/stats.md` — exact numbers only; mark unverifiable claims [VERIFY]
5. `references/stories.md` — three verified stories only; do not invent
6. `references/opinions.md` — seven documented opinions; one per post, backed by evidence
7. `references/on-page-seo.md` — every checklist item must be satisfied
8. `references/blog-optimization-instructions.md` — 10-layer SEO+GEO system; full pre-publish checklist
9. `references/client-intel-content-templates.md` — 6 post templates + generation workflow
10. `content/posts/intelligence-as-a-service.tsx` — canonical file structure; match exactly
11. `content/blog.ts` — understand existing entries before adding a new one
12. `references/client-intelligence-keywords-only.md` — keyword source

---

## STEP 1 — Select keyword and pick template

**If `$ARGUMENTS` provided:** Use it as the primary keyword.
**If no argument:** Read `references/client-intelligence-keywords-only.md`. Identify which bucket
(1–7) is least represented in `content/blog.ts`. Choose a primary keyword from that bucket.

**Pick a content template from `references/client-intel-content-templates.md`:**
- Broad definition / pillar post → Template 1
- Step-by-step how-to → Template 2 (must supply `howToSteps` in PostEntry)
- Comparison / "vs" / alternatives → Template 3
- Persona landing page → Template 4
- Case study → Template 5
- FAQ-only page → Template 6

Build a cluster of 8–12 related phrases. These become:
- The `keywords` field in `content/blog.ts`
- Secondary targets distributed naturally across H2s and body copy — never forced

State: primary keyword, chosen template, cluster. Proceed without waiting.

---

## STEP 2 — Plan the post

Determine before writing:

- **Slug:** kebab-case from primary keyword. Must not exist in `content/posts/` already.
- **Title:** Primary keyword near the front. Under 60 characters. Statement or question — not clickbait.
- **Category:** One of: `Business Model` | `Operations` | `AI & Tools` | `Strategy`
- **H2 outline:** 7–9 sections. Each needs a unique kebab-case anchor `id`.
  - At least 50% of H2/H3 headings must be phrased as questions (GEO requirement).
  - Second-to-last H2 must always address "Who this is for — and who should not [do X]".
    This is Josh's core credibility signal. Never skip it.
- **DefinitionBox placement:** If the post introduces a new concept or category term
  (e.g., "Intelligence as a Service", "per-client AI memory"), place a `<DefinitionBox />`
  immediately after the first time that term is explained — typically after the opening
  two paragraphs or after the first H2.
- **howToSteps:** Required for Template 2 posts. List the 3–5 named steps.
- **FAQ plan:** 6–8 questions. Target "People also ask" phrasing. Include one FAQ that
  explicitly answers who should NOT use this.
- **Image plan:** 1 hero + 4–5 inline images + 1 card (blog listing). One image per major section; never two in a row. All must be AI-themed and landscape.
- **Word count target:** 2,000–2,800 words in the body.

State the outline. Proceed immediately.

---

## STEP 3 — Source and verify external links

**Do this before writing body copy.**

Find 2–3 external links. They must be:
- From different source types — e.g. one academic institution, one research firm, one reference source
- Verified working — use WebFetch on each candidate URL before including it
- Relevant to a specific claim — not generic "related reading"

**Source types to rotate:**
- Academic: Stanford HAI (`aiindex.stanford.edu`), MIT Sloan (`sloanreview.mit.edu`),
  Oxford Internet Institute, NBER (`nber.org`), Harvard Kennedy School
- Research firms: McKinsey (`mckinsey.com`), Deloitte Insights, PwC, World Economic Forum
- Reference: Wikipedia for established concepts, NIST, government (.gov) sources
- Business press: Wall Street Journal, Financial Times (avoid HBR — many URLs 404)

**Already used in existing posts — diversify away:**
- `nber.org/papers/w31161` (used in posts 3 and 4)
- `mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier` (used in post 1)
- `aiindex.stanford.edu/report/` (used in posts 1 and 4)
- `sloanreview.mit.edu/article/audit-yourself-to-get-more-from-genai/` (used in post 2)
- `deloitte.com/us/en/insights/topics/talent/human-capital-trends.html` (used in post 2)
- `gdpr.eu/what-is-gdpr/` (used in post 6)
- `en.wikipedia.org/wiki/Information_privacy` (used in post 6)
- `europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence` (used in post 6)

Use WebFetch on each planned URL and confirm it returns real content.
Record: URL, source name, the specific claim it supports.

---

## STEP 4 — Source Pexels images

**Images already in use across the site — do not reuse any of these:**

`4578660`, `4604607`,
`8294566`, `8294619`, `8294654`, `8294663`,
`8386358`, `8386440`,
`8438945`, `8438951`, `8439174`,
`8566464`, `8566467`, `8566470`, `8566526`, `8849295`,
`16027824`, `16380905`, `16380906`, `16461434`,
`17483867`, `17483870`, `17483871`, `17483873`, `17483874`,
`17485658`, `17485741`, `17486102`,
`18069490`, `18069697`, `18069816`, `18548425`, `18799044`,
`25626516`, `30767251`, `34804018`

**All images on this site are AI-themed.** Every image must connect visually to
artificial intelligence, machine learning, robotics, or technology. No people at desks,
no office corridors, no rain-streaked windows.

**For each image (1 hero + 4–5 inline + 1 card), find candidates via WebFetch:**

```
https://www.pexels.com/search/[search term]/
```

Good search terms: `artificial intelligence`, `AI technology`, `machine learning`,
`humanoid robot`, `neural network`, `futuristic technology`, `AI robot`,
`AI visualization`, `robot arm`, `AI chat interface`.

**Preferred photographers for AI imagery:**
- Google DeepMind (`@googledeepmind`) — abstract neural network art
- Tara Winstead (`@tara-winstead`) — AI concept illustrations
- Kindel Media (`@kindelmedia`) — humanoid robots
- Pavel Danilyuk (`@pavel-danilyuk`) — robot toys, VR, AI workspaces
- Sanket Mishra (`@sanketgraphy`) — AI apps and interfaces
- Matheus Bertelli (`@bertellifotografia`) — AI chat screens

For each chosen photo, fetch the Pexels page to confirm:
- Photo ID, photographer name and URL slug
- The image is **landscape orientation** (width > height). Many AI robot images are portrait — check before downloading.
- It actually depicts what you think it does

**Download and convert to WebP — with JPEG/PNG fallback:**

Some Pexels images (especially Google DeepMind) are PNGs. The script tries JPEG first,
falls back to PNG automatically.

```js
// Write to /tmp/download_post_images.js and run with node
const sharp = require('/Users/adamrother/Claude Code/Blog - Josh Forti/node_modules/sharp')
const https = require('https')
const path = require('path')

const dest = '/Users/adamrother/Claude Code/Blog - Josh Forti/public/images/pexels'
const ids = ['PHOTOID', 'PHOTOID'] // replace with actual IDs

function tryFetch(url) {
  return new Promise(resolve => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode !== 200) { res.resume(); resolve(null); return }
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve(Buffer.concat(chunks)))
    }).on('error', () => resolve(null))
  })
}

async function download(id) {
  for (const ext of ['jpeg', 'png']) {
    const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
    const buf = await tryFetch(url)
    if (buf && buf.length > 5000) return buf
  }
  return null
}

async function main() {
  for (const id of ids) {
    const buf = await download(id)
    if (!buf) { console.log(`✗ ${id}: failed`); continue }
    const out = path.join(dest, `${id}.webp`)
    const info = await sharp(buf).webp({ quality: 85 }).toFile(out)
    const orient = info.width > info.height ? 'LANDSCAPE' : 'PORTRAIT'
    console.log(`${orient === 'LANDSCAPE' ? '✓' : '✗ PORTRAIT'} ${id}.webp — ${info.width}x${info.height}`)
  }
}
main()
```

**After downloading, verify orientation:**
```js
// Quick check — run separately if needed
const sharp = require('/Users/adamrother/Claude Code/Blog - Josh Forti/node_modules/sharp')
const ids = ['PHOTOID']
;(async () => {
  for (const id of ids) {
    const m = await sharp(`/Users/adamrother/Claude Code/Blog - Josh Forti/public/images/pexels/${id}.webp`).metadata()
    console.log(id, m.width > m.height ? 'LANDSCAPE' : 'PORTRAIT ← REJECT', m.width + 'x' + m.height)
  }
})()
```

Discard any portrait image and find a landscape replacement before proceeding.

Record: photo ID, photographer name, photographer URL, Pexels page URL, confirmed landscape dimensions.

**No image may appear more than once across the entire site** (covers, heroes, body images
across all existing posts + this new post). Add new photo IDs to the blocklist above
after shipping each post.

---

## STEP 5 — Write the post file

Create: `/Users/adamrother/Claude Code/Blog - Josh Forti/content/posts/SLUG.tsx`

### File structure — match `intelligence-as-a-service.tsx` exactly

```tsx
// Keyword cluster this post targets:
// Primary:   [primary keyword]
// Secondary: [kw] | [kw] | [kw]
// LSI:       [kw] | [kw] | [kw]
//            [kw] | [kw] | [kw]

import type { PostEntry } from './index'
import DefinitionBox from '@/components/DefinitionBox'

const heroSrc = '/images/pexels/PHOTOID.webp'
const img1Src = '/images/pexels/PHOTOID.webp'
// ... one const per inline image

function PexelsImage({
  src,
  alt,
  photographer,
  photographerUrl,
  pexelsUrl,
}: {
  src: string
  alt: string
  photographer: string
  photographerUrl: string
  pexelsUrl: string
}) {
  return (
    <figure className="my-10 -mx-4 sm:mx-0">
      <div className="overflow-hidden rounded-xl aspect-video">
        <img
          src={src}
          alt={alt}
          width={940}
          height={627}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-2 text-xs text-muted text-right">
        Photo by{' '}
        <a
          href={photographerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-ink transition-colors"
        >
          {photographer}
        </a>{' '}
        on{' '}
        <a
          href={pexelsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-ink transition-colors"
        >
          Pexels
        </a>
      </figcaption>
    </figure>
  )
}

function PostBody() {
  return (
    <div className="prose-content">

      {/* Featured snippet — direct answer, primary keyword in first 2 sentences */}
      <p>[Direct answer. No preamble. No "In today's world." Answer first. 40–80 words.]</p>
      <p>[One-sentence kicker that earns the rest of the article.]</p>

      {/* DefinitionBox — place here if introducing a new category term */}
      {/* <DefinitionBox term="[Term]" definition="[1–2 sentence definition, no em dashes]" /> */}

      <h2 id="ANCHOR">[H2 — may be a question or statement]</h2>
      <p>...</p>

      <PexelsImage
        src={img1Src}
        alt="[Descriptive. Primary keyword used naturally where it fits.]"
        photographer="[Name]"
        photographerUrl="https://www.pexels.com/@[slug]"
        pexelsUrl="https://www.pexels.com/photo/PHOTOID/"
      />

      {/*
        Pattern: H2 → paragraphs → PexelsImage → repeat
        External links: 2–3, verified, diverse sources
        All external <a>: target="_blank" rel="noopener noreferrer"
        Internal links: minimum 3 — always "/" and "/blog", plus relevant published posts
        Internal <a>: className="underline underline-offset-2 hover:text-gold transition-colors"
        Blockquote (Josh's founding insight): use <blockquote><p>...</p><footer>Josh Forti, Founder, Client Intelligence</footer></blockquote>
        Second-to-last H2: always "Who this is for — and who should not [X]"
        Last content block: Client Intelligence CTA paragraph + blog link (no pricing figures — do not mention setup cost or monthly fee in blog post CTAs)

        COMPARISON TABLES — never use a plain <table>. Use the styled component below.
        Template 3 posts (comparisons / "vs") always need one. Other post types may include
        one if a direct feature-by-feature comparison adds clarity.

        Desktop: 4-column (or 3-column) grid with column headers + data rows.
        Mobile: stacked cards, one per criterion, showing each tool's value + the winning row
        highlighted with gold-accessible label.

        Pattern for a 4-column comparison (adjust col count as needed):
      */}

      {/* Desktop comparison table — hidden on mobile */}
      <div className="hidden sm:block my-10 overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-4">
          <div className="px-5 py-3 bg-card-hover border-b border-border">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-faint">Criterion</p>
          </div>
          <div className="px-5 py-3 bg-card-hover border-b border-l border-border">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-faint">[Tool A]</p>
          </div>
          <div className="px-5 py-3 bg-card-hover border-b border-l border-border">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-faint">[Tool B]</p>
          </div>
          <div className="px-5 py-3 bg-ink border-b border-l border-ink">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold">[Winning option]</p>
          </div>
        </div>
        {/* One div per row: border-b border-border on all except last */}
        <div className="grid grid-cols-4 border-b border-border">
          <div className="px-5 py-4"><p className="text-sm font-medium text-ink leading-snug">[Criterion]</p></div>
          <div className="px-5 py-4 border-l border-border"><p className="text-sm text-muted leading-snug">[Value]</p></div>
          <div className="px-5 py-4 border-l border-border"><p className="text-sm text-muted leading-snug">[Value]</p></div>
          <div className="px-5 py-4 border-l border-border bg-gold-light"><p className="text-sm font-medium text-ink leading-snug">[Value]</p></div>
        </div>
      </div>

      {/* Mobile comparison cards — visible only below sm */}
      <div className="sm:hidden my-10 -mx-4 overflow-hidden border-y border-border">
        <div className="px-4 py-3 bg-card-hover border-b border-border">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-faint">Tool comparison</p>
        </div>
        {/* One div per criterion row */}
        <div className="px-4 py-4 border-b border-border bg-white">
          <p className="text-sm font-semibold text-ink mb-3">[Criterion]</p>
          <div className="space-y-2">
            <div className="flex justify-between gap-4">
              <span className="text-[10px] uppercase tracking-[0.1em] font-medium text-faint w-20 flex-shrink-0">[Tool A]</span>
              <span className="text-xs text-muted text-right">[Value]</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-[10px] uppercase tracking-[0.1em] font-medium text-faint w-20 flex-shrink-0">[Tool B]</span>
              <span className="text-xs text-muted text-right">[Value]</span>
            </div>
            <div className="flex justify-between gap-4 pt-2 border-t border-border">
              <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-gold-accessible w-20 flex-shrink-0">[Winner]</span>
              <span className="text-xs text-ink font-medium text-right">[Value]</span>
            </div>
          </div>
        </div>
        {/* Last row: no border-b */}
        <div className="px-4 py-4 bg-white">
          <p className="text-sm font-semibold text-ink mb-3">[Criterion]</p>
          <div className="space-y-2">
            <div className="flex justify-between gap-4">
              <span className="text-[10px] uppercase tracking-[0.1em] font-medium text-faint w-20 flex-shrink-0">[Tool A]</span>
              <span className="text-xs text-muted text-right">[Value]</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-[10px] uppercase tracking-[0.1em] font-medium text-faint w-20 flex-shrink-0">[Tool B]</span>
              <span className="text-xs text-muted text-right">[Value]</span>
            </div>
            <div className="flex justify-between gap-4 pt-2 border-t border-border">
              <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-gold-accessible w-20 flex-shrink-0">[Winner]</span>
              <span className="text-xs text-ink font-medium text-right">[Value]</span>
            </div>
          </div>
        </div>
      </div>

      {/* END table template — remove the template blocks above, keep only real data */}

      {/*

    </div>
  )
}

export const post: PostEntry = {
  images: {
    hero: {
      src: heroSrc,
      alt: '[Descriptive. Primary keyword used naturally. Under 125 chars.]',
      width: 940,
      height: 627,
      photographer: '[Name]',
      photographerUrl: 'https://www.pexels.com/@[slug]',
      pexelsUrl: 'https://www.pexels.com/photo/PHOTOID/',
    },
  },
  toc: [
    { id: 'ANCHOR', label: '[Label matching H2 text, phrased as reader would say it]' },
    // one entry per H2, in order
    { id: 'faq', label: 'Frequently asked questions' },
  ],
  faq: [
    { q: '[Natural-language question]', a: '[2–4 sentence answer. Direct. No em dashes.]' },
    // 6–8 items. One must be "who should NOT use this."
  ],
  // howToSteps — required for Template 2 (how-to) posts only:
  // howToSteps: [
  //   { name: '[Step name]', text: '[1–2 sentence description. No em dashes.]' },
  // ],
  Body: PostBody,
}
```

---

## STEP 6 — Voice and engagement requirements

Apply these during writing, not in a cleanup pass afterward.

### Josh's formula — follow this sequence across the post:
1. **Start with truth.** Direct answer. A principle. A problem with the world. No preamble.
2. **Attack the lie.** Name the conventional wisdom that is wrong. Be specific.
3. **Apply first principles.** Break the problem down from scratch. Question what everyone accepts.
4. **Establish the stronger frame.** State what is actually true with certainty. No hedging.
5. **Offer the solution.** Simple. Clean. Direct. Zero fluff.
6. **Tie to freedom, truth, or mission.** Make it matter beyond the immediate tactical point.
7. **Close with confidence, not hype.** Human and direct. No rallying cry.

### Human psychology and engagement — required in every post

These are what keep readers reading. Apply at least four of these per post:

**Curiosity gaps:** Open sections with something that makes the reader want to know more.
"Here's the part nobody explains..." / "Most people skip this. It is the most important one."

**Loss framing:** Make the reader feel what they are missing with the current approach.
"Every session where your AI starts from zero is a session where you are not applying your
methodology. You are applying the internet's." Make the cost of inaction concrete.

**Pattern interrupts:** After a dense explanation, drop a single punchy sentence.
"That is the whole thing." / "The ceiling is not you. It is the structure." These land
hardest as one-sentence paragraphs standing alone.

**Concrete scenarios:** Make abstract points feel real. Instead of "your methodology is
applied consistently" write "Client 15 gets the same quality of thinking Client 1 got.
Not because you worked 15 times harder. Because the system does not have bad days."

**Contrast engine:** Old way vs new way, stated crisply. Do not just explain the new model.
Make the old model feel obviously broken first. "Before: rebuild context every engagement.
After: it is already there."

**Identity framing:** Help readers see themselves as someone who already gets it —
or who is about to. "The practitioners who see this clearly are not smarter. They just
stopped accepting the wrong constraint."

**Specificity:** Numbers, timelines, and scenarios make claims real. "Most solo consulting
practices hit a ceiling at 6–8 clients. Not because the work degrades. Because the model
was designed to produce exactly that ceiling."

### Voice — from `references/voice.md`
- Short sentences land harder. Use them after a setup.
- One idea per sentence. Two if they are in tension.
- Numbers replace adjectives. "Four clients" not "several clients."
- Use his phrasing patterns organically — one or two per post, not more:
  "Here's the truth..." / "Most people get this wrong..." / "Think about it." /
  "Let me be honest with you..." / "Let's look at this from first principles..." /
  "The insane part is..." / "Here's what nobody tells you..."
- Cadence: fast → fast → slow (for weight) → fast. Vary paragraph length.

### Humour — from `references/humour.md`
One dry beat maximum. Must target one of his specific triggers:
- Fake gurus and low-integrity frameworks
- Overly complicated tool stacks that produce no results
- Hype with nothing behind it
- Bureaucracy and slowness

Place it in the opening third or in a section exposing an industry failure.
Never in: pricing, CTA, FAQ, author bio.

### Opinions — from `references/opinions.md`
One of Josh's seven documented opinions per post. Must be backed by:
- A verified stat from `references/stats.md`, OR
- A working external link verified in Step 3, OR
- Josh's founding insight from `references/stories.md`

### Stories — from `references/stories.md`
Only three verified stories exist. Do not invent others:
1. Josh's founding insight quote — use as `<blockquote>` with `<footer>` attribution,
   `&ldquo;` / `&rdquo;` for quote marks, no em dashes in the footer
2. Josh's mission narrative — use as emotional weight behind a freedom/time argument
3. The live demo moment — 30-person event, real-time onboarding closed the room; use as
   proof of product conviction or "show don't tell" moment; one use per post maximum

### Stats — from `references/stats.md`
Do not round. Do not approximate. If a number cannot be verified, cut the claim.
Do NOT include pricing figures ($5,000 setup, $1,000/month) anywhere in blog post body
copy, CTA paragraphs, or FAQ answers. Pricing exists in `references/stats.md` for
internal reference only — it must not appear in published posts.

### Hard stops — delete any sentence matching these before finishing:
- "In today's [X] world..."
- "It's no secret that..."
- "Whether you're a... or a..."
- "That's where [product] comes in."
- "At the end of the day..."
- "This is a game-changer." / any use of "game-changer"
- "Take your [X] to the next level."
- "As a [role], you know that..."
- Any sentence with "seamless", "streamline", "unlock potential", "empower", "leverage" as verb
- "The possibilities are endless"
- Rhetorical question as a punchline ("Sound familiar?")
- Bullet list of generic benefits with no specifics
- Anything that reads like a LinkedIn post
- Em dashes (— or &mdash;) — replace with a period, comma, or colon
- Any mention of pricing: "$5,000", "$1,000/month", "setup fee", "per month", "no contracts" — pricing must never appear in blog posts

---

## STEP 7 — GEO (AI citation) requirements

These make the post citable by AI systems (ChatGPT, Claude, Perplexity):

- **Opening paragraph:** 40–80 word direct answer block. Primary keyword in first sentence.
  Self-contained — an AI should be able to quote it as a complete answer.
- **H2 sections:** Each should be self-contained enough that it makes sense without the
  surrounding context. AI systems pull individual sections.
- **Question headings:** At least 50% of H2/H3 headings phrased as questions.
- **DefinitionBox:** Required whenever a new category term or model is introduced.
  Term and definition must be consistent with how they appear across all other posts.
- **Entity consistency:** Use the exact same phrasing for brand/concept names throughout
  ("Intelligence as a Service", "Client Intelligence", "per-client workspace") — no variation.
- **Update `public/llms.txt`** after shipping: add the new post URL and a one-line description.

---

## STEP 8 — On-page SEO checklist

Confirm every item before creating any file:

- [ ] Primary keyword in: first 100 words, at least one H2 anchor `id`, hero image alt
- [ ] Title under 60 chars, primary keyword near front
- [ ] Excerpt 150–160 chars, keyword included, reads like copy not a list
- [ ] Canonical URL auto-set by `app/blog/[slug]/page.tsx`
- [ ] Open Graph and Twitter Card auto-set from `content/blog.ts`
- [ ] Article, BreadcrumbList, FAQPage JSON-LD — all auto-generated by page template
- [ ] HowTo JSON-LD — auto-generated when `howToSteps` is present in PostEntry
- [ ] Author byline and Person schema — auto-generated from `content/blog.ts`
- [ ] TOC populated from `toc` array
- [ ] FAQ section populated from `faq` array
- [ ] 3–5 internal links (minimum: `/` and `/blog`, plus any relevant published posts)
- [ ] 2–3 external links — verified working, diverse source types
- [ ] Word count 2,000–2,800
- [ ] One image per major section, never two in a row
- [ ] All images have descriptive alt text with keyword used naturally
- [ ] No image ID reused from the blocklist in Step 4

---

## STEP 9 — Add to content/blog.ts

Append to the `blogPosts` array:

```ts
{
  slug: 'SLUG',
  title: '[Primary keyword near front. Under 60 chars.]',
  excerpt:
    '[150–160 chars exactly. Keyword included. Reads like copy. No exclamation mark. No em dash.]',
  keywords:
    '[primary keyword], [secondary], [secondary], [lsi], [lsi], [lsi], [lsi]',
  category: '[Business Model | Operations | AI & Tools | Strategy]',
  author: 'Josh Forti',
  authorRole: 'Founder, Client Intelligence',
  authorBio:
    'Josh Forti is the founder of Client Intelligence. He has spent the last decade building and advising service-based businesses, and created the Intelligence as a Service model to give consultants, coaches, and agencies a scalable structure for deploying their expert IP.',
  publishDate: '[YYYY-MM-DD — today\'s date]',
  readTime: [body word count ÷ 200, rounded to nearest integer],
  featured: false,
  coverImage: {
    src: '/images/pexels/HERO_PHOTOID.webp',
    alt: '[Same alt text as hero image in the post file]',
    photographer: '[Name]',
    photographerUrl: 'https://www.pexels.com/@[slug]',
    pexelsUrl: 'https://www.pexels.com/photo/HERO_PHOTOID/',
  },
},
```

The `coverImage` is what displays on the home page and blog listing cards. It must be a
**different image from the post hero** — both AI-themed, but distinct. The card image is
sourced in Step 4 as one of the 1 hero + 4–5 inline + 1 card images. Both IDs must be
added to the blocklist after shipping.

---

## STEP 10 — Register in content/posts/index.ts

Add import below existing imports:
```ts
import { post as camelCaseSlug } from './SLUG'
```
Variable name = slug in camelCase (`howToScaleConsulting` for `how-to-scale-consulting`).

Add to `postRegistry`:
```ts
'SLUG': camelCaseSlug,
```

---

## STEP 11 — Update public/llms.txt

Open `public/llms.txt` and add the new post to the Key Blog Posts section:
```
- /blog/SLUG — [One sentence describing what this post answers]
```

---

## STEP 12 — Voice check (before building)

Read the full `PostBody` aloud mentally. Delete or rewrite any sentence matching the
hard stops list in Step 6.

Then check specifically:
- Opening paragraph: direct answer, no preamble, keyword in first two sentences
- At least one pattern interrupt (single-sentence paragraph used as a truth-bomb)
- At least one loss-framing moment (what the reader is losing with the old approach)
- At least one concrete scenario (specific numbers or situation, not abstract claims)
- The "who should not" section is present and honest — Josh always tells people when to walk away
- No em dashes anywhere in the file (search for `—` and `&mdash;`)
- No exclamation marks

If it sounds like a brand talking instead of a person thinking, rewrite the opener.
Josh sounds like a smart operator explaining something clearly to a peer — not a company
publishing content.

---

## STEP 13 — Build and verify

```bash
cd "/Users/adamrother/Claude Code/Blog - Josh Forti" && npm run build 2>&1 | tail -30
```

Must see:
- `✓ Generating static pages` with zero errors
- New slug present in the route list
- All routes showing `○ (Static)` or `● (SSG)`

Verify meta description in the static output:
```bash
grep -o 'name="description" content="[^"]*"' \
  "/Users/adamrother/Claude Code/Blog - Josh Forti/.next/server/app/blog/SLUG/page.html"
```

Do not report done until both pass. If the build fails, diagnose and fix before responding.

---

## STEP 14 — Restart the dev server

```bash
# Kill whatever is on 3000, then start fresh
kill $(lsof -ti:3000) 2>/dev/null
sleep 1
cd "/Users/adamrother/Claude Code/Blog - Josh Forti" && npm run dev &
sleep 4 && lsof -i :3000 | grep LISTEN
```

Report the port the server started on (may be 3001 if 3000 is unavailable).
Post is live at `http://localhost:[PORT]/blog/SLUG`.

---

## Quick reference

| Element | Rule |
|---|---|
| Opening | Direct answer 40–80 words, keyword in first sentence, no preamble |
| Formula | Truth → Attack the lie → First principles → Stronger frame → Solution → Mission → Confidence |
| Psychology | Curiosity gaps, loss framing, pattern interrupts, concrete scenarios, contrast, identity |
| DefinitionBox | Required for any new category term introduced in the post |
| Phrasing | 1–2 of Josh's verbatim patterns per post — no more |
| Humour | 1 dry beat max, one of his specific triggers, opening third of post |
| Opinion | 1 of his 7 documented opinions, backed by verified evidence |
| Story | Only founding insight quote OR mission narrative — no others |
| Links | 2–3 external verified, diverse source types; 3+ internal |
| "Not for you" | Always present, second-to-last H2 |
| Stats | No pricing figures in posts — $5,000/$1,000/month must not appear in body copy, CTAs, or FAQs |
| Images | AI-themed, landscape only; 1 hero + 4–5 inline + 1 card; never repeated across any page on the site |
| Banned | No em dashes, no exclamation marks, no emoji, no AI-tell phrases, no generic benefit lists |
