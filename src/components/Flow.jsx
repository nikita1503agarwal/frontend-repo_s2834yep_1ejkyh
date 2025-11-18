import React from 'react'
import { motion } from 'framer-motion'
import { Inbox, Brain, CheckCheck, Sparkles, CalendarCheck2, Database } from 'lucide-react'

const steps = [
  { title: 'Lead arrives', desc: 'Email, form or chat', icon: Inbox },
  { title: 'AI interprets intent', desc: 'Understands the context', icon: Brain },
  { title: 'Qualification', desc: 'Fit, size, need, urgency', icon: CheckCheck },
  { title: 'Instant personalized response', desc: 'On-brand and helpful', icon: Sparkles },
  { title: 'Demo booked automatically', desc: 'Calendar invite sent', icon: CalendarCheck2 },
  { title: 'Logged in CRM', desc: 'Synced to HubSpot/Pipedrive', icon: Database },
]

export default function Flow() {
  return (
    <section className="relative py-24" id="how">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-slate-900 tracking-tight">How it works in 30 seconds</h3>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start gap-3">
                <s.icon className="w-5 h-5 text-slate-900 mt-1" />
                <div>
                  <h4 className="text-slate-900 font-medium">{s.title}</h4>
                  <p className="text-slate-600 text-sm">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        />
      </div>
    </section>
  )
}
