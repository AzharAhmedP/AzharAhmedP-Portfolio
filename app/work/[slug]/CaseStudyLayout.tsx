'use client'

import PageTransition from '@/components/ui/PageTransition'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  )
}
