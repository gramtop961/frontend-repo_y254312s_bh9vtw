import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Speakers from './components/Speakers'
import Agenda from './components/Agenda'
import Attendees from './components/Attendees'
import Highlights from './components/Highlights'
import Venue from './components/Venue'
import Registration from './components/Registration'
import Sponsors from './components/Sponsors'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Subtle star/particle background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(1000px_600px_at_-10%_90%,rgba(59,130,246,0.15),transparent)]" />

      <Hero />
      <About />
      <Speakers />
      <Agenda />
      <Attendees />
      <Highlights />
      <Venue />
      <Registration />
      <Sponsors />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
