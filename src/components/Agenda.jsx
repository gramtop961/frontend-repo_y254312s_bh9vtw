import React from 'react'
import { motion } from 'framer-motion'

const days = [
  {
    day: 'Day 1',
    title: 'Leadership & Capital Strategy',
    items: ['Opening Keynote: The Trillion-Dollar Mindset', 'Boardroom Tactics for Hypergrowth', 'Capital Engines: Family Offices, PE & Sovereign Funds', 'VIP Dinner: Curated Dealflow']
  },
  {
    day: 'Day 2',
    title: 'Innovation, AI & Enterprise Transformation',
    items: ['AI in the C-Suite: From Hype to P&L', 'Scaling with Systems: Enterprise Playbooks', 'Corporate Venturing & M&A Pipelines', 'Private Masterclasses & Breakouts']
  },
  {
    day: 'Day 3',
    title: 'Global Markets, Legacy & Impact',
    items: ['Geopolitics for CEOs', 'Luxury Brand Architecture', 'Legacy Funds & Impact Capital', 'Afterparty: Under-the-stars Soirée']
  }
]

export default function Agenda() {
  return (
    <section id="agenda" className="relative bg-[#040a13] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_90%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">Agenda</h2>
          <p className="mt-4 max-w-2xl text-blue-200/80">A cinematic, day-by-day journey crafted to expand perspective, unlock capital, and architect scale.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-blue-500/40 md:block" />
          <div className="space-y-8">
            {days.map((d, idx) => (
              <motion.div key={d.day} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="relative grid gap-4 md:grid-cols-[120px_1fr] md:gap-8">
                <div className="flex items-start md:justify-end">
                  <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-200/90 backdrop-blur-md">{d.day}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <div className="mb-2 text-xl font-semibold">{d.title}</div>
                  <ul className="mt-3 grid gap-2 text-blue-200/85">
                    {d.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">• <span>{it}</span></li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
