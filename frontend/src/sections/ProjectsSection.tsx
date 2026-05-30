import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/portfolio'

function imageFor(title: string) {
  const key = title.toLowerCase()
  if (key.includes('ai') || key.includes('agent')) return 'https://source.unsplash.com/featured/?ai,chatbot'
  if (key.includes('necklace') || key.includes('child')) return 'https://source.unsplash.com/featured/?wearable,kids'
  if (key.includes('robot') || key.includes('robotics')) return 'https://source.unsplash.com/featured/?robotics,robot'
  return 'https://source.unsplash.com/featured/?technology'
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="grid gap-10">
      <SectionHeading
        eyebrow="Projects"
        title="Student projects — AI, wearables, and robotics."
        description="Hands-on prototypes and interfaces that demonstrate practical learning, creative problem solving, and early technical impact."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="glass-card group relative overflow-hidden rounded-2xl border border-white/10 p-6 shadow-glow transition-transform will-change-transform"
          >
            <div className="overflow-hidden rounded-xl">
              <img src={imageFor(project.title)} alt={project.title} className="project-img" loading="lazy" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.32em] text-silver/80">Student build</p>
              <span className="text-xs font-medium text-silver/80">{project.tagline}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-silver">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/6 bg-white/3 px-3 py-1 text-xs text-silver">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="text-sm text-silver">
                <div className="text-[11px] uppercase tracking-[0.28em] text-silver/70">Impact</div>
                <div className="mt-2 text-white">{project.impact}</div>
              </div>
              <div className="flex gap-3">
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.02]">
                  Live
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm font-medium text-silver transition hover:bg-white/6">
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
