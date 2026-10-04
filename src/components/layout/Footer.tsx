import { site, contactHref, ctaHref, externalProps, isPlaceholder, whatsappDisplay } from '@/content/site'
import { BrandMark } from '@/components/ui/BrandMark'
import { EyeDivider } from '@/components/decor/EyeDivider'

const columnTitle = 'mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory/80'
const footLink =
  'block py-1 text-[14px] font-light text-ivory/90 transition-colors hover:text-ivory'

export function Footer() {
  const socials = site.social.filter((s) => s.href)
  const emailReady = Boolean(site.email && !isPlaceholder(site.email))
  const whatsapp = whatsappDisplay()
  const year = new Date().getFullYear()

  return (
    <footer data-surface="dark" className="bg-peacock-mid px-5 pb-10 pt-16 sm:px-8 lg:px-16">
      <EyeDivider className="mb-14" />
      <div className="grid gap-12 border-b border-ivory/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
        <div>
          <div className="mb-5 flex items-center gap-2.5">
            <BrandMark tone="onDark" />
            <span className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-ivory">
              {site.name}
            </span>
          </div>
          <p className="max-w-[240px] text-[14px] font-light leading-[1.75] text-ivory/85">{site.descriptor}</p>
          {site.location && (
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ivory/80">{site.location}</p>
          )}
          {site.availability && (
            <p className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ivory/85">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-aqua" />
              {site.availability}
            </p>
          )}
        </div>

        <nav aria-label="Footer">
          <h2 className={columnTitle}>Navigation</h2>
          {[...site.nav, { label: 'Tell us your idea', href: ctaHref() }].map((link) => (
            <a key={link.href} href={link.href} className={footLink} {...externalProps(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <h2 className={columnTitle}>Contact</h2>
          {emailReady && (
            <a href={contactHref()} className="block break-words text-[14px] font-light text-aqua-light">
              {site.email}
            </a>
          )}
          {whatsapp && (
            <a href={ctaHref()} {...externalProps(ctaHref())} className="mt-1 block text-[14px] font-light text-aqua-light">
              WhatsApp · {whatsapp}
            </a>
          )}
        </div>

        {socials.length > 0 && (
          <div>
            <h2 className={columnTitle}>Follow</h2>
            {socials.map((s) => (
              <a key={s.platform} href={s.href} rel="noopener noreferrer" target="_blank" className={footLink}>
                {s.platform}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ivory/80">
          © {year} {site.legalName}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {site.legal.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-ivory/80 transition-colors hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#top"
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-ivory/80 transition-colors hover:text-ivory"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
