import { processSection, processSteps } from '@/content/process'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'

/** Four-stage process. 4 columns on desktop, 2 on tablet, a single rail on mobile. */
export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="scroll-mt-16 px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <Reveal className="mb-14 lg:mb-[72px]">
        <SectionHeader id="process-title" eyebrow={processSection.eyebrow} heading={processSection.heading} />
      </Reveal>

      <div className="relative">
        {/* Connecting line behind the step nodes (desktop only). */}
        <div
          aria-hidden
          className="absolute left-[12.5%] right-[12.5%] top-[18px] hidden h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent lg:block"
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((step, i) => (
            <li key={step.n}>
              <Reveal delay={i * 80}>
                <div className="group border-l border-peacock/15 pl-7 transition-colors duration-300 hover:border-aqua lg:pr-8">
                  <div className="mb-7 flex size-9 items-center justify-center rounded-full border-[1.5px] border-aqua bg-ivory">
                    <span className="font-mono text-[11px] tracking-[0.06em] text-peacock-mid">{step.n}</span>
                  </div>
                  <h3 className="mb-4 font-serif text-[30px] font-normal leading-none text-ink">{step.title}</h3>
                  <p className="text-[14.5px] font-light leading-[1.75] text-muted">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
