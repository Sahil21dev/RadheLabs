import type { SiteConfig } from './types'

/**
 * Single source of truth for agency identity.
 * Anything wrapped in [BRACKETS] is a placeholder. Run `pnpm check:placeholders` to list them.
 */
export const site: SiteConfig = {
  name: 'RadheLabs',
  monogram: 'R',
  legalName: '[LEGAL ENTITY NAME]',
  descriptor: 'Developers and designers from India, building software with care.',
  email: '[AGENCY EMAIL]',

  location: 'India',
  // availability: '[AVAILABILITY]',  // optional: an accurate, current status line

  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ],

  // Rendered only when `href` is set.
  social: [
    { platform: 'LinkedIn' },
    { platform: 'GitHub' },
    { platform: 'X / Twitter' },
    { platform: 'Instagram' },
  ],

  // Add real pages (e.g. { label: 'Privacy', href: '/privacy' }) only once they exist.
  legal: [],

  // Flip to true at launch.
  indexable: false,
}

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim())

/** A mailto link when the email is real, otherwise a harmless in-page anchor. */
export const contactHref = () => (isPlaceholder(site.email) ? '#contact' : `mailto:${site.email}`)
