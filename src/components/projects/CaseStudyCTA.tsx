import { Button } from '@/components/ui/Button'

/** Links to the case study, or the live site for external URLs. Renders nothing without a link. */
export function CaseStudyCTA({ href, label }: { href?: string; label?: string }) {
  if (!href) return null
  const external = /^https?:\/\//.test(href)
  return (
    <Button href={href} variant="link" arrow>
      {label ?? (external ? 'Visit live site' : 'View case study')}
    </Button>
  )
}
