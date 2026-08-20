'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export default function RevealText({ text, className = '', delay = 0, as: Tag = 'p' }: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)
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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = text.split(' ')

  return (
    // @ts-expect-error Tag is a valid HTML tag
    <Tag ref={ref} className={`${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            className="inline-block"
            style={{
              transform: revealed ? 'translateY(0)' : 'translateY(100%)',
              opacity: revealed ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 40}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 40}ms`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  )
}
