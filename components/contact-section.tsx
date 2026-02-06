import { SectionHeader } from "@/components/section-header"
import { SocialLinks } from "@/components/social-links"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-20 pt-24" aria-label="Contact">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="03" title="Contact" />
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-6 text-muted-foreground">
            {"I'm always open to new opportunities, collaborations, or just a friendly chat about technology. Feel free to reach out."}
          </p>
          <a
            href="mailto:hello@mfuentesg.dev"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/5 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10"
          >
            <span>{">"}</span>
            <span>say_hello()</span>
            <span className="transition-transform group-hover:translate-x-1">{"->"}</span>
          </a>
          <div className="mt-10 flex justify-center">
            <SocialLinks />
          </div>
          <div className="mt-16 font-mono text-xs text-muted-foreground/50">
            <p>{"// Designed & built by Marcelo Fuentes"}</p>
            <p className="mt-1">{"// Powered by Next.js & Tailwind CSS"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
