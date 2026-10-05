import type { Metadata, Viewport } from 'next'
import { DM_Mono, DM_Sans, Fraunces } from 'next/font/google'
import { site, siteUrl } from '@/content/site'
import { Loader } from '@/components/ui/Loader'
import './globals.css'

const serif = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const sans = DM_Sans({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const description =
  'RadheLabs solves real-world problems for founders and small businesses by designing and building websites, apps, and fintech and lending systems.'

const title = `${site.name}: technology that helps you grow faster`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  // The share image comes from src/app/opengraph-image.tsx and twitter-image.tsx.
  openGraph: { type: 'website', siteName: site.name, title, description, url: '/', locale: 'en_IN' },
  twitter: { card: 'summary_large_image', title, description },
  robots: site.indexable ? undefined : { index: false, follow: false },
}

export const viewport: Viewport = {
  themeColor: '#f3ede0',
}

// Marks the document as script-enabled before first paint so scroll-reveal styles never hide
// content for visitors (or crawlers) without JavaScript.
// It also arms the one-off intro loader (once per browser session, never under reduced motion).
const jsFlag = `(function(d){d.classList.add('js');try{if(!sessionStorage.getItem('rl')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('loader-on');sessionStorage.setItem('rl','1')}}catch(e){}})(document.documentElement)`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes to <body> before React hydrates. */}
      <body suppressHydrationWarning>
        <Loader />
        {children}
      </body>
    </html>
  )
}
