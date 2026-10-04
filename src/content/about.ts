import type { Differentiator, Heading } from './types'

export const whySection = {
  eyebrow: 'Why RadheLabs',
  heading: { lines: ['Design and code,'], emphasis: 'one conversation.' } satisfies Heading,
}

export const differentiators: Differentiator[] = [
  {
    title: 'Design and code, one room.',
    body: 'The same people design and build, so what was meant stays what gets made.',
  },
  {
    title: 'We’ll question the brief.',
    body: 'We ask the awkward questions early, then build what we agreed, properly.',
  },
  {
    title: 'We build it like it’s ours.',
    body: 'Your product gets the care we would give our own, long after launch day.',
  },
]

export const aboutSection = {
  eyebrow: 'Who we are',
  heading: { lines: ['A small team,'], emphasis: 'fully on your side.' } satisfies Heading,
  /** Who is behind the agency, philosophy, approach. All must come from the agency. */
  paragraphs: [
    'RadheLabs is a team of Indian developers and designers with years of hands-on experience in IT and UI/UX.',
    'Radhe means devotion, and that is how we try to work: sincerely, with care, for the craft itself. Labs is where we experiment and build. India is where we are from.',
  ],
  photo: {
    src: '/team/radhelabs-team.jpg',
    alt: 'The RadheLabs team smiling around a table of laptops, one of them holding up a framed One Piece poster',
    width: 1200,
    height: 675,
    caption: 'The team, mid-build.',
  },
  drivesTitle: 'What drives us',
  drives: [
    { title: 'Building', body: 'We genuinely enjoy the craft.' },
    { title: 'Freedom', body: 'Good work buys time and choice.' },
    { title: 'Family', body: 'The reason behind all of it.' },
  ],
  projectTypesTitle: 'What we take on',
  projectTypes: ['Fintech and lending platforms', 'Mobile apps', 'Websites and web apps'],
}
