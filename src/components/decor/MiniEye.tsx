/** The feather's eye as a small flat icon (logo, dividers). Decorative; flat fills so it can repeat on a page. */
export function MiniEye({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="-11 -13 22 26" className={className}>
      <path
        d="M0 -12C5.5 -8 9.5 -3 9.3 2.5C9.1 8.5 5 12 0 12C-5 12 -9.1 8.5 -9.3 2.5C-9.5 -3 -5.5 -8 0 -12Z"
        fill="var(--color-feather-copper)"
      />
      <ellipse cx="0" cy="3.2" rx="6.2" ry="6" fill="var(--color-feather-brown)" />
      <ellipse cx="0" cy="3.2" rx="5.4" ry="5.2" fill="var(--color-feather-cyan)" />
      <ellipse cx="0.5" cy="2.4" rx="3.7" ry="3.5" fill="var(--color-feather-blue)" />
      <ellipse cx="0.6" cy="1.8" rx="1.9" ry="1.7" fill="var(--color-feather-navy)" />
    </svg>
  )
}
