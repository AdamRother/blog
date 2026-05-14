import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import BlogIndex from '@/components/BlogIndex'
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
      {/* Page header */}
      <section className="bg-cream border-b border-border py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.2em] mb-5">
            The Blog
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-ink mb-5 leading-tight text-balance">
            Consulting, AI, and the business of expertise
          </h1>
          <p className="text-muted leading-relaxed max-w-lg mx-auto">
            Frameworks, tactics, and honest takes for consultants, agency owners, and fractional
            operators — and the tools they use to deliver better work at scale.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-6 py-10 sm:py-16">
          <p className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.15em] mb-5">
            Latest
          </p>
          <BlogCard post={featuredPost} featured />
        </section>
      )}

      {/* All posts — shown only when additional posts exist */}
      {restPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-14 sm:pb-24">
          <h2 className="font-serif text-2xl text-ink mb-8">All posts</h2>
          <BlogIndex posts={restPosts} />
        </section>
      )}

      {/* Coming soon — shown while blog is just getting started */}
      {restPosts.length === 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-14 sm:pb-24">
          <div className="border border-border rounded-2xl p-12 text-center">
            <div className="w-6 h-px bg-gold mx-auto mb-6" />
            <p className="font-serif text-xl text-ink mb-3">More posts are on the way.</p>
            <p className="text-muted text-sm max-w-sm mx-auto">
              New guides publish regularly. In the meantime, the product is at{' '}
              <a
                href="https://clientintelligence.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-accessible hover:text-gold-accessible-dark underline underline-offset-2 transition-colors"
              >
                clientintelligence.ai
              </a>
              .
            </p>
          </div>
        </section>
      )}
    </>
  )
}
