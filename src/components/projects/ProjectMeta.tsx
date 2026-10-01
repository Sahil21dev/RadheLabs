import type { Project } from '@/content/types'
import { cn } from '@/lib/cn'

type ProjectMetaProps = {
  project: Project
  index: number
  size: 'lg' | 'md'
  /** Show the WHY / HOW rows. Kept to the featured card so the page does not become a wall of labels. */
  detailed?: boolean
  headingId?: string
}

export function ProjectMeta({ project, index, size, detailed = false, headingId }: ProjectMetaProps) {
  const lg = size === 'lg'
  return (
    <div>
      <div className={cn('flex items-center justify-between', lg ? 'mb-8' : 'mb-5')}>
        <span className="font-mono text-[11px] tracking-[0.16em] text-peacock-mid">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{project.year}</span>
      </div>

      <h3
        id={headingId}
        className={cn(
          'font-serif font-normal leading-none text-ink',
          lg ? 'text-[clamp(2.5rem,4vw,3.25rem)]' : 'text-[clamp(2.25rem,3vw,2.5rem)]',
        )}
      >
        {project.title}
      </h3>
      <p className="mb-5 mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{project.category}</p>
      {lg && <div aria-hidden className="mb-6 h-px w-8 bg-peacock" />}

      <p className={cn('font-light text-ink', lg ? 'text-[15px] leading-[1.8]' : 'text-[14px] leading-[1.75]')}>
        {project.summary}
      </p>

      {detailed && (
        <dl className="mt-6 space-y-4">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Problem</dt>
            <dd className="mt-1 text-[14px] font-light leading-[1.7] text-ink">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Our role</dt>
            <dd className="mt-1 text-[14px] font-light leading-[1.7] text-ink">{project.role}</dd>
          </div>
        </dl>
      )}
    </div>
  )
}
