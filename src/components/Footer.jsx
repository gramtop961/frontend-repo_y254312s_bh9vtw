import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-[#050a12] py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">Corporate Millionaire Summit</div>
            <p className="mt-2 text-blue-200/70">A production crafted for global leaders shaping the future.</p>
          </div>
          <div className="md:text-center">
            <div className="text-sm text-blue-200/80">Contact: hello@cmsummit.com</div>
            <div className="mt-2 text-sm text-blue-200/60">Twitter • LinkedIn • Instagram</div>
          </div>
          <div className="md:text-right">
            <input placeholder="Your email" className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-blue-200/50 outline-none backdrop-blur-md md:w-auto" />
            <button className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow-[0_0_20px_rgba(56,189,248,0.35)]">Subscribe</button>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-blue-200/60">© 2026 Corporate Millionaire Summit. All rights reserved.</div>
      </div>
    </footer>
  )
}
