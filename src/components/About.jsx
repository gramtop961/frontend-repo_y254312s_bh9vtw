import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#050a12] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_20%,rgba(14,165,233,0.12),transparent),radial-gradient(900px_500px_at_90%_80%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold md:text-5xl">About the Summit</h2>
          <p className="mt-5 max-w-3xl text-blue-200/80">The Corporate Millionaire Summit 2026 is an ultra-premium gathering of visionary leaders, elite founders, investors, and global executives. Designed for those shaping the future of business, this summit blends strategic insight with exclusive access, delivering high-impact connections, private masterclasses, and transformative thought leadership.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Vision & Mission',
              desc: 'To accelerate leadership excellence and push the frontier of corporate innovation — empowering decision-makers with future-ready strategies, elite networks, and exponential growth playbooks.',
            },
            {
              title: 'Why Exclusive',
              desc: 'Attendance is by invitation or application. Every seat is curated for value — ensuring rooms filled with strategic peers, qualified investors, and enterprise decision-makers.',
            },
            {
              title: 'Experience',
              desc: 'Expect cinematic production, elevated hospitality, and deeply curated content — from private dealflow lounges to advanced AI and capital strategy sessions.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-blue-200/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
