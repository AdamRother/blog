import Link from 'next/link'
import { categories } from '@/seo-pages/content/categories'

export const metadata = {
  title: 'Intelligence as a Service — Category Definitions',
  description: 'Understand the categories that define the future of service businesses: IaaS, per-client AI memory, AI workspaces, and why services now scale better than education.',
}

export default function CategoryPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-4">Category Definitions</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight tracking-tight">
          The New Language of Service Delivery
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          Intelligence as a Service. Per-client AI memory. AI workspaces for service businesses. These are the categories defining the next era of expert-led businesses.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="bg-white rounded-card border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-brand ease-brand group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors duration-brand ease-brand">
                {cat.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{cat.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
