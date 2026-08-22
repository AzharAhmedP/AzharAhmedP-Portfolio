import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <p className="text-[10px] font-mono text-neutral-800 tracking-widest uppercase mb-6">Error 404</p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">*</h1>
      <p className="text-sm text-neutral-500 font-mono mb-8 text-center max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="text-xs font-mono text-black bg-white rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
        >
          Back home →
        </Link>
        <Link
          href="/work"
          className="text-xs font-mono text-neutral-400 border border-neutral-800 rounded-full px-6 py-3 hover:border-neutral-600 hover:text-white transition-colors"
        >
          View work
        </Link>
      </div>
    </main>
  )
}
