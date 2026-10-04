import type { Heading, Service } from './types'

export const servicesSection = {
  eyebrow: 'What we make',
  heading: { lines: ['From first sketch'], emphasis: 'to live product.' } satisfies Heading,
}

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
    id: 'fintech-lending',
    title: 'Fintech & Lending Systems',
    summary:
      'The systems a lender runs on, from the first KYC check to the last EMI: correct, auditable and built to scale.',
    includes: ['KYC & onboarding', 'Loan origination (LOS)', 'Loan management (LMS)', 'Rules engines (BRE)', 'Lending CRM'],
  },
  {
    id: 'ai-products',
    title: 'AI-Powered Products',
    summary:
      'AI where it earns its place in your product, and not where it is only there for show.',
    includes: ['Product-led AI features', 'Integration into existing products'],
  },
]
