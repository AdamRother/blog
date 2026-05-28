export interface ComparisonRow {
  criteria: string
  clientIntelligence: { value: string; positive: boolean }
  competitor: { value: string; positive: boolean }
}

interface ComparisonTableProps {
  competitorLabel: string
  rows: ComparisonRow[]
}

export default function ComparisonTable({ competitorLabel, rows }: ComparisonTableProps) {
  return (
    <section className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-10 leading-tight tracking-tight">
        Client Intelligence vs {competitorLabel}
      </h2>
      <div className="rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="bg-card-bg">
                <th className="text-left px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wide w-1/3">Feature</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-ink uppercase tracking-wide w-1/3">Client Intelligence</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wide w-1/3">{competitorLabel}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/40'}>
                  <td className="px-6 py-4 text-sm text-ink font-medium border-t border-border">{row.criteria}</td>
                  <td className="px-6 py-4 text-sm border-t border-border">
                    <span className={row.clientIntelligence.positive ? 'text-gold-accessible' : 'text-muted'}>
                      {row.clientIntelligence.positive ? '✓ ' : '✗ '}{row.clientIntelligence.value}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted border-t border-border">
                    {row.competitor.positive ? '✓ ' : '✗ '}{row.competitor.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </section>
  )
}
