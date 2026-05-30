import { motion } from 'framer-motion'
import { socialLinks } from '../data/portfolio'

export default function ContactSection() {
  return (
    <section id="contact" className="grid gap-10">
      <div className="grid gap-6 rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-sm sm:grid-cols-[1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-[#C97500]">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Let’s build something for students and learning.</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600">
            I’m available for mentorship, collaboration, and student technology projects. Reach out to talk about AI tools, robotics, or web design.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-950 transition hover:border-[#C97500] hover:bg-[#FEF3C7]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-700">
              <span>Name</span>
              <input className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#C97500] focus:ring-2 focus:ring-[#F59E0B]/20" placeholder="Your full name" />
            </label>
            <label className="space-y-2 text-sm text-slate-700">
              <span>Email</span>
              <input className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#C97500] focus:ring-2 focus:ring-[#F59E0B]/20" placeholder="you@example.com" />
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-700">
            <span>Message</span>
            <textarea rows={5} className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#C97500] focus:ring-2 focus:ring-[#F59E0B]/20" placeholder="Tell me what you’d like to build." />
          </label>
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#C97500] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a86a00]">
            Send message
          </button>
        </motion.form>
      </div>
      <div className="grid gap-4 rounded-[2rem] border border-slate-200/70 bg-white p-6 text-sm text-slate-700 shadow-sm">
        <p className="font-semibold text-slate-950">Download resume</p>
        <p>Get a student-friendly summary of my experience, projects, and skills.</p>
        <a href="/resume.pdf" className="inline-flex w-max items-center rounded-full border border-[#C97500] bg-[#FEF3C7] px-5 py-2 text-sm font-semibold text-[#92400E] transition hover:bg-[#f7d07d]">
          Download resume
        </a>
      </div>
    </section>
  )
}
