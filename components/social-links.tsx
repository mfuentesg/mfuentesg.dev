import { memo } from "react"
import { Github, Linkedin, Mail, BookOpen } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"

// Map icon string names to actual icon components
const iconMap = {
  Github,
  Linkedin,
  Mail,
  BookOpen,
} as const

export const SocialLinks = memo(function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {SOCIAL_LINKS.map((social) => {
        const IconComponent = iconMap[social.icon as keyof typeof iconMap]
        return (
          <a
            key={social.label}
            href={social.url}
            target={social.url.startsWith("mailto:") ? undefined : "_blank"}
            rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label={social.ariaLabel}
          >
            <IconComponent className="h-5 w-5" />
          </a>
        )
      })}
    </div>
  )
})
