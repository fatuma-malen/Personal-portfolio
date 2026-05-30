import { motion, AnimatePresence } from 'framer-motion'
import { socialLinks } from '../data/portfolio'

export default function ContactSection() {
  return (
    <section id="contact" className="grid gap-10">
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#0D0D0D]/90 p-8 shadow-glow backdrop-blur-xl sm:grid-cols-[1fr_0.8fr]">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-silver">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Create a meaningful collaboration with premium product engineering.</h2>
          <p className="max-w-2xl text-base leading-8 text-silver">
            Send a note, share a brief, or request a conversation. I’m available for advisory engagements, fractional leadership, and elite product work.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-sm text-white transition hover:border-white/20 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <AnimatePresence>
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 rounded-[2rem] border border-white/10 bg-black/50 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-silver">
                <span>Name</span>
                <input className="w-full rounded-3xl border border-white/10 bg-[#111111]/90 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:ring-1 focus:ring-white/10" placeholder="Your full name" />
              </label>
              <label className="space-y-2 text-sm text-silver">
                <span>Email</span>
                <input className="w-full rounded-3xl border border-white/10 bg-[#111111]/90 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:ring-1 focus:ring-white/10" placeholder="you@domain.com" />
              </label>
            </div>
            <label className="space-y-2 text-sm text-silver">
              <span>Message</span>
              <textarea rows={5} className="w-full rounded-3xl border border-white/10 bg-[#111111]/90 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:ring-1 focus:ring-white/10" placeholder="Tell me about your project." />
            </label>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              Send message
            </button>
          </motion.form>
        </AnimatePresence>
      </div>
      <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#0B0B0B]/90 p-6 text-sm text-silver">
        <p className="font-semibold text-white">Resume</p>
        <p>Download a tailored portfolio resume, experience summary, and project overview.</p>
        <a href="/resume.pdf" className="inline-flex w-max items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10">
          Download resume
        </a>
      </div>
    </section>
  )
}
