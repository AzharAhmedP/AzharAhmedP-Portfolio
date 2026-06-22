'use client'

import { useRouter } from 'next/navigation'
import { projects } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function SelectedWorks() {
  const router = useRouter()
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

      {featured.map((project) => (
        <div
          key={project.slug}
          role="link"
          tabIndex={0}
          onClick={() => router.push(`/work/${project.slug}`)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); router.push(`/work/${project.slug}`) } }}
          className="group block border-t border-neutral-900 cursor-pointer"
        >
          <div className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-neutral-950">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-neutral-900 text-sm font-mono">
                [{project.title} — {project.category}]
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-16">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase border border-neutral-800 rounded-full px-3 py-1">
                    {project.category}
                  </span>
                  {project.liveUrl && (
                    <span className="text-[10px] font-mono text-green-900/80">● Live</span>
                  )}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-3xl md:text-6xl font-bold text-white group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-neutral-500 mt-2 text-sm font-mono">
                      {project.stack.join(' · ')}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    {project.showGithub !== false && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-mono text-white border border-white/20 rounded-full px-5 py-2.5 hover:bg-white hover:text-black transition-all"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.showLiveDemo && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-mono text-white border border-white/20 rounded-full px-5 py-2.5 hover:bg-white hover:text-black transition-all"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
