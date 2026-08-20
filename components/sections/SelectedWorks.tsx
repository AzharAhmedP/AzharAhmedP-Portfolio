'use client'

import Link from 'next/link'
import { projects } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TiltCard from '@/components/ui/TiltCard'

export default function SelectedWorks() {
  const featured = projects.slice(0, 3)

  return (
    <section id="projects" className="border-t border-neutral-900">
      <div className="px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-mono text-neutral-600 mb-4 tracking-widest uppercase">Selected Works</p>
            <p className="text-lg text-neutral-500 max-w-xl mb-12">
              Projects I&apos;ve designed, built, and shipped — not just mocked up.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {featured.map((project, i) => (
        <ScrollReveal key={project.slug} delay={i * 100}>
          <TiltCard intensity={8}>
            <Link
              href={`/work/${project.slug}`}
              className="group block border-t border-neutral-900 cursor-pointer"
            >
              <div className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-neutral-950">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                {/* Interactive thumbnail: project silhouette that scales on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Placeholder frame that reacts to hover */}
                    <div className="w-48 h-32 md:w-64 md:h-40 border border-neutral-800 rounded-lg flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:border-neutral-600 group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]">
                      <div className="text-center">
                        <span className="text-4xl md:text-5xl font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors duration-500">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-[10px] font-mono text-neutral-800 mt-2 group-hover:text-neutral-700 transition-colors duration-500">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    {/* Glow ring on hover */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ boxShadow: '0 0 60px -15px rgba(255,255,255,0.08)' }}
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-16">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="tag-hover text-[10px] font-mono text-neutral-600 tracking-widest uppercase border border-neutral-800 rounded-full px-3 py-1">
                        {project.category}
                      </span>
                      {project.liveUrl && (
                        <span className="text-[10px] font-mono text-green-900/80">● Live</span>
                      )}
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <h2 className="text-3xl md:text-6xl font-bold text-white transition-colors duration-300 group-hover:text-neutral-300">
                          {project.title}
                        </h2>
                        <p className="text-neutral-500 mt-2 text-sm font-mono transition-colors duration-300 group-hover:text-neutral-400">
                          {project.stack.join(' · ')}
                        </p>
                      </div>
                      <div className="hidden md:flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {project.showGithub !== false && project.githubUrl && (
                          <span
                            className="magnetic-btn text-xs font-mono text-white border border-white/20 rounded-full px-5 py-2.5 hover:bg-white hover:text-black"
                          >
                            GitHub →
                          </span>
                        )}
                        {project.showLiveDemo && project.liveUrl && (
                          <span
                            className="magnetic-btn text-xs font-mono text-white border border-white/20 rounded-full px-5 py-2.5 hover:bg-white hover:text-black"
                          >
                            Live Demo →
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </TiltCard>
        </ScrollReveal>
      ))}
    </section>
  )
}
