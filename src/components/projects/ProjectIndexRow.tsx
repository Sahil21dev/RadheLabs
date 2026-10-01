import type { Project } from '@/content/types'
import { TechnologyTags } from '@/components/ui/TechnologyTags'
import { CaseStudyCTA } from './CaseStudyCTA'

/** Compact row for projects beyond the featured three. Stacks on tablet/mobile. */
export function ProjectIndexRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="grid gap-4 border-y border-ink/10 py-6 transition-colors duration-300 hover:bg-peacock/[0.03] lg:grid-cols-[48px_1fr_200px_260px_120px] lg:items-center lg:gap-10">
      <span className="font-mono text-[11px] tracking-[0.14em] text-peacock-mid">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <h3 className="font-serif text-2xl font-normal leading-none text-ink">{project.title}</h3>
        <p className="mt-1.5 text-[13px] font-light text-muted">{project.summary}</p>
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{project.category}</p>
      <TechnologyTags items={project.technologies} tone="quiet" />
      <div className="lg:flex lg:justify-end">
        <CaseStudyCTA href={project.href} label="View" />
      </div>
    </article>
  )
}
