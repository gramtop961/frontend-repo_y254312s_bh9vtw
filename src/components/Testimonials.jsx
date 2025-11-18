import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'An elite convergence of leadership and capital. The best network I have experienced at a global summit.',
    name: 'Evelyn Hart',
    role: 'Chair, Hart Global Holdings'
  },
  {
    quote: 'Flawlessly executed. Every interaction felt intentional and high-value. We closed two strategic partnerships in 48 hours.',
    name: 'Rafael Costa',
    role: 'CEO, Meridian AI'
  },
  {
    quote: 'If you care about future-shaping insights and real outcomes, this is the room to be in.',
    name: 'Priya Mehta',
    role: 'Managing Director, Vantara Capital'
  }
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#070f1b] py-24 text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">Testimonials</h2>
          <p className="mt-4 max-w-2xl text-blue-200/80">Reflections from past attendees and partners.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-blue-100">“{t.quote}”</p>
              <div className="mt-4 text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-blue-200/70">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
