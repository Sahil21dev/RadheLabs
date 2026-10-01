'use client'

import { useEffect } from 'react'
import { FeatherEye } from '@/components/decor/FeatherEye'
import { site } from '@/content/site'

/**
 * One-off intro: the feather-eye opens, then the name. Roughly 1.7s, once per session.
 * Timing and exit are pure CSS (globals.css) and it is armed by the script in layout.tsx;
 * this component only adds "click or press any key to skip".
 */
export function Loader() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('loader-on')) return
    const skip = () => root.classList.add('loader-skip')
    window.addEventListener('keydown', skip, { once: true })
    window.addEventListener('pointerdown', skip, { once: true })
    return () => {
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
  }, [])

  return (
    <div
      aria-hidden
      data-surface="dark"
      className="loader fixed inset-0 z-[100] flex-col items-center justify-center gap-6 bg-peacock"
    >
      <svg width="110" height="135" viewBox="-110 -135 220 270" className="loader-eye">
        <FeatherEye idPrefix="loader" withBarbs={false} />
      </svg>
      <p className="loader-word font-mono text-[12px] uppercase tracking-[0.3em] text-ivory/85">{site.name}</p>
    </div>
  )
}
