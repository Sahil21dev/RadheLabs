import type { Heading, Project } from './types'

export const workSection = {
  eyebrow: 'Our work',
  heading: { lines: ['Things we’ve made'], emphasis: 'with care.' } satisfies Heading,
}

/**
 * First entry renders large, the next two as a pair, the rest as index rows.
 * Provide `image`/`gallery` for real screenshots, `outcome` only if you have real data, `href` for the case study.
 */
export const projects: Project[] = [
  {
    slug: 'digital-lending-stack',
    title: 'Digital lending stack',
    category: 'Fintech · Lending',
    year: '2025–26',
    summary:
      'The full platform behind a digital lender in India: KYC infrastructure, a loan origination system (LOS), a loan management system (LMS), a business rules engine (BRE) for credit decisions, and a CRM for the teams who work the pipeline.',
    problem:
      'Lending runs on many systems that must agree with each other. Identity checks, credit bureau pulls, underwriting rules, disbursal, repayments and collections all have to stay correct, auditable and fast as volume grows.',
    role:
      'We designed and built the systems end to end. That covers KYC and bureau integrations, application and sanction flows, configurable credit rules and scorecards, loan servicing, and the internal tools ops teams use every day.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'React', 'Next.js'],
    visual: 'lending',
  },
  {
    slug: 'gaon-farming-app',
    title: 'Gaon',
    category: 'Agritech · Mobile app',
    year: '2026',
    summary:
      'A farming companion app for Indian farmers: track each crop by its day in the season, check live mandi prices, see the local weather, watch tutorials, and talk to other farmers in Farm Talk.',
    problem:
      'Farmers decide what to sell and when with scattered, often stale information. Mandi rates, weather and crop advice live in different places, and few apps are built for how farmers actually use a phone.',
    role:
      'We designed and built the app: a simple, icon-led interface, crop timelines, mandi prices from Agmarknet (data.gov.in), weather, and a community space.',
    technologies: ['Android', 'Agmarknet API', 'Weather API'],
    gallery: [
      { src: '/work/gaon-home.jpg', alt: 'Gaon home screen with weather, my crops, the mandi price for tomato, and farm tools', width: 720, height: 1600 },
      { src: '/work/gaon-crops.jpg', alt: 'Gaon My Crops screen listing rice, wheat, gram, mustard, tomato and sugarcane with days since sowing', width: 720, height: 1600 },
      { src: '/work/gaon-mandi.jpg', alt: 'Gaon Mandi Prices screen showing today’s rates at APMC Azadpur, Delhi', width: 720, height: 1600 },
    ],
    visual: 'mobile',
  },
  {
    slug: 'passyn-travels',
    title: 'Passyn Travels',
    category: 'Travel · Website',
    year: '2026',
    summary:
      'A website for a curated travel studio. Visitors spin an interactive globe to explore destinations, browse packages by travel style, and stretch any trip from a 4-day weekend to a 16-day saga with the price re-quoted live.',
    problem:
      'Package tours usually feel like fixed templates. Passyn wanted a site that makes planning feel personal and visual, and that turns browsing into a conversation with a real planner.',
    role:
      'We designed and built the site: the interactive globe, scalable package pricing, curated collections, and the trip-planner enquiry flow.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    image: {
      src: '/work/passyn-home.png',
      alt: 'Passyn Travels homepage with the headline “Spin the globe. Pick a story. We’ll plan the rest.”',
      width: 2000,
      height: 983,
    },
    visual: 'analytics',
    href: 'https://passyn.org/',
  },
]
