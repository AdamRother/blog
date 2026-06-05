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

**If UNUSED > 100:** Output the following message exactly and STOP — do not run Step 2 or beyond, do not modify any files:

```
POOL SUFFICIENT — no research needed.
Keywords in pool: [KEYWORDS]
Published posts: [POSTS]
Estimated unused: [UNUSED]
Research will run automatically when unused keywords drop to 100 or below.
```

**If UNUSED ≤ 100:** Continue to Step 2. The pool needs replenishment.

---

## STEP 2 — Web research (minimum 6 searches, 3 page fetches)

Run at least 6 WebSearch queries. After each search, fetch the 1–2 most relevant result URLs with WebFetch to understand content depth and angles. Minimum 3 WebFetch calls total.

**Required searches (run all six):**

1. `"AI for consultants" OR "AI for agencies" questions 2026 site:reddit.com`
2. `"consulting AI workflow" OR "AI client delivery" how to 2026`
3. `"how to scale consulting" OR "how to scale agency" AI without hiring 2026`
4. `"AI client data privacy" OR "AI data isolation per client" questions`
5. A search targeting the #1 under-represented bucket from Step 1 (use its core theme)
6. A search targeting the #2 under-represented bucket from Step 1

**For each search, record:**
- Recurring questions that don't match any existing keyword
- New angles on covered topics (same intent, different phrasing that could rank)
- Pain points or comparisons CI hasn't addressed yet

**Immediately discard anything that involves:**
- Enterprise, large teams, Fortune 500
- Free tools, open-source, DIY AI builds
- Verticals CI doesn't serve (HR, healthcare, legal, real estate)
- General productivity unrelated to client work
- Any phrase already in `references/client-intelligence-keywords-only.md`

---

## STEP 3 — Generate and filter candidates

From your research, generate 15–25 keyword candidates. Apply this filter to every single one before proceeding:

**KEEP if ALL are true:**
- Not already in `references/client-intelligence-keywords-only.md` (check the file — do not guess)
- Not already the primary topic of a published post in `content/blog.ts`
- 2–6 words, natural search phrasing, all lowercase
- Searcher intent leads to wanting CI's product (per-client workspace, methodology-trained AI, scale without hiring)
- CI's ICP would search this: solo consultants, boutique firms (1–15 people), coaches with named methodologies, agency owners who sell their process

**REJECT if ANY are true:**
- Already in the keyword file or covered by a published post
- Implies enterprise or large-team buyer
- Intent is to find free or open-source tools
- Vertical-specific and not generalisable to CI's cross-sector ICP
- Too vague or too broad to rank ("AI for business 2026")
- Phrase is an obvious variation of one already queued (don't add both "AI for solo consultants" and "AI for solopreneur consultants" if one already exists)

After filtering, target 10–20 clean, distinct candidates.

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
