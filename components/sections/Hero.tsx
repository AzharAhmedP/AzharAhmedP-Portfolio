'use client'

import { personalInfo } from '@/data/projects'
import RotatingText from '@/components/ui/RotatingText'
import Marquee from '@/components/ui/Marquee'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-black pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-8">
          <p className="text-xs font-mono text-neutral-700 tracking-[0.2em] uppercase">
            <RotatingText words={personalInfo.greetings} />
          </p>
        </div>

        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-none text-white">
          AZHAR
        </h1>
        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-none text-neutral-800 mt-[-0.06em]">
          AHMED
        </h1>

        <div className="mt-6 max-w-2xl">
          <p className="text-sm md:text-base font-mono text-neutral-500 tracking-wide">
            {personalInfo.title}
          </p>
        </div>

        <div className="mt-8 max-w-2xl border-l border-neutral-800 pl-6">
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
            {personalInfo.tagline}
          </p>
          <p className="text-sm text-neutral-700 mt-2 font-mono">
            {personalInfo.taglineSub}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {[
            { key: 'MACHINE LEARNING', label: 'Machine Learning' },
            { key: 'DEEP LEARNING', label: 'Deep Learning' },
            { key: 'NLP & LLMs', label: 'NLP & LLMs' },
            { key: 'COMPUTER VISION', label: 'Computer Vision' },
            { key: 'DATA ANALYSIS', label: 'Data Science' },
          ].filter(t => personalInfo.skillCategories.some(c => c.label === t.key)).map(({ label }) => (
            <span
              key={label}
              className="text-[10px] font-mono text-neutral-600 border border-neutral-800 rounded-full px-3 py-1.5 hover:border-neutral-500 hover:text-neutral-300 transition-all duration-300"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="#contact"
            className="relative group text-sm font-mono text-black bg-white rounded-full px-6 py-3 hover:bg-neutral-200 transition-all"
          >
            Get in touch
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="/cv/Azhar_Ahmed_CV.pdf"
            download
            className="text-sm font-mono text-neutral-400 border border-neutral-800 rounded-full px-6 py-3 hover:border-neutral-600 hover:text-white transition-all"
          >
            Download CV ↓
          </a>
          <a
            href="#projects"
            className="text-xs font-mono text-neutral-600 hover:text-white transition-colors"
          >
            View work ↓
          </a>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <span className="text-[10px] font-mono text-neutral-800 tracking-widest uppercase">Social</span>
          <div className="h-px flex-1 bg-neutral-900" />
          <div className="flex gap-4">
            {personalInfo.socialLinks?.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-xs font-mono text-neutral-600 hover:text-white transition-colors"
              >
                <span className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 whitespace-nowrap">
                  {s.handle}
                </span>
                <span className="font-bold">{s.label.charAt(0)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-neutral-900 bg-black/80 backdrop-blur-sm">
        <Marquee className="py-4">
          {(() => {
            const get = (label: string) => personalInfo.skillCategories.find(c => c.label === label)?.items || []
            return [...get('LANGUAGES'), ...get('MACHINE LEARNING').slice(0, 3), ...get('DEEP LEARNING').slice(0, 3), ...get('TOOLS')]
          })().map((skill) => (
            <span key={skill} className="text-[10px] font-mono text-neutral-700 whitespace-nowrap tracking-wider">
              {skill.toUpperCase()}
              <span className="mx-6 text-neutral-900">◇</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
