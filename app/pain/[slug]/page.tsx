import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { painPoints } from '@/seo-pages/content/pain-points'
import PSEOHero from '@/components/pseo/PSEOHero'
import ProblemBlock from '@/components/pseo/ProblemBlock'
import FitCheck from '@/components/pseo/FitCheck'
import PSEOSchema from '@/components/pseo/PSEOSchema'
import FAQSection from '@/components/pseo/FAQSection'
import CTABlock from '@/components/pseo/CTABlock'

export async function generateStaticParams() {
  return painPoints.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pain = painPoints.find((p) => p.slug === slug)
  if (!pain) return {}
  return {
    title: pain.h1,
    description: pain.metaDescription,
  }
}

export default async function PainDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pain = painPoints.find((p) => p.slug === slug)
  if (!pain) notFound()

  const BASE_URL = 'https://clientintelligence.ai'
  const pageUrl = `${BASE_URL}/pain/${pain.slug}`

  return (
    <>
      <PSEOSchema
        name={pain.h1}
        description={pain.metaDescription}
        url={pageUrl}
        faqs={pain.faqs}
        breadcrumbs={[
          { name: 'Home', url: BASE_URL },
          { name: 'Pain Points', url: `${BASE_URL}/pain` },
          { name: pain.label, url: pageUrl },
        ]}
      />
      <main>
        <PSEOHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Pain Points', href: '/pain' },
            { label: pain.label, href: `/pain/${pain.slug}` },
          ]}
          eyebrow="We Know This Feeling"
          h1={pain.h1}
          subheadline={pain.metaDescription}
          ctaPrimary="Learn More"
          ctaSecondary="See the Solution"
          ctaSecondaryHref="#solution"
        />

        <ProblemBlock
          headline="Sound Familiar?"
          pain={pain.metaDescription}
          bullets={pain.bullets}
        />

        <div id="solution">
          <FitCheck
            forYou={pain.forYou}
            notForYou={pain.notForYou}
          />
        </div>

        <FAQSection faqs={pain.faqs} />

        <CTABlock
          headline="Ready to Solve This?"
          subtext="Client Intelligence gives you the systems to break through the constraints that are holding your practice back. No long-term contracts."
          cta="Learn More →"
        />
      </main>
    </>
  )
}
