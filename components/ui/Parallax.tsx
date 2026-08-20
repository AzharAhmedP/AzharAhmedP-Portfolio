'use client'

import { useEffect, useRef } from 'react'

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const el = ref.current
          if (el) {
            const rect = el.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const elementCenter = rect.top + rect.height / 2
            const distFromCenter = elementCenter - windowHeight / 2
            el.style.transform = `translateY(${distFromCenter * speed * -0.1}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
