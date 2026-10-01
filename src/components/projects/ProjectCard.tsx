import type { Project } from '@/content/types'
import { TechnologyTags } from '@/components/ui/TechnologyTags'
import { CaseStudyCTA } from './CaseStudyCTA'
import { ProjectMeta } from './ProjectMeta'
import { ProjectOutcome } from './ProjectOutcome'
import { ProjectVisual } from './ProjectVisual'

type ProjectCardProps = {
  project: Project
  index: number
  /** `featured`: visual left, text right (stacked on mobile). `standard`: visual on top. */
  layout: 'featured' | 'standard'
  priority?: boolean
}

const shell =
  'group overflow-hidden border border-ink/10 bg-ivory-dark transition-transform duration-500 ease-out-soft hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0'

export function ProjectCard({ project, index, layout, priority }: ProjectCardProps) {
  const headingId = `project-${project.slug}`

  if (layout === 'featured') {
    return (
      <article aria-labelledby={headingId} className={`${shell} rounded-2xl lg:grid lg:grid-cols-[60%_1fr]`}>
        <ProjectVisual
          project={project}
          priority={priority}
          className="border-b border-ink/10 lg:border-b-0 lg:border-r"
        />
        <div className="flex flex-col justify-between gap-8 px-6 py-8 sm:px-10 sm:py-10 lg:px-11 lg:py-12">
          <div className="space-y-6">
            <ProjectMeta project={project} index={index} size="lg" detailed headingId={headingId} />
            <ProjectOutcome outcome={project.outcome} />
            <TechnologyTags items={project.technologies} />
          </div>
          <div className="border-t border-ink/10 pt-7">
            <CaseStudyCTA href={project.href} />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article aria-labelledby={headingId} className={`${shell} h-full rounded-[14px]`}>
      <ProjectVisual project={project} className="border-b border-ink/10" />
      <div className="space-y-5 px-6 pb-8 pt-7 sm:px-8">
        <ProjectMeta project={project} index={index} size="md" headingId={headingId} />
        <TechnologyTags items={project.technologies} />
        <CaseStudyCTA href={project.href} />
      </div>
    </article>
  )
}
