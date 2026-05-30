import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const stored = localStorage.getItem('theme')
      return (stored as 'dark' | 'light') || 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const handleToggle = () => {
    const root = document.documentElement
    // add a short-lived class to enable smooth transitions on variable changes
    root.classList.add('theme-transition')
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    window.setTimeout(() => root.classList.remove('theme-transition'), 500)
  }

  return (
    <div className="fixed right-6 top-6 z-50">
      <motion.button
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleToggle}
        className="theme-toggle flex items-center gap-3 rounded-full border border-white/10 bg-[#0B0B0B]/70 px-4 py-2 text-sm text-white shadow-glow backdrop-blur-md"
        aria-label="Toggle theme"
      >
        <span className="w-6 text-center">{theme === 'dark' ? '🌙' : '☀️'}</span>
        <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
      </motion.button>
    </div>
  )
}
