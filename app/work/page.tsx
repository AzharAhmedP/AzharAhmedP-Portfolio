import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'
import WorkNav from '@/components/sections/WorkNav'
import SharedLayout from '@/components/case-study/SharedLayout'
import Footer from '@/components/sections/Footer'
import ScrollToTop from '@/components/sections/ScrollToTop'

export const metadata: Metadata = {
  title: 'Work Archive | Azhar Ahmed',
  description: 'Every project I\'ve designed, built, and shipped.',
}

export default function WorkArchive() {
  return (
    <SharedLayout>
    <main id="main-content" className="bg-black text-white min-h-screen">
      <WorkNav />

      <div className="pt-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto py-12">
          <Link href="/" className="text-xs font-mono text-neutral-700 hover:text-white transition-colors">← Back</Link>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mt-8 mb-4">
            works<span className="text-neutral-800">*</span>
          </h1>
          <p className="text-xs text-neutral-600 mb-16 max-w-xl font-mono">
            An index of every project I&apos;ve designed, built, and shipped. Hover any entry. Click to step inside.
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-900">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex items-center justify-between px-6 md:px-10 py-6 md:py-8 border-b border-neutral-900 hover:bg-neutral-900/30 transition-all duration-300"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-center gap-4 md:gap-8 min-w-0">
              <span className="text-xs font-mono text-neutral-800 w-6 md:w-8 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <h3 className="text-base md:text-xl font-bold text-white group-hover:text-neutral-400 transition-colors truncate">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-[10px] md:text-xs text-neutral-600 font-mono truncate">{project.category}</p>
                  {project.liveUrl && <span className="text-[10px] text-green-900 shrink-0">●</span>}
                </div>
              </div>
            </div>
            <div className="text-right shrink-0 ml-4">
              <p className="text-xs font-mono text-neutral-700">{project.year}</p>
              <span className="text-xs text-neutral-800 group-hover:text-white transition-colors">→</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="px-6 md:px-10 py-12 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-[10px] text-neutral-800 font-mono">
            Index · {projects.length} entries · Last revised {new Date().getFullYear()}
          </p>
          <Link href="/" className="text-[10px] text-neutral-700 hover:text-white transition-colors font-mono">
            Back home ↑
          </Link>
        </div>
      </div>
      <Footer isHome={false} />
      <ScrollToTop />
    </main>
    </SharedLayout>
  )
}
