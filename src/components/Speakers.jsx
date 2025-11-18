import React from 'react'
import { motion } from 'framer-motion'

const speakers = [
  { name: 'Ariana Wolfe', title: 'CEO, Helix Dynamics', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Noah Sterling', title: 'Managing Partner, Apex Capital', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Dr. Lila Chen', title: 'Chief Strategy Officer, QuantumWorks', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Marcus Vega', title: 'Founder, NovaGuild', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop' },
]

export default function Speakers() {
  return (
    <section id="speakers" className="relative bg-[#030915] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_20%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">Speakers</h2>
          <p className="mt-4 max-w-2xl text-blue-200/80">World-class corporate leaders, investors, and innovators sharing advanced playbooks and future-facing strategies.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((sp, i) => (
            <motion.div
              key={sp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={sp.img} alt={sp.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-lg font-semibold">{sp.name}</div>
                <div className="text-sm text-blue-200/80">{sp.title}</div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{background:'radial-gradient(400px 200px at 50% 0%, rgba(56,189,248,0.25), transparent)'}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
