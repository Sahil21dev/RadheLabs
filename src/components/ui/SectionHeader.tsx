import type { ReactNode } from 'react'
import type { Heading } from '@/content/types'
import { cn } from '@/lib/cn'

export function Eyebrow({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]',
        tone === 'dark' ? 'text-ivory/70' : 'text-muted',
      )}
    >
      <span aria-hidden className="flex items-center">
        <span className="block h-[9px] w-[6px] rounded-full border border-feather-copper">
          <span className="mx-auto mt-[2.5px] block h-[2px] w-[2px] rounded-full bg-feather-blue" />
        </span>
        <span className={cn('block h-px w-4', tone === 'dark' ? 'bg-ivory/40' : 'bg-muted/60')} />
      </span>
      {children}
    </p>
  )
}

const sizes = {
  md: 'text-[clamp(2.5rem,4.5vw,4rem)]',
  lg: 'text-[clamp(2.75rem,5vw,4.75rem)]',
  xl: 'text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.97]',
} as const

type SectionHeaderProps = {
  eyebrow: string
  heading: Heading
  size?: keyof typeof sizes
  tone?: 'light' | 'dark'
  id?: string
  /** Optional right-aligned slot (e.g. a link) that drops below the heading on mobile. */
  action?: ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  heading,
  size = 'md',
  tone = 'light',
  id,
  action,
  className,
}: SectionHeaderProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between', className)}>
      <div>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className={cn(
            'mt-5 font-serif font-normal leading-none',
            sizes[size],
            dark ? 'text-ivory' : 'text-ink',
          )}
        >
          {heading.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          {heading.emphasis && (
            <em className={cn('block italic', dark ? 'text-aqua-light' : 'text-peacock')}>
              {heading.emphasis}
            </em>
          )}
        </h2>
      </div>
      {action}
    </div>
  )
}
