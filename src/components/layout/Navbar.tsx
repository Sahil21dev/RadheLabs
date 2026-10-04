'use client'

import { useEffect, useState } from 'react'
import { site, ctaHref } from '@/content/site'
import { BrandMark } from '@/components/ui/BrandMark'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the menu; growing to desktop width resets it.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
        solid ? 'border-ink/10 bg-ivory/95 backdrop-blur-[14px]' : 'border-transparent bg-transparent',
      )}
    >
      <div className="flex h-16 items-center px-5 sm:px-8 lg:px-[52px]">
        <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name}, back to top`}>
          <BrandMark />
          <span className="font-mono text-[12.5px] font-medium uppercase tracking-[0.22em] text-ink">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-11">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[13.5px] tracking-[0.01em] text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden md:block">
          <Button href={ctaHref()} variant="compact" arrow>
            Tell us your idea
          </Button>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 items-center gap-2.5 rounded-[4px] px-2 font-mono text-[11px] uppercase tracking-[0.13em] text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
          <span aria-hidden className="relative block h-2.5 w-5">
            <span
              className={cn(
                'absolute left-0 h-px w-full bg-ink transition-all duration-300',
                open ? 'top-1/2 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-px w-full bg-ink transition-all duration-300',
                open ? 'top-1/2 -rotate-45' : 'bottom-0',
              )}
            />
          </span>
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-ink/10 md:hidden">
        <nav aria-label="Mobile" className="flex flex-col px-5 pb-6 pt-2 sm:px-8">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-4 font-serif text-[28px] leading-none text-ink"
            >
              {link.label}
            </a>
          ))}
          <Button href={ctaHref()} arrow className="mt-6" onClick={() => setOpen(false)}>
            Tell us your idea
          </Button>
        </nav>
      </div>
    </header>
  )
}
