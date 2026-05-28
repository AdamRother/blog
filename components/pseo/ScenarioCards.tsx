interface Scenario {
  title: string
  story: string
  result: string
}

interface ScenarioCardsProps {
  headline: string
  scenarios: Scenario[]
}

export default function ScenarioCards({ headline, scenarios }: ScenarioCardsProps) {
  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-20 sm:py-28">
        <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-10 leading-tight tracking-[-0.02em]">
          {headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((s, i) => (
            <div key={i} className="bg-white rounded-card border border-border p-6 flex flex-col gap-4 shadow-card">
              <h3 className="text-sm font-semibold text-ink leading-snug">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{s.story}</p>
              <div className="border-t border-border pt-4">
                <p className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.12em] mb-1">Outcome</p>
                <p className="text-sm text-ink leading-snug">{s.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
