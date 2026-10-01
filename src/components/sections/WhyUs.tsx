import { differentiators, whySection } from '@/content/about'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { DotGrid } from '@/components/decor/DotGrid'

/** A full-bleed green section: dense, text-led, and a change of rhythm after the visual-heavy work section. */
export function WhyUs() {
  return (
    <section
      id="why"
      data-surface="dark"
      aria-labelledby="why-title"
      className="relative scroll-mt-16 overflow-hidden bg-peacock px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <DotGrid spacing={28} alpha={9} />
      <div className="relative">
        <Reveal>
          <SectionHeader id="why-title" eyebrow={whySection.eyebrow} heading={whySection.heading} tone="dark" />
        </Reveal>

        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-10">
          {differentiators.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 70}>
                <div className="border-t border-ivory/20 pt-6">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-aqua-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mb-3 mt-4 font-serif text-[26px] font-normal leading-[1.1] text-ivory">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] font-light leading-[1.75] text-ivory/75">{item.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
