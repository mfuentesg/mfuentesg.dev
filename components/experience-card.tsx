"use client"

interface ExperienceCardProps {
  period: string
  role: string
  company: string
  companyUrl?: string
  description: string
  tags: string[]
}

export function ExperienceCard({
  period,
  role,
  company,
  companyUrl,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <div className="group relative grid gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-border hover:bg-card/50 md:grid-cols-[180px_1fr]">
      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {period}
      </div>
      <div>
        <h3 className="mb-2 font-sans text-base font-medium text-foreground">
          {role}{" "}
          <span className="text-primary/80">{"@"}</span>{" "}
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-primary/80"
            >
              {company}
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                {"->"}
              </span>
            </a>
          ) : (
            <span className="text-primary">{company}</span>
          )}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[11px] text-primary/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
