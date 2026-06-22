'use client'

import { useState } from 'react'
import { personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Download } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', country: '', type: 'Full-Time Role', contact: 'Email', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.contact === 'WhatsApp') {
      const text = `Hey Azhar! My name is ${form.name} and I am from ${form.country}.\n\nLet's connect about ${form.type}.\n\nWe can talk in more detail at ${form.email}\n\nIn short, ${form.message}`
      const waNumber = personalInfo.phone.replace(/[^0-9]/g, '')
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm({ name: '', country: '', type: 'Full-Time Role', contact: 'Email', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-700 mb-12 tracking-[0.2em] uppercase">Contact</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Start a conversation.
            </h2>
            <p className="text-neutral-600 text-sm mb-10 max-w-sm font-mono leading-relaxed">
              Whether it&apos;s a project, collaboration, or just saying hello — I&apos;ll respond within 24 hours.
            </p>

            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-mono text-neutral-800 tracking-widest uppercase mb-2">Direct</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm text-white hover:text-neutral-400 transition-colors font-mono">
                  {personalInfo.email}
                </a>
                <p className="text-xs text-neutral-700 mt-1 font-mono">{personalInfo.phone}</p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-neutral-800 tracking-widest uppercase mb-4">Connect</p>
                <div className="flex flex-col gap-3">
                  {personalInfo.socialLinks?.map((s) => {
                    const icon = s.label === 'GitHub' ? (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    ) : s.label === 'LinkedIn' ? (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    ) : (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>
                    )
                    return (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-xs text-neutral-600 hover:text-white transition-colors"
                      >
                        <span className="w-6 h-6 flex items-center justify-center border border-neutral-800 rounded-full group-hover:border-neutral-600 transition-colors">{icon}</span>
                        <span className="font-mono">{s.label}</span>
                        <span className="text-neutral-800 font-mono group-hover:text-neutral-600 transition-colors">{s.handle}</span>
                      </a>
                    )
                  })}
                  <a
                    href={personalInfo.cvPath}
                    download
                    className="group flex items-center gap-3 text-xs text-neutral-600 hover:text-white transition-colors"
                  >
                    <span className="w-6 h-6 flex items-center justify-center border border-neutral-800 rounded-full group-hover:border-neutral-600 transition-colors"><Download className="w-3 h-3" /></span>
                    <span className="font-mono">Download CV</span>
                    <span className="text-neutral-800 font-mono group-hover:text-neutral-600 transition-colors">PDF</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono text-neutral-800 tracking-widest uppercase mb-2">Location</p>
                <p className="text-xs text-neutral-600 font-mono">{personalInfo.location}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="text-sm text-neutral-500 mb-2 leading-relaxed">
                  Hey Azhar! My name is{' '}
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    aria-label="Your name"
                    className="bg-transparent border-b border-neutral-800 text-white px-2 py-1 outline-none focus:border-neutral-600 focus-visible:ring-1 focus-visible:ring-white/30 transition-colors w-36 md:w-44 text-sm"
                    required
                  />{' '}
                  and I am from{' '}
                  <input
                    type="text"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    placeholder="Country"
                    aria-label="Your country"
                    className="bg-transparent border-b border-neutral-800 text-white px-2 py-1 outline-none focus:border-neutral-600 focus-visible:ring-1 focus-visible:ring-white/30 transition-colors w-28 md:w-32 text-sm"
                    required
                  />
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-neutral-800 mb-3 tracking-widest uppercase">Let&apos;s connect about</p>
                <div className="flex flex-wrap gap-2">
                  {['Full-Time Role', 'Freelance / Contract', 'Building a Product'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, type })}
                      aria-pressed={form.type === type}
                      className={`text-[10px] px-4 py-2 rounded-full border transition-all font-mono tracking-wider ${
                        form.type === type
                          ? 'border-white text-white bg-white/10'
                          : 'border-neutral-800 text-neutral-700 hover:border-neutral-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono text-neutral-800 mb-3 tracking-widest uppercase">Reach me via</p>
                <div className="flex gap-2 mb-3">
                  {['WhatsApp', 'Email'].map((ct) => (
                    <button
                      key={ct}
                      type="button"
                      onClick={() => setForm({ ...form, contact: ct })}
                      aria-pressed={form.contact === ct}
                      className={`text-[10px] px-4 py-2 rounded-full border transition-all font-mono tracking-wider ${
                        form.contact === ct
                          ? 'border-white text-white bg-white/10'
                          : 'border-neutral-800 text-neutral-700 hover:border-neutral-600'
                      }`}
                    >
                      {ct}
                    </button>
                  ))}
                </div>
                <input
                  type={form.contact === 'Email' ? 'email' : 'tel'}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={form.contact === 'Email' ? 'your@email.com' : '+92 333 1234567'}
                  aria-label={form.contact === 'Email' ? 'Your email' : 'Your phone number'}
                  className="w-full bg-transparent border-b border-neutral-800 text-white px-2 py-2 outline-none focus:border-neutral-600 focus-visible:ring-1 focus-visible:ring-white/30 transition-colors text-sm font-mono"
                  required
                />
              </div>

              <div>
                <p className="text-[10px] font-mono text-neutral-800 mb-2 tracking-widest uppercase">Message</p>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Type your message"
                  aria-label="Your message"
                  rows={3}
                  className="w-full bg-transparent border-b border-neutral-800 text-white px-2 py-2 outline-none focus:border-neutral-600 focus-visible:ring-1 focus-visible:ring-white/30 transition-colors text-sm resize-none font-mono"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group text-xs font-mono text-black bg-white rounded-full px-6 py-3 hover:bg-neutral-200 transition-all tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : status === 'error' ? 'Try again' : 'Send message'}
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
