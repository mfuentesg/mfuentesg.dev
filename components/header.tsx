"use client"

import React from "react"

import { useState, useCallback } from "react"
import { Nav } from "@/components/nav"
import { NAV_LINKS } from "@/lib/constants"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleMobileClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-sm font-bold text-primary transition-opacity hover:opacity-80"
          onClick={handleLogoClick}
        >
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                onClick={(e) => handleMobileClick(e, link.href)}
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
