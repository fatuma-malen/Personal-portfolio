import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { NavItem } from '../data/portfolio'

const commandVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
}

type Props = {
  items: NavItem[]
}

export default function CommandPalette({ items }: Props) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(
    () => items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [items, query],
  )

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen((current) => !current)
      }
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (!open) {
      setQuery('')
    }
  }, [open])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={commandVariants}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
        >
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/90 shadow-glow backdrop-blur-2xl">
            <div className="border-b border-white/10 px-6 py-4">
              <p className="text-xs uppercase tracking-[0.3em] text-silver">Command palette</p>
              <input
                autoFocus
                placeholder="Search sections, actions, or jump links..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0B0B0B] px-4 py-4 text-white outline-none ring-1 ring-transparent transition focus:ring-white/20"
              />
            </div>
            <div className="max-h-80 overflow-y-auto p-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white transition hover:bg-white/5"
                  >
                    <span>{item.label}</span>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-silver">Go</span>
                  </a>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-white/10 p-6 text-sm text-silver">
                  No matching sections found.
                </div>
              )}
            </div>
            <div className="border-t border-white/10 px-6 py-3 text-[13px] text-silver">
              <span className="font-medium text-white">Tip:</span> Press <span className="rounded-full border border-white/10 px-2 py-1">Ctrl+K</span> again to close.
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
