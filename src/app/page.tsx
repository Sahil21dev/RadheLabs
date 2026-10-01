import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { WhyUs } from '@/components/sections/WhyUs'
import { Process } from '@/components/sections/Process'
import { Proof } from '@/components/sections/Proof'
import { About } from '@/components/sections/About'
import { FinalCTA } from '@/components/sections/FinalCTA'

/** Homepage narrative, in the order defined by PDA §6. */
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-[4px] bg-peacock px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <SelectedWork />
        <WhyUs />
        <Process />
        <Proof />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
