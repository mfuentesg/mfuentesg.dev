import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const skills = [
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
  "System Design",
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
                {"Senior Software Engineer & former Engineering Manager with 10+ years building, scaling, and operating high-traffic systems across e-commerce platforms. "}
                {"I combine deep technical expertise with leadership experience, having contributed to several core domains including Pricing, Catalog, Pre-purchase, and Fulfillment."}
              </p>
              <p>
                {"My background is full-stack with strong backend and infrastructure fundamentals. I design and build microservices using Golang and Node.js, create modern frontends "}
                {"with React and Next.js, and deploy large-scale applications in cloud-native environments using Kubernetes, Docker, Terraform, and CI/CD pipelines. "}
                {"I also work on critical network components such as DNS, CDN optimization, caching layers, and traffic routing."}
              </p>
              <p>
                {"As an Engineering Manager, I led teams of up to 14 engineers, driving architecture, code quality, mentoring, and technical direction. "}
                {"I have extensive experience collaborating with international teams to align global architecture with local market needs."}
              </p>
              <p>
                {"I'm exploring opportunities as a Senior Software Engineer, Staff Engineer, or Technical Lead, where I can stay hands-on, influence technical decisions, "}
                {"and help build high-impact, scalable, and reliable systems."}
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
