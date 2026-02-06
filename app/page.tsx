import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { GridBackground } from "@/components/grid-background"
import { StatusBar } from "@/components/status-bar"
import { Header } from "@/components/header"

export default function Page() {
  return (
    <>
      <GridBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <StatusBar />
    </>
  )
}
