import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ArchitectureGrid({ title, layers }: { title: string; layers?: { name: string; tech: string[]; description: string }[] }) {
  if (!layers) return null
  return (
    <section className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-4 tracking-widest uppercase">Architecture</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-12">{title}</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-neutral-900">
          {layers.map((layer, i) => (
            <div key={i} className="bg-black p-6 md:p-8">
              <span className="text-xs font-mono text-neutral-700">0{i + 1}</span>
              <h3 className="text-base font-bold text-white mt-4 mb-3">{layer.name}</h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {layer.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-neutral-600 border border-neutral-800 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">{layer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
