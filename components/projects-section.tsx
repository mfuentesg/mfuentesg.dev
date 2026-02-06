import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"

interface ProjectData {
  title: string
  description: string
  tags: string[]
  repo: string
  archived?: boolean
}

const projects: ProjectData[] = [
  {
    title: "ksd",
    description:
      "Kubernetes secret decoder. A CLI tool to visualize your Kubernetes secrets in plain text, supporting both YAML and JSON outputs. Installable via Go or Homebrew.",
    tags: ["Go", "Kubernetes", "CLI", "DevOps"],
    repo: "mfuentesg/ksd",
  },
  {
    title: "SyncSettings",
    description:
      "The cross-platform solution to keep Sublime Text configuration synchronized. Powered by GitHub Gists, providing reliable backup and sync across multiple devices.",
    tags: ["Python", "Sublime Text", "GitHub Gists"],
    repo: "mfuentesg/SyncSettings",
    archived: true,
  },
  {
    title: "Codelabel",
    description:
      "A CLI tool to label GitHub issues using machine learning. Automate your issue triage workflow with intelligent classification based on historical data.",
    tags: ["Go", "Machine Learning", "CLI", "GitHub API"],
    repo: "mfuentesg/codelabel",
  },
  {
    title: "Locmock",
    description:
      "A lightweight geolocation mock library for testing location-based applications. Simplify development of location-aware features with configurable mock providers.",
    tags: ["JavaScript", "Testing", "Geolocation"],
    repo: "mfuentesg/locmock",
  },
  {
    title: "StyLux",
    description:
      "A syntax highlighting library focused on performance and customization. Render beautifully highlighted code blocks with support for multiple languages and themes.",
    tags: ["TypeScript", "Syntax Highlighting", "Library"],
    repo: "mfuentesg/StyLux",
  },
  {
    title: "dotfiles",
    description:
      "Personal development environment configuration. A carefully curated collection of shell scripts, editor configs, and tooling setups for maximum productivity.",
    tags: ["Shell", "Vim", "tmux", "Configuration"],
    repo: "mfuentesg/dotfiles",
  },
]

async function getStars(repo: string): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      cache: "force-cache",
    })
    if (!res.ok) return 0
    const data = await res.json()
    return data.stargazers_count ?? 0
  } catch {
    return 0
  }
}

export async function ProjectsSection() {
  const projectsWithStars = await Promise.all(
    projects.map(async (project) => ({
      ...project,
      stars: await getStars(project.repo),
      githubUrl: `https://github.com/${project.repo}`,
    }))
  )

  return (
    <section id="projects" className="px-6 py-24" aria-label="Featured projects">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="02" title="Projects" />
        <div className="grid gap-4 md:grid-cols-2">
          {projectsWithStars.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
