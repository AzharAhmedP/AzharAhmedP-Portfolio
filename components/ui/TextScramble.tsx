'use client'

import { useEffect, useRef, useState } from 'react'

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

const chars = '!<>-_\\/[]{}—=+*^?#________'

export default function TextScramble({ text, className = '', delay = 0, duration = 1200 }: TextScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return

    const frameRate = 30
    const totalFrames = Math.ceil(duration / frameRate)
    let frame = 0

    const interval = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      const result = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i / text.length < progress) return char
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')

      setDisplayed(result)

      if (frame >= totalFrames) {
        clearInterval(interval)
        setDisplayed(text)
      }
    }, frameRate)

    return () => clearInterval(interval)
  }, [started, text, duration])

  return <span ref={ref} className={className}>{started ? displayed : ''}</span>
}
