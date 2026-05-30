import { useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CommandPalette from './components/CommandPalette'
import CustomCursor from './components/CustomCursor'
import ThemeToggle from './components/ThemeToggle'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactSection from './sections/ContactSection'
import { navItems } from './data/portfolio'

function App() {
  const pageMotion = useMemo(
    () => ({
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
      exit: { opacity: 0, y: -24, transition: { duration: 0.5 } },
    }),
    [],
  )

  return (
    <div className="min-h-screen bg-[#05060E] text-white">
      <CustomCursor />
      <ThemeToggle />
      <CommandPalette items={navItems} />
      <AnimatePresence mode="wait">
        <motion.main key="portfolio-app" {...pageMotion} className="relative mx-auto min-h-screen max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="overflow-visible rounded-[1.5rem]">
            <div className="mx-auto max-w-[1440px] px-6">
              <div className="glass-card overflow-hidden rounded-[2.25rem] shadow-glow">
                <HeroSection />
                <div className="grid gap-16 px-6 py-10 sm:px-10 sm:py-12 lg:gap-20">
                  <AboutSection />
                  <SkillsSection />
                  <ProjectsSection />
                  <ExperienceSection />
                  <TestimonialsSection />
                  <ContactSection />
                </div>
              </div>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default App
