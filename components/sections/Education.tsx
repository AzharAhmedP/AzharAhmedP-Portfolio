import { personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Education() {
  return (
    <section className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-8 tracking-widest uppercase">Education</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {personalInfo.education.map((edu, i) => (
            <ScrollReveal key={i}>
              <div className="border-l border-neutral-800 pl-6">
                <p className="text-xs font-mono text-neutral-600 mb-2">{edu.period}</p>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-sm text-neutral-500 mt-1">{edu.school}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-20">
          <p className="text-sm font-mono text-neutral-600 mb-6 tracking-widest uppercase">Languages</p>
          <div className="flex gap-8">
            {personalInfo.languages.map((lang) => (
              <div key={lang.name}>
                <p className="text-lg font-bold text-white">{lang.name}</p>
                <p className="text-sm text-neutral-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
