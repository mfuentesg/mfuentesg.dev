"use client"

import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { useEffect, useState } from "react"

interface ProjectData {
  title: string
  description: string
  tags: string[]
  repo: string
  archived?: boolean
  githubUrl: string
}

const projects: ProjectData[] = [
  {
    title: "ksd",
    description:
      "Kubernetes secret decoder. A CLI tool to visualize your Kubernetes secrets in plain text, supporting both YAML and JSON outputs. Installable via Go or Homebrew.",
    tags: ["Go", "Kubernetes", "CLI", "DevOps"],
    repo: "mfuentesg/ksd",
    githubUrl: "https://github.com/mfuentesg/ksd",
  },
  {
    title: "SyncSettings",
    description:
      "The cross-platform solution to keep Sublime Text configuration synchronized. Powered by GitHub Gists, providing reliable backup and sync across multiple devices.",
    tags: ["Python", "Sublime Text", "GitHub Gists"],
    repo: "mfuentesg/SyncSettings",
    archived: true,
    githubUrl: "https://github.com/mfuentesg/SyncSettings",
  },
  {
    title: "Codelabel",
    description:
      "A CLI tool to label GitHub issues using machine learning. Automate your issue triage workflow with intelligent classification based on historical data.",
    tags: ["Go", "Machine Learning", "CLI", "GitHub API"],
    repo: "mfuentesg/codelabel",
    githubUrl: "https://github.com/mfuentesg/codelabel",
  },
  {
    title: "Locmock",
    description:
      "A lightweight geolocation mock library for testing location-based applications. Simplify development of location-aware features with configurable mock providers.",
    tags: ["JavaScript", "Testing", "Geolocation"],
    repo: "mfuentesg/locmock",
    githubUrl: "https://github.com/mfuentesg/locmock",
  },
  {
    title: "StyLux",
    description:
      "A syntax highlighting library focused on performance and customization. Render beautifully highlighted code blocks with support for multiple languages and themes.",
    tags: ["TypeScript", "Syntax Highlighting", "Library"],
    repo: "mfuentesg/StyLux",
    githubUrl: "https://github.com/mfuentesg/StyLux",
  },
  {
    title: "dotfiles",
    description:
      "Personal development environment configuration. A carefully curated collection of shell scripts, editor configs, and tooling setups for maximum productivity.",
    tags: ["Shell", "Vim", "tmux", "Configuration"],
    repo: "mfuentesg/dotfiles",
    githubUrl: "https://github.com/mfuentesg/dotfiles",
  },
]

export function ProjectsSection() {
  const [stars, setStars] = useState<Record<string, number>>({})

  useEffect(() => {
    async function fetchStars() {
      const results: Record<string, number> = {}
      await Promise.all(
        projects.map(async (project) => {
          try {
            const res = await fetch(`https://api.github.com/repos/${project.repo}`)
            if (res.ok) {
              const data = await res.json()
              results[project.repo] = data.stargazers_count ?? 0
            }
          } catch {
            // ignore fetch errors
          }
        })
      )
      setStars(results)
    }
    fetchStars()
  }, [])

  return (
    <section id="projects" className="px-6 py-24" aria-label="Featured projects">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll variant="fade-left">
          <SectionHeader index="02" title="Projects" />
        </AnimateOnScroll>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} variant="fade-scale" delay={i * 0.1}>
              <ProjectCard
                {...project}
                stars={stars[project.repo]}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
