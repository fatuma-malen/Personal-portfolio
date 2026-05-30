import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

export default function ProjectsSection() {
  return (
    <section id="projects" className="grid gap-10">
      <SectionHeading
        eyebrow="Featured work"
        title="Showcasing thoughtful engineering and premium digital storytelling." 
        description="Each case study is designed with clarity, contrast, and a focus on measurable outcomes for modern product teams." 
      />
      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group rounded-[2rem] border border-white/10 bg-[#0B0B0B]/90 p-8 shadow-glow transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-silver">Case study</p>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-silver">
                Premium
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-silver">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-silver">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-3xl bg-[#111111] p-5 text-sm leading-7 text-silver">
              <p className="text-[13px] uppercase tracking-[0.28em] text-silver/80">Impact</p>
              <p className="mt-3 text-white">{project.impact}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Live demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-silver/20 bg-silver/10 px-5 py-3 text-sm font-semibold text-silver transition hover:-translate-y-0.5 hover:bg-silver/20"
              >
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
