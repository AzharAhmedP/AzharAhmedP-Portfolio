'use client'

import { useState, useEffect } from 'react'

export default function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setFade(true)
      }, 200)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span
      className={`inline-block transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}
    >
      {words[index]}
    </span>
  )
}
