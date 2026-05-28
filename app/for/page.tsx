import Link from 'next/link'
import { personas } from '@/seo-pages/content/personas'

export const metadata = {
  title: 'Client Intelligence — Built For You',
  description: 'Client Intelligence is built for consultants, coaches, fractional executives, and agencies who serve multiple clients and need isolated AI workspaces and consistent framework delivery.',
}

export default function ForPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-4">Who It's Built For</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight tracking-tight">
          The AI that knows your clients as well as you do.
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          Client Intelligence is built for service providers who manage multiple clients. Pick your role and see exactly how it works for you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((persona) => (
            <Link
              key={persona.slug}
              href={`/for/${persona.slug}`}
              className="bg-white rounded-card border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-brand ease-brand group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors duration-brand ease-brand">
                {persona.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{persona.outcome}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
