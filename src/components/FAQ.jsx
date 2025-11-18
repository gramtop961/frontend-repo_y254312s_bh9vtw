import React, { useState } from 'react'

const faqs = [
  { q: 'Who can attend?', a: 'Attendance is curated for founders, investors, board leaders, and enterprise executives.' },
  { q: 'Is there an application process?', a: 'Yes. Executive and Boardroom tiers are application-based to ensure optimal peer groups.' },
  { q: 'Are there early bird offers?', a: 'Yes, limited early bird pricing is available on a first-come basis.' },
  { q: 'Will sessions be recorded?', a: 'Select sessions will be recorded for premium pass holders.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left text-white">
        <span className="text-sm font-semibold md:text-base">{q}</span>
        <span className="ml-4 text-cyan-300">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="mt-3 text-sm text-blue-200/80">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="relative bg-[#081120] py-24 text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold md:text-5xl">FAQ</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
