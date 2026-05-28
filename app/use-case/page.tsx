import Link from 'next/link'
import { useCases } from '@/seo-pages/content/use-cases'

export const metadata = {
  title: 'How To Use Client Intelligence — Use Cases',
  description: 'Learn how to scale consulting, protect client data, encode your methodology, and deliver consistent results with Client Intelligence.',
}

export default function UseCasePage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-4">Use Cases</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight tracking-tight">
          What You Can Do With Client Intelligence
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          From scaling your practice to protecting client data — here's how consultants and agencies are putting Client Intelligence to work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((uc) => (
            <Link
              key={uc.slug}
              href={`/use-case/${uc.slug}`}
              className="bg-white rounded-card border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-brand ease-brand group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors duration-brand ease-brand">
                {uc.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{uc.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
