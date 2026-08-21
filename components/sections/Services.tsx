import { personalInfo } from '@/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-8 tracking-widest uppercase">Technical Expertise</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-neutral-900">
          {personalInfo.skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 60}>
              <div className="bg-black p-8 h-full hover:bg-neutral-950 transition-colors duration-300">
                <span className="text-xs font-mono text-neutral-700">0{i + 1}</span>
                <h3 className="text-sm font-bold text-white mt-4 mb-4 tracking-wide">{cat.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item} className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2 py-0.5 rounded hover:border-neutral-600 hover:text-neutral-300 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
