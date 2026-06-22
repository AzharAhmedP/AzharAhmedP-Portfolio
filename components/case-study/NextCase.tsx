import Link from 'next/link'

export default function NextCase({ slug, title, image }: { slug: string; title: string; image?: string }) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group block border-t border-neutral-900"
    >
      <div
        className="relative h-[30vh] md:h-[40vh] flex flex-col items-center justify-center bg-neutral-950 bg-cover bg-center"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="text-center z-10 px-6">
          <p className="text-[10px] font-mono text-neutral-700 tracking-widest uppercase mb-4">Next case</p>
          <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-neutral-400 transition-colors duration-500">
            {title}
          </h3>
          <span className="text-xs font-mono text-neutral-700 mt-6 inline-flex items-center gap-2 group-hover:text-white transition-colors">
            Read case <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
