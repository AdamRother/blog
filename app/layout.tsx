import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://learn.clientintelligence.ai'),
  title: {
    default: 'Client Intelligence — AI for Consultants & Agency Owners',
    template: '%s | Client Intelligence',
  },
  description:
    'Resources, guides, and frameworks for consultants, agency owners, and fractional operators building client-based businesses with AI.',
  openGraph: {
    siteName: 'Client Intelligence',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Client Intelligence',
  url: 'https://learn.clientintelligence.ai',
  sameAs: ['https://clientintelligence.ai'],
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Client Intelligence',
  url: 'https://clientintelligence.ai',
  applicationCategory: 'BusinessApplication',
  description:
    'Intelligence as a Service platform for service business owners. Centralizes proprietary frameworks and applies them to every client through isolated per-client AI workspaces.',
  offers: [
    { '@type': 'Offer', name: 'Starter', price: '97', priceCurrency: 'USD', billingIncrement: 'month' },
    { '@type': 'Offer', name: 'Pro', price: '497', priceCurrency: 'USD', billingIncrement: 'month' },
  ],
  operatingSystem: 'Web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
<body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
