import type { Differentiator, Heading } from './types'

export const whySection = {
  eyebrow: 'Why RadheLabs',
  heading: { lines: ['Design and code,'], emphasis: 'one conversation.' } satisfies Heading,
}

// DRAFT: themes come from PDA §11. CONFIRM each one is true before launch; delete any that are not.
export const differentiators: Differentiator[] = [
  {
    title: 'You’ll know our names.',
    body: 'You talk to the people doing the work, not an account manager in the middle.',
  },
  {
    title: 'Design and code, one room.',
    body: 'The same people design and build, so what was meant stays what gets made.',
  },
  {
    title: 'The people who pitch it, build it.',
    body: 'The people you first speak to are the ones writing your product.',
  },
  {
    title: 'We’ll question the brief.',
    body: 'We ask the awkward questions early, then build what we agreed, properly.',
  },
]

export const aboutSection = {
  eyebrow: 'Who we are',
  heading: { lines: ['A small team,'], emphasis: 'fully on your side.' } satisfies Heading,
  /** Who is behind the agency, philosophy, approach. All must come from the agency. */
  paragraphs: [
    'RadheLabs is a team of Indian developers and designers with years of hands-on experience in IT and UI/UX. [ABOUT: ADD NAMES, BACKGROUND, FIRST PROJECT]',
    'Radhe means devotion, and that is how we try to work: sincerely, with care, for the craft itself. Labs is where we experiment and build. India is where we are from.',
  ],
  team: [
    { name: '[NAME]', role: '[ROLE]' },
    { name: '[NAME]', role: '[ROLE]' },
  ],
  projectTypesTitle: 'What we take on',
  projectTypes: ['[PROJECT TYPE 1]', '[PROJECT TYPE 2]', '[PROJECT TYPE 3]'],
}
