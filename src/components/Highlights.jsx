import React from 'react'
import { motion } from 'framer-motion'

const items = [
  ['Keynote Sessions', 'Cinematic keynotes from global visionaries and enterprise leaders.'],
  ['Networking Lounges', 'Curated connections with investors, partners, and policymakers.'],
  ['Business Masterclasses', 'Practical, closed-door playbooks from proven operators.'],
  ['High-Value Workshops', 'Hands-on sessions to implement systems, AI, and scale frameworks.'],
  ['VIP Dinner & Afterparty', 'An elegant, invitation-only evening designed for deep relationships.'],
]

export default function Highlights() {
  return (
    <section className="relative bg-[#070d18] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_10%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">Highlights</h2>
          <p className="mt-4 max-w-2xl text-blue-200/80">Experiences engineered for outcomes — at the highest standard of luxury and execution.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-lg font-semibold">{title}</div>
              <div className="mt-2 text-blue-200/80">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
