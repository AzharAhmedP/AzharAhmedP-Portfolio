import { personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ProcessCarousel() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-12 tracking-widest uppercase">How I Work</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-px bg-neutral-900">
          {personalInfo.process.map((step, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-black p-6 md:p-8 h-full">
                <span className="text-xs font-mono text-neutral-700">{step.step}</span>
                <h3 className="text-base font-bold text-white mt-4 mb-3 leading-snug">{step.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
