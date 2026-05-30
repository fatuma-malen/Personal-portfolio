import { lazy, Suspense, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CommandPalette from './components/CommandPalette'
import CanvasScene from './components/CanvasScene'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ContactSection from './sections/ContactSection'
import { navItems } from './data/portfolio'

const ProjectsSection = lazy(() => import('./sections/ProjectsSection'))
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'))
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'))

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
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <CanvasScene />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.04),_transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_30%,_rgba(255,255,255,0.03))]" />
      <CommandPalette items={navItems} />
      <AnimatePresence mode="wait">
        <motion.main
          key="portfolio-app"
          {...pageMotion}
          className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-24 px-6 py-8 sm:px-8 lg:px-12"
        >
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <Suspense fallback={<div className="py-16 text-center text-sm text-silver">Loading portfolio sections...</div>}>
            <ProjectsSection />
            <ExperienceSection />
            <TestimonialsSection />
            <ContactSection />
          </Suspense>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default App
