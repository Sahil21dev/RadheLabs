import { Button } from '@/components/ui/Button'

/** A real link when the case study exists; otherwise a clearly non-interactive pending label. */
export function CaseStudyCTA({ href, label = 'View case study' }: { href?: string; label?: string }) {
  if (!href) {
    return (
      <span className="font-mono text-[11px] uppercase tracking-[0.13em] text-muted">
        Case study [link pending]
      </span>
    )
  }
  return (
    <Button href={href} variant="link" arrow>
      {label}
    </Button>
  )
}
