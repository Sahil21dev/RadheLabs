/** A headline split into block lines, with an optional italic emphasis line. */
export type Heading = {
  lines: string[]
  emphasis?: string
}

export type NavLink = { label: string; href: string }

export type SocialLink = {
  platform: string
  /** Leave undefined until the real profile exists. Entries without an href are not rendered. */
  href?: string
  handle?: string
}

export type SiteConfig = {
  name: string
  /** One character used for the large ghost letter in the hero and CTA. */
  monogram: string
  /** Legal entity shown in the copyright line. */
  legalName: string
  descriptor: string
  email: string
  /** Leave undefined to hide. Do not guess. */
  location?: string
  /** Leave undefined to hide the availability pill. */
  availability?: string
  social: SocialLink[]
  legal: NavLink[]
  nav: NavLink[]
  /** Keep false until the site has real content, so placeholders never get indexed. */
  indexable: boolean
}

export type Service = {
  id: string
  title: string
  summary: string
  includes: string[]
}

export type ProcessStep = {
  n: string
  title: string
  body: string
}

export type Differentiator = { title: string; body: string }

export type ProjectVisualKind = 'console' | 'mobile' | 'analytics'

export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  /** WHAT was built. */
  summary: string
  /** WHY: the problem that existed. */
  problem: string
  /** HOW: what the agency contributed. */
  role: string
  /** RESULT: only set when there is real data. Omit otherwise and the block is not rendered. */
  outcome?: string
  /** TECH */
  technologies: string[]
  /** Real screenshot. When absent, a neutral wireframe placeholder is drawn from `visual`. */
  image?: ProjectImage
  visual: ProjectVisualKind
  /** Case-study URL. When absent, the CTA renders as a non-link "pending" label. */
  href?: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

export type ClientLogo = {
  name: string
  logo: { src: string; alt: string; width: number; height: number }
  href?: string
}

export type ResultMetric = { value: string; label: string }
