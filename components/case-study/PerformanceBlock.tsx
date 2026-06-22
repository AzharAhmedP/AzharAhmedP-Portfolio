import ScrollReveal from '@/components/ui/ScrollReveal'

export default function PerformanceBlock({ title, metrics }: { title: string; metrics?: { label: string; value: string }[] }) {
  if (!metrics) return null
  return (
    <section className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-4 tracking-widest uppercase">Performance</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-12">{title}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-900">
          {metrics.map((m, i) => (
            <div key={i} className="bg-black p-6 md:p-8">
              <p className="text-2xl md:text-3xl font-bold text-white">{m.value}</p>
              <p className="text-[10px] text-neutral-600 font-mono tracking-wider uppercase mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
