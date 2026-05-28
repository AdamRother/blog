interface FeatureItem {
  title: string
  description: string
}

interface FeatureGridProps {
  headline: string
  items: FeatureItem[]
}

export default function FeatureGrid({ headline, items }: FeatureGridProps) {
  return (
    <section className="bg-cream border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-20 sm:py-28">
        <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-10 text-center leading-tight tracking-[-0.02em]">
          {headline}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-card border border-border p-6 flex flex-col gap-3 shadow-card">
              <h3 className="text-base font-semibold text-ink leading-snug">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
