import Link from 'next/link'
import { personalInfo } from '@/data/projects'
import SocialIcon from '@/components/ui/SocialIcon'
import { Download } from 'lucide-react'

interface FooterProps {
  isHome?: boolean
}

export default function Footer({ isHome = false }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const navLinks = isHome
    ? [
        { label: 'About', href: '#approach' },
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#projects' },
        { label: 'Contact', href: '#contact' },
        { label: 'All Projects', href: '/work' },
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'All Projects', href: '/work' },
      ]

  return (
    <footer className="border-t border-neutral-900 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-20">
          <div>
            <Link href="#hero" className="text-lg font-bold tracking-tight text-white">
              {personalInfo.initials}
            </Link>
            <p className="text-xs text-neutral-600 mt-4 font-mono leading-relaxed max-w-xs">
              {personalInfo.title}
            </p>
            <p className="text-xs text-neutral-800 mt-4 font-mono">{personalInfo.location}</p>
          </div>

          <div>
            <p className="text-[10px] font-mono text-neutral-700 tracking-widest uppercase mb-6">Navigation</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                  if (link.href.startsWith('http') || link.href.endsWith('.pdf')) {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-neutral-600 hover:text-white transition-colors font-mono"
                      >
                        {link.label}
                      </a>
                    )
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs text-neutral-600 hover:text-white transition-colors font-mono"
                    >
                      {link.label}
                    </Link>
                  )
                })}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono text-neutral-700 tracking-widest uppercase mb-6">Connect</p>
            <div className="flex flex-col gap-4">
              {personalInfo.socialLinks?.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-xs text-neutral-600 hover:text-white transition-colors"
                  >
                    <span className="w-6 h-6 flex items-center justify-center border border-neutral-800 rounded-full group-hover:border-neutral-600 transition-colors">
                      <SocialIcon label={s.label} />
                    </span>
                    <span className="font-mono">{s.label}</span>
                    <span className="text-neutral-800 group-hover:text-neutral-600 transition-colors font-mono">
                      {s.handle}
                    </span>
                  </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-neutral-800 font-mono">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {personalInfo.socialLinks?.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-neutral-800 hover:text-white transition-colors font-mono">{s.label}</a>
            ))}
            <a href={`mailto:${personalInfo.email}`} className="text-[10px] text-neutral-800 hover:text-white transition-colors font-mono">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
