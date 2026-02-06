import { SectionHeader } from "@/components/section-header"
import { ExperienceCard } from "@/components/experience-card"

const experiences = [
  {
    period: "2022 -- Present",
    role: "Senior Software Engineer",
    company: "Current Company",
    description:
      "Leading development of scalable web applications and distributed systems. Architecting solutions that serve thousands of users with a focus on reliability, performance, and developer experience.",
    tags: ["TypeScript", "React", "Go", "AWS", "PostgreSQL"],
  },
  {
    period: "2019 -- 2022",
    role: "Software Engineer",
    company: "Previous Company",
    description:
      "Built and maintained core platform services and front-end applications. Collaborated with cross-functional teams to deliver features that improved user engagement and system reliability.",
    tags: ["JavaScript", "Node.js", "React", "Docker", "Redis"],
  },
  {
    period: "2016 -- 2019",
    role: "Full Stack Developer",
    company: "Earlier Company",
    description:
      "Developed full-stack web applications from concept to deployment. Worked closely with designers and product managers to create intuitive user experiences backed by solid engineering.",
    tags: ["Python", "JavaScript", "PostgreSQL", "Linux", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24" aria-label="Work experience">
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="02" title="Experience" />
        <div className="space-y-2">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.period} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
