import { cn } from '@/lib/cn'

type TechnologyTagsProps = {
  items: string[]
  /** `quiet` is the lighter outline used on compact index rows. */
  tone?: 'default' | 'quiet'
  label?: string
  className?: string
}

export function TechnologyTags({ items, tone = 'default', label = 'Technologies', className }: TechnologyTagsProps) {
  return (
    <ul aria-label={label} className={cn('flex flex-wrap gap-2', className)}>
      {items.map((tech, i) => (
        <li
          key={`${tech}-${i}`}
          className={cn(
            'rounded-[3px] border px-2.5 py-1 font-mono text-[11px] tracking-[0.06em]',
            tone === 'quiet' ? 'border-ink/15 text-muted' : 'border-peacock/30 text-peacock',
          )}
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}
