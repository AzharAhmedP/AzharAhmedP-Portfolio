'use client'

import { useEffect, useRef, useState } from 'react'

export default function Counter({ value, suffix = '', label }: { value: number; suffix?: string; label?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    if (value === 0) { setCount(0); return }
    let start = 0
    const duration = 1500
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [visible, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold tracking-tight text-white md:text-6xl">
        {count}{suffix}
      </div>
      {label && <div className="mt-2 text-sm text-neutral-500">{label}</div>}
    </div>
  )
}
