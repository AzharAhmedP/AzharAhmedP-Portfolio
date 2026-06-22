import ScrollReveal from '@/components/ui/ScrollReveal'

export default function GalleryGrid({ title, images }: { title: string; images?: string[] }) {
  if (!images || images.length === 0) return null
  return (
    <section className="border-t border-neutral-900">
      <div className="px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-mono text-neutral-500 mb-8">{title}</p>
          </ScrollReveal>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900">
        {images.map((img, i) => (
          <div key={i} className="bg-neutral-950 aspect-video flex items-center justify-center">
            <span className="text-neutral-800 text-sm font-mono">[{img.split('/').pop()}]</span>
          </div>
        ))}
      </div>
    </section>
  )
}
