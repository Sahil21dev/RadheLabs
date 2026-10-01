import type { Heading, ProcessStep } from './types'

export const processSection = {
  eyebrow: 'How we go about it',
  heading: { lines: ['First the problem.'], emphasis: 'Then the screen.' } satisfies Heading,
}

// DRAFT: keeps the four-stage framework from PDA §12. Confirm against the real workflow.
export const processSteps: ProcessStep[] = [
  {
    n: '01',
    title: 'Discover',
    body: 'We listen first: what you are making, who it is for, and what a good outcome looks like to you.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Rough sketches fast, careful detail where it counts. You see it early and often.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'The people who designed it also build it, so nothing gets lost in translation.',
  },
  {
    n: '04',
    title: 'Launch & Iterate',
    body: 'Launch day is the start. We watch how it gets used and keep making it better.',
  },
]
