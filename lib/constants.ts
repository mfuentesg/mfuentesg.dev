/**
 * Shared constants across the application
 * This file serves as the single source of truth for configuration
 */

import type { NavLink, SocialLink } from "./types"

/**
 * Main navigation links displayed in header
 * @type {NavLink[]}
 */
export const NAV_LINKS: NavLink[] = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "writing", href: "#writing" },
  { label: "contact", href: "#contact" }
] as const

/**
 * Hero section terminal animation lines
 * Displays character descriptions in sequence with typing effect
 * @type {string[]}
 */
export const HERO_TERMINAL_LINES = [
  "Father",
  "Trumpet Player",
  "Software Engineer",
  "Building things for the web."
] as const

/**
 * Speed of terminal text typing animation in milliseconds
 * Lower = faster typing animation
 * @type {number}
 */
export const HERO_TERMINAL_SPEED = 35

/**
 * Project portfolio item
 */
export interface ProjectData {
  title: string
  description: string
  tags: string[]
  repo: string
  archived?: boolean
  githubUrl: string
}

/**
 * Portfolio projects displayed in the projects section
 * @type {ProjectData[]}
 */
export const PROJECTS: ProjectData[] = [
  {
    title: "ksd",
    description:
      "Kubernetes secret decoder. A CLI tool to visualize your Kubernetes secrets in plain text, supporting both YAML and JSON outputs. Installable via Go or Homebrew.",
    tags: ["Go", "Kubernetes", "CLI", "DevOps"],
    repo: "mfuentesg/ksd",
    githubUrl: "https://github.com/mfuentesg/ksd"
  },
  {
    title: "SyncSettings",
    description:
      "The cross-platform solution to keep Sublime Text configuration synchronized. Powered by GitHub Gists, providing reliable backup and sync across multiple devices.",
    tags: ["Python", "Sublime Text", "GitHub Gists"],
    repo: "mfuentesg/SyncSettings",
    archived: true,
    githubUrl: "https://github.com/mfuentesg/SyncSettings"
  }
]

/**
 * Skills and technologies in the portfolio
 * Displayed in the about section with categorization
 * @type {string[]}
 */
export const SKILLS = [
  "Golang",
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "Kubernetes (AKS)",
  "Docker",
  "Terraform",
  "gRPC",
  "Cloudflare",
  "PostgreSQL",
  "System Design"
] as const

/**
 * Social media links displayed in header and footer
 * @type {SocialLink[]}
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "Github",
    label: "GitHub",
    url: "https://github.com/mfuentesg",
    ariaLabel: "Visit my GitHub profile"
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/mfuentesg",
    ariaLabel: "Visit my LinkedIn profile"
  },
  {
    icon: "Mail",
    label: "Email",
    url: "mailto:hello@mfuentesg.dev",
    ariaLabel: "Send me an email"
  },
  {
    icon: "BookOpen",
    label: "Writing",
    url: "https://substack.com/@mfuentesg",
    ariaLabel: "Read my writing on Substack"
  }
] as const

/**
 * Animation timing and easing configuration
 * Used throughout the app for consistent motion effects
 */
export const ANIMATION_CONFIG = {
  FADE_IN_UP_SPEED: 0.6,
  SCROLL_REVEAL_SPEED: 0.6,
  SCROLL_REVEAL_THRESHOLD: 0.15,
  DELAYS: {
    ULTRA_FAST: 50,
    FAST: 100,
    NORMAL: 150,
    SLOW: 300,
    VERY_SLOW: 500
  }
} as const

/**
 * SEO and site metadata
 */
export const SITE_NAME = "Marcelo Fuentes | Software Engineer"
export const SITE_DESCRIPTION =
  "Father. Trumpet Player. Software Engineer. Building things for the web."
export const SITE_URL = "https://mfuentesg.dev"
export const TWITTER_HANDLE = "@mfuentesg"

/**
 * API endpoint builders and configuration
 */
export const API = {
  GITHUB_REPOS: (repo: string) => `https://api.github.com/repos/${repo}`
} as const

/**
 * Status bar display configuration
 * Controls time display format and update frequency
 */
export const STATUS_BAR_CONFIG = {
  TIME_UPDATE_INTERVAL: 1000, // 1 second
  LOCALE: "en-US",
  TIME_FORMAT: {
    hour: "2-digit" as const,
    minute: "2-digit" as const,
    second: "2-digit" as const,
    hour12: false
  }
} as const
