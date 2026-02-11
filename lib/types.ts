/**
 * Shared TypeScript types for the application
 */

/**
 * Navigation link configuration
 */
export interface NavLink {
  label: string
  href: string
  ariaLabel?: string
}

/**
 * Social media link configuration
 */
export interface SocialLink {
  label: string
  url: string
  icon: "Github" | "Linkedin" | "Mail" | "BookOpen"
  ariaLabel: string
}

/**
 * Project in portfolio
 */
export interface Project {
  id: string
  title: string
  description: string
  link: string
  github: string
  tags: string[]
  featured?: boolean
}

/**
 * Skill or technology
 */
export interface Skill {
  category: string
  items: string[]
}

/**
 * Terminal typing animation line
 */
export interface TerminalLine {
  text: string
  delay: number
  speed?: number
}

/**
 * Animation configuration
 */
export interface AnimationConfig {
  duration: number
  delay: number
  easing?: string
}

/**
 * API endpoint configuration
 */
export interface ApiEndpoint {
  url: string
  method: "GET" | "POST" | "PUT" | "DELETE"
  timeout?: number
}
