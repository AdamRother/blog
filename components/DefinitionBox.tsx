type Props = {
  term: string
  definition: string
}

export default function DefinitionBox({ term, definition }: Props) {
  return (
    <aside className="my-8 pl-5 border-l-2 border-gold bg-[#FAF8F3] rounded-r-xl py-4 pr-5">
      <p className="text-xs font-semibold text-gold-accessible uppercase tracking-[0.15em] mb-2">
        Definition
      </p>
      <p className="font-serif text-base text-ink leading-snug mb-1">
        <strong>{term}</strong>
      </p>
      <p className="text-sm text-muted leading-relaxed">{definition}</p>
    </aside>
  )
}
