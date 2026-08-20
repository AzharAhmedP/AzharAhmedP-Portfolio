import Link from 'next/link'
import { personalInfo } from '@/data/projects'

export default function WorkNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 bg-black/80 backdrop-blur-sm">
      <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-neutral-400 transition-colors">{personalInfo.initials}</Link>
      <Link href="/" className="text-[10px] font-mono text-neutral-500 hover:text-white transition-colors tracking-widest uppercase">Close</Link>
    </nav>
  )
}
