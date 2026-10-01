import { aboutSection } from '@/content/about'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-16 border-t border-ink/5 bg-ivory-dark px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_520px] lg:gap-24">
        <div>
          <Reveal>
            <SectionHeader id="about-title" eyebrow={aboutSection.eyebrow} heading={aboutSection.heading} size="lg" />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 max-w-[520px] space-y-6 text-[16px] font-light leading-[1.8] text-ink">
              {aboutSection.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="space-y-12 lg:pt-6">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {aboutSection.projectTypesTitle}
              </h3>
              <ul className="mt-4">
                {aboutSection.projectTypes.map((type, i) => (
                  <li key={`${type}-${i}`} className="flex items-baseline gap-5 border-b border-ink/10 py-4">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 self-start rounded-full bg-aqua" />
                    <span className="text-[15px] font-medium text-ink">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">The team</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {aboutSection.team.map((person, i) => (
                  <li key={`${person.name}-${i}`} className="rounded-xl border border-peacock/15 bg-peacock/5 p-5">
                    <span aria-hidden className="mb-4 block size-12 rounded-full border border-dashed border-peacock/40" />
                    <p className="text-[15px] font-medium text-ink">{person.name}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{person.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
