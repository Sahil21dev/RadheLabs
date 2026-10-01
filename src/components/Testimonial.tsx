import type { Testimonial as TestimonialData } from '@/content/types'

type TestimonialProps = {
  testimonial: TestimonialData
  /** Marks the slot as unfilled. Used only in development so the layout is visible before real quotes exist. */
  placeholder?: boolean
}

/** Neutral testimonial layout. Feed it a real, permissioned quote only. */
export function Testimonial({ testimonial, placeholder = false }: TestimonialProps) {
  const initial = testimonial.name.replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase() || '·'
  return (
    <figure
      className={
        placeholder
          ? 'relative mx-auto max-w-[840px] rounded-xl border border-dashed border-ink/30 p-6 sm:p-8'
          : 'relative mx-auto max-w-[840px]'
      }
    >
      {placeholder && (
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          Dev only: testimonial slot, hidden in production
        </p>
      )}
      <span aria-hidden className="pointer-events-none absolute -left-2 -top-3 select-none font-serif text-[96px] italic leading-none text-peacock/10">
        “
      </span>
      <blockquote className="mb-10 pl-4 font-serif text-[clamp(1.5rem,3vw,2.25rem)] italic leading-[1.5] text-ink sm:pl-8">
        {testimonial.quote}
      </blockquote>
      <figcaption className="flex items-center gap-5 pl-4 sm:pl-8">
        <span aria-hidden className="flex size-11 items-center justify-center rounded-full bg-peacock/10 font-serif text-lg italic text-peacock">
          {initial}
        </span>
        <span>
          <span className="block text-[14px] font-medium text-ink">{testimonial.name}</span>
          <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            {testimonial.role}, {testimonial.company}
          </span>
        </span>
        <span aria-hidden className="ml-3 hidden h-px flex-1 bg-ink/10 sm:block" />
      </figcaption>
    </figure>
  )
}
