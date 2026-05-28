import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { features } from '@/seo-pages/content/features'
import PSEOHero from '@/components/pseo/PSEOHero'
import FeatureGrid from '@/components/pseo/FeatureGrid'
import ScenarioCards from '@/components/pseo/ScenarioCards'
import PSEOSchema from '@/components/pseo/PSEOSchema'
import FAQSection from '@/components/pseo/FAQSection'
import CTABlock from '@/components/pseo/CTABlock'

export async function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const feature = features.find((f) => f.slug === slug)
  if (!feature) return {}
  return {
    title: feature.h1,
    description: feature.metaDescription,
  }
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const feature = features.find((f) => f.slug === slug)
  if (!feature) notFound()

  const BASE_URL = 'https://clientintelligence.ai'
  const pageUrl = `${BASE_URL}/feature/${feature.slug}`

  return (
    <>
      <PSEOSchema
        name={feature.h1}
        description={feature.metaDescription}
        url={pageUrl}
        faqs={feature.faqs}
        breadcrumbs={[
          { name: 'Home', url: BASE_URL },
          { name: 'Features', url: `${BASE_URL}/feature` },
          { name: feature.label, url: pageUrl },
        ]}
      />
      <main>
        <PSEOHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Features', href: '/feature' },
            { label: feature.label, href: `/feature/${feature.slug}` },
          ]}
          eyebrow="Feature"
          h1={feature.h1}
          subheadline={feature.metaDescription}
          ctaPrimary="Learn More"
          ctaSecondary="See the Details"
          ctaSecondaryHref="#details"
        />

        <section id="details" className="max-w-3xl mx-auto px-6 py-16">
          <div
            className="prose-content text-ink"
            dangerouslySetInnerHTML={{ __html: feature.prose.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') }}
          />
        </section>

        <FeatureGrid
          headline="What This Means in Practice"
          items={feature.featureItems}
        />

        <ScenarioCards
          headline="Real Results"
          scenarios={feature.scenarios}
        />

        <FAQSection faqs={feature.faqs} />

        <CTABlock
          headline="See It In Action"
          subtext="Experience per-client AI memory, framework encoding, and isolated workspaces in your own practice. No long-term contracts."
          cta="Learn More →"
        />
      </main>
    </>
  )
}
