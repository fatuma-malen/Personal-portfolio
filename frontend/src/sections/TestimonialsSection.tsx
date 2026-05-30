import { motion } from 'framer-motion'
import { testimonials } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="grid gap-10">
      <SectionHeading
        eyebrow="Testimonials"
        title="What teachers and mentors say about my work ethic and curiosity."
        description="Feedback from the people who’ve seen my projects grow from classrooms to polished prototypes."
      />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.06 }}
            className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-sm"
          >
            <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
            <div className="mt-8 space-y-1">
              <p className="text-sm font-semibold text-slate-950">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{testimonial.role} · {testimonial.company}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
