'use client'

import { useState } from 'react'
import { personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ProcessCarousel() {
  const [current, setCurrent] = useState(0)
  const step = personalInfo.process[current]

  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-12 tracking-widest uppercase">How I work</p>
        </ScrollReveal>

        <div className="flex items-center justify-between mb-8 md:mb-16">
          <span className="text-xs font-mono text-neutral-700 tracking-wider">
            {step.step} / {String(personalInfo.process.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2">
            {personalInfo.process.map((step, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to step ${i + 1}: ${step.title}`}
                aria-current={i === current ? 'step' : undefined}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? 'bg-white w-8' : 'bg-neutral-800 w-1.5 hover:bg-neutral-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-3xl">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {step.title}
          </h3>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
            {step.body}
          </p>
        </div>

        <div className="flex gap-6 mt-12">
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            className="group flex items-center gap-2 text-xs font-mono text-neutral-600 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Prev
          </button>
          <button
            onClick={() => setCurrent(Math.min(personalInfo.process.length - 1, current + 1))}
            disabled={current === personalInfo.process.length - 1}
            className="group flex items-center gap-2 text-xs font-mono text-neutral-600 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            Next <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
