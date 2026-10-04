import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { externalProps } from '@/content/site'

const base = 'gap-2 font-mono uppercase transition-[background-color,color,gap,border-color] duration-300'

const variants = {
  /** Solid peacock button, for cream backgrounds. */
  primary:
    'btn-eye inline-flex items-center justify-center rounded-[4px] bg-peacock px-7 py-3.5 text-[11px] tracking-[0.12em] text-ivory hover:bg-peacock-mid',
  /** Solid ivory button, for green backgrounds. */
  inverse:
    'btn-eye inline-flex items-center justify-center rounded-[4px] bg-ivory px-8 py-4 text-[11px] tracking-[0.13em] text-peacock hover:bg-ivory-dark',
  /** Compact solid button for the navbar. */
  compact:
    'btn-eye inline-flex items-center justify-center rounded-[4px] bg-peacock px-5 py-2.5 text-[11px] tracking-[0.13em] text-ivory hover:bg-peacock-mid',
  /** Underlined secondary action. */
  underline:
    'inline-flex items-center border-b border-peacock/40 pb-1 text-[11px] tracking-[0.12em] text-peacock hover:border-peacock',
  /** Quiet arrow link; the arrow slides on hover. */
  link: 'inline-flex items-center gap-2 text-[11px] tracking-[0.13em] text-peacock hover:gap-3.5',
  linkOnDark: 'inline-flex items-center gap-2 text-[11px] tracking-[0.13em] text-ivory hover:gap-3.5',
} as const

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string
  variant?: keyof typeof variants
  /** Append a decorative arrow. */
  arrow?: boolean
  children: ReactNode
}

export function Button({ href, variant = 'primary', arrow, className, children, ...rest }: ButtonProps) {
  return (
    <a href={href} className={cn(base, variants[variant], arrow && 'btn-noeye', className)} {...externalProps(href)} {...rest}>
      {children}
      {arrow && <span aria-hidden>→</span>}
    </a>
  )
}
