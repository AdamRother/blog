'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll() // check on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        transparent
          ? 'bg-transparent border-b border-transparent'
          : 'bg-cream/95 backdrop-blur-sm border-b border-border'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span className="text-[22px] font-light leading-none text-gold select-none">|</span>
          <span
            className={`text-sm font-semibold transition-colors duration-300 ${
              transparent ? 'text-[#F4F0EB]' : 'text-ink'
            }`}
          >
            Client Intelligence
          </span>
        </Link>

        {/* Links + CTA */}
        <div className="flex items-center gap-6">
          <Link
            href="/blog"
            className={`hidden sm:block text-sm transition-colors duration-300 ${
              transparent
                ? 'text-[#F4F0EB] hover:text-[#A09890]'
                : 'text-muted hover:text-ink'
            }`}
          >
            Blog
          </Link>
          <Link
            href="/"
            className={`hidden sm:block text-sm transition-colors duration-300 ${
              transparent
                ? 'text-[#F4F0EB] hover:text-[#A09890]'
                : 'text-muted hover:text-ink'
            }`}
          >
            Home
          </Link>
          <a
            href="https://clientintelligence.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg px-5 text-sm font-semibold bg-gold text-ink transition-colors hover:bg-gold-hover whitespace-nowrap"
          >
            <span className="sm:hidden">Try it</span>
            <span className="hidden sm:inline">Learn More</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
