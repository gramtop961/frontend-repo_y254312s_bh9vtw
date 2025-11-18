import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glow = 'shadow-[0_0_60px_rgba(56,189,248,0.35)]'

export default function Hero({ onRegisterClick }) {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#030712] text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Luxury gradient + vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(900px_500px_at_-10%_80%,rgba(16,185,129,0.2),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.2)_0%,rgba(3,7,18,0.6)_40%,rgba(3,7,18,0.9)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-blue-200 backdrop-blur-md"
          >
            CORPORATE • ELITE • FUTURE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-balance bg-gradient-to-b from-white via-white to-blue-200/80 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Corporate Millionaire Summit 2026
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 max-w-3xl text-pretty text-base text-blue-100/85 sm:text-lg"
          >
            Where Visionaries, Innovators & Leaders Shape the Future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#register"
              onClick={(e) => {
                if (onRegisterClick) onRegisterClick();
              }}
              className={`group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-slate-900 transition-all hover:from-sky-400 hover:to-cyan-300 ${glow}`}
            >
              <span className="relative z-10">Register Now</span>
              <span className="absolute inset-0 -z-10 rounded-full bg-white/40 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </a>

            <a
              href="#about"
              className="group inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/25 hover:bg-white/10"
            >
              <span className="relative z-10">Event Details</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-14 grid w-full grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {[
              ['Global CEOs', '40+'],
              ['Nations', '25'],
              ['Masterclasses', '18'],
              ['Attendees', '2,000+'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-md">
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs uppercase tracking-widest text-blue-200/70">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
