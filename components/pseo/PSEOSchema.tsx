interface FAQ {
  question: string
  answer: string
}

interface Breadcrumb {
  name: string
  url: string
}

interface PSEOSchemaProps {
  name: string
  description: string
  url: string
  faqs?: FAQ[]
  breadcrumbs?: Breadcrumb[]
}

export default function PSEOSchema({ name, description, url, faqs, breadcrumbs }: PSEOSchemaProps) {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Client Intelligence',
      url: 'https://clientintelligence.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Client Intelligence',
      url: 'https://clientintelligence.ai',
    },
  }

  const faqSchema = faqs && faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.url,
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}
    </>
  )
}
