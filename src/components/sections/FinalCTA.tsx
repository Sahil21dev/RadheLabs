import { contactSection } from '@/content/contact'
import { contactHref, isPlaceholder, site } from '@/content/site'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { DotGrid } from '@/components/decor/DotGrid'
import { FeatherEye } from '@/components/decor/FeatherEye'

export function FinalCTA() {
  const emailReady = !isPlaceholder(site.email)
  return (
    <section
      id="contact"
      data-surface="dark"
      aria-labelledby="contact-title"
      className="relative scroll-mt-16 overflow-hidden bg-peacock px-5 py-24 sm:px-8 lg:px-16 lg:py-32"
    >
      <DotGrid spacing={28} alpha={9} />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-10 select-none font-serif text-[320px] italic leading-none text-ivory/[0.03]"
      >
        {site.monogram}
      </span>
      <svg
        aria-hidden
        className="absolute right-[60px] top-1/2 hidden -translate-y-1/2 lg:block"
        width="250"
        height="446"
        viewBox="-175 -275 350 625"
        opacity="0.85"
      >
        <FeatherEye idPrefix="cta" />
      </svg>

      <div className="relative max-w-[680px]">
        <Reveal>
          <SectionHeader
            id="contact-title"
            eyebrow={contactSection.eyebrow}
            heading={contactSection.heading}
            size="xl"
            tone="dark"
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-10 mt-8 max-w-[440px] text-[16px] font-light leading-[1.75] text-ivory/80">
            {contactSection.body}
          </p>
          <div className="flex flex-col items-start gap-x-6 gap-y-5 sm:flex-row sm:items-center">
            <Button href={contactHref()} variant="inverse" arrow>
              {contactSection.primaryCta}
            </Button>
            {emailReady ? (
              <a
                href={contactHref()}
                className="break-all border-b border-aqua-light/40 pb-1 font-serif text-[18px] italic text-aqua-light transition-colors hover:border-aqua-light"
              >
                {site.email}
              </a>
            ) : (
              <span className="font-mono text-[12px] tracking-[0.06em] text-ivory/70">{site.email}</span>
            )}
          </div>

          <ol className="mt-14 grid gap-4 border-t border-ivory/15 pt-8 sm:grid-cols-3 sm:gap-8">
            {contactSection.howToStart.map((step, i) => (
              <li key={step} className="flex gap-3 text-[14px] font-light leading-relaxed text-ivory/80">
                <span className="font-mono text-[11px] tracking-[0.1em] text-aqua-light">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
