import Image from 'next/image'
import type { Project } from '@/content/types'
import { cn } from '@/lib/cn'
import { LendingVisual } from './LendingVisual'

/**
 * Neutral wireframes in the style of the original Figma mockups, with no text or figures.
 * Used where no screenshot can be shown: a real screenshot in `project.image` replaces them.
 */

const bar = (w: string, tone: 'dark' | 'light', strong = false) => (
  <span
    className={cn(
      'block h-1.5 rounded-full',
      tone === 'dark' ? (strong ? 'bg-ivory/30' : 'bg-ivory/15') : strong ? 'bg-ink/20' : 'bg-ink/10',
    )}
    style={{ width: w }}
  />
)

function ConsoleWireframe() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-forest p-4 sm:p-6">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(color-mix(in srgb, var(--color-ivory) 5%, transparent) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative mb-4 flex items-center gap-2 sm:mb-5">
        <span className="flex gap-1.5">
          <span className="h-[7px] w-[7px] rounded-full bg-aqua" />
          <span className="h-[7px] w-[7px] rounded-full bg-ivory/20" />
          <span className="h-[7px] w-[7px] rounded-full bg-ivory/10" />
        </span>
        <span className="h-px flex-1 bg-ivory/10" />
        {bar('44px', 'dark', true)}
      </div>
      <div className="relative grid h-[calc(100%-2.75rem)] grid-cols-[64px_1fr] gap-3 sm:grid-cols-[88px_1fr] sm:gap-4">
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={cn('rounded px-2 py-2', i === 0 ? 'bg-peacock' : 'bg-transparent')}>
              {bar(i === 0 ? '70%' : '55%', 'dark', i === 0)}
            </span>
          ))}
        </div>
        <div className="flex min-w-0 flex-col gap-2.5">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="flex flex-col gap-2 rounded-[5px] bg-ivory/5 p-2.5">
                <span className="h-3 w-3/5 rounded-sm bg-ivory/30" />
                {bar('70%', 'dark')}
              </span>
            ))}
          </div>
          <div className="flex-1 rounded-[5px] bg-ivory/[0.04] p-2.5">
            <svg width="100%" height="100%" viewBox="0 0 220 52" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="wf-console" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-aqua)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--color-aqua)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="0,46 30,38 60,30 90,34 120,18 150,14 180,8 210,4 220,3 220,52 0,52" fill="url(#wf-console)" />
              <polyline
                points="0,46 30,38 60,30 90,34 120,18 150,14 180,8 210,4 220,3"
                fill="none"
                stroke="var(--color-aqua)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-2">
            {['55%', '40%', '48%'].map((w, i) => (
              <span key={i} className="flex items-center justify-between border-b border-ivory/5 pb-1.5">
                {bar(w, 'dark')}
                {bar('18%', 'dark', true)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileWireframe() {
  return (
    <div className="flex justify-center py-3">
      <div className="w-[190px] rounded-[34px] bg-ivory px-[17px] pb-[26px] pt-[30px] shadow-[0_40px_100px_rgb(12_33_24/0.16),0_0_0_7px_var(--color-ink)]">
        <div className="mb-5 flex justify-between">
          {bar('24px', 'light')}
          {bar('20px', 'light')}
        </div>
        <div className="mb-4 space-y-2">
          {bar('42%', 'light')}
          <span className="block h-6 w-3/4 rounded-sm bg-ink/20" />
          {bar('50%', 'light')}
        </div>
        <div className="mb-3.5 rounded-2xl bg-peacock p-3">
          <span className="mb-3 block">{bar('30%', 'dark', true)}</span>
          <svg width="100%" height="42" viewBox="0 0 156 42" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="wf-mobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-aqua)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--color-aqua)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="0,38 26,31 52,27 78,29 104,17 130,11 156,7 156,42 0,42" fill="url(#wf-mobile)" />
            <polyline
              points="0,38 26,31 52,27 78,29 104,17 130,11 156,7"
              fill="none"
              stroke="var(--color-aqua)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="mb-2.5 block">{bar('28%', 'light')}</span>
        {['60%', '45%', '52%'].map((w, i) => (
          <span key={i} className="flex items-center justify-between border-b border-ink/10 py-2">
            {bar(w, 'light')}
            {bar('20%', 'light', true)}
          </span>
        ))}
      </div>
    </div>
  )
}

function AnalyticsWireframe() {
  const bars = [44, 55, 42, 60, 57, 68, 52, 65, 58, 70, 62, 72]
  return (
    <div className="aspect-[16/10] overflow-hidden rounded-[10px] border border-ink/10 bg-[#f7f3ec]">
      <div className="flex items-center gap-3 bg-peacock px-4 py-2.5 sm:px-5">
        <span className="h-3 w-12 rounded-sm bg-ivory/40" />
        <span className="h-3.5 w-px bg-ivory/25" />
        {bar('72px', 'dark')}
        <span className="flex-1" />
        {bar('30px', 'dark')}
      </div>
      <div className="grid h-[calc(100%-2.25rem)] grid-cols-[76px_1fr] sm:grid-cols-[108px_1fr]">
        <div className="flex flex-col gap-3.5 border-r border-ink/10 p-3.5">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="space-y-1.5">
              <span className={cn('block h-4 w-3/5 rounded-sm', i === 1 ? 'bg-aqua/60' : 'bg-peacock/40')} />
              {bar('80%', 'light')}
            </span>
          ))}
        </div>
        <div className="flex min-w-0 flex-col gap-2.5 p-3.5">
          {bar('45%', 'light')}
          <svg className="min-h-[78px] flex-1" width="100%" height="100%" viewBox="0 0 280 78" preserveAspectRatio="none" aria-hidden>
            {[20, 40, 60].map((y) => (
              <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="var(--color-ink)" strokeOpacity="0.06" />
            ))}
            {bars.map((h, i) => (
              <g key={i}>
                <rect x={i * 23 + 1} y={78 - h} width={20} height={h} rx={2} fill={i === 11 ? 'var(--color-aqua)' : 'var(--color-ink)'} fillOpacity={i === 11 ? 0.16 : 0.07} />
                <rect x={i * 23 + 1} y={78 - h} width={20} height={2.5} rx={1} fill={i === 11 ? 'var(--color-aqua)' : 'var(--color-ink)'} fillOpacity={i === 11 ? 1 : 0.2} />
              </g>
            ))}
            <polyline
              points="11,66 34,56 57,68 80,50 103,54 126,44 149,58 172,48 195,50 218,40 241,46 264,38"
              fill="none"
              stroke="var(--color-teal)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4,3"
            />
          </svg>
          <div className="mt-auto grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="space-y-2 rounded-md bg-ink/[0.04] p-2.5">
                <span className="block h-3.5 w-1/2 rounded-sm bg-peacock/40" />
                {bar('75%', 'light')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const surfaces = {
  console: { bg: 'bg-[#0b1f18]', pad: 'p-5 sm:p-8 lg:p-10', Wireframe: ConsoleWireframe },
  mobile: { bg: 'bg-peacock/[0.07]', pad: 'p-5 sm:p-7', Wireframe: MobileWireframe },
  analytics: { bg: 'bg-[#f0ece4]', pad: 'p-5 sm:p-6', Wireframe: AnalyticsWireframe },
  lending: { bg: 'bg-[#0b1f18]', pad: 'p-5 sm:p-8 lg:p-10', Wireframe: LendingVisual },
} as const

export function ProjectVisual({
  project,
  priority = false,
  className,
}: {
  project: Project
  priority?: boolean
  className?: string
}) {
  const { image, gallery, visual } = project
  const surface = surfaces[visual]
  const hasShots = Boolean(image || gallery?.length)

  return (
    <div className={cn('relative flex flex-col justify-center overflow-hidden', surface.bg, surface.pad, className)}>
      <div className="transition-transform duration-700 ease-out-soft group-hover:scale-[1.025]">
        {gallery?.length ? (
          <div className="flex justify-center gap-3 sm:gap-4">
            {gallery.map((shot, i) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                priority={priority && i === 0}
                sizes="(min-width: 1024px) 20vw, 33vw"
                className="h-auto w-[calc((100%-2rem)/3)] max-w-[220px] rounded-[14px] border border-ink/10 shadow-[0_20px_50px_rgb(12_33_24/0.14)]"
              />
            ))}
          </div>
        ) : image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={priority}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="h-auto w-full rounded-[10px]"
          />
        ) : (
          <div aria-hidden>
            <surface.Wireframe />
          </div>
        )}
      </div>
      {!hasShots && (
        <span
          aria-hidden
          className={cn(
            'absolute bottom-2 right-3 font-mono text-[11px] uppercase tracking-[0.14em]',
            visual === 'console' || visual === 'lending' ? 'text-ivory/50' : 'text-ink/55',
          )}
        >
          Illustrative visual
        </span>
      )}
    </div>
  )
}
