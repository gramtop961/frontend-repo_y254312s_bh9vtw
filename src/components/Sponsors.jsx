import React from 'react'
import { motion } from 'framer-motion'

const sponsors = ['Oracle', 'BlackRock', 'Siemens', 'Goldman', 'Microsoft', 'Accenture']

export default function Sponsors() {
  return (
    <section className="relative bg-[#060c16] py-20 text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Sponsors</h2>
          <p className="mt-3 max-w-2xl text-blue-200/80">Premium partners powering the Corporate Millionaire Summit experience.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {sponsors.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }} className="group rounded-xl border border-white/10 bg-white/5 p-6 text-center text-blue-200/70 backdrop-blur-md">
              <span className="text-sm font-semibold tracking-wide transition group-hover:text-white">{s}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/25 hover:bg-white/10">Interested in Sponsoring?</a>
        </div>
      </div>
    </section>
  )
}
