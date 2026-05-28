import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { personas } from '@/seo-pages/content/personas'
import PSEOHero from '@/components/pseo/PSEOHero'
import ProblemBlock from '@/components/pseo/ProblemBlock'
import FeatureGrid from '@/components/pseo/FeatureGrid'
import ScenarioCards from '@/components/pseo/ScenarioCards'
import FitCheck from '@/components/pseo/FitCheck'
import PSEOSchema from '@/components/pseo/PSEOSchema'
import FAQSection from '@/components/pseo/FAQSection'
import CTABlock from '@/components/pseo/CTABlock'

const CORE_FEATURES = [
  { title: 'Per-Client AI Memory', description: 'Every client gets their own isolated AI workspace with persistent memory across all sessions.' },
  { title: 'Your Frameworks, Not Templates', description: 'Train Client Intelligence on your methodology. Every output reflects your thinking, not generic AI.' },
  { title: 'Centralized IP, Applied Intelligently', description: 'Your frameworks live in your Account Brain and apply automatically to every client engagement.' },
  { title: 'Data Never Mixes Between Clients', description: 'Structural isolation guarantees that Client A\'s information never appears in Client B\'s workspace.' },
  { title: 'Brain Dump Mode', description: 'Capture your expertise in any format — voice memos, docs, rough notes — and Client Intelligence structures it.' },
  { title: 'Execution Layer Built In', description: 'Move from strategy to delivery with AI-powered Blueprints that apply your methodology step by step.' },
]

export async function generateStaticParams() {
  return personas.map((p) => ({ persona: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ persona: string }> }): Promise<Metadata> {
  const { persona: personaSlug } = await params
  const persona = personas.find((p) => p.slug === personaSlug)
  if (!persona) return {}
  return {
    title: `Client Intelligence for ${persona.label}`,
    description: persona.metaDescription,
  }
}

export default async function PersonaPage({ params }: { params: Promise<{ persona: string }> }) {
  const { persona: personaSlug } = await params
  const persona = personas.find((p) => p.slug === personaSlug)
  if (!persona) notFound()

  const BASE_URL = 'https://clientintelligence.ai'
  const pageUrl = `${BASE_URL}/for/${persona.slug}`

  return (
    <>
      <PSEOSchema
        name={`Client Intelligence for ${persona.label}`}
        description={persona.metaDescription}
        url={pageUrl}
        faqs={persona.faqs}
        breadcrumbs={[
          { name: 'Home', url: BASE_URL },
          { name: 'Built For', url: `${BASE_URL}/for` },
          { name: persona.label, url: pageUrl },
        ]}
      />
      <main>
        <PSEOHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Built For', href: '/for' },
            { label: persona.label, href: `/for/${persona.slug}` },
          ]}
          eyebrow={`Built for ${persona.label}`}
          h1={`The AI Platform for ${persona.label}`}
          subheadline={`${persona.pain} ${persona.outcome}`}
          ctaPrimary="Learn More"
          ctaSecondary="See the Features"
          ctaSecondaryHref="#features"
        />

        <ProblemBlock
          headline="The Problem You're Probably Here Because Of"
          pain={persona.pain}
          bullets={persona.scenarios.map((s) => s.title)}
        />

        <div id="features">
        <FeatureGrid
          headline="How Client Intelligence Works For You"
          items={CORE_FEATURES}
        />
        </div>

        <ScenarioCards
          headline={`How ${persona.label} Use Client Intelligence`}
          scenarios={persona.scenarios}
        />

        <FitCheck
          forYou={persona.forYou}
          notForYou={persona.notForYou}
        />

        <FAQSection faqs={persona.faqs} />

        <CTABlock
          headline={`Ready to Scale Your ${persona.label} Practice?`}
          subtext="Join consultants and agencies building with Intelligence as a Service. No long-term contracts."
          cta="Learn More →"
        />
      </main>
    </>
  )
}
