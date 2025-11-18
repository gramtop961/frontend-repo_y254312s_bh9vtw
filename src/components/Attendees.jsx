import React from 'react'
import { Briefcase, Building2, Layers, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const groups = [
  { icon: Briefcase, title: 'Entrepreneurs', desc: 'High-growth founders seeking capital, partnerships, and scale systems.' },
  { icon: Building2, title: 'Corporate Leaders', desc: 'CXOs and board leaders architecting transformation and market expansion.' },
  { icon: Layers, title: 'Investors', desc: 'Family offices, PE/VC, and strategic capital allocators exploring premium dealflow.' },
  { icon: Rocket, title: 'Innovators', desc: 'Builders shaping the future of AI, fintech, climate, and deeptech.' },
]

export default function Attendees() {
  return (
    <section className="relative bg-[#050b15] py-24 text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">Who Should Attend</h2>
          <p className="mt-4 max-w-2xl text-blue-200/80">A curated room of decision-makers — engineered for meaningful outcomes and strategic elevation.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <g.icon className="h-8 w-8 text-cyan-300" />
              <div className="mt-4 text-lg font-semibold">{g.title}</div>
              <div className="mt-2 text-blue-200/80">{g.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
