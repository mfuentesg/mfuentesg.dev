import { memo } from "react"

interface SectionHeaderProps {
  index: string
  title: string
}

export const SectionHeader = memo(function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="font-mono text-lg font-semibold uppercase tracking-wider text-foreground">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
})
