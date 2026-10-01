/**
 * The RadheLabs signature: a peacock feather in its real colours (deep and emerald greens, a green-gold
 * halo, a copper teardrop, then a brown ring, a cyan ring and a royal-blue core). Decorative, pure SVG + CSS.
 * Barbs are generated once at module load (deterministic, so server and client agree).
 * Motion lives in globals.css (.feather-barb, .feather-eye) and is disabled by reduced-motion.
 */

const AXIS_X = 0
const TOP = -270
const BOTTOM = 340
const EYE_Y = 0
const HALF_MAX = 160
const STEP = 6

const barbColours = [
  'var(--color-feather-emerald)',
  'var(--color-feather-green)',
  'var(--color-feather-emerald)',
  'var(--color-feather-lime)',
  'var(--color-aqua)',
]

type Barb = { d: string; delay: number; opacity: number; colour: string }

function buildBarbs() {
  const barbs: Barb[] = []
  const left: string[] = []
  const right: string[] = []
  let i = 0
  for (let y = TOP + 8; y < BOTTOM; y += STEP) {
    const t = (y - TOP) / (BOTTOM - TOP)
    // Slight irregularity so the vane reads as a feather, not a pattern.
    const jitter = 1 + 0.1 * Math.sin(i * 1.7) + 0.05 * Math.sin(i * 4.3)
    const half = HALF_MAX * Math.sin(Math.PI * Math.pow(t, 0.75)) * jitter
    if (half < 6) continue
    // Barbs near the eye are strongest, fading towards the tip and the quill.
    const strength = 1 - Math.min(1, Math.abs(y - EYE_Y) / 340)
    for (const side of [-1, 1]) {
      const x1 = AXIS_X + side * half
      const y1 = y - half * 0.6
      const cx = AXIS_X + side * half * 0.55
      barbs.push({
        d: `M${AXIS_X} ${y.toFixed(1)}Q${cx.toFixed(1)} ${(y + 3).toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)}`,
        delay: i * 5,
        opacity: 0.35 + strength * 0.6,
        colour: barbColours[(i + (side > 0 ? 2 : 0)) % barbColours.length],
      })
      ;(side < 0 ? left : right).push(`${x1.toFixed(1)} ${y1.toFixed(1)}`)
    }
    i++
  }
  // The soft "vane" under the barbs, so the feather has body rather than bare lines.
  const vane = `M${AXIS_X} ${TOP + 14}L${right.join('L')}L${AXIS_X} ${BOTTOM}L${[...left].reverse().join('L')}Z`
  return { barbs, vane }
}

const { barbs, vane } = buildBarbs()

/** A teardrop pointing up, the outline of the eye. */
const drop = 'M0 -108C46 -70 82 -20 80 22C78 70 40 100 0 100C-40 100 -78 70 -80 22C-82 -20 -46 -70 0 -108Z'

export function FeatherEye({
  className,
  idPrefix = 'fe',
  withBarbs = true,
}: {
  className?: string
  idPrefix?: string
  withBarbs?: boolean
}) {
  const id = (n: string) => `${idPrefix}-${n}`
  return (
    <g aria-hidden className={className}>
      <defs>
        <linearGradient id={id('vane')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-feather-deep)" stopOpacity="0.1" />
          <stop offset="40%" stopColor="var(--color-feather-green)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-feather-deep)" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id={id('halo')} cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="var(--color-feather-lime)" />
          <stop offset="55%" stopColor="var(--color-feather-emerald)" />
          <stop offset="100%" stopColor="var(--color-feather-green)" />
        </radialGradient>
        <radialGradient id={id('copper')} cx="50%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#e69a4c" />
          <stop offset="50%" stopColor="var(--color-feather-copper)" />
          <stop offset="100%" stopColor="#5e2a12" />
        </radialGradient>
        <radialGradient id={id('cyan')} cx="38%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#a8eefa" />
          <stop offset="55%" stopColor="var(--color-feather-cyan)" />
          <stop offset="100%" stopColor="#1b86c2" />
        </radialGradient>
        <radialGradient id={id('blue')} cx="40%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#3a4be0" />
          <stop offset="55%" stopColor="var(--color-feather-blue)" />
          <stop offset="100%" stopColor="var(--color-feather-navy)" />
        </radialGradient>
      </defs>

      {withBarbs && (
        <>
          {/* Vane (body of the feather) and quill */}
          <path d={vane} fill={`url(#${id('vane')})`} />
          <line
            x1={AXIS_X}
            y1={TOP + 20}
            x2={AXIS_X}
            y2={BOTTOM}
            stroke="var(--color-feather-lime)"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />

          {/* Barbs */}
          <g fill="none" strokeLinecap="round" strokeWidth="1.25">
            {barbs.map((b, n) => (
              <path
                key={n}
                d={b.d}
                pathLength={1}
                stroke={b.colour}
                strokeOpacity={b.opacity}
                className="feather-barb"
                style={{ '--d': `${b.delay}ms` } as React.CSSProperties}
              />
            ))}
          </g>
        </>
      )}

      {/* The eye */}
      <g className="feather-eye">
        {/* Soft green-gold halo, then the copper teardrop */}
        <path d={drop} transform="scale(1.17 1.13) translate(0 -2)" fill={`url(#${id('halo')})`} fillOpacity="0.9" />
        <path d={drop} transform="scale(1.17 1.13) translate(0 -2)" fill="none" stroke="var(--color-feather-lime)" strokeOpacity="0.6" />
        <path d={drop} fill={`url(#${id('copper')})`} />
        {/* Fine copper streaks */}
        <g stroke="#f4c47e" strokeOpacity="0.22" strokeWidth="1" fill="none">
          {[-52, -34, -16, 0, 16, 34, 52].map((x) => (
            <path key={x} d={`M${x * 0.25} -84Q${x * 0.9} -30 ${x} 8`} />
          ))}
        </g>
        {/* Brown ring, cyan ring, royal blue, near-black core */}
        <ellipse cx={AXIS_X} cy="26" rx="58" ry="55" fill="var(--color-feather-brown)" />
        <ellipse cx={AXIS_X} cy="26" rx="49" ry="47" fill={`url(#${id('cyan')})`} />
        <ellipse cx="4" cy="20" rx="34" ry="31" fill={`url(#${id('blue')})`} />
        <ellipse cx="5" cy="14" rx="19" ry="16" fill="var(--color-feather-navy)" />
        {/* A small notch where the blue meets the cyan, as on a real eye */}
        <path d="M-6 50C-2 41 6 41 10 49" fill="var(--color-feather-cyan)" fillOpacity="0.9" />
        <ellipse cx="-3" cy="10" rx="5" ry="3.5" fill="#8fa2ff" fillOpacity="0.55" />
      </g>
    </g>
  )
}
