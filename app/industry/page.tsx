import Link from 'next/link'
import { industries } from '@/seo-pages/content/industries'

export const metadata = {
  title: 'Client Intelligence By Industry — Find Your Vertical',
  description: 'Client Intelligence serves marketing agencies, consulting firms, coaching businesses, fractional executives, and more. Find your industry and see how it applies.',
}

export default function IndustryPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-4">By Industry</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight tracking-tight">
          Built for Your Type of Business
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          Client Intelligence adapts to your industry's specific delivery model, client context requirements, and methodology needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industry/${industry.slug}`}
              className="bg-white rounded-card border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-brand ease-brand group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors duration-brand ease-brand">
                {industry.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{industry.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
