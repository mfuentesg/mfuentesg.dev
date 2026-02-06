"use client"

import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col rounded-lg border border-border bg-card/30 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
      {/* Top bar decoration */}
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-auto flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`View ${title} live`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </span>
      </div>
      <h3 className="mb-2 font-mono text-base font-semibold text-foreground transition-colors group-hover:text-primary">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
