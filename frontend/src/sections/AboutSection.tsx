import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="grid gap-10 xl:grid-cols-[1fr_0.9fr]">
      <SectionHeading
        eyebrow="About me"
        title="I help modern teams ship ambitious software with a premium product-first approach."
        description="My practice blends engineering excellence with refined visual systems and thoughtful motion. I build platforms that perform beautifully, scale reliably, and feel polished from the first interaction."
      />
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0D0D0D]/90 p-8 shadow-glow backdrop-blur-xl"
      >
        <p className="text-base leading-8 text-silver sm:text-lg">
          I’m a product engineer and founder who crafts digital experiences for teams building at the intersection of design, AI, and cloud-scale systems. My work spans design systems, immersive landing pages, and high-performance platform architecture.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Years experience', value: '10+' },
            { label: 'Delivered products', value: '35+' },
            { label: 'Industry focus', value: 'Fintech · AI · SaaS' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-[#111111]/90 p-5">
              <p className="text-3xl font-semibold tracking-tight text-white">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-silver">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#0B0B0B]/80 p-5">
            <p className="text-sm uppercase tracking-[0.32em] text-silver">Philosophy</p>
            <p className="mt-3 text-sm leading-7 text-silver">
              Craft each experience with clarity, restraint, and the same care I would use for a luxury brand presentation.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0B0B0B]/80 p-5">
            <p className="text-sm uppercase tracking-[0.32em] text-silver">Approach</p>
            <p className="mt-3 text-sm leading-7 text-silver">
              Lean into elegant spacing, premium motion, and thoughtfully layered systems that feel both fast and cinematic.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
