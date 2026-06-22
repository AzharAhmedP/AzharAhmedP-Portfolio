import { Project } from '@/lib/types'

export default function MetaBar({ project }: { project: Project }) {
  const meta = [
    { label: 'Client', value: project.client },
    { label: 'Year', value: project.year },
    { label: 'Role', value: project.role },
    { label: 'Stack', value: project.stack.join(' · ') },
    { label: 'Status', value: project.status },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-neutral-900 border-t border-neutral-900">
      {meta.map((m) => (
        <div key={m.label} className="bg-black p-6">
          <p className="text-xs font-mono text-neutral-600 mb-2">{m.label}</p>
          <p className="text-sm text-neutral-300">{m.value}</p>
        </div>
      ))}
    </div>
  )
}
