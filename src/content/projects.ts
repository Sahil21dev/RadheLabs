import type { Heading, Project } from './types'

export const workSection = {
  eyebrow: 'Our work',
  heading: { lines: ['Things we’ve made'], emphasis: 'with care.' } satisfies Heading,
}

/**
 * PLACEHOLDER PROJECTS. Replace every entry with a real project.
 * First entry renders large, the next two as a pair, the rest as index rows.
 * Provide `image` for a real screenshot, `outcome` only if you have real data, `href` for the case study.
 */
export const projects: Project[] = [
  {
    slug: 'project-one',
    title: '[PROJECT NAME]',
    category: '[CATEGORY]',
    year: '[YEAR]',
    summary: '[PROJECT DESCRIPTION: what was built]',
    problem: '[PROBLEM: what problem existed]',
    role: '[OUR ROLE: what the agency did]',
    outcome: '[OUTCOME: only if real data exists. Delete this line otherwise]',
    technologies: ['[TECH]', '[TECH]', '[TECH]'],
    visual: 'console',
  },
  {
    slug: 'project-two',
    title: '[PROJECT NAME]',
    category: '[CATEGORY]',
    year: '[YEAR]',
    summary: '[PROJECT DESCRIPTION: what was built]',
    problem: '[PROBLEM: what problem existed]',
    role: '[OUR ROLE: what the agency did]',
    technologies: ['[TECH]', '[TECH]'],
    visual: 'mobile',
  },
  {
    slug: 'project-three',
    title: '[PROJECT NAME]',
    category: '[CATEGORY]',
    year: '[YEAR]',
    summary: '[PROJECT DESCRIPTION: what was built]',
    problem: '[PROBLEM: what problem existed]',
    role: '[OUR ROLE: what the agency did]',
    technologies: ['[TECH]', '[TECH]'],
    visual: 'analytics',
  },
  {
    slug: 'project-four',
    title: '[PROJECT NAME]',
    category: '[CATEGORY]',
    year: '[YEAR]',
    summary: '[PROJECT DESCRIPTION: what was built]',
    problem: '[PROBLEM: what problem existed]',
    role: '[OUR ROLE: what the agency did]',
    technologies: ['[TECH]', '[TECH]'],
    visual: 'console',
  },
]
