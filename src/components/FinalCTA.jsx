import React from 'react'

export default function FinalCTA() {
  return (
    <section className="relative py-24" id="book">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto text-center px-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Want more demos without hiring?</h3>
        <p className="mt-3 text-white/80">Let our inbound engine handle your first contact.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#book" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow/20 shadow-black/30 hover:shadow-black/40 hover:shadow-lg transition">
            Book a 10 min intro
          </a>
          <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
            See a live example
          </a>
        </div>
      </div>
    </section>
  )
}
