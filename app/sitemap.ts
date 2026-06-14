import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.db-fitness.de'

// Bump this when the homepage content meaningfully changes, instead of
// reporting `new Date()` on every request (which trains crawlers to ignore lastmod).
const lastModified = '2026-06-14'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
