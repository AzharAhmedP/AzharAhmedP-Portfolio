'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <p className="text-[10px] font-mono text-neutral-800 tracking-widest uppercase mb-6">Something went wrong</p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">!</h1>
      <p className="text-sm text-neutral-500 font-mono mb-8 text-center max-w-sm">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="text-xs font-mono text-black bg-white rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
      >
        Try again →
      </button>
    </main>
  )
}
