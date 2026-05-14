import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
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
      {/* Hero */}
      <section className="bg-cream min-h-[88vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.2em] mb-7">
            Intelligence as a Service
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-[4.5rem] text-ink leading-[1.08] mb-6 text-balance">
            Your brain, applied intelligently to every client.
          </h1>
          <p className="text-muted text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Resources and frameworks for consultants, agency owners, and fractional operators
            who are done being the bottleneck.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://clientintelligence.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-cream text-sm font-medium px-7 py-3.5 rounded-full hover:bg-ink/80 transition-colors"
            >
              Start 14-day free trial →
            </a>
            <Link
              href="/blog"
              className="border border-border text-ink text-sm font-medium px-7 py-3.5 rounded-full hover:border-ink transition-colors"
            >
              Read the blog
            </Link>
          </div>
          <p className="text-muted text-xs mt-5">
            $97/month after trial · Cancel anytime
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl text-ink">From the blog</h2>
            <Link href="/blog" className="text-sm text-gold-accessible hover:text-gold-accessible transition-colors underline-offset-2 hover:underline">
              All posts →
            </Link>
          </div>
          <BlogCard post={featuredPost} featured />
        </section>
      )}

      {/* Recent posts — only shown when more posts exist */}
      {recentPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-12 sm:pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* CTA block */}
      <section className="bg-[#1C1700] py-16 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-8 h-px bg-gold mx-auto mb-10" />
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight text-balance">
            Start applying your intelligence to every client.
          </h2>
          <p className="text-white/50 mb-10 leading-relaxed max-w-md mx-auto">
            Join client-based business owners who have stopped being the bottleneck.
          </p>
          <a
            href="https://clientintelligence.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-ink text-sm font-medium px-8 py-3.5 rounded-full hover:bg-gold-dark transition-colors"
          >
            Start your 14-day free trial →
          </a>
          <p className="text-white/50 text-xs mt-5">$97/month after trial · Cancel anytime</p>
        </div>
      </section>
    </>
  )
}
