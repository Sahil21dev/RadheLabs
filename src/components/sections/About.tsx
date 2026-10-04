import Image from 'next/image'
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
          <Reveal delay={120}>
            <div className="mt-12 max-w-[520px]">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{aboutSection.drivesTitle}</h3>
              <ul className="mt-4">
                {aboutSection.drives.map(({ title, body }) => (
                  <li key={title} className="grid grid-cols-[110px_1fr] items-baseline gap-5 border-b border-ink/10 py-4">
                    <span className="font-serif text-[22px] italic leading-none text-peacock">{title}</span>
                    <span className="text-[15px] font-light text-ink">{body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="space-y-12 lg:pt-6">
            <figure>
              <Image
                src={aboutSection.photo.src}
                alt={aboutSection.photo.alt}
                width={aboutSection.photo.width}
                height={aboutSection.photo.height}
                sizes="(min-width: 1024px) 520px, 100vw"
                className="h-auto w-full rounded-2xl border border-ink/10 shadow-[0_30px_80px_rgb(12_33_24/0.12)]"
              />
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {aboutSection.photo.caption}
              </figcaption>
            </figure>

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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
