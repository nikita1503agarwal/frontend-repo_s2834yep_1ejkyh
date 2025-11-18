import React from 'react'

export default function FinalCTA() {
  return (
    <section className="relative py-24" id="book">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto text-center px-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Want more demos without hiring?</h3>
        <p className="mt-3 text-slate-600">Let our inbound engine handle your first contact.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-medium shadow/20 shadow-black/20 hover:shadow-black/30 hover:shadow-lg transition">
            Book a 10-min intro
          </a>
          <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-50 transition">
            See live example
          </a>
        </div>
      </div>
    </section>
  )
}
