interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  headline?: string
}

export default function FAQSection({ faqs, headline = 'Frequently Asked Questions' }: FAQSectionProps) {
  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-10 leading-tight tracking-tight">
          {headline}
        </h2>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className={`py-6 ${i > 0 ? 'border-t border-border' : ''}`}>
              <h3 className="font-semibold text-ink mb-3 leading-snug">{faq.question}</h3>
              <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
