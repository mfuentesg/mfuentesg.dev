import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BookOpen, ArrowUpRight } from "lucide-react"

export function WritingSection() {
  return (
    <section id="writing" className="px-6 py-24" aria-label="Writing">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll variant="fade-left">
          <SectionHeader index="03" title="Writing" />
        </AnimateOnScroll>
        <AnimateOnScroll variant="fade-up" delay={0.15}>
          <div className="mx-auto max-w-2xl">
            <a
              href="https://substack.com/@mfuentesg"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-border bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/60 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/5">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                      Substack
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground">@mfuentesg</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {
                  "I write about software engineering, technology, and the things I learn along the way. Thoughts on building software, developer tools, and the craft of programming."
                }
              </p>
              <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-primary">
                <span>{">"}</span>
                <span>read_posts()</span>
                <span className="transition-transform group-hover:translate-x-1">{"->"}</span>
              </div>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
