import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/content/blog'
import { postRegistry } from '@/content/posts'
import FadeIn from '@/components/FadeIn'

const BASE = 'https://learn.clientintelligence.ai'

export function generateStaticParams() {
  const slugs = Object.keys(postRegistry)
  if (slugs.length === 0) return [{ slug: '_empty' }]
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = blogPosts.find(p => p.slug === slug)
  if (!meta) return {}

  const url = `${BASE}/blog/${slug}`
  const title = meta.title
  const description = meta.excerpt

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: meta.publishDate,
      authors: [meta.author],
      images: [{ url: `${BASE}/og/blog-${slug}.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { title, description, images: [`${BASE}/og/blog-${slug}.png`] },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = postRegistry[slug]
  const meta = blogPosts.find(p => p.slug === slug)

  if (!post || !meta) notFound()

  const { Body, toc, faq, images, howToSteps } = post

  const url = `${BASE}/blog/${slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: meta.title,
    description: meta.excerpt,
    keywords: meta.keywords,
    datePublished: meta.publishDate,
    dateModified: meta.publishDate,
    url,
    image: {
      '@type': 'ImageObject',
      url: images.hero.src.startsWith('http') ? images.hero.src : `${BASE}${images.hero.src}`,
      width: images.hero.width,
      height: images.hero.height,
      description: images.hero.alt,
    },
    author: {
      '@type': 'Person',
      name: meta.author,
      jobTitle: meta.authorRole,
      description: meta.authorBio,
      url: 'https://clientintelligence.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Client Intelligence',
      url: BASE,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: url },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const howToSchema = howToSteps ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: meta.title,
    description: meta.excerpt,
    step: howToSteps.map(s => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  } : null

  const formattedDate = new Date(meta.publishDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <article>
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-3xl mx-auto px-6 pt-10 pb-2"
        >
          <ol className="flex items-center gap-2 text-xs text-muted">
            <li>
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-border">
              /
            </li>
            <li>
              <Link href="/blog" className="hover:text-ink transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-border">
              /
            </li>
            <li className="text-ink truncate max-w-[200px]">{meta.title}</li>
          </ol>
        </nav>

        {/* Article header */}
        <header className="max-w-3xl mx-auto px-6 pt-8 pb-10">
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-4">
              {meta.category}
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 className="font-sans font-semibold text-[32px] sm:text-[40px] md:text-[48px] tracking-[-0.03em] leading-[1.1] text-ink mb-6 text-balance">
              {meta.title}
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="text-[18px] text-muted leading-[1.7] mb-8">{meta.excerpt}</p>
          </FadeIn>
          <div className="flex items-center gap-4 pb-8 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-card-hover flex items-center justify-center flex-shrink-0">
              <span className="font-sans text-sm font-semibold text-ink">
                {meta.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">{meta.author}</p>
              <p className="text-xs text-muted">{meta.authorRole}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-xs text-muted">
                <span className="text-muted">Published </span>{formattedDate}
              </p>
              <p className="text-xs text-muted">{meta.readTime} min read</p>
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <div className="overflow-hidden rounded-2xl aspect-video">
            <img
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <p className="mt-2 text-xs text-muted text-right">
            Photo by{' '}
            <a
              href={images.hero.photographerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-ink transition-colors"
            >
              {images.hero.photographer}
            </a>{' '}
            on{' '}
            <a
              href={images.hero.pexelsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-ink transition-colors"
            >
              Pexels
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-16 sm:pb-24">
          {/* Table of contents */}
          <nav
            aria-label="Table of contents"
            className="bg-white border border-border rounded-card p-6 mb-12"
          >
            <p className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.15em] mb-4">
              In this post
            </p>
            <ol className="space-y-2">
              {toc.map((item, i) => (
                <li key={item.id} className="flex gap-3">
                  <span aria-hidden="true" className="text-xs text-muted/50 mt-0.5 font-mono w-4 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted hover:text-gold-accessible transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article body */}
          <div className="article-body">
            <Body />
          </div>

          {/* FAQ */}
          <section id="faq" className="mt-16 pt-12 border-t border-border">
            <h2 className="font-sans font-semibold text-2xl text-ink mb-8">Frequently asked questions</h2>
            <div className="space-y-8">
              {faq.map((item, i) => (
                <div key={i}>
                  <h3 className="font-medium text-ink mb-2">{item.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Author bio */}
          <section aria-label="About the author" className="mt-16 pt-12 border-t border-border flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-card-hover flex items-center justify-center flex-shrink-0">
              <span className="font-sans text-base font-semibold text-ink">
                {meta.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.15em] mb-1">About the author</p>
              <p className="font-medium text-ink text-sm mb-2">{meta.author}</p>
              <p className="text-muted text-sm leading-relaxed">{meta.authorBio}</p>
            </div>
          </section>

          {/* Back to top */}
          <div className="mt-12 text-center">
            <a
              href="#main-content"
              className="inline-block text-xs text-muted hover:text-ink transition-colors border border-border rounded-full px-4 py-2"
            >
              ↑ Back to top
            </a>
          </div>

          {/* CTA */}
          <FadeIn>
            <div className="mt-16 bg-ink rounded-card p-8 md:p-10 text-center">
              <div className="w-6 h-px bg-gold mx-auto mb-6" />
              <p className="font-sans font-semibold text-[22px] text-white mb-3">
                Ready to put this into practice?
              </p>
              <p className="text-white/50 text-sm mb-6 max-w-sm mx-auto">
                Client Intelligence loads your frameworks once and applies them to every client, in
                their own isolated workspace.
              </p>
              <a
                href="https://clientintelligence.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gold text-ink text-[15px] font-semibold px-8 hover:bg-gold-hover transition-colors duration-brand ease-brand"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <p className="text-white/50 text-xs mt-4">$5,000 setup · $1,000/month. No contracts.</p>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  )
}
