import type { CSSProperties } from 'react'
import { MiniEye } from '@/components/decor/MiniEye'
import { cn } from '@/lib/cn'

/**
 * Illustrative lending console: one application moving through the stack (KYC → LMS),
 * the BRE's policy checks, and the credit decision. Mock values only, no client data.
 * Plays once when its <Reveal> wrapper scrolls into view (see `.lend-*` in globals.css).
 */

const stages = ['KYC', 'Bureau', 'BRE', 'Sanction', 'Disburse', 'LMS']

const rules = [
  { rule: 'PAN ↔ Aadhaar', source: 'KYC' },
  { rule: 'Bureau score ≥ 700', source: 'Bureau' },
  { rule: 'FOIR ≤ 55%', source: 'BRE' },
  { rule: '0 DPD · last 12 mo', source: 'Bureau' },
  { rule: 'Age 21 – 58', source: 'BRE' },
]

const emis = 12
const paid = 4

/** Start delay for one beat of the sequence. */
const at = (ms: number, extra?: Record<string, string>) => ({ '--d': `${ms}ms`, ...extra }) as CSSProperties

function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden className={className}>
      <path d="M2.5 6.2 5 8.5 9.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Semicircle score gauge. The arc length is normalised to 1 so the fill is a dash offset. */
function ScoreGauge() {
  const score = 762
  const fill = (score - 300) / 600
  return (
    <div className="relative mx-auto w-full max-w-[200px]">
      <svg viewBox="0 0 120 68" className="w-full" aria-hidden>
        <defs>
          <linearGradient id="lend-gauge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-feather-copper)" />
            <stop offset="55%" stopColor="var(--color-feather-emerald)" />
            <stop offset="100%" stopColor="var(--color-feather-cyan)" />
          </linearGradient>
        </defs>
        <path d="M10 62a50 50 0 0 1 100 0" pathLength={1} fill="none" stroke="var(--color-ivory)" strokeOpacity="0.08" strokeWidth="8" strokeLinecap="round" />
        <path
          className="lend-draw"
          style={at(900, { '--to': `${1 - fill}` })}
          d="M10 62a50 50 0 0 1 100 0"
          pathLength={1}
          fill="none"
          stroke="url(#lend-gauge)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="1"
          strokeDashoffset={1 - fill}
        />
      </svg>
      <div className="-mt-3 text-center sm:absolute sm:inset-x-[18%] sm:bottom-0 sm:mt-0">
        <span className="lend-pop block font-serif text-[20px] leading-none text-ivory sm:text-[34px]" style={at(1400)}>
          {score}
        </span>
        <span className="mt-1 block whitespace-nowrap text-[7px] uppercase tracking-[0.12em] text-ivory/45 sm:text-[9px] sm:tracking-[0.16em]">Bureau score</span>
      </div>
    </div>
  )
}

export function LendingVisual() {
  return (
    <div className="relative overflow-hidden rounded-[10px] bg-forest p-4 font-mono text-ivory sm:p-6">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(color-mix(in srgb, var(--color-ivory) 5%, transparent) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div aria-hidden className="absolute -left-16 bottom-4 h-56 w-56 rounded-full bg-feather-emerald/15 blur-3xl" />
      <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-feather-cyan/10 blur-3xl" />

      <div className="relative space-y-3 sm:space-y-4">
        {/* title bar */}
        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-ivory/45 sm:text-[10px]">
          <span className="flex shrink-0 gap-1.5">
            <span className="h-[7px] w-[7px] rounded-full bg-aqua" />
            <span className="h-[7px] w-[7px] rounded-full bg-ivory/20" />
            <span className="h-[7px] w-[7px] rounded-full bg-ivory/10" />
          </span>
          <span className="ml-1 truncate">Application · LA-20417</span>
          <span className="h-px flex-1 bg-ivory/10" />
          <span className="whitespace-nowrap text-aqua-light">Personal loan</span>
        </div>

        {/* pipeline */}
        <div className="rounded-[8px] border border-ivory/[0.07] bg-ivory/[0.03] px-2 pb-3 pt-4 sm:px-4 sm:pt-5">
          <div className="relative">
            <span className="absolute left-[8.33%] right-[8.33%] top-[9px] h-px bg-ivory/10 sm:top-[11px]" />
            <span
              className="lend-track absolute left-[8.33%] right-[8.33%] top-[8.5px] h-[2px] origin-left bg-gradient-to-r from-feather-emerald via-aqua to-feather-cyan sm:top-[10.5px]"
              style={at(200)}
            />
            <ol className="relative grid grid-cols-6">
              {stages.map((stage, i) => (
                <li key={stage} className="flex flex-col items-center gap-2">
                  <span
                    className="lend-node flex h-[19px] w-[19px] items-center justify-center rounded-full bg-aqua text-forest shadow-[0_0_0_4px_rgb(74_168_154/0.15)] sm:h-[23px] sm:w-[23px]"
                    style={at(250 + i * 150)}
                  >
                    <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </span>
                  <span className="text-[7px] uppercase tracking-[0.02em] text-ivory/65 sm:text-[10px] sm:tracking-[0.08em]">{stage}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* decision + policy checks */}
        <div className="grid grid-cols-[0.8fr_1fr] gap-3 sm:gap-4">
          <div className="flex min-w-0 flex-col justify-between gap-3 rounded-[8px] border border-ivory/[0.07] bg-ivory/[0.03] p-3 sm:p-4">
            <span className="text-[8px] uppercase tracking-[0.14em] text-ivory/45 sm:text-[9px]">Credit decision</span>
            <ScoreGauge />
            <span
              className="lend-stamp mx-auto flex items-center gap-1.5 rounded-full border border-feather-emerald/50 bg-feather-emerald/15 py-1 pl-1.5 pr-3 text-[9px] uppercase tracking-[0.16em] text-[#8fe0b5] sm:text-[10px]"
              style={at(1800)}
            >
              <MiniEye className="h-3.5 w-3.5" />
              Approved
            </span>
          </div>

          <div className="min-w-0 rounded-[8px] border border-ivory/[0.07] bg-ivory/[0.03] p-3 sm:p-4">
            <span className="text-[8px] uppercase tracking-[0.14em] text-ivory/45 sm:text-[9px]">BRE · Policy checks</span>
            <ul className="mt-2.5 space-y-[7px] sm:mt-3.5 sm:space-y-3">
              {rules.map(({ rule, source }, i) => (
                <li key={rule} className="lend-row flex items-center gap-2" style={at(700 + i * 130)}>
                  <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-aqua/20 text-aqua-light sm:h-4 sm:w-4">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span className="min-w-0 truncate text-[8.5px] text-ivory/85 sm:text-[11px]">{rule}</span>
                  <span className="ml-auto hidden text-[8px] uppercase tracking-[0.1em] text-ivory/35 md:inline">{source}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* sanction + repayment schedule (LMS) */}
        <div className="flex items-center gap-3 rounded-[8px] border border-ivory/[0.07] bg-ivory/[0.03] px-3 py-2.5 sm:gap-5 sm:px-4 sm:py-3">
          <div className="shrink-0">
            <span className="block text-[8px] uppercase tracking-[0.14em] text-ivory/45 sm:text-[9px]">Sanctioned</span>
            <span className="font-serif text-base leading-tight text-ivory sm:text-xl">₹2,40,000</span>
          </div>
          <span className="h-8 w-px shrink-0 bg-ivory/10" />
          <div className="min-w-0 flex-1">
            <span className="flex justify-between gap-2 whitespace-nowrap text-[8px] uppercase tracking-[0.1em] text-ivory/45 sm:text-[9px] sm:tracking-[0.14em]">
              <span>
                EMI schedule<span className="hidden sm:inline"> · LMS</span>
              </span>
              <span className="text-ivory/65">
                {paid}/{emis} paid
              </span>
            </span>
            <span className="mt-1.5 grid grid-cols-12 gap-1">
              {Array.from({ length: emis }, (_, i) => (
                <span
                  key={i}
                  className={cn('lend-emi h-1.5 rounded-full', i < paid ? 'bg-aqua' : 'bg-ivory/10')}
                  style={at(2000 + i * 45)}
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
