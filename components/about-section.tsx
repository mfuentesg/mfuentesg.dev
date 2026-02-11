import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { SKILLS } from "@/lib/constants"

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24" aria-label="About me">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll variant="fade-left">
          <SectionHeader index="01" title="About" />
        </AnimateOnScroll>
        <div className="grid gap-12 md:grid-cols-[1fr_300px]">
          <AnimateOnScroll variant="fade-up" delay={0.1}>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                {"Senior Software Engineer & former Engineering Manager with 10+ years at Walmart building high-traffic e-commerce systems. "}
                {"Full-stack expertise in microservices (Golang, Node.js), cloud infrastructure (Kubernetes, Docker, Terraform), and modern frontends (React, Next.js). "}
                {"Led teams of up to 14 engineers on architecture, mentoring, and technical strategy."}
              </p>
              <p>
                {"Seeking a Senior Engineer or Staff Engineer role where I can stay hands-on, influence technical decisions, and build scalable, reliable systems."}
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={0.25}>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                {"// tech_stack"}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                  >
                    <span className="text-primary">{">"}</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
