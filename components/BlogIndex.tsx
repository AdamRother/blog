'use client'

import { useState, useMemo } from 'react'
import type { BlogPost } from '@/content/blog'
import { blogCategories } from '@/content/blog'
import BlogCard from './BlogCard'

const POSTS_PER_PAGE = 9

type Props = {
  posts: BlogPost[]
}

export default function BlogIndex({ posts }: Props) {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const matchCat = category === 'All' || p.category === category
      const q = search.toLowerCase()
      const matchSearch =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [posts, category, search])

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  const handleCategory = (cat: string) => {
    setCategory(cat)
    setPage(1)
  }

  const handleSearch = (val: string) => {
    setSearch(val)
    setPage(1)
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {blogCategories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                category === cat
                  ? 'bg-ink text-cream border-ink'
                  : 'bg-white text-ink border-border hover:border-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="sm:ml-auto">
          <input
            type="search"
            placeholder="Search posts..."
            value={search}
            onChange={e => handleSearch(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 text-sm border border-border rounded-full bg-white focus:outline-none focus:border-ink placeholder:text-muted/60"
          />
        </div>
      </div>

      {/* Grid */}
      {paginated.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-muted text-sm">No posts match your search.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginated.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 text-sm border border-border rounded-full disabled:opacity-30 hover:border-ink transition-colors"
          >
            ← Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`w-9 h-9 rounded-full text-sm border transition-colors ${
                page === i + 1 ? 'bg-ink text-cream border-ink' : 'border-border hover:border-ink'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 text-sm border border-border rounded-full disabled:opacity-30 hover:border-ink transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}
