'use client'

import IntroSequence from '@/components/ui/IntroSequence'
import ScrollProgress from '@/components/ui/ScrollProgress'
import PageTransition from '@/components/ui/PageTransition'
import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Approach from '@/components/sections/Approach'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import Services from '@/components/sections/Services'
import SelectedWorks from '@/components/sections/SelectedWorks'
import ArchiveCTA from '@/components/sections/ArchiveCTA'
import ProcessCarousel from '@/components/sections/ProcessCarousel'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import ScrollToTop from '@/components/sections/ScrollToTop'

export default function HomeClient() {
  return (
    <>
      <IntroSequence />
      <ScrollProgress />
      <Navigation />
      <PageTransition>
        <main id="main-content" className="bg-black text-white">
          <Hero />
          <Approach />
          <Education />
          <Certifications />
          <SelectedWorks />
          <Services />
          <ProcessCarousel />
          <ArchiveCTA />
          <Contact />
        </main>
      </PageTransition>
      <Footer isHome={true} />
      <ScrollToTop />
    </>
  )
}
