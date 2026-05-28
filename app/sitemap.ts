import type { MetadataRoute } from 'next'
import { blogPosts } from '@/content/blog'
import { competitors } from '@/seo-pages/content/competitors'
import { personas } from '@/seo-pages/content/personas'
import { features } from '@/seo-pages/content/features'
import { industries } from '@/seo-pages/content/industries'
import { painPoints } from '@/seo-pages/content/pain-points'
import { alternatives } from '@/seo-pages/content/alternatives'
import { useCases } from '@/seo-pages/content/use-cases'
import { categories } from '@/seo-pages/content/categories'

export const dynamic = 'force-static'

const BASE = 'https://learn.clientintelligence.ai'

const hub = (path: string) => ({
  url: `${BASE}${path}`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: 0.8,
})

const detail = (path: string) => ({
  url: `${BASE}${path}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
})

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
  ]

  const blogRoutes = blogPosts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const seoHubs = ['/vs', '/for', '/feature', '/industry', '/pain', '/alternatives', '/use-case', '/category'].map(hub)

  const seoDetails = [
    ...competitors.map(c  => detail(`/vs/${c.slug}`)),
    ...personas.map(p     => detail(`/for/${p.slug}`)),
    ...features.map(f     => detail(`/feature/${f.slug}`)),
    ...industries.map(i   => detail(`/industry/${i.slug}`)),
    ...painPoints.map(p   => detail(`/pain/${p.slug}`)),
    ...alternatives.map(a => detail(`/alternatives/${a.slug}`)),
    ...useCases.map(u     => detail(`/use-case/${u.slug}`)),
    ...categories.map(c   => detail(`/category/${c.slug}`)),
  ]

  return [...staticRoutes, ...blogRoutes, ...seoHubs, ...seoDetails]
}
