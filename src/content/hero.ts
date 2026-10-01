import type { Heading } from './types'

// DRAFT: headline concept is kept from the Figma design (PDA §3). Copy is derived from PDA §1.
export const hero = {
  eyebrow: 'Developers and designers, made in India',
  headline: { lines: ['Software,'], emphasis: 'made like it matters.' } satisfies Heading,
  body: 'We’re RadheLabs. We design and build websites, apps and the systems behind them, the way we would for someone we care about.',
  /** WHO IT'S FOR. Required by PDA §3 and not yet known. */
  audience: 'small businesses, founders, and agencies with overflow work',
  primaryCta: { label: 'See what we’ve built', href: '#work' },
  secondaryCta: { label: 'Tell us your idea', href: '#contact' },
}
