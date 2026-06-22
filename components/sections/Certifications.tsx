import { personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Certifications() {
  return (
    <section className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-8 tracking-widest uppercase">Certifications</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-px bg-neutral-900">
          {personalInfo.certifications.map((cert, i) => (
            <ScrollReveal key={i}>
              <div className="bg-black p-8 h-full">
                <span className="text-2xl text-neutral-800 font-mono">0{i + 1}</span>
                <h3 className="text-base font-bold text-white mt-4 mb-2">{cert.title}</h3>
                <p className="text-sm text-neutral-500">{cert.issuer}</p>
                {cert.duration && (
                  <p className="text-xs text-neutral-700 mt-2 font-mono">{cert.duration}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16">
          <p className="text-sm font-mono text-neutral-600 mb-6 tracking-widest uppercase">Areas of Interest</p>
          <div className="flex flex-wrap gap-2">
            {personalInfo.interests.map((interest) => (
              <span
                key={interest}
                className="text-xs font-mono text-neutral-400 border border-neutral-800 rounded-full px-4 py-2 hover:border-neutral-600 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
