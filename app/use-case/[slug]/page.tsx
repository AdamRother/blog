import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { useCases } from '@/seo-pages/content/use-cases'
import PSEOHero from '@/components/pseo/PSEOHero'
import ProblemBlock from '@/components/pseo/ProblemBlock'
import FeatureGrid from '@/components/pseo/FeatureGrid'
import ScenarioCards from '@/components/pseo/ScenarioCards'
import PSEOSchema from '@/components/pseo/PSEOSchema'
import FAQSection from '@/components/pseo/FAQSection'
import CTABlock from '@/components/pseo/CTABlock'

export async function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const uc = useCases.find((u) => u.slug === slug)
  if (!uc) return {}
  return {
    title: uc.h1,
    description: uc.metaDescription,
  }
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const uc = useCases.find((u) => u.slug === slug)
  if (!uc) notFound()

  const BASE_URL = 'https://clientintelligence.ai'
  const pageUrl = `${BASE_URL}/use-case/${uc.slug}`

  return (
    <>
      <PSEOSchema
        name={uc.h1}
        description={uc.metaDescription}
        url={pageUrl}
        faqs={uc.faqs}
        breadcrumbs={[
          { name: 'Home', url: BASE_URL },
          { name: 'Use Cases', url: `${BASE_URL}/use-case` },
          { name: uc.label, url: pageUrl },
        ]}
      />
      <main>
        <PSEOHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Use Cases', href: '/use-case' },
            { label: uc.label, href: `/use-case/${uc.slug}` },
          ]}
          eyebrow="How To"
          h1={uc.h1}
          subheadline={uc.metaDescription}
          ctaPrimary="Learn More"
          ctaSecondary="See How It Works"
          ctaSecondaryHref="#how-it-works"
        />

        <ProblemBlock
          headline="The Problem With Current Approaches"
          pain={uc.metaDescription}
          bullets={uc.steps.map((s) => s.title)}
        />

        <div id="how-it-works">
          <FeatureGrid
            headline="How to Do It with Client Intelligence"
            items={uc.steps.map((s) => ({ title: `Step ${s.step}: ${s.title}`, description: s.body }))}
          />
        </div>

        <ScenarioCards
          headline="Real Results from Real Practices"
          scenarios={uc.scenarios}
        />

        <FAQSection faqs={uc.faqs} />

        <CTABlock
          headline="Ready to Put This Into Practice?"
          subtext="Client Intelligence gives you the per-client memory, framework encoding, and delivery leverage you need. No long-term contracts."
          cta="Learn More →"
        />
      </main>
    </>
  )
}
