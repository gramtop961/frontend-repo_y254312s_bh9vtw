import React from 'react'
import { motion } from 'framer-motion'

export default function Venue() {
  return (
    <section id="venue" className="relative bg-[#060b14] py-24 text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">Venue</h2>
          <p className="mt-4 max-w-2xl text-blue-200/80">An iconic, luxury corporate environment with panoramic views and state-of-the-art production.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="overflow-hidden rounded-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop" alt="Venue" className="h-full w-full object-cover" />
          </motion.div>
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-lg font-semibold">Location</div>
              <div className="mt-2 text-blue-200/80">Global Convention Centre • Downtown Financial District</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-2xl border border-white/10">
              <iframe title="map" className="h-64 w-full" src="https://www.google.com/maps?q=New%20York&output=embed" allowFullScreen></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
