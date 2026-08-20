'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SocialIcon from '@/components/ui/SocialIcon'
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
      await emailjs.send(
        'service_rpqibac',
        'template_xgb4f2d',
        {
          name: form.name,
          country: form.country,
          type: form.type,
          contact: form.contact,
          email: form.email,
          message: form.message,
        },
        { publicKey: '7JXB3RPoKnrWsR-NL' }
      )
      setStatus('sent')
      setForm({ name: '', country: '', type: 'Full-Time Role', contact: 'Email', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-12 tracking-widest uppercase">Contact</p>
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
              </div>

              <div>
                <p className="text-[10px] font-mono text-neutral-800 tracking-widest uppercase mb-4">Connect</p>
                <div className="flex flex-col gap-3">
                  {personalInfo.socialLinks?.map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-xs text-neutral-600 hover:text-white transition-colors"
                      >
                        <span className="w-6 h-6 flex items-center justify-center border border-neutral-800 rounded-full group-hover:border-neutral-600 transition-colors"><SocialIcon label={s.label} /></span>
                        <span className="font-mono">{s.label}</span>
                        <span className="text-neutral-800 font-mono group-hover:text-neutral-600 transition-colors">{s.handle}</span>
                      </a>
                  ))}
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
