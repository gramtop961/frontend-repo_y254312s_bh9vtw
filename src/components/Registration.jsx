import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Standard', price: '$1,250', perks: ['Main Stage Access', 'Networking Lounges', 'Workshops'] },
  { name: 'Executive', price: '$2,800', perks: ['All Standard Perks', 'VIP Seating', 'Private Briefings'] },
  { name: 'Boardroom', price: '$6,500', perks: ['All Executive Perks', 'Boardroom Roundtables', 'VIP Dinner Access'] },
]

export default function Registration() {
  return (
    <section id="register" className="relative bg-[#070e19] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_30%_10%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Registration</h2>
          <p className="mt-4 text-blue-200/80">Choose your tier. Limited capacity. Early bird offers available.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="mt-2 text-3xl font-extrabold text-cyan-300">{t.price}</div>
              <ul className="mt-4 space-y-2 text-blue-200/80">
                {t.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-2 font-semibold text-slate-900 transition hover:from-sky-400 hover:to-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.35)]">Secure Seat</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
