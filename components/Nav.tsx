'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const exploreTopics = [
  { href: '/for',          label: "Who It's For",    description: 'Built for your role and practice type' },
  { href: '/vs',           label: 'Why CI',           description: 'How it compares to other tools' },
  { href: '/use-case',     label: "How It's Used",    description: 'Real use cases for service providers' },
  { href: '/pain',         label: 'Solve a Problem',  description: 'The pain points Client Intelligence fixes' },
  { href: '/feature',      label: 'The Platform',     description: 'Features and capabilities' },
  { href: '/industry',     label: 'Your Industry',    description: 'Built for your type of business' },
  { href: '/alternatives', label: 'Switching From',   description: 'Moving away from generic AI tools' },
  { href: '/category',     label: 'What Is IaaS?',    description: 'Intelligence as a Service, defined' },
]

export default function Nav() {
  const [scrolled, setScrolled]       = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [drawerOpen, setDrawerOpen]   = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExploreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setExploreOpen(false)
    setDrawerOpen(false)
  }, [pathname])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const linkClass = `text-sm transition-colors duration-300 ${
    transparent ? 'text-[#F4F0EB] hover:text-[#A09890]' : 'text-muted hover:text-ink'
  }`

  return (
    <>
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

          {/* Desktop: Links + CTA */}
          <div className="flex items-center gap-6">

            {/* Explore dropdown — desktop only */}
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className={`flex items-center gap-1.5 text-sm transition-colors duration-300 ${
                  transparent ? 'text-[#F4F0EB] hover:text-[#A09890]' : 'text-muted hover:text-ink'
                }`}
              >
                Explore
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {exploreOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl border border-border shadow-lg overflow-hidden z-50">
                  {exploreTopics.map((topic, i) => (
                    <Link
                      key={topic.href}
                      href={topic.href}
                      onClick={() => setExploreOpen(false)}
                      className={`block px-5 py-3.5 hover:bg-card-bg transition-colors ${
                        i < exploreTopics.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      <p className="text-sm font-semibold text-ink">{topic.label}</p>
                      <p className="text-xs text-muted mt-0.5">{topic.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog link — desktop only */}
            <Link href="/blog" className={`hidden sm:block ${linkClass}`}>
              Blog
            </Link>

            {/* CTA — always visible */}
            <a
              href="https://clientintelligence.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg px-5 text-sm font-semibold bg-gold text-ink transition-colors hover:bg-gold-hover whitespace-nowrap"
            >
              <span>Learn More</span>
            </a>

            {/* Hamburger — mobile/tablet only */}
            <button
              onClick={() => setDrawerOpen(true)}
              className={`sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg transition-colors ${
                transparent ? 'text-[#F4F0EB]' : 'text-ink'
              }`}
              aria-label="Open menu"
            >
              <span className="block w-5 h-px bg-current" />
              <span className="block w-5 h-px bg-current" />
              <span className="block w-3.5 h-px bg-current" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] sm:hidden" aria-modal="true" role="dialog">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer panel — slides in from right */}
          <div className="absolute top-0 right-0 h-full w-[min(320px,90vw)] bg-cream flex flex-col shadow-2xl">

            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
              <span className="text-sm font-semibold text-ink">Menu</span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-ink hover:bg-card-bg transition-colors"
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <div className="flex-1 overflow-y-auto px-4 py-4">

              {/* Blog — first */}
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold px-2 mb-2">
                Blog
              </p>
              <div className="mb-6">
                <Link
                  href="/blog"
                  className="flex flex-col px-3 py-3 rounded-xl hover:bg-card-bg transition-colors group"
                >
                  <span className="text-sm font-semibold text-ink group-hover:text-gold-accessible transition-colors">
                    All Posts
                  </span>
                  <span className="text-xs text-muted mt-0.5">Guides, frameworks, and operator thinking</span>
                </Link>
              </div>

              {/* Explore section */}
              <div className="border-t border-border pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold px-2 mb-2">
                  Explore
                </p>
                <div className="space-y-1">
                  {exploreTopics.map((topic) => (
                    <Link
                      key={topic.href}
                      href={topic.href}
                      className="flex flex-col px-3 py-3 rounded-xl hover:bg-card-bg transition-colors group"
                    >
                      <span className="text-sm font-semibold text-ink group-hover:text-gold-accessible transition-colors">
                        {topic.label}
                      </span>
                      <span className="text-xs text-muted mt-0.5">{topic.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer CTA */}
            <div className="px-4 pb-6 pt-4 border-t border-border shrink-0">
              <a
                href="https://clientintelligence.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-xl px-6 text-[15px] font-semibold bg-gold text-ink hover:bg-gold-hover transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
