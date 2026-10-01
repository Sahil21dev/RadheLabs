import { projects, workSection } from '@/content/projects'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectIndexRow } from '@/components/projects/ProjectIndexRow'

/**
 * Data-driven: projects[0] renders large, [1] and [2] as an offset pair, the rest as index rows.
 * Any number of projects is fine.
 */
export function SelectedWork() {
  const [lead, ...rest] = projects
  const pair = rest.slice(0, 2)
  const index = rest.slice(2)

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-16 px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <Reveal className="mb-14 lg:mb-20">
        <SectionHeader id="work-title" eyebrow={workSection.eyebrow} heading={workSection.heading} size="lg" />
      </Reveal>

      {lead && (
        <Reveal className="mb-10 lg:mb-[72px]">
          <ProjectCard project={lead} index={0} layout="featured" priority />
        </Reveal>
      )}

      {pair.length > 0 && (
        <div className="mb-10 grid items-start gap-7 md:grid-cols-2 lg:mb-[72px] lg:grid-cols-[45%_1fr]">
          {pair.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70} className={i === 1 ? 'lg:pt-12' : undefined}>
              <ProjectCard project={project} index={i + 1} layout="standard" />
            </Reveal>
          ))}
        </div>
      )}

      {index.length > 0 && (
        <div>
          {index.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <ProjectIndexRow project={project} index={i + 3} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
