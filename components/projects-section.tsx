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
        <div className="grid gap-4">
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
