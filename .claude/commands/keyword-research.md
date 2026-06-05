# /keyword-research — Research and queue new keyword candidates

Execute every step in order. Do not skip steps. Do not ask for confirmation between steps.

---

## STEP 0 — Read everything first

Read ALL of these files before doing anything else:

1. `references/client-intelligence-keywords-only.md` — the full keyword list, all 7 buckets, exact format
2. `content/blog.ts` — every published post (slug, title, keywords array, category)
3. `references/product.md` — what CI is, the three-layer architecture, the ICP
4. `references/voice.md` — who CI serves and, critically, who it does NOT serve

Do not generate a single keyword until you have read all four files.

---

## STEP 1 — Map current coverage

Before researching, understand what already exists.

**Extract from `content/blog.ts`:**
- Every primary keyword that already has a published post
- Every topic clearly covered by title or slug (e.g. a post titled "How to Scale Consulting Without Hiring" means the keyword "how to scale consulting without hiring" is covered)

**Count posts per bucket** by matching post topics to the 7 bucket themes:
- Bucket 1: Category-Definition Intent
- Bucket 2: Pain-Aware Intent
- Bucket 3: Solution-Aware Intent
- Bucket 4: Category-Replacement Intent
- Bucket 5: Methodology / Framework Intent
- Bucket 6: Revenue-Oriented Niche Intent
- Bucket 7: Data Isolation Intent

**Identify the 3 buckets with the fewest published posts.** Target all research at those 3.

**Note every unused keyword** — keywords already in the file but without a published post. These are already queued. Do not re-add them.

---

## STEP 1.5 — Check if research is actually needed

Before doing any web research, run this check in Bash:

```bash
# Count keyword entries in the main 7 buckets (stop before AI Indexing Queries section)
KEYWORDS=$(awk '/^## AI Indexing Queries/{exit} /^- /{count++} END{print count}' references/client-intelligence-keywords-only.md)
# Count published posts
POSTS=$(grep -c '"slug":' content/blog.ts || echo 0)
UNUSED=$((KEYWORDS - POSTS))
echo "Keywords in pool: $KEYWORDS | Published posts: $POSTS | Estimated unused: $UNUSED"
```

**If UNUSED > 10:** Output the following message exactly and STOP — do not run Step 2 or beyond, do not modify any files:

```
POOL SUFFICIENT — no research needed.
Keywords in pool: [KEYWORDS]
Published posts: [POSTS]
Estimated unused: [UNUSED]
Research will run automatically when unused keywords drop to 10 or below.
```

**If UNUSED ≤ 10:** Continue to Step 2. The pool needs replenishment.

---

## STEP 2 — Web research (minimum 20 searches, 8 page fetches)

Run at least 20 WebSearch queries across all the categories below. After each search, fetch the 1–2 most relevant result URLs with WebFetch to understand what angles already exist and where the gaps are. Minimum 8 WebFetch calls total.

The goal of this step is to surface enough raw material to generate 300+ candidate phrases. Cast wide.

**Group A — Community and question searches (run all 5):**
1. `"AI for consultants" questions problems 2026 site:reddit.com`
2. `"AI agency workflow" OR "AI client work" problems questions site:reddit.com`
3. `"how to scale consulting" OR "consulting bottleneck" AI 2026`
4. `"AI tools for coaches" OR "AI for online business" questions 2026`
5. `"client data AI" OR "AI multiple clients" privacy isolation questions`

**Group B — One search per bucket (run all 7, one per bucket):**
6. Bucket 1 (Category-Definition): `"intelligence as a service" OR "per-client AI workspace" definition explained 2026`
7. Bucket 2 (Pain-Aware): `"scaling service business without hiring" OR "founder bottleneck AI" how to 2026`
8. Bucket 3 (Solution-Aware): `best AI tools consultants agencies 2026 comparison alternatives`
9. Bucket 4 (Category-Replacement): `"courses dying" OR "coaching model AI" future 2026`
10. Bucket 5 (Methodology): `"train AI on your framework" OR "productize methodology AI" how to`
11. Bucket 6 (Revenue Niche): `AI tools fractional executives coaches "named methodology" 2026`
12. Bucket 7 (Data Isolation): `"AI client data separate" OR "per-client AI memory" GDPR consulting 2026`

**Group C — Competitor and comparison searches (run all 4):**
13. `ChatGPT Projects limitations agencies consultants 2026`
14. `Claude Projects vs alternatives for client work consultants`
15. `Notion AI limitations problems consultants agencies`
16. `ClickUp AI OR "project management AI" consultants problems 2026`

**Group D — Long-tail and persona searches (run all 4):**
17. `"one-person agency" OR "solopreneur consultant" AI tools systems 2026`
18. `"fractional CMO" OR "fractional CRO" OR "fractional CFO" AI tools workflow`
19. `"boutique consulting firm" AI workflow scale clients 2026`
20. `"high-ticket coaching" OR "high-ticket consulting" AI deliver scale 2026`

**For each search, extract every phrase that:**
- People are actually searching or asking
- Represents a pain, question, comparison, or job-to-be-done
- Does not already appear in `references/client-intelligence-keywords-only.md`

**Also: for the top 3 themes surfaced, generate keyword clusters.** A cluster is a core phrase plus 8–12 variations covering: how-to angle, what-is angle, "[X] for [persona]" angle, "[X] vs [Y]" angle, "[X] without [pain]" angle, question format, year-specific variant. Each variation is a separate keyword entry.

**Immediately discard anything that involves:**
- Enterprise, large teams, Fortune 500
- Free tools, open-source, DIY AI builds
- Verticals CI doesn't serve (HR, healthcare, legal, real estate)
- General productivity unrelated to client work
- Any phrase already in `references/client-intelligence-keywords-only.md`

---

## STEP 3 — Generate and filter candidates

From your research, generate at least 300 raw keyword candidates before filtering. The goal after filtering is a minimum of 200 clean entries to add to the file.

**How to reach 300+ raw candidates:**
- Every search should yield 10–20 phrases
- For every strong core theme, generate a full cluster: the base phrase + variations for each angle (how-to, what-is, for-persona, vs-competitor, without-pain, question format, 2026/2027 year variant) — each variation is a separate entry
- Cover all 7 buckets — do not cluster everything into 2 or 3 buckets
- Prioritise search volume signals: phrases that appear repeatedly across different searches and sources rank higher

**Apply this filter to every candidate:**

KEEP if ALL are true:
- Not already in `references/client-intelligence-keywords-only.md` (check the file — do not guess)
- Not already the primary topic of a published post in `content/blog.ts`
- 2–7 words, natural search phrasing, all lowercase
- Searcher intent leads to wanting CI's product (per-client workspace, methodology-trained AI, scale without hiring)
- CI's ICP would search this: solo consultants, boutique firms (1–15 people), coaches with named methodologies, agency owners who sell their process

REJECT if ANY are true:
- Already in the keyword file or covered by a published post
- Implies enterprise or large-team buyer
- Intent is to find free or open-source tools
- Vertical-specific and not generalisable to CI's cross-sector ICP
- Too vague or too broad to rank ("AI for business 2026")
- Exact duplicate of a phrase already queued (minor wording differences that target the same intent are fine — they cover different search phrasings)

**Minimum after filtering: 200 clean keyword entries.** If you fall short, go back to Step 2 and run additional searches until you have enough.

---

## STEP 4 — Append to the keyword file

Open `references/client-intelligence-keywords-only.md` and append new keywords to the appropriate sections.

**Non-negotiable rules:**
- Do NOT reorder, reformat, or change any existing content in the file
- Do NOT create new bucket sections — only add to the 7 that exist
- Add a comment line immediately before your first addition in each bucket: `# Added YYYY-MM-DD`
- Each keyword line: `- keyword phrase here` (lowercase, no trailing punctuation, no quotes)
- Append at the end of the bucket's existing list, before the next `##` header
- Also add 2–3 natural-language question versions of the strongest new keywords to the matching AI Indexing Queries subsection at the bottom of the file
- Question format: `- How do I [X]?` or `- What is [X]?` — match the style of existing entries exactly

Use Edit (not Write) to make these changes — never rewrite the whole file.

---

## STEP 5 — Output a clean summary

After writing the file, output this exact block:

```
RESEARCH COMPLETE

New keywords added: [total count]
Buckets updated: [bucket names]

[Bucket name]: [count] new keywords
[Bucket name]: [count] new keywords
...

Searches run:
- [query 1]
- [query 2]
...

Pages reviewed:
- [URL 1]
- [URL 2]
...
```

Output nothing else after this block.
