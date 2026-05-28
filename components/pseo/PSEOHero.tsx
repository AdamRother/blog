import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PSEOHeroProps {
  eyebrow: string
  h1: string
  subheadline: string
  ctaPrimary?: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
  breadcrumbs?: BreadcrumbItem[]
}

export default function PSEOHero({
  eyebrow,
  h1,
  subheadline,
  ctaPrimary = 'Learn More',
  ctaSecondary = 'See How It Works',
  ctaSecondaryHref = '#how-it-works',
  breadcrumbs,
}: PSEOHeroProps) {
  return (
    <section className={`landing-hero-bg pb-24 sm:pb-32 ${breadcrumbs ? 'pt-20 sm:pt-24' : 'pt-32 sm:pt-40'}`}>
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Breadcrumbs — rendered inside the dark section so there's no cream strip */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              {breadcrumbs.map((item, i) => {
                const isLast = i === breadcrumbs.length - 1
                return (
                  <li key={item.href} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="text-[#F4F0EB]/60 font-medium" aria-current="page">
                        {item.label}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={item.href}
                          className="text-[#F4F0EB]/40 hover:text-gold transition-colors duration-brand ease-brand"
                        >
                          {item.label}
                        </Link>
                        <span className="text-[#F4F0EB]/20 select-none">/</span>
                      </>
                    )}
                  </li>
                )
              })}
            </ol>
          </nav>
        )}

        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold mb-6">
            {eyebrow}
          </p>
          <h1 className="warm-gradient-heading font-sans font-semibold text-[40px] sm:text-[56px] lg:text-[72px] tracking-[-0.04em] leading-[1.0] mb-6 text-balance">
            {h1}
          </h1>
          <p className="mx-auto max-w-[560px] text-[18px] text-faint leading-[1.7] mb-10">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <a
              href="https://clientintelligence.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl px-8 text-[15px] font-semibold bg-gold text-ink transition-colors duration-brand ease-brand hover:bg-gold-hover w-full sm:w-auto justify-center"
            >
              {ctaPrimary}
            </a>
            <a
              href={ctaSecondaryHref}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-gold/30 px-8 text-[15px] font-semibold text-gold transition-colors duration-brand ease-brand hover:bg-gold/10 w-full sm:w-auto justify-center"
            >
              {ctaSecondary}
            </a>
          </div>
          <p className="text-xs text-faint">
            No long-term contracts. Your IP stays yours.
          </p>
        </div>
      </div>
    </section>
  )
}
