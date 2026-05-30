import { motion } from 'framer-motion'
import { skillCategories } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

export default function SkillsSection() {
  return (
    <section id="skills" className="grid gap-10">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I use to bring student projects to life."
        description="A focused set of technical skills and creative tools I use for AI, robotics, and interactive web experiences."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <motion.article
            key={category.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#C97500]">{category.category}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-[1.75rem] bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Confidence</span>
                <span className="font-semibold text-slate-950">{category.proficiency}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-gradient-to-r from-[#F59E0B] to-[#C97500]" style={{ width: `${category.proficiency}%` }} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
