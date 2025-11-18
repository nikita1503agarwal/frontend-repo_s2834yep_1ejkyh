import React from 'react'
import { motion } from 'framer-motion'
import { Clock, CalendarX2, MessageSquareWarning, Waves, ReceiptText } from 'lucide-react'

const items = [
  {
    icon: Waves,
    text: 'Leads arrive in waves — your team is in meetings.',
  },
  {
    icon: Clock,
    text: 'Response time is hours when it needs to be seconds.',
  },
  {
    icon: CalendarX2,
    text: 'Demo requests slip through the cracks.',
  },
  {
    icon: MessageSquareWarning,
    text: 'Trials die because no one follows up.',
  },
  {
    icon: ReceiptText,
    text: 'Marketing spend is wasted on slow follow-up.',
  },
]

export default function Problem() {
  return (
    <section className="relative py-20" id="problem">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
          Why SaaS teams lose deals
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2, scale: 1.01 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition"
            >
              <div className="flex items-start gap-3">
                <it.icon className="w-5 h-5 text-white/80 mt-1" />
                <p className="text-white/90">{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
