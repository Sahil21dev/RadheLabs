import type { MetadataRoute } from 'next'
import { site, siteUrl } from '@/content/site'

export default function robots(): MetadataRoute.Robots {
  return site.indexable
    ? { rules: { userAgent: '*', allow: '/' }, sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl }
    : { rules: { userAgent: '*', disallow: '/' } }
}
