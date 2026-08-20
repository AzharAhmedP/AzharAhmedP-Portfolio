'use client'

import PageTransition from '@/components/ui/PageTransition'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  )
}
