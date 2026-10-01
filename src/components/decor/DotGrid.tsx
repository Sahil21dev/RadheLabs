/** Subtle dot-grid surface texture (PDA §2). Pure CSS, decorative, non-interactive. */
export function DotGrid({
  spacing = 26,
  dot = 1.5,
  alpha = 13,
}: {
  spacing?: number
  dot?: number
  /** Dot opacity in percent. */
  alpha?: number
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(color-mix(in srgb, var(--color-ivory) ${alpha}%, transparent) ${dot}px, transparent ${dot}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
    />
  )
}
