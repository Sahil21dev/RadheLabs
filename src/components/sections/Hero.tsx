import { hero } from '@/content/hero'
import { processSteps } from '@/content/process'
import { site } from '@/content/site'
import { Eyebrow } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { DotGrid } from '@/components/decor/DotGrid'
import { FeatherEye } from '@/components/decor/FeatherEye'

/**
 * Below `md` the feather is a faint background behind the text (the section is one column).
 * From `md` it becomes the right-hand green panel.
 */
function HeroVisual() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden md:pointer-events-auto md:relative md:z-auto md:bg-peacock"
    >
      <div className="hidden md:block">
        <DotGrid spacing={26} dot={1.5} alpha={13} />
      </div>

      {/* Registration corners. Purely decorative. */}
      {['left-4 top-4 border-l border-t', 'right-4 top-4 border-r border-t', 'bottom-4 left-4 border-b border-l', 'bottom-4 right-4 border-b border-r'].map(
        (pos) => (
          <span key={pos} className={`absolute hidden size-3 border-ivory/25 md:block ${pos}`} />
        ),
      )}

      {/* The whole feather always fits (meet, not slice). Faint and offset on phones, full on the panel. */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.2] md:px-8 md:py-10 md:opacity-100">
        <svg
          className="h-full w-full translate-x-[16%] scale-[1.12] md:translate-x-0 md:scale-100"
          viewBox="-200 -290 400 650"
          preserveAspectRatio="xMidYMid meet"
        >
          <FeatherEye idPrefix="hero" />
        </svg>
      </div>

      {/* Idea → launch: what the studio owns, drawn from the process content. */}
      <div className="absolute left-5 top-6 hidden rounded-[10px] border border-ivory/20 bg-ivory/10 px-[18px] py-4 backdrop-blur-[8px] lg:left-8 lg:top-8 lg:block xl:left-10 xl:top-10">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-aqua-light">Idea → Launch</p>
        <ol className="space-y-2">
          {processSteps.map((step) => (
            <li key={step.n} className="flex items-center gap-3 font-mono text-[11px] tracking-[0.08em] text-ivory/85">
              <span className="text-aqua-light">{step.n}</span>
              {step.title}
            </li>
          ))}
        </ol>
      </div>

      {site.availability && (
        <div className="absolute bottom-6 left-5 hidden items-center gap-2.5 rounded-lg border border-ivory/20 bg-ivory/10 px-3.5 py-2.5 md:flex lg:bottom-12 lg:left-10">
          <span className="h-[7px] w-[7px] rounded-full bg-aqua shadow-[0_0_8px_var(--color-aqua)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ivory">{site.availability}</span>
        </div>
      )}

      <p className="absolute right-5 top-1/2 hidden -translate-y-1/2 select-none whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-ivory/45 [writing-mode:vertical-rl] lg:block">
        {site.name}
      </p>

      <span className="pointer-events-none absolute -bottom-10 -right-5 hidden select-none font-serif text-[240px] italic leading-none text-ivory/5 md:block">
        {site.monogram}
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate grid min-h-[max(100svh,620px)] pt-16 md:grid-cols-[55%_1fr] lg:grid-cols-[58%_1fr]"
    >
      <div className="flex flex-col justify-center gap-[clamp(1.75rem,4vw,3rem)] border-ink/10 px-[clamp(1.25rem,5vw,4rem)] py-[clamp(2.5rem,7vw,4.5rem)] md:border-r">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-[clamp(1.25rem,3vw,2rem)] text-balance font-serif text-[clamp(2.75rem,11.5vw,5.75rem)] font-normal leading-[0.98] text-ink md:text-[clamp(2.5rem,5.6vw,3.75rem)] lg:text-[clamp(3.25rem,5.2vw,6rem)]"
          >
            {hero.headline.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <em className="block italic text-peacock">{hero.headline.emphasis}</em>
          </h1>
        </div>

        <div>
          <p className="mb-[clamp(1.5rem,3vw,2.25rem)] max-w-[38ch] text-[clamp(1rem,0.55rem+1.5vw,1.3rem)] font-light leading-[1.7] text-muted">
            {hero.body}
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="underline" arrow>
              {hero.secondaryCta.label}
            </Button>
          </div>

          <p className="mt-[clamp(1.5rem,3vw,2.5rem)] flex items-center gap-2.5 border-t border-ink/10 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            <span aria-hidden className="h-[7px] w-[7px] shrink-0 rounded-full bg-aqua" />
            <span>For {hero.audience}</span>
          </p>
        </div>
      </div>

      <HeroVisual />
    </section>
  )
}
