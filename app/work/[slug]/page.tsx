import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import WorkNav from '@/components/sections/WorkNav'
import { getProject, projects } from '@/data/projects'
import SharedLayout from '@/components/case-study/SharedLayout'
import MetaBar from '@/components/case-study/MetaBar'
import ContextBlock from '@/components/case-study/ContextBlock'
import VisionBlock from '@/components/case-study/VisionBlock'
import ChallengeBlock from '@/components/case-study/ChallengeBlock'
import PerformanceBlock from '@/components/case-study/PerformanceBlock'
import DatasetBlock from '@/components/case-study/DatasetBlock'
import LinksBar from '@/components/case-study/LinksBar'
import ProductBlock from '@/components/case-study/ProductBlock'
import GalleryGrid from '@/components/case-study/GalleryGrid'
import ArchitectureGrid from '@/components/case-study/ArchitectureGrid'
import OutcomeMetrics from '@/components/case-study/OutcomeMetrics'
import NextCase from '@/components/case-study/NextCase'
import Footer from '@/components/sections/Footer'
import ScrollToTop from '@/components/sections/ScrollToTop'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} | Azhar Ahmed`,
    description: project.subtitle,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const sectionComponents: Record<string, React.FC<{ title: string; body: string }>> = {
    context: ContextBlock,
    vision: VisionBlock,
    product: ProductBlock,
  }

  return (
    <SharedLayout>
    <main id="main-content" className="bg-black text-white min-h-screen">
      <WorkNav />

      <div className="pt-20">
        <div className="px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="group inline-flex items-center gap-1 text-xs font-mono text-neutral-700 hover:text-white transition-colors">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
            </Link>
          </div>
        </div>

        <div
          className="relative h-[50vh] md:h-[65vh] bg-neutral-950 flex items-center justify-center border-y border-neutral-900 bg-cover bg-center"
          style={project.heroImage ? { backgroundImage: `url(${project.heroImage})` } : undefined}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-0" />
          <div className="text-center px-6 relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-neutral-700 tracking-widest uppercase border border-neutral-800 rounded-full px-3 py-1">
                {project.category}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-green-800 hover:text-green-600 transition-colors border border-neutral-800 rounded-full px-3 py-1"
                >
                  ● Live Demo
                </a>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mt-4">
              {project.title}
            </h1>
            <p className="text-sm text-neutral-600 mt-4 font-mono max-w-lg mx-auto">{project.subtitle}</p>
          </div>
        </div>

        <MetaBar project={project} />

        {project.sections.map((section, i) => {
          if (section.type === 'gallery') {
            return <GalleryGrid key={i} title={section.title} images={section.images} />
          }
          if (section.type === 'architecture') {
            return <ArchitectureGrid key={i} title={section.title} layers={section.layers} />
          }
          if (section.type === 'outcome') {
            return <OutcomeMetrics key={i} title={section.title} stats={section.stats} />
          }
          const Component = sectionComponents[section.type]
          if (!Component) return null
          return <Component key={i} title={section.title} body={section.body} />
        })}

        {project.challenge && (
          <ChallengeBlock title={project.challenge.title} body={project.challenge.body} />
        )}

        {project.performance && (
          <PerformanceBlock title="Performance" metrics={project.performance} />
        )}

        {project.dataset && (
          <DatasetBlock metrics={project.dataset} />
        )}

        {project.contribution && (
          <section className="px-6 md:px-10 py-24 border-t border-neutral-900">
            <div className="max-w-6xl mx-auto">
              <p className="text-sm font-mono text-neutral-600 mb-4 tracking-widest uppercase">My Contribution</p>
              <p className="text-base text-neutral-400 leading-relaxed max-w-2xl">{project.contribution}</p>
            </div>
          </section>
        )}

        {project.disclaimer && (
          <section className="px-6 md:px-10 py-12 border-t border-neutral-900">
            <div className="max-w-6xl mx-auto">
              <p className="text-xs text-neutral-600 font-mono leading-relaxed max-w-2xl">{project.disclaimer}</p>
            </div>
          </section>
        )}

        <LinksBar githubUrl={project.githubUrl} liveUrl={project.liveUrl} />

        <div className="border-t border-neutral-900 px-6 md:px-10 py-12">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-xs font-mono text-neutral-700 hover:text-white transition-colors">Back home</Link>
            <Link href="/work" className="text-xs font-mono text-neutral-700 hover:text-white transition-colors">All work</Link>
          </div>
        </div>

        {project.nextSlug && project.nextTitle && (
          <NextCase slug={project.nextSlug} title={project.nextTitle} />
        )}
      </div>
      <Footer isHome={false} />
      <ScrollToTop />
    </main>
    </SharedLayout>
  )
}
