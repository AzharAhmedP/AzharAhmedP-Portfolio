'use client'

import { useState, useEffect, useRef } from 'react'
import { personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { X } from 'lucide-react'

export default function Certifications() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const [showAll, setShowAll] = useState(false)
  const lightboxRef = useRef<HTMLDivElement>(null)

  const primary = personalInfo.certifications.filter(c => c.tier === 'primary')
  const secondary = personalInfo.certifications.filter(c => c.tier === 'secondary')
  const other = personalInfo.certifications.filter(c => c.tier === 'other')
  const displayCerts = showAll ? [...primary, ...secondary, ...other] : primary

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', handleKey)
    lightboxRef.current?.focus()
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightbox])

  return (
    <section className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-8 tracking-widest uppercase">Certifications</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900">
          {displayCerts.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="bg-black p-8 h-full flex flex-col">
                <span className="text-2xl text-neutral-800 font-mono">{String(i + 1).padStart(2, '0')}</span>
                {cert.image && (
                  <button
                    onClick={() => setLightbox({ src: cert.image!, alt: cert.title })}
                    className="mt-4 mb-3 block w-full overflow-hidden rounded border border-neutral-800 hover:border-neutral-600 transition-colors cursor-zoom-in bg-neutral-950 p-6 flex items-center justify-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="max-w-full max-h-48 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </button>
                )}
                <h3 className="text-base font-bold text-white mt-auto mb-2">{cert.title}</h3>
                <p className="text-sm text-neutral-500">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-xs text-neutral-700 mt-2 font-mono">{cert.date}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {!showAll && (secondary.length > 0 || other.length > 0) && (
          <ScrollReveal className="mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="text-xs font-mono text-neutral-600 hover:text-white transition-colors border border-neutral-800 rounded-full px-5 py-2 hover:border-neutral-600"
            >
              Show all {primary.length + secondary.length + other.length} certifications
            </button>
          </ScrollReveal>
        )}

        {lightbox && (
          <div
            ref={lightboxRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6 outline-none"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <ScrollReveal className="mt-16">
          <p className="text-sm font-mono text-neutral-600 mb-6 tracking-widest uppercase">Areas of Interest</p>
          <div className="flex flex-wrap gap-2">
            {personalInfo.interests.map((interest) => (
              <span
                key={interest}
                className="text-xs font-mono text-neutral-400 border border-neutral-800 rounded-full px-4 py-2 hover:border-neutral-600 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
