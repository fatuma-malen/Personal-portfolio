import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experienceTimeline } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!timelineRef.current) return
    const elements = timelineRef.current.querySelectorAll('.timeline-item')
    gsap.from(elements, {
      opacity: 0,
      y: 36,
      duration: 0.8,
      stagger: 0.18,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 85%',
      },
    })
  }, [])

  return (
    <section id="experience" className="grid gap-10">
      <SectionHeading
        eyebrow="Experience"
        title="A career built around premium products, deep technical systems, and team leadership."
        description="From founding teams to enterprise scale, these milestones reflect a focus on elegant execution, strong engineering systems, and modern design-first products."
      />
      <div ref={timelineRef} className="space-y-8 rounded-[2rem] border border-white/10 bg-[#0D0D0D]/90 p-8 shadow-glow backdrop-blur-xl">
        {experienceTimeline.map((event) => (
          <motion.article
            key={event.title}
            className="timeline-item relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/50 p-6 shadow-xl"
          >
            <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-white/5" />
            <div className="relative z-10 grid gap-3 sm:grid-cols-[0.9fr_0.8fr] sm:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-silver">{event.timeline}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{event.title}</h3>
                <p className="mt-1 text-sm text-silver">{event.company}</p>
              </div>
              <p className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-silver">
                {event.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
