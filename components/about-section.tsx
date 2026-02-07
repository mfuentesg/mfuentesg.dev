import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const skills = [
  "JavaScript",
  "TypeScript",
  "Go",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
  "Linux",
]

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
                {"I'm a software engineer who's passionate about crafting clean, performant, and well-architected systems. I enjoy the entire spectrum of development "}
                {"from low-level infrastructure to polished user interfaces."}
              </p>
              <p>
                {"When I'm not writing code, you'll probably find me spending time with my family, playing the trumpet, or exploring new technologies. "}
                {"I believe in continuous learning and contributing to the open-source community."}
              </p>
              <p>
                {"I've had the privilege of working across a variety of environments from startups to larger organizations, always focusing on delivering high-quality software "}
                {"that solves real problems."}
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={0.25}>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                {"// tech_stack"}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
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
