'use client'

import { useRef, useState, useCallback } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function TiltCard({ children, className = '', intensity = 15 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0, scale: 1 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - y) * intensity
    const rotateY = (x - 0.5) * intensity
    setStyle({ rotateX, rotateY, scale: 1.02 })
  }, [intensity])

  const handleMouseLeave = useCallback(() => {
    setStyle({ rotateX: 0, rotateY: 0, scale: 1 })
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          transform: `perspective(1000px) rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg) scale3d(${style.scale},${style.scale},${style.scale})`,
          transition: 'transform 0.15s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </div>
  )
}
