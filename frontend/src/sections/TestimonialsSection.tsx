import { motion } from 'framer-motion'
import { testimonials } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="grid gap-10">
      <SectionHeading
        eyebrow="Testimonials"
        title="What collaborators say about working with a thoughtful product and engineering partner." 
        description="High-trust recommendations that reflect both execution speed and the premium nature of the final delivery." 
      />
      <div className="grid gap-4 overflow-x-auto pb-4 sm:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
            className="rounded-[2rem] border border-white/10 bg-[#0B0B0B]/90 p-8 shadow-glow transition hover:-translate-y-1 hover:border-white/20"
          >
            <p className="text-lg leading-8 text-silver">“{testimonial.quote}”</p>
            <div className="mt-8 space-y-1">
              <p className="text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-silver">{testimonial.role} · {testimonial.company}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
