import Link from 'next/link'
import { painPoints } from '@/seo-pages/content/pain-points'

export const metadata = {
  title: 'Common Pain Points — Client Intelligence Solves Them',
  description: 'Stuck as the bottleneck? Can\'t take on more clients? AI mixing your client data? Client Intelligence is built to solve the core pain points of multi-client service delivery.',
}

export default function PainPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-4">Pain Points</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight tracking-tight">
          Sound Familiar?
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          The frustrations that come with scaling a multi-client service business are real. Here's what Client Intelligence solves.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((pain) => (
            <Link
              key={pain.slug}
              href={`/pain/${pain.slug}`}
              className="bg-white rounded-card border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-brand ease-brand group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors duration-brand ease-brand">
                {pain.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{pain.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
