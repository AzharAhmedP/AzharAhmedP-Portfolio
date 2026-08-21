'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '@/data/projects'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const links = [
    { id: 'hero', label: '00', title: 'Home', desc: 'Overview & introduction' },
    { id: 'approach', label: '01', title: 'About', desc: 'Background & approach' },
    { id: 'services', label: '02', title: 'Skills', desc: 'Technical expertise & toolkit' },
    { id: 'projects', label: '03', title: 'Work', desc: 'Selected projects & case studies' },
    { id: 'contact', label: '04', title: 'Contact', desc: 'Start a conversation' },
  ]

  useEffect(() => {
    const sectionIds = links.map(l => l.id)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'Tab') {
        const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
          'button, a, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    menuRef.current?.querySelector<HTMLElement>('button, a')?.focus()
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <button onClick={() => scrollTo('hero')} className="text-lg font-bold tracking-tight text-white hover:text-neutral-400 transition-colors">
          {personalInfo.initials}
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.slice(1).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-[10px] font-mono transition-colors tracking-widest uppercase ${
                activeSection === link.id ? 'text-white' : 'text-neutral-700 hover:text-white'
              }`}
            >
              {link.title}
            </button>
          ))}
          <Link href="/work" className="text-[10px] font-mono text-neutral-700 hover:text-white transition-colors tracking-widest uppercase">
            Archive
          </Link>
        </div>

        <div className="flex items-center">
          <button
            ref={triggerRef}
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-haspopup="dialog"
            className="text-[10px] font-mono text-neutral-500 hover:text-white transition-colors tracking-[0.2em] uppercase"
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="nav-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 flex bg-black/95 backdrop-blur-xl"
        >
          <div className="flex flex-1 flex-col justify-between p-6 md:p-14">
            <div className="flex justify-between items-start">
              <button
                onClick={() => { setOpen(false); triggerRef.current?.focus() }}
                className="text-[10px] font-mono text-neutral-600 hover:text-white transition-colors tracking-[0.2em] uppercase"
              >
                Close
              </button>
              <button
                onClick={() => { setOpen(false); scrollTo('hero') }}
                className="text-lg font-bold tracking-tight text-white hover:text-neutral-400 transition-colors"
              >
                {personalInfo.initials}
              </button>
            </div>

            <div className="flex flex-col gap-5 md:gap-8 max-w-lg mx-auto w-full">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="group flex items-baseline gap-4 text-left border-b border-neutral-900 pb-4 md:pb-6"
                >
                  <span className="text-[10px] font-mono text-neutral-800 w-10 tracking-widest">{link.label}</span>
                  <div>
                    <span className="text-3xl md:text-6xl font-bold text-white group-hover:text-neutral-600 transition-colors duration-300">
                      {link.title}
                    </span>
                    <p className="text-[10px] text-neutral-700 mt-1.5 font-mono">{link.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pt-8 border-t border-neutral-900">
              <div className="flex flex-wrap gap-5">
                {personalInfo.socialLinks?.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-neutral-700 hover:text-white transition-colors tracking-wider"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <div className="text-[10px] text-neutral-800 font-mono leading-relaxed">
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
