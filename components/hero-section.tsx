"use client"

import { TerminalTyping } from "@/components/terminal-typing"
import { SocialLinks } from "@/components/social-links"

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-14" aria-label="Introduction">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6 animate-fade-in-up">
          <span className="font-mono text-sm text-primary">Hello world, my name is</span>
        </div>
        <h1 className="animate-fade-in-up animation-delay-100 mb-2 text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Marcelo Fuentes
        </h1>
        <p className="animate-fade-in-up animation-delay-200 mb-8 text-balance text-xl text-muted-foreground md:text-2xl">
          Software Engineer
        </p>
        <div className="animate-fade-in-up animation-delay-300 mb-10 max-w-lg rounded-lg border border-border bg-card/40 p-4 backdrop-blur-sm">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
            <span className="ml-2 font-mono text-[11px] text-muted-foreground">~/marcelo</span>
          </div>
          <TerminalTyping
            lines={[
              "Father",
              "Trumpet Player",
              "Software Engineer",
              "Building things for the web.",
            ]}
            speed={35}
          />
        </div>
        <div className="animate-fade-in-up animation-delay-500">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
