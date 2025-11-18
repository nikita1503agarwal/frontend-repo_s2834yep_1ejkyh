import React from 'react'
import { motion } from 'framer-motion'
import { Inbox, Brain, CheckCheck, Sparkles, CalendarCheck2, BellRing } from 'lucide-react'

const steps = [
  { title: 'Lead arrives', desc: 'Email, form or chat', icon: Inbox },
  { title: 'Understands intent', desc: 'Reads and parses context', icon: Brain },
  { title: 'Quick qualification', desc: 'Size, need, timing, fit', icon: CheckCheck },
  { title: 'Instant reply', desc: 'Personal and on-brand', icon: Sparkles },
  { title: 'Demo booked', desc: 'Calendar invite sent', icon: CalendarCheck2 },
  { title: 'Logged + notified', desc: 'CRM & team pinged', icon: BellRing },
]

export default function Flow() {
  return (
    <section className="relative py-24" id="how">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-white tracking-tight">How it works — in under 30 seconds.</h3>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <s.icon className="w-5 h-5 text-white/90 mt-1" />
                <div>
                  <h4 className="text-white font-medium">{s.title}</h4>
                  <p className="text-white/70 text-sm">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
