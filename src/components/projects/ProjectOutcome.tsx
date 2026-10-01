/** Renders only when a real outcome exists. Never fabricate results. */
export function ProjectOutcome({ outcome }: { outcome?: string }) {
  if (!outcome) return null
  return (
    <div className="rounded-r-[5px] border-l-2 border-peacock bg-peacock/[0.05] px-3.5 py-2.5">
      <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Outcome</p>
      <p className="text-[13.5px] leading-relaxed text-ink">{outcome}</p>
    </div>
  )
}
