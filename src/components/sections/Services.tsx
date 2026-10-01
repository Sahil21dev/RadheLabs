'use client'

import { useState } from 'react'
import { services, servicesSection } from '@/content/services'
import { contactHref } from '@/content/site'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { DotGrid } from '@/components/decor/DotGrid'
import { cn } from '@/lib/cn'

/** Accordion list (hover/focus/click to open) plus a sticky green detail panel on large screens. */
export function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-16 border-t border-ink/5 bg-ivory-dark px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_400px] lg:gap-24">
        <div>
          <Reveal>
            <SectionHeader id="services-title" eyebrow={servicesSection.eyebrow} heading={servicesSection.heading} />
          </Reveal>

          <ul className="mt-12 lg:mt-16">
            {services.map((service, i) => {
              const open = i === active
              const panelId = `service-panel-${service.id}`
              return (
                <li key={service.id}>
                  <Reveal delay={i * 50}>
                    <div className="border-t border-peacock/10 transition-colors hover:bg-peacock/[0.025]">
                      <h3>
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => setActive(i)}
                          onMouseEnter={() => setActive(i)}
                          onFocus={() => setActive(i)}
                          className="flex w-full items-start gap-5 py-5 text-left sm:gap-7"
                        >
                          <span
                            className={cn(
                              'shrink-0 pt-1.5 font-mono text-[11px] tracking-[0.14em] transition-colors',
                              open ? 'text-peacock-mid' : 'text-muted',
                            )}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={cn(
                              'font-serif text-[26px] leading-none transition-colors sm:text-[28px]',
                              open ? 'text-peacock' : 'text-ink',
                            )}
                          >
                            {service.title}
                          </span>
                        </button>
                      </h3>
                      <div
                        id={panelId}
                        inert={!open}
                        className={cn(
                          'grid transition-[grid-template-rows] duration-500 ease-out-soft',
                          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-6 pl-[46px] pr-2 sm:pl-[58px]">
                            <p className="max-w-[520px] text-[14.5px] font-light leading-[1.75] text-muted">
                              {service.summary}
                            </p>
                            {/* On large screens the includes list lives in the side panel. */}
                            <ul className="mt-4 flex flex-wrap gap-2 lg:hidden">
                              {service.includes.map((item) => (
                                <li
                                  key={item}
                                  className="rounded-[3px] border border-peacock/25 px-2.5 py-1 font-mono text-[11px] tracking-[0.06em] text-peacock"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>

        <Reveal delay={100} className="hidden lg:block">
          <div className="sticky top-24">
            <div
              data-surface="dark"
              className="relative overflow-hidden rounded-[14px] bg-peacock px-9 py-10"
            >
              <DotGrid spacing={22} alpha={7} />
              <div className="relative">
                <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-aqua-light">
                  {String(active + 1).padStart(2, '0')} / {current.title}
                </p>
                <ul aria-live="polite" className="space-y-3">
                  {current.includes.map((item) => (
                    <li key={item} className="flex items-baseline gap-3 font-serif text-[22px] italic leading-snug text-ivory">
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 translate-y-[-3px] rounded-full bg-aqua" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 border-t border-ivory/15 pt-7">
                  <Button href={contactHref()} variant="linkOnDark" arrow>
                    Discuss your project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
