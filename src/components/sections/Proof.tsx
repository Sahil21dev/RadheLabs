import Image from 'next/image'
import { clientLogos, results, testimonials } from '@/content/proof'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/SectionHeader'
import { Testimonial } from '@/components/Testimonial'

const devSlot = {
  quote: '[TESTIMONIAL QUOTE]',
  name: '[NAME]',
  role: '[ROLE]',
  company: '[COMPANY]',
}

/**
 * Renders only proof that actually exists (testimonials, client logos, results).
 * With no data the section is omitted in production. In development an empty testimonial slot
 * is shown so the layout can be reviewed. Never manufacture proof (PDA §6.7).
 */
export function Proof() {
  const hasProof = testimonials.length + clientLogos.length + results.length > 0
  const showDevSlot = !hasProof && process.env.NODE_ENV !== 'production'
  if (!hasProof && !showDevSlot) return null

  return (
    <section
      id="proof"
      aria-label="Trust and proof"
      className="scroll-mt-16 space-y-16 border-t border-ink/5 px-5 py-20 sm:px-8 lg:px-16 lg:py-24"
    >
      {results.length > 0 && (
        <Reveal>
          <dl className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {results.map((metric) => (
              <div key={metric.label} className="border border-ink/10 bg-ivory-dark px-5 py-5">
                <dd className="font-serif text-[30px] italic text-peacock">{metric.value}</dd>
                <dt className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{metric.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      )}

      {testimonials.map((t) => (
        <Reveal key={`${t.name}-${t.company}`}>
          <Testimonial testimonial={t} />
        </Reveal>
      ))}
      {showDevSlot && <Testimonial testimonial={devSlot} placeholder />}

      {clientLogos.length > 0 && (
        <Reveal>
          <Eyebrow>Trusted by</Eyebrow>
          <ul className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-8">
            {clientLogos.map((client) => (
              <li key={client.name}>
                <Image
                  src={client.logo.src}
                  alt={client.logo.alt}
                  width={client.logo.width}
                  height={client.logo.height}
                  className="h-8 w-auto opacity-70 grayscale"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  )
}
