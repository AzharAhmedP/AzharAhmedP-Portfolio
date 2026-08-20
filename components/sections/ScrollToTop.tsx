'use client'

import { useEffect, useRef } from 'react'

export default function ScrollToTop() {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let ticking = false
    const toggle = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const visible = window.scrollY > 400
            ref.current.style.opacity = visible ? '1' : '0'
            ref.current.style.transform = visible ? 'translateY(0)' : 'translateY(16px)'
            ref.current.style.pointerEvents = visible ? 'auto' : 'none'
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', toggle, { passive: true })
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      ref={ref}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-10 h-10 flex items-center justify-center border border-neutral-800 rounded-full bg-black/80 backdrop-blur-sm text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors duration-300"
      style={{ opacity: 0, transform: 'translateY(16px)', pointerEvents: 'none' }}
      aria-label="Scroll to top"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 12V2M7 2L2 7M7 2L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
