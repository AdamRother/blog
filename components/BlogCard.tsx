import Link from 'next/link'
import type { BlogPost } from '@/content/blog'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

type Props = {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: Props) {
  const { coverImage } = post

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="grid md:grid-cols-2 gap-0 bg-white rounded-card border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-brand ease-brand">
          <div className="bg-card-hover aspect-[16/9] md:aspect-auto overflow-hidden">
            <img
              src={coverImage.src}
              alt={coverImage.alt}
              width={940}
              height={627}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.15em] mb-3">
              {post.category}
            </span>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-ink leading-tight mb-4 group-hover:text-gold-accessible transition-colors duration-brand ease-brand">
              {post.title}
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-muted">
              <span>{post.author}</span>
              <span className="text-border">·</span>
              <span>{formatDate(post.publishDate)}</span>
              <span className="text-border">·</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="bg-white rounded-card border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-brand ease-brand h-full flex flex-col">
        <div className="bg-card-hover aspect-[16/9] overflow-hidden">
          <img
            src={coverImage.src}
            alt={coverImage.alt}
            width={940}
            height={627}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <span className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.15em] mb-2">
            {post.category}
          </span>
          <h3 className="font-sans font-semibold text-lg text-ink leading-snug mb-3 group-hover:text-gold-accessible transition-colors duration-brand ease-brand flex-1">
            {post.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-2 text-xs text-muted mt-auto pt-2 border-t border-border">
            <span>{post.author}</span>
            <span className="text-border">·</span>
            <span>{formatDate(post.publishDate)}</span>
            <span className="text-border">·</span>
            <span>{post.readTime} min</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
