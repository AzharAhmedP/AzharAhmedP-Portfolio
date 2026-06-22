import ScrollReveal from '@/components/ui/ScrollReveal'

export default function LinksBar({ githubUrl, liveUrl }: { githubUrl?: string; liveUrl?: string }) {
  if (!githubUrl && !liveUrl) return null
  return (
    <section className="px-6 md:px-10 py-12 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-wrap gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs font-mono text-neutral-400 border border-neutral-800 rounded-full px-5 py-2.5 hover:border-neutral-600 hover:text-white transition-all"
              >
                <span>⌂</span>
                View Source Code
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs font-mono text-neutral-400 border border-neutral-800 rounded-full px-5 py-2.5 hover:border-neutral-600 hover:text-white transition-all"
              >
                <span>◉</span>
                Live Demo
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
