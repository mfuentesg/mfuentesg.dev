import { Github, Linkedin, Mail, BookOpen } from "lucide-react"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mfuentesg",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mfuentesg",
    icon: Linkedin,
  },
  {
    label: "Substack",
    href: "https://substack.com/@mfuentesg",
    icon: BookOpen,
  },
  {
    label: "Email",
    href: "mailto:hello@mfuentesg.dev",
    icon: Mail,
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label={social.label}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}
