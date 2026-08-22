import Counter from '@/components/ui/Counter'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function OutcomeMetrics({ title, stats }: { title: string; stats?: { label: string; value: string }[] }) {
  if (!stats) return null
  return (
    <section className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-4 tracking-widest uppercase">Outcome</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-12">{title}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => {
            const num = parseInt(stat.value)
            const isNumeric = !isNaN(num) && num.toString() === stat.value.replace(/[^0-9]/g, '') && stat.value.length < 6
            if (isNumeric) {
              const suffix = stat.value.replace(/[0-9]/g, '')
              return <Counter key={stat.label} value={num} suffix={suffix} label={stat.label} />
            }
            return (
              <div key={stat.label} className="text-center">
                <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-[10px] text-neutral-600 font-mono tracking-wider uppercase">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
