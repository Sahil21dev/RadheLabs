import type { SiteConfig } from './types'

/**
 * Single source of truth for agency identity.
 * Anything wrapped in [BRACKETS] is a placeholder. Run `pnpm check:placeholders` to list them.
 */
export const site: SiteConfig = {
  name: 'RadheLabs',
  monogram: 'R',
  legalName: 'Radhe Labs',
  descriptor: 'Developers and designers from India, building software with care.',
  whatsapp: '917078609133',

  location: 'India',
  availability: 'Taking on new projects',

  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ],

  // Rendered only when `href` is set.
  social: [],

  // Add real pages (e.g. { label: 'Privacy', href: '/privacy' }) only once they exist.
  legal: [],

  indexable: true,
}

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim())

/** A mailto link when an email is set, otherwise a harmless in-page anchor. */
export const contactHref = () => (site.email && !isPlaceholder(site.email) ? `mailto:${site.email}` : '#contact')

/** The WhatsApp number for display, e.g. +91 70786 09133. */
export const whatsappDisplay = () =>
  site.whatsapp ? `+${site.whatsapp.slice(0, 2)} ${site.whatsapp.slice(2, 7)} ${site.whatsapp.slice(7)}` : undefined

const whatsappGreeting = 'Hi RadheLabs, I have an idea I’d like to discuss.'

/** Where every "Tell us your idea" CTA goes: WhatsApp when a number is set, otherwise the email/anchor fallback. */
export const ctaHref = () =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappGreeting)}`
    : contactHref()

/** Props that open external links in a new tab. */
export const externalProps = (href: string) =>
  /^https?:\/\//.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
