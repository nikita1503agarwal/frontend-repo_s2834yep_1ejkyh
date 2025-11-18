import React from 'react'

export default function Pricing() {
  return (
    <section className="relative py-24" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-slate-900 tracking-tight">Pricing</h3>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-slate-700">Pilot Setup</div>
            <div className="mt-1 text-3xl text-slate-900 font-semibold">25,000 SEK</div>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li>End-to-end automation setup</li>
              <li>Qualification logic + prompts</li>
              <li>Calendar + CRM integration</li>
              <li>Tone-of-voice tuning</li>
              <li>Dashboard</li>
            </ul>
          </div>
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-slate-700">Monthly</div>
            <div className="mt-1 text-3xl text-slate-900 font-semibold">7,500 SEK</div>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li>Continuous monitoring</li>
              <li>Improvements & tuning</li>
              <li>Support</li>
              <li>Weekly optimization</li>
              <li>SLA + fallback logic</li>
            </ul>
            <div className="mt-6">
              <a href="#book" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-medium shadow/20 shadow-black/10 hover:shadow-black/20 hover:shadow-lg transition">
                Start a 30-day pilot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
