import type { MetadataRoute } from 'next'
import { siteUrl } from '@/content/site'

// One page for now. Add /work/[slug] entries here when case studies exist (TICKET-501).
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/`, changeFrequency: 'monthly', priority: 1 }]
}
