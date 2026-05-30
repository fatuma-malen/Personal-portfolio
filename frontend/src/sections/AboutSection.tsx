import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    title: 'AI & automation',
    description: 'Designing simple AI systems and agents that support learning, safety, and student creativity.',
  },
  {
    title: 'Robotics prototypes',
    description: 'Building practical robotics projects with sensors, controls, and playful interaction design.',
  },
  {
    title: 'Web & UI design',
    description: 'Creating polished student-facing web experiences with clean layouts and modern interactions.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="grid gap-10">
      <SectionHeading
        eyebrow="About"
        title="Fatuma Tahir — Grade 10 student developer"
        description="I’m a Grade 10 developer at Still I Rise International School with 4 months of hands-on experience in coding and robotics. I build AI agents, wearable safety prototypes, and classroom robotics projects to turn ideas into working prototypes."
      />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[1.5rem] border border-white/10 px-6 py-7"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-silver/80">{service.title}</p>
            <p className="mt-4 text-base leading-7 text-silver">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
