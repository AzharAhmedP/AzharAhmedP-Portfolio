import { projects, personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'
import RevealText from '@/components/ui/RevealText'

export default function Approach() {
  const liveCount = projects.filter(p => p.liveUrl).length
  const bestAccuracy = projects
    .flatMap(p => p.performance || [])
    .filter(m => m.value.includes('%'))
    .map(m => parseFloat(m.value))
    .reduce((best, n) => (n > best ? n : best), 0)

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
                Certified Data Scientist and AI enthusiast currently pursuing a BS in Information Technology at the University of Sindh. Skilled in Machine Learning, Deep Learning, Data Analysis, and Python development, with hands-on experience building predictive models, neural networks, and interactive data applications.
              </p>
              <p>
                Passionate about leveraging data-driven technologies to solve real-world problems — from crop disease detection for farmers to pneumonia diagnosis for clinicians — and continuously expanding expertise through practical projects and professional certifications.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-neutral-900 pt-12">
            <div>
              <p className="text-3xl font-bold text-white">{projects.length}+</p>
              <p className="text-sm text-neutral-600 mt-1">Projects Shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{personalInfo.certifications.length}</p>
              <p className="text-sm text-neutral-600 mt-1">Certifications</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{bestAccuracy}%</p>
              <p className="text-sm text-neutral-600 mt-1">Best Model Accuracy</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{liveCount}</p>
              <p className="text-sm text-neutral-600 mt-1">Live Deployments</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
