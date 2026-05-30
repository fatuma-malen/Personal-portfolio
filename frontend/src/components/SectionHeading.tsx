import { motion } from 'framer-motion'

type Props = {
  eyebrow: string
  title: string
  description: string
}

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{description}</p>
    </motion.div>
  )
}
