import Link from 'next/link'
import { features } from '@/seo-pages/content/features'

export const metadata = {
  title: 'Client Intelligence Features — What\'s Inside',
  description: 'Per-client AI memory, isolated workspaces, Brain Dump Mode, Blueprint Execution Layer — explore every feature built for multi-client professional service delivery.',
}

export default function FeaturePage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-4">Features</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink mb-6 leading-tight tracking-tight">
          Built for How You Actually Work
        </h1>
        <p className="text-muted text-lg mb-16 max-w-2xl">
          Every feature in Client Intelligence is designed specifically for multi-client professional service delivery — not adapted from tools built for something else.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={`/feature/${feature.slug}`}
              className="bg-white rounded-card border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-brand ease-brand group"
            >
              <h2 className="font-medium text-ink mb-2 group-hover:text-gold-accessible transition-colors duration-brand ease-brand">
                {feature.label}
              </h2>
              <p className="text-sm text-muted line-clamp-2">{feature.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
