import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { competitors } from '@/seo-pages/content/competitors'
import PSEOHero from '@/components/pseo/PSEOHero'
import ProblemBlock from '@/components/pseo/ProblemBlock'
import ComparisonTable from '@/components/pseo/ComparisonTable'
import FeatureGrid from '@/components/pseo/FeatureGrid'
import FitCheck from '@/components/pseo/FitCheck'
import PSEOSchema from '@/components/pseo/PSEOSchema'
import FAQSection from '@/components/pseo/FAQSection'
import CTABlock from '@/components/pseo/CTABlock'

const CLIENT_INTEL_ADVANTAGES = [
  { title: 'Per-Client AI Memory', description: 'Each client gets their own isolated workspace with persistent AI memory across all sessions.' },
  { title: 'Your Methodology Encoded', description: 'Your frameworks live in your Account Brain and apply automatically to every client engagement.' },
  { title: 'Structural Data Isolation', description: 'Client data is isolated at the architecture level — not via settings or access controls.' },
  { title: 'Brain Dump Mode', description: 'Capture your expertise in any format and Client Intelligence structures it into AI-ready frameworks.' },
  { title: 'Blueprint Execution Layer', description: 'Turn your methodology into executable delivery workflows that run within client workspaces.' },
  { title: 'Intelligence as a Service', description: 'The only platform purpose-built for the IaaS model — methodology at scale, without more hours.' },
]

export async function generateStaticParams() {
  return competitors.map((c) => ({ competitor: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor: competitorSlug } = await params
  const competitor = competitors.find((c) => c.slug === competitorSlug)
  if (!competitor) return {}
  return {
    title: `Client Intelligence vs. ${competitor.label}`,
    description: competitor.metaDescription,
  }
}

export default async function CompetitorPage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor: competitorSlug } = await params
  const competitor = competitors.find((c) => c.slug === competitorSlug)
  if (!competitor) notFound()

  const BASE_URL = 'https://clientintelligence.ai'
  const pageUrl = `${BASE_URL}/vs/${competitor.slug}`

  return (
    <>
      <PSEOSchema
        name={`Client Intelligence vs. ${competitor.label}`}
        description={competitor.metaDescription}
        url={pageUrl}
        faqs={competitor.faqs}
        breadcrumbs={[
          { name: 'Home', url: BASE_URL },
          { name: 'Comparisons', url: `${BASE_URL}/vs` },
          { name: competitor.label, url: pageUrl },
        ]}
      />
      <main>
        <PSEOHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Comparisons', href: '/vs' },
            { label: competitor.label, href: `/vs/${competitor.slug}` },
          ]}
          eyebrow="Comparison"
          h1={`Client Intelligence vs. ${competitor.label}`}
          subheadline={`${competitor.theirStrength} ${competitor.ourAdvantage}`}
          ctaPrimary="Learn More"
          ctaSecondary="See the Comparison"
          ctaSecondaryHref="#comparison"
        />

        <ProblemBlock
          headline={`Why ${competitor.label} Falls Short for Multi-Client Delivery`}
          pain={competitor.theirStrength}
          bullets={competitor.forYou}
        />

        <div id="comparison">
          <ComparisonTable
            competitorLabel={competitor.label}
            rows={competitor.comparisonRows}
          />
        </div>

        <FeatureGrid
          headline="What Client Intelligence Does Differently"
          items={CLIENT_INTEL_ADVANTAGES}
        />

        <FitCheck
          forYou={competitor.forYou}
          notForYou={competitor.notForYou}
        />

        <FAQSection faqs={competitor.faqs} />

        <CTABlock
          headline={`Ready to Move Beyond ${competitor.label}?`}
          subtext="Client Intelligence is purpose-built for multi-client professional service delivery. No long-term contracts."
          cta="Learn More →"
        />
      </main>
    </>
  )
}
