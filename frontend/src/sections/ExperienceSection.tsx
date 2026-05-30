import { motion } from 'framer-motion'
import { experienceTimeline } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

export default function ExperienceSection() {
  return (
    <section id="experience" className="grid gap-10">
      <SectionHeading
        eyebrow="Experience"
        title="My learning journey, robotics builds, and student research milestones."
        description="A short timeline of the school projects, AI work, and robotics challenges I’ve worked on so far."
      />
      <div className="grid gap-6">
        {experienceTimeline.map((event, index) => (
          <motion.article
            key={event.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[#C97500]">{event.timeline}</p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-slate-700">
                {event.type === 'education' ? 'Education' : 'Project'}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">{event.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{event.company}</p>
            <p className="mt-4 text-base leading-7 text-slate-700">{event.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
