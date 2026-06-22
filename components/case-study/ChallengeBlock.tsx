import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ChallengeBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-4 tracking-widest uppercase">Challenge</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">{title}</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base text-neutral-400 leading-relaxed">{body}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
