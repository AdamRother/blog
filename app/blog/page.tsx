import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import BlogIndex from '@/components/BlogIndex'
import FadeIn from '@/components/FadeIn'
import { blogPosts } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Blog — Consulting, AI & Business Strategy',
  description:
    'In-depth guides and frameworks for consultants, agency owners, and fractional operators building scalable client-based businesses.',
  alternates: {
    canonical: 'https://learn.clientintelligence.ai/blog',
  },
  openGraph: {
    title: 'Blog — Client Intelligence',
    description:
      'In-depth guides and frameworks for consultants building scalable client-based businesses.',
    url: 'https://learn.clientintelligence.ai/blog',
    images: [{ url: '/og/blog.png', width: 1200, height: 630, alt: 'Client Intelligence Blog' }],
  },
  twitter: {
    title: 'Blog — Client Intelligence',
    description: 'Guides and frameworks for consultants building scalable businesses.',
    images: ['/og/blog.png'],
  },
}

const sorted = [...blogPosts].sort(
  (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
)
const featuredPost = sorted[0]
const restPosts = sorted.slice(1)

export default function BlogPage() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-cream border-b border-border py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[700px] mx-auto text-center">
            <FadeIn>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-5">
                The Blog
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="font-sans font-semibold text-[32px] sm:text-[48px] tracking-[-0.03em] leading-[1.1] text-ink mb-5 text-balance">
                Consulting, AI, and the business of expertise
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="text-[18px] text-muted leading-[1.7] max-w-[560px] mx-auto">
                Frameworks, tactics, and honest takes for consultants, agency owners, and fractional
                operators — and the tools they use to deliver better work at scale.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Featured post ── */}
      {featuredPost && (
        <section className="bg-white py-24 sm:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <FadeIn>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-5">
                Latest
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <BlogCard post={featuredPost} featured />
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── All posts ── */}
      {restPosts.length > 0 && (
        <section className="bg-cream py-12 pb-24 sm:pb-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <FadeIn>
              <h2 className="font-sans font-semibold text-[28px] tracking-[-0.02em] text-ink mb-8">
                All posts
              </h2>
            </FadeIn>
            <FadeIn delay={80}>
              <BlogIndex posts={restPosts} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Coming soon ── */}
      {restPosts.length === 0 && (
        <section className="bg-cream py-12 pb-24 sm:pb-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <FadeIn>
              <div className="border border-border rounded-card p-12 text-center">
                <div className="w-6 h-px bg-gold mx-auto mb-6" />
                <p className="font-sans font-semibold text-xl text-ink mb-3">
                  More posts are on the way.
                </p>
                <p className="text-muted text-sm max-w-sm mx-auto">
                  New guides publish regularly. In the meantime, the product is at{' '}
                  <a
                    href="https://clientintelligence.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-accessible hover:text-gold underline underline-offset-2 transition-colors"
                  >
                    clientintelligence.ai
                  </a>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}
    </>
  )
}
