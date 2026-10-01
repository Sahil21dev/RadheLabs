import type { Heading, Service } from './types'

export const servicesSection = {
  eyebrow: 'What we make',
  heading: { lines: ['From first sketch'], emphasis: 'to live product.' } satisfies Heading,
}

// DRAFT: summaries are the outcome-oriented copy from PDA §8. Confirm against real capabilities.
export const services: Service[] = [
  {
    id: 'product-design',
    title: 'Product Design',
    summary: 'We work out what to build and for whom, then design it so it is clear and a pleasure to use.',
    includes: ['Product strategy', 'UX flows', 'Interface design', 'Design systems'],
  },
  {
    id: 'web-engineering',
    title: 'Web Engineering',
    summary:
      'Fast, tidy web apps that hold up after launch and that the next developer can actually read.',
    includes: ['Production web apps', 'Performance', 'Maintainable code'],
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    summary: 'Mobile apps that feel at home on a phone, built once and shipped to both platforms.',
    includes: ['Cross-platform apps', 'Mobile UX', 'Production-grade engineering'],
  },
  {
    id: 'backend-systems',
    title: 'Backend & Systems',
    summary: 'The parts nobody sees but everybody feels: APIs, databases, integrations and hosting.',
    includes: ['APIs', 'Databases', 'Integrations', 'Infrastructure'],
  },
  {
    id: 'ai-products',
    title: 'AI-Powered Products',
    summary:
      'AI where it earns its place in your product, and not where it is only there for show.',
    includes: ['Product-led AI features', 'Integration into existing products'],
  },
]
