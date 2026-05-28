interface FitCheckProps {
  forYou: string[]
  notForYou: string[]
}

export default function FitCheck({ forYou, notForYou }: FitCheckProps) {
  return (
    <section className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-10 leading-tight tracking-tight">
          Is this for you?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-semibold text-gold-accessible uppercase tracking-wide mb-4">Good fit if you…</p>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted text-sm leading-relaxed">
                  <span className="text-gold-accessible mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">Not the right fit if…</p>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted text-sm leading-relaxed">
                  <span className="text-muted mt-0.5 flex-shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
