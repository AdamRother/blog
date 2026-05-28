import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className="max-w-5xl mx-auto px-6 pt-6 pb-2">
      <ol className="flex items-center gap-2 text-sm text-muted flex-wrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-ink font-medium" aria-current="page">{item.label}</span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-gold-accessible transition-colors">
                    {item.label}
                  </Link>
                  <span className="text-border select-none">/</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
