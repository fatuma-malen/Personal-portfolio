import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillCategories } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    gsap.from(containerRef.current.querySelectorAll('.animate-bar'), {
      width: 0,
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <section id="skills" className="grid gap-10">
      <SectionHeading
        eyebrow="Skills"
        title="Engineered with the tools that power modern digital products." 
        description="A curated set of technical strengths combined with product-level thinking, designed to deliver clarity and polished execution across every project." 
      />
      <div ref={containerRef} className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#0D0D0D]/90 p-8 shadow-glow backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <motion.article
            key={category.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/10 bg-black/50 p-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-silver">{category.category}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-silver">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-sm text-silver">
                <span>Competency</span>
                <span className="font-semibold text-white">{category.proficiency}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="animate-bar h-full rounded-full bg-gradient-to-r from-white to-silver" style={{ width: `${category.proficiency}%` }} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
