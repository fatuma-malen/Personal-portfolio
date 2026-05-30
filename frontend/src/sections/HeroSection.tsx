import { motion } from 'framer-motion'

const heroItems = [
  'AI-powered platform design',
  'System architecture and product strategy',
  'Executive-level engineering leadership',
]

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A]/90 p-8 shadow-glow backdrop-blur-xl sm:p-10 lg:p-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.14),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(136,136,136,0.08),_transparent_28%)] opacity-80" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="space-y-6">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-silver">
            Elite Portfolio — Dark Mode
          </span>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-silver">Fatuma</p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building premium digital products for ambitious teams and founders.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-silver sm:text-lg">
              I design scalable product experiences, modern SaaS ecosystems, and immersive web platforms that feel cinematic, polished, and effortless.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
              View case studies
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-silver/30 bg-silver/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-silver/20">
              Let’s collaborate
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="space-y-5 rounded-[2rem] border border-white/10 bg-[#111111]/70 p-6 shadow-xl backdrop-blur-xl sm:p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-silver">Signature capabilities</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {heroItems.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-[#0B0B0B] p-4 text-sm text-silver transition hover:border-white/20 hover:bg-white/5">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-3xl border border-white/10 bg-black/70 p-5 text-sm text-silver">
            <p className="font-semibold text-white">Availability</p>
            <p className="mt-2 text-sm">Open to new opportunities, advisory roles, and bespoke product engagements.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
