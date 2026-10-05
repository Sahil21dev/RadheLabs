import type { Heading } from './types'
import { ctaHref } from './site'

// Headline is the Golden Circle "why": the outcome for the client, then what we do to get there.
export const hero = {
  eyebrow: 'Developers and designers, made in India',
  headline: { lines: ['Technology that helps'], emphasis: 'you grow faster.' } satisfies Heading,
  body: 'We’re RadheLabs. We solve real-world problems for founders and small businesses by designing and building software that works from day one.',
  /** Who it's for, shown in the hero meta line. */
  audience: 'small businesses, founders, and agencies with overflow work',
  primaryCta: { label: 'See what we’ve built', href: '#work' },
  secondaryCta: { label: 'Tell us your idea', href: ctaHref() },
}
