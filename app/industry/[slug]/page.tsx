import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { industries } from '@/seo-pages/content/industries'
import PSEOHero from '@/components/pseo/PSEOHero'
import ProblemBlock from '@/components/pseo/ProblemBlock'
import ScenarioCards from '@/components/pseo/ScenarioCards'
import FitCheck from '@/components/pseo/FitCheck'
import PSEOSchema from '@/components/pseo/PSEOSchema'
import FAQSection from '@/components/pseo/FAQSection'
import CTABlock from '@/components/pseo/CTABlock'

const PLATFORM_FEATURES = [
  { title: 'Per-Client AI Memory', description: 'Every client gets their own isolated workspace with persistent memory across all sessions.' },
  { title: 'Your Methodology Encoded', description: 'Your frameworks live in your Account Brain and apply to every client engagement automatically.' },
  { title: 'Structural Data Isolation', description: 'Client data is architecturally isolated — not just policy-controlled.' },
  { title: 'Brain Dump Mode', description: 'Capture your expertise in any format and Client Intelligence organizes it into AI-ready frameworks.' },
  { title: 'Blueprint Execution Layer', description: 'Turn your methodology into automated delivery workflows for consistent client outcomes.' },
  { title: 'Intelligence as a Service', description: 'Scale your expertise across more clients without scaling your hours.' },
]

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)
  if (!industry) return {}
  return {
    title: industry.h1,
    description: industry.metaDescription,
  }
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)
  if (!industry) notFound()

  const BASE_URL = 'https://clientintelligence.ai'
  const pageUrl = `${BASE_URL}/industry/${industry.slug}`

  return (
    <>
      <PSEOSchema
        name={industry.h1}
        description={industry.metaDescription}
        url={pageUrl}
        faqs={industry.faqs}
        breadcrumbs={[
          { name: 'Home', url: BASE_URL },
          { name: 'By Industry', url: `${BASE_URL}/industry` },
          { name: industry.label, url: pageUrl },
        ]}
      />
      <main>
        <PSEOHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'By Industry', href: '/industry' },
            { label: industry.label, href: `/industry/${industry.slug}` },
          ]}
          eyebrow={industry.label}
          h1={industry.h1}
          subheadline={industry.pain}
          ctaPrimary="Learn More"
          ctaSecondary="See How It Works"
          ctaSecondaryHref="#how-it-works"
        />

        <ProblemBlock
          headline={`The ${industry.label} Scaling Problem`}
          pain={industry.pain}
          bullets={industry.forYou}
        />

        <div id="how-it-works">
          <ScenarioCards
            headline={`How ${industry.label} Use Client Intelligence`}
            scenarios={industry.scenarios}
          />
        </div>

        <FitCheck
          forYou={industry.forYou}
          notForYou={industry.notForYou}
        />

        <FAQSection faqs={industry.faqs} />

        <CTABlock
          headline={`Ready to Scale Your ${industry.label} Practice?`}
          subtext="Join consultants and agencies building with Intelligence as a Service. No long-term contracts."
          cta="Learn More →"
        />
      </main>
    </>
  )
}
