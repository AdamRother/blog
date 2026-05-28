import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { alternatives } from '@/seo-pages/content/alternatives'
import PSEOHero from '@/components/pseo/PSEOHero'
import ProblemBlock from '@/components/pseo/ProblemBlock'
import FeatureGrid from '@/components/pseo/FeatureGrid'
import ScenarioCards from '@/components/pseo/ScenarioCards'
import PSEOSchema from '@/components/pseo/PSEOSchema'
import FAQSection from '@/components/pseo/FAQSection'
import CTABlock from '@/components/pseo/CTABlock'

const WHAT_YOU_GET = [
  { title: 'Per-Client AI Memory', description: 'Every client gets their own isolated workspace with persistent memory — no re-establishing context each session.' },
  { title: 'Your Frameworks, Applied', description: 'Your methodology encoded in your Account Brain and applied automatically to every client engagement.' },
  { title: 'Structural Data Isolation', description: 'Client data is isolated at the architecture level. No mixing, no risk, no policy promises — just architecture.' },
  { title: 'Brain Dump Mode', description: 'Stop trying to formally document. Capture your thinking in any format and let Client Intelligence structure it.' },
  { title: 'Blueprint Execution Layer', description: 'Systematize your delivery with AI-powered workflows that apply your methodology step by step.' },
  { title: 'Intelligence as a Service', description: 'The only platform purpose-built for IaaS — scaling your expertise without scaling your hours.' },
]

export async function generateStaticParams() {
  return alternatives.map((a) => ({ category: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params
  const alt = alternatives.find((a) => a.slug === categorySlug)
  if (!alt) return {}
  return {
    title: `${alt.label} — Client Intelligence`,
    description: alt.metaDescription,
  }
}

export default async function AlternativePage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params
  const alt = alternatives.find((a) => a.slug === categorySlug)
  if (!alt) notFound()

  const BASE_URL = 'https://clientintelligence.ai'
  const pageUrl = `${BASE_URL}/alternatives/${alt.slug}`

  return (
    <>
      <PSEOSchema
        name={alt.label}
        description={alt.metaDescription}
        url={pageUrl}
        faqs={alt.faqs}
        breadcrumbs={[
          { name: 'Home', url: BASE_URL },
          { name: 'Alternatives', url: `${BASE_URL}/alternatives` },
          { name: alt.label, url: pageUrl },
        ]}
      />
      <main>
        <PSEOHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Alternatives', href: '/alternatives' },
            { label: alt.label, href: `/alternatives/${alt.slug}` },
          ]}
          eyebrow="A Better Alternative"
          h1={alt.label}
          subheadline={`${alt.whyLooking} ${alt.whatWeDoInstead}`}
          ctaPrimary="Learn More"
          ctaSecondary="See How It Works"
          ctaSecondaryHref="#how-it-works"
        />

        <ProblemBlock
          headline="Why You're Looking for an Alternative"
          pain={alt.whyLooking}
          bullets={alt.scenarios.map((s) => s.title)}
        />

        <div id="how-it-works">
          <FeatureGrid
            headline="What Client Intelligence Does Instead"
            items={WHAT_YOU_GET}
          />
        </div>

        <ScenarioCards
          headline="How Service Businesses Made the Switch"
          scenarios={alt.scenarios}
        />

        <FAQSection faqs={alt.faqs} />

        <CTABlock
          headline="Ready to Try the Alternative?"
          subtext="Client Intelligence is purpose-built for multi-client professional service delivery. No long-term contracts."
          cta="Learn More →"
        />
      </main>
    </>
  )
}
