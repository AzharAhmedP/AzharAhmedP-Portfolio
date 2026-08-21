import { projects, personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'
import RevealText from '@/components/ui/RevealText'

export default function Approach() {
  const liveCount = projects.filter(p => p.liveUrl).length

  return (
    <section id="approach" className="px-6 md:px-10 py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-8 tracking-widest uppercase">About</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal>
            <RevealText
              text="Turning data into decisions."
              as="h2"
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                {personalInfo.about}
              </p>
              <p>
                From crop disease detection for farmers to pneumonia diagnosis for clinicians \u2014 I build systems that work beyond the notebook. Every project follows the same pipeline: data \u2192 model \u2192 API \u2192 deployment.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-neutral-900 pt-12">
            <div>
              <p className="text-3xl font-bold text-white">{projects.length}+</p>
              <p className="text-sm text-neutral-600 mt-1">AI/ML Projects Built</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{liveCount}</p>
              <p className="text-sm text-neutral-600 mt-1">Live Deployments</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{personalInfo.certifications.filter(c => c.tier === 'primary').length}</p>
              <p className="text-sm text-neutral-600 mt-1">AI/ML Certifications</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
