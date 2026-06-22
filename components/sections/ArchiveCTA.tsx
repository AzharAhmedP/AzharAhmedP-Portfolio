import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { projects } from '@/data/projects'

export default function ArchiveCTA() {
  const remaining = projects.length - 3
  return (
    <section className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-4 tracking-widest uppercase">The Archive</p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg text-neutral-400 max-w-2xl mb-2">
            What&apos;s above is just a selection. The full index holds every project I&apos;ve designed, built, and shipped.
          </p>
          <p className="text-xs font-mono text-neutral-700 mt-2 mb-8">
            {remaining} more projects in the archive. Every line considered. Every build, shipped.
          </p>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-mono text-white border border-neutral-700 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all"
          >
            See all {projects.length} projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
