import { motion } from 'framer-motion'

const stats = [
  { label: 'Coding experience', value: '4 months' },
  { label: 'AI projects', value: '3 completed' },
  { label: 'Robotics builds', value: '2 prototypes' },
]

export default function HeroSection() {
  return (
    <section id="home" className="grid gap-10 px-8 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.35fr_0.85fr]">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Fatuma Tahir</p>
            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">Grade 10 student developer</p>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
          >
            Contact student
          </a>
        </div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl"
          >
            Hey there, I’m <span className="text-[#C97500]">Fatuma</span>
          </motion.h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Grade 10 student developer at Still I Rise International School with 4 months of coding and robotics experience.
          </p>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            I build AI-powered learning tools, robotics prototypes, and polished student-facing web experiences. Recent projects include an AI-agent, an AI-powered child tracking necklace, and collaborative robotics designs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-5 text-center shadow-sm">
              <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-[#C97500] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#a86a00]"
          >
            See my projects
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            View experience
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="grid gap-6"
      >
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-6 text-white shadow-xl">
          <div className="flex items-center justify-between gap-4 rounded-[1.75rem] bg-gradient-to-r from-[#FEBA08] via-[#F59E0B] to-[#C97500] px-4 py-3 text-sm font-semibold text-slate-950">
            <span>Featured student spotlight</span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-950">New</span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="h-52 rounded-[1.75rem] bg-gradient-to-br from-[#FCD77F] via-[#F29C21] to-[#D97812] p-4">
              <div className="flex h-full items-end justify-center">
                <div className="rounded-full border-4 border-white/90 bg-slate-950/90 px-4 py-3 text-sm font-semibold text-white">Student Portfolio</div>
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300">School</p>
              <p className="mt-2 text-lg font-semibold text-white">Still I Rise International School</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-[#FEF6E7] p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Recent progress</p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">AI research</p>
              <p className="mt-3 text-base font-semibold text-slate-950">Developed an AI-agent prototype that helps with study planning and concept summaries.</p>
            </div>
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Robotics launch</p>
              <p className="mt-3 text-base font-semibold text-slate-950">Built an AI-powered child tracking necklace for safer mobility and creative prototyping.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
