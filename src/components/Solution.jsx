import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Filter, PenTool, CalendarCheck2, Database, Bell } from 'lucide-react'

const bullets = [
  { icon: Mail, text: 'Reads every inbound lead (email, form, chat)' },
  { icon: Filter, text: 'Qualifies it instantly' },
  { icon: PenTool, text: 'Writes a personal, on-brand response' },
  { icon: CalendarCheck2, text: 'Books a demo directly in your calendar' },
  { icon: Database, text: 'Logs everything into HubSpot/Pipedrive' },
  { icon: Bell, text: 'Notifies your team instantly' },
]

export default function Solution() {
  return (
    <section className="relative py-20" id="solution">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-semibold text-white tracking-tight">Your 24/7 inbound assistant.</h3>
            <p className="mt-3 text-white/80">We handle the first contact so your team never loses a lead again.</p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bullets.map((b, i) => (
                <motion.li key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                  <b.icon className="w-5 h-5 text-white/90 mt-0.5" />
                  <span className="text-white/90">{b.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/10 to-cyan-500/20 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-6 gap-3 text-white/80 text-sm">
                {['Lead', 'Read', 'Qualify', 'Reply', 'Book', 'Log'].map((step, i) => (
                  <motion.div key={step} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 grid place-items-center">
                      <span className="text-xs">{i + 1}</span>
                    </div>
                    <span className="text-xs">{step}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-4 text-sm text-white/70">Arrows indicate automated flow to calendar and CRM.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
