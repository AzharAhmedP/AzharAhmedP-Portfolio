'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: 'up' | 'scale' | 'left'
}

export default function ScrollReveal({ children, className = '', delay = 0, animation = 'up' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const animationClass = animation === 'scale'
    ? 'scroll-scale'
    : animation === 'left'
      ? 'scroll-slide-left'
      : 'scroll-reveal'

  return (
    <div
      ref={ref}
      className={`${animationClass} ${revealed ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
