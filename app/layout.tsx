import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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

export const viewport: Viewport = {
  themeColor: '#C9A84C',
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
    { '@type': 'Offer', name: 'Client Intelligence', price: '1000', priceCurrency: 'USD', billingIncrement: 'month' },
  ],
  operatingSystem: 'Web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:rounded-btn focus:text-sm focus:font-medium focus:ring-2 focus:ring-gold/30"
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
