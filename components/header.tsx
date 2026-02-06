"use client"

import { useState } from "react"
import { Nav } from "@/components/nav"
import { Menu, X } from "lucide-react"

const links = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "writing", href: "#writing" },
  { label: "contact", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm font-bold text-primary">
          {"<mfuentesg />"}
        </a>
        <div className="hidden md:block">
          <Nav />
        </div>
        <button
          type="button"
          className="text-muted-foreground transition-colors hover:text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-primary/60">{"// "}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
