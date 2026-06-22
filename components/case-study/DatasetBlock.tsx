import ScrollReveal from '@/components/ui/ScrollReveal'

export default function DatasetBlock({ metrics }: { metrics?: { label: string; value: string }[] }) {
  if (!metrics) return null
  return (
    <section className="px-6 md:px-10 py-24 border-t border-neutral-900 bg-neutral-950/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-8 tracking-widest uppercase">Dataset</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <ScrollReveal key={i}>
              <div>
                <p className="text-xs text-neutral-500 font-mono mb-2">{m.label}</p>
                <p className="text-lg md:text-xl font-bold text-white">{m.value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
