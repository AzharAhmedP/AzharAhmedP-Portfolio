'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayed, setDisplayed] = useState(pathname)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    if (pathname === displayed) return

    setTransitioning(true)
    const t = setTimeout(() => {
      setDisplayed(pathname)
      setTransitioning(false)
    }, 200)
    return () => clearTimeout(t)
  }, [pathname, displayed])

  return (
    <div className="relative">
      <div
        className="transition-opacity duration-200"
        style={{ opacity: transitioning ? 0 : 1 }}
      >
        {children}
      </div>
    </div>
  )
}
