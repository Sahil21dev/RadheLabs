import type { Heading } from './types'

export const contactSection = {
  eyebrow: 'Say hello',
  heading: { lines: ['Got an idea worth'], emphasis: 'building?' } satisfies Heading,
  body: 'Tell us what you have in mind. A rough idea is fine. We will answer like people, not a sales team.',
  primaryCta: 'Tell us your idea',
  // DRAFT: HOW TO START (PDA §6). Keep non-committal until real response times / terms are known.
  howToStart: [
    'Tell us what you are making.',
    'We talk it through, no pressure.',
    'We agree what to build and how.',
  ],
}
