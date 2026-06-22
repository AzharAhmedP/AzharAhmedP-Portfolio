export default function Marquee({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="animate-marquee flex w-max">
        <div className="flex shrink-0 gap-8">{children}</div>
        <div className="flex shrink-0 gap-8">{children}</div>
      </div>
    </div>
  )
}
