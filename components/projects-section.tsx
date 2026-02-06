import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Codelabel",
    description:
      "A CLI tool to label GitHub issues using machine learning. Automate your issue triage workflow with intelligent classification based on historical data.",
    tags: ["Go", "Machine Learning", "CLI", "GitHub API"],
    githubUrl: "https://github.com/mfuentesg/codelabel",
  },
  {
    title: "Locmock",
    description:
      "A lightweight geolocation mock library for testing location-based applications. Simplify development of location-aware features with configurable mock providers.",
    tags: ["JavaScript", "Testing", "Geolocation", "Open Source"],
    githubUrl: "https://github.com/mfuentesg/locmock",
  },
  {
    title: "StyLux",
    description:
      "A syntax highlighting library focused on performance and customization. Render beautifully highlighted code blocks with support for multiple languages and themes.",
    tags: ["TypeScript", "Syntax Highlighting", "Library"],
    githubUrl: "https://github.com/mfuentesg/StyLux",
  },
  {
    title: "dotfiles",
    description:
      "Personal development environment configuration. A carefully curated collection of shell scripts, editor configs, and tooling setups for maximum productivity.",
    tags: ["Shell", "Vim", "tmux", "Configuration"],
    githubUrl: "https://github.com/mfuentesg/dotfiles",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24" aria-label="Featured projects">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="02" title="Projects" />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
