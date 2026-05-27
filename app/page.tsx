import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import FadeIn from '@/components/FadeIn'
import { blogPosts } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Client Intelligence — AI for Consultants & Agency Owners',
  description:
    'Resources, guides, and frameworks for consultants who want to scale their practice without adding hours. Powered by Client Intelligence.',
  alternates: {
    canonical: 'https://learn.clientintelligence.ai',
  },
  openGraph: {
    title: 'Client Intelligence — AI for Consultants & Agency Owners',
    description:
      'Resources, guides, and frameworks for consultants who want to scale their practice without adding hours.',
    url: 'https://learn.clientintelligence.ai',
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: 'Client Intelligence' }],
  },
  twitter: {
    title: 'Client Intelligence — AI for Consultants & Agency Owners',
    description:
      'Resources, guides, and frameworks for consultants who want to scale their practice without adding hours.',
    images: ['/og/home.png'],
  },
}

const sorted = [...blogPosts].sort(
  (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
)
const featuredPost = sorted[0]
const recentPosts = sorted.slice(1, 4)

export default function HomePage() {
  return (
    <>
      {/* ── Hero — pull up by nav height (-mt-16) so dark bg starts at very top ── */}
      <section className="landing-hero-bg -mt-16 pt-52 sm:pt-60 pb-24 sm:pb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mx-auto max-w-[800px] text-center">
            <FadeIn>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-6">
                Intelligence as a Service
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="warm-gradient-heading font-sans font-semibold text-[40px] sm:text-[56px] lg:text-[72px] tracking-[-0.04em] leading-[1.0] mb-6 text-balance">
                Your brain, applied intelligently to every client.
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mx-auto max-w-[560px] text-[18px] text-faint leading-[1.7] mb-10">
                Resources and frameworks for consultants, agency owners, and fractional operators
                who are done being the bottleneck.
              </p>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
                <a
                  href="https://clientintelligence.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-xl px-8 text-[15px] font-semibold bg-gold text-ink transition-colors hover:bg-gold-hover w-full sm:w-auto justify-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <Link
                  href="/blog"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-gold/30 px-8 text-[15px] font-semibold text-gold transition-colors hover:bg-gold/10 w-full sm:w-auto justify-center"
                >
                  Read the Blog
                </Link>
              </div>
              <p className="text-xs text-faint">
                $5,000 setup · $1,000/month. No contracts. Cancel anytime.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Featured post ── */}
      {featuredPost && (
        <section className="bg-cream py-24 sm:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <FadeIn>
              <div className="flex items-end justify-between mb-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold">
                  From the blog
                </p>
                <Link
                  href="/blog"
                  className="text-sm text-gold-accessible hover:text-gold transition-colors underline-offset-2 hover:underline"
                >
                  All posts →
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={80}>
              <BlogCard post={featuredPost} featured />
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Recent posts ── */}
      {recentPosts.length > 0 && (
        <section className="bg-white py-6 pb-24 sm:pb-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 80}>
                  <BlogCard post={post} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA block — dark background ── */}
      <section className="landing-cta-bg py-24 sm:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="warm-gradient-heading font-sans font-semibold text-[28px] sm:text-[38px] lg:text-[44px] tracking-[-0.02em] leading-[1.1] mb-6 text-balance">
              Start applying your intelligence to every client.
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <p className="text-[18px] text-faint leading-[1.7] mb-10 max-w-[560px] mx-auto">
              Join client-based business owners who have stopped being the bottleneck.
            </p>
          </FadeIn>
          <FadeIn delay={160}>
            <a
              href="https://clientintelligence.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 rounded-xl px-10 text-[16px] font-semibold bg-gold text-ink transition-colors hover:bg-gold-hover w-full sm:w-auto justify-center"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <p className="text-sm text-faint mt-5">
              $5,000 setup · $1,000/month. No contracts. Cancel anytime.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
