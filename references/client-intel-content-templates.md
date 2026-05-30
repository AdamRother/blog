# Client Intelligence — Content Templates & Generation Workflow
## Copy-Paste Structures for Claude Code

> Use this file together with `blog-optimization-instructions.md`. That file defines **what** every page must include (SEO + GEO layers). This file defines **how** to structure and generate different content types.

---

## 0. GLOBAL GENERATION RULES

Apply these rules to **every** piece of content generated for clientintelligence.com.

1. **Audience:** Service business owners (agencies, consultants, coaches, fractional execs) with proprietary frameworks, sub-$5M revenue, already using AI.
2. **Category language:** Always reinforce:
   - "Intelligence as a Service"
   - "Client Intelligence"
   - "centralized IP, per-client isolation"
   - "per-client AI memory"
   - "your brain applied intelligently to all your clients"
3. **Excluded framing:** Never position as:
   - "AI operating system", "Client OS", "Agency OS"
   - Generic project management tool
   - Generic "ChatGPT wrapper" or "all the models in one place"
4. **Tone:** Direct-response, operator-focused, practical, no fluff. Write like an experienced operator advising another operator.
5. **Voice:** No hype, no generic AI fluff. Use specific examples, concrete language, and real situations.

Whenever a template below refers to:
- **[PK]** — primary keyword (from keyword universe)
- **[SK]** — secondary keyword(s)
- **[INTENT]** — intent type (informational / commercial / comparison / persona)
- **[PERSONA]** — e.g., fractional CRO, RevOps consultant, funnel agency, methodology-driven coach

---

## 1. TEMPLATE — PILLAR / DEFINITION ARTICLE

**Use for:** Category-definition topics and cluster pillars (e.g., "What is Intelligence as a Service", "How to Scale Your Service Business Without Hiring").  
**Target length:** 2,500–4,000 words.

### 1.1 Structure

1. **H1 — [PK] explained for [PERSONA/AVATAR]**
2. **Opening Direct Answer Block (80–120 words)**
   - Define [PK] in one or two sentences.
   - State who it is for and what problem it solves.
   - Mention Client Intelligence as the concrete example of this concept.
3. **H2 — What is [PK]?**
   - Simple, human definition.
   - Include a `<DefinitionBox>` component for the key term.
4. **H2 — Why [PK] matters for [PERSONA]**
   - 3–5 concrete pains.
   - Show old way vs new way.
5. **H2 — How [PK] works in practice**
   - Break down into 3–6 steps or components.
   - Use bullets or numbered lists.
6. **H2 — Key benefits of [PK] for service businesses**
   - 4–7 benefit bullets with short explanations.
   - Tie each benefit to a specific outcome (time saved, clients served, revenue potential).
7. **H2 — How Client Intelligence implements [PK]**
   - Explain architecture in plain terms (Brain, Workspaces, Intelligence Mode) — use these exact terms, see references/product.md.
   - Map each component of [PK] to a real feature.
8. **H2 — Examples and scenarios**
   - 3–5 short scenario stories for different personas (agency, consultant, coach, fractional CRO).
9. **H2 — Common mistakes and misconceptions about [PK]**
   - 3–7 mistakes; for each: what people think vs what actually works.
10. **H2 — How to get started with [PK] in your business**
    - Concrete 3–7 step plan; low-friction starting point.
11. **H2 — FAQ: [PK]**
    - 4–8 questions pulled directly from natural-language AI query phrasing.
    - Each answer 40–100 words, direct and self-contained.
12. **Closing CTA section**
    - Short paragraph summarizing why [PK] matters.
    - CTA: point clearly to a relevant product page or demo.

### 1.2 Generation Steps

1. Confirm [PK], [INTENT] = informational, and the cluster it belongs to.
2. Generate the full outline using the structure above.
3. For each H2/H3, write a 1–2 sentence section summary first.
4. Expand each section using specific examples for named personas and concrete, operator language.
5. At the end, auto-generate FAQ questions using AI query phrases.
6. Ensure the first 80–120 words answer "What is [PK]?" in a self-contained way.

---

## 2. TEMPLATE — HOW-TO / IMPLEMENTATION GUIDE

**Use for:** Process-based topics (e.g., "How to Train AI on Your Consulting Framework", "How to Scale Without Hiring").  
**Target length:** 1,800–2,500 words.

### 2.1 Structure

1. **H1 — How to [Goal] with [PK]**
2. **Opening Direct Answer Block (60–100 words)**
   - One-sentence summary of the process.
   - Who it is for.
   - What "done" looks like.
3. **H2 — Who this process is for (and not for)**
   - Bullet list: "This is for you if…" / "This is not for you if…"
4. **H2 — Prerequisites before you start**
   - Tools, assets, existing IP/frameworks needed.
5. **H2 — Step-by-step: How to [Goal]**
   - H3 per step.
   - For each step:
     - **Step title** starting with a verb ("Map your frameworks", "Set up client workspaces").
     - 2–4 sentences explaining what to do.
     - 1–2 sentences explaining why it matters.
   - Supply these steps as `howToSteps` in the post registry for HowTo schema.
6. **H2 — Examples for different personas**
   - One sub-section per persona (H3): e.g. "Example: Fractional CRO", "Example: Funnel Agency".
7. **H2 — Common failure modes and how to avoid them**
   - List 3–7 mistakes; give a practical fix for each.
8. **H2 — What to measure after implementation**
   - 3–5 metrics tied to outcomes (e.g., client capacity, time per deliverable, margin).
9. **H2 — FAQ: Implementing [PK]**
   - 4–8 FAQ items from AI query list.
10. **Closing CTA**
    - Position Client Intelligence as the fastest implementation path.

### 2.2 Generation Steps

1. Confirm the exact outcome the user wants.
2. Turn that outcome into an H1 and direct-answer intro.
3. List steps at a high level before writing them.
4. For each step, always include: what to do, why it matters, what it looks like inside Client Intelligence when relevant.
5. Supply `howToSteps` array entries in the post registry so the page template can render HowTo schema automatically.
6. Generate FAQs that correspond to typical "how do I" questions.

---

## 3. TEMPLATE — COMPARISON / ALTERNATIVES ARTICLE

**Use for:** Commercial intent queries (e.g., "Client Intelligence vs ChatGPT Projects", "Best ChatGPT alternative for consultants").  
**Target length:** 1,500–2,000 words.

### 3.1 Structure

1. **H1 — [Tool A] vs [Tool B] for [PERSONA] in 2025/2026**
2. **TL;DR Comparison Box (above the fold)**
   - 2–4 bullets summarizing who each tool is best for.
   - One-line recommendation for each.
3. **H2 — Quick summary: when to pick which**
4. **H2 — Evaluation criteria**
   - 5–7 criteria (e.g., data isolation, framework training, multi-client use, pricing, ease of setup).
5. **H2 — Comparison table**
   - Rows: criteria. Columns: each tool. Cells: concise, factual differences.
6. **H2 — Deep dive: [Tool A]**
   - What it is. Strengths. Limitations for your target persona.
7. **H2 — Deep dive: [Tool B / Client Intelligence]**
   - What it is. Strengths. Where it is a better fit for the persona.
8. **H2 — Which should you choose if you are a [PERSONA]?**
9. **H2 — Alternatives to [Tool A] and [Tool B]**
10. **H2 — FAQ: Choosing between [Tool A] and [Tool B]**
    - 4–6 FAQs.
11. **Closing CTA**

### 3.2 Generation Steps

1. Identify the two main options being compared (one must be Client Intelligence for these pages).
2. List factual features/limitations for each.
3. Define evaluation criteria that matter to the persona (e.g., per-client isolation, using proprietary frameworks).
4. Fill the comparison table with concise, neutral statements.
5. In "Which should you choose" section: prioritize fit over hype; make it easy for the right people to self-select into Client Intelligence.

---

## 4. TEMPLATE — PERSONA / PROGRAMMATIC LANDING PAGE

**Use for:** Programmatic/persona-specific pages (e.g., `/for/fractional-cro`, `/for/revops-consultants`).  
**Target length:** 600–1,000 words.

### 4.1 Structure

1. **H1 — The AI platform for [PERSONA] who [Primary Outcome]**
2. **Subhead — One sentence framing the pain and the promise**
3. **Hero bullets (3–5 bullets)** — each: outcome + specificity.
4. **H2 — Why [PERSONA]s hit a ceiling with generic AI and tools**
5. **H2 — How Client Intelligence works for [PERSONA]**
6. **H2 — What you can do with Client Intelligence as a [PERSONA]**
7. **H2 — Example: A day in the life using Client Intelligence**
8. **H2 — Is Client Intelligence a fit for you?**
   - "This is for you if" / "This is not for you if" bullets.
9. **H2 — FAQ: [PERSONA] + Client Intelligence**
   - 4–6 FAQs that answer the most likely objections.
10. **CTA block** — strong outcome-focused CTA.

### 4.2 Generation Steps

1. Pull [PERSONA] + primary outcome from the keyword list.
2. Fill in template sections with persona-specific language (no generic text).
3. Ensure at least one mention of: centralizing IP, per-client isolation, applying the persona's frameworks to each client.
4. Keep the page skimmable: short sections, bullets, clear CTA.

> **Note:** Persona pages require new routes at `app/for/[persona]/page.tsx`. Confirm folder structure before implementing — see plan discussion re: new `content/personas/` folder.

---

## 5. TEMPLATE — CASE STUDY / CUSTOMER STORY

**Use for:** Social proof and E-E-A-T building.  
**Target length:** 900–1,400 words.

### 5.1 Structure

1. **H1 — [Outcome] in [Timeframe]: How a [PERSONA] Used Client Intelligence**
2. **Subhead:** One sentence with context + a secondary metric.
3. **Snapshot box (above the fold)** — persona type, business size, time to value, 2–3 key metrics.
4. **H2 — The situation before Client Intelligence**
5. **H2 — The bottleneck they hit**
6. **H2 — Why they chose Client Intelligence**
7. **H2 — What they implemented**
8. **H2 — The results** — 3–5 bullet metrics with timeframes.
9. **H2 — What changed in their day-to-day**
10. **H2 — Their advice to similar operators**
11. **CTA**

### 5.2 Generation Steps

1. Identify the persona and main outcome.
2. Use narrative: Situation → Bottleneck → Solution → Results.
3. Make metrics directional and realistic (e.g., "3× more clients without hiring").
4. Emphasize the role of centralized frameworks + per-client isolation in the outcome.

---

## 6. TEMPLATE — FAQ-ONLY RESOURCE PAGE

**Use for:** Question-driven topics (e.g., "Is ChatGPT safe for client work?", "How does per-client AI memory work?").  
**Target length:** 800–1,200 words.

### 6.1 Structure

1. **H1 — [Topic]: Frequently Asked Questions**
2. **Intro paragraph:** 40–60 words explaining the purpose.
3. **H2 — [Question 1]** — 2–4 paragraph answer.
4. **H2 — [Question 2]**
5. **H2 — [Question 3]**
6. **H2 — [Question 4]**
7. **H2 — Additional questions about [Topic]** — short Q&A bullets.
8. **Closing CTA**

### 6.2 Generation Steps

1. Pull questions directly from the AI query list for this bucket.
2. Elevate the 4 most important questions to H2s.
3. Answer each clearly and completely — assume the answer might be quoted alone.
4. Apply FAQ schema at the page level.

---

## 7. META-WORKFLOW — HOW TO USE THESE TEMPLATES

### Step 1 — Choose template
- [INTENT] = informational, broad topic → Template 1 (Pillar)
- [INTENT] = how-to / implementation → Template 2
- [INTENT] = comparison / "vs" / "alternatives" → Template 3
- [INTENT] = persona landing page → Template 4
- Content = proof / success story → Template 5
- Page is purely questions → Template 6

### Step 2 — Build outline
- Generate the full H1/H2/H3 outline using the chosen template structure.
- Inject [PK], [PERSONA], and cluster language where relevant.

### Step 3 — Fill sections
- For each H2/H3: start with a 1–2 sentence summary, then expand.
- Keep paragraphs short (3–4 sentences max).

### Step 4 — Apply optimization layers
After writing, run through checklists in `blog-optimization-instructions.md` Layer 10:
- On-page SEO (titles, meta, headings, URL, internal links)
- Schema (BlogPosting, FAQ, HowTo, Breadcrumb)
- E-E-A-T (author, dates, sources)
- GEO elements (direct answer block, question headings, FAQ, llms.txt update)
- Voice check: re-read `references/voice.md` → "Tells that it's AI-written"

### Step 5 — Output format
Return:
- Title tag (under 60 chars)
- Meta description (under 160 chars)
- URL slug suggestion
- H1–H3 outline
- Full body content (as `.tsx` using the post body format)
- Suggested internal links with anchor text
- FAQ block (q/a pairs for post registry)
- `howToSteps` array (if applicable, for post registry)
- `keywords` string (for `content/blog.ts` entry)

### Step 6 — Validation prompts (optional)
- "Check if this post answers the primary keyword directly in the first 100 words. If not, rewrite the intro."
- "List any missing subtopics that top-ranking pages for [PK] include. Add sections to cover those gaps."
- "Suggest 5 AI chat-style queries this post should be cited for, based on its content."

---

*End of content templates & workflow file.*
