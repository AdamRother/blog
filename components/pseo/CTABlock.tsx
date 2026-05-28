interface CTABlockProps {
  headline: string
  subtext?: string
  cta?: string
}

export default function CTABlock({
  headline,
  subtext = 'Built for service providers serious about scaling their methodology.',
  cta = 'Learn More',
}: CTABlockProps) {
  return (
    <section className="bg-[#1C1700] px-6 py-24 sm:py-32">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="font-sans font-semibold text-[32px] sm:text-[40px] text-white leading-tight tracking-[-0.03em] mb-4 text-balance">
          {headline}
        </h2>
        {subtext && (
          <p className="text-white/60 text-[17px] mb-10 leading-[1.7]">{subtext}</p>
        )}
        <div className="flex items-center justify-center">
          <a
            href="https://clientintelligence.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl px-8 text-[15px] font-semibold bg-gold text-ink transition-colors duration-brand ease-brand hover:bg-gold-hover"
          >
            {cta}
          </a>
        </div>
        <p className="text-white/40 text-xs mt-6">Your IP stays yours</p>
      </div>
    </section>
  )
}
