"use client"

import { useState } from "react"

const links = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "writing", href: "#writing" },
  { label: "contact", href: "#contact" },
]

export function Nav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav className="flex items-center gap-8" role="navigation" aria-label="Main navigation">
      {links.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span className="text-primary/60">{"// "}</span>
          {link.label}
          {hoveredIndex === i && (
            <span className="absolute -bottom-1 left-0 h-px w-full bg-primary/50" />
          )}
        </a>
      ))}
    </nav>
  )
}
