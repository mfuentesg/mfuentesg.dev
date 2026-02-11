"use client"

import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { PROJECTS, API } from "@/lib/constants"
import { useEffect, useState, useCallback } from "react"

export function ProjectsSection() {
  const [stars, setStars] = useState<Record<string, number>>({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchStars = useCallback(async () => {
    try {
      setIsLoading(true)
      const results: Record<string, number> = {}
      
      await Promise.all(
        PROJECTS.map(async (project) => {
          try {
            const res = await fetch(API.GITHUB_REPOS(project.repo), {
              // Cache the GitHub API response for 1 hour
              next: { revalidate: 3600 }
            })
            if (res.ok) {
              const data = await res.json()
              results[project.repo] = data.stargazers_count ?? 0
            }
          } catch (error) {
            console.error(`Failed to fetch stars for ${project.repo}:`, error)
            results[project.repo] = 0
          }
        })
      )
      
      setStars(results)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchStars()
  }, [fetchStars])

  return (
    <section id="projects" className="px-6 py-24" aria-label="Featured projects">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll variant="fade-left">
          <SectionHeader index="02" title="Projects" />
        </AnimateOnScroll>
        <div className="grid gap-4">
          {PROJECTS.map((project, i) => (
            <AnimateOnScroll key={project.title} variant="fade-scale" delay={i * 0.1}>
              <ProjectCard
                {...project}
                stars={stars[project.repo]}
                isLoading={isLoading}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
