'use client'

import { useState, useEffect } from 'react'

export default function IntroSequence() {
  const [phase, setPhase] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400)
    const t2 = setTimeout(() => setPhase(2), 1200)
    const t3 = setTimeout(() => setPhase(3), 2000)
    const t4 = setTimeout(() => setDone(true), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  if (done) return null

  return (
    <div className={`fixed inset-0 z-[200] bg-black flex items-center justify-center transition-opacity duration-700 ${phase >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Phase 0: Initials */}
        <div className={`text-6xl md:text-8xl font-bold tracking-tighter text-white transition-all duration-500 ${phase >= 1 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          AA
        </div>

        {/* Phase 1: Full name */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase >= 1 && phase < 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            AZHAR<span className="text-neutral-700">AHMED</span>
          </span>
        </div>

        {/* Phase 2: Tagline */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase >= 2 && phase < 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-sm font-mono text-neutral-500 tracking-widest uppercase">
            AI &amp; Data Science
          </span>
        </div>

        {/* Phase 2: Loading line */}
        <div className={`absolute bottom-1/3 left-1/2 -translate-x-1/2 w-32 h-px bg-neutral-800 overflow-hidden transition-opacity duration-300 ${phase >= 1 && phase < 3 ? 'opacity-100' : 'opacity-0'}`}>
          <div
            className="h-full bg-white transition-all ease-out"
            style={{
              width: phase >= 2 ? '100%' : '0%',
              transitionDuration: phase >= 2 ? '800ms' : '600ms',
            }}
          />
        </div>
      </div>
    </div>
  )
}
