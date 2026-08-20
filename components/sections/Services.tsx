import { personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Marquee from '@/components/ui/Marquee'

export default function Services() {
  const serviceGroups = [
    { title: 'MACHINE LEARNING', cat: 'MACHINE LEARNING' },
    { title: 'DEEP LEARNING', cat: 'DEEP LEARNING' },
    { title: 'AI APPLICATIONS', cat: 'NLP & LLMs' },
    { title: 'DATA PIPELINES', cat: 'DATA ANALYSIS' },
  ]

  return (
    <section id="services" className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-8 tracking-widest uppercase">Services &amp; Toolkit</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-px bg-neutral-900">
          {serviceGroups.map((group, i) => {
            const cat = personalInfo.skillCategories.find(c => c.label === group.cat)
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-black p-8 h-full hover:bg-neutral-950 transition-colors duration-300">
                  <span className="text-xs font-mono text-neutral-700">0{i + 1}</span>
                  <h3 className="text-base font-bold text-white mt-6 mb-6 tracking-wide">{group.title}</h3>
                  <ul className="space-y-3">
                    {cat?.items.map((item, j) => (
                      <li key={j} className="text-sm text-neutral-500 flex items-start gap-2">
                        <span className="text-neutral-800 mt-0.5">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal className="mt-16">
          <p className="text-sm font-mono text-neutral-600 mb-6 tracking-widest uppercase">Technology Stack</p>
          <Marquee className="border-t border-b border-neutral-900 py-6">
            {personalInfo.skillCategories.map((cat) => (
              <div key={cat.label} className="flex items-center gap-4 mx-8">
                <span className="text-[10px] font-mono text-neutral-700 tracking-widest whitespace-nowrap">{cat.label}</span>
                <span className="text-neutral-800">|</span>
                {cat.items.map((item) => (
                  <span key={item} className="text-sm text-neutral-400 whitespace-nowrap hover:text-white transition-colors">
                    {item}
                  </span>
                ))}
                <span className="text-neutral-800 mx-4">◆</span>
              </div>
            ))}
          </Marquee>
        </ScrollReveal>
      </div>
    </section>
  )
}
