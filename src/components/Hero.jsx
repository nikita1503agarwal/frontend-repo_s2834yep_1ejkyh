import React from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck2, ArrowRight, Mail, Filter, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const LeadMiniFlow = () => {
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] } })
  }

  const steps = [
    { Icon: Mail, label: 'Lead' },
    { Icon: Filter, label: 'Qualification' },
    { Icon: Sparkles, label: 'Instant Reply' },
    { Icon: CalendarCheck2, label: 'Demo Booked' },
  ]

  return (
    <div className="mt-10 w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            custom={i}
            variants={item}
            initial="hidden"
            animate="visible"
            className="relative rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-sm"
          >
            <step.Icon className="w-5 h-5 mx-auto text-white/90" />
            <div className="mt-2 text-xs text-white/80">{step.label}</div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2 translate-x-full -translate-y-1/2">
                <ArrowRight className="w-4 h-4 text-white/50" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-100px,rgba(124,58,237,0.35),transparent_60%)]" />

      {/* Spline scene */}
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
            AI Lead Engine
          </div>
          <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Stop losing inbound leads.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            We automate qualification + first response and book demos within 30 seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow/20 shadow-black/30 hover:shadow-black/40 hover:shadow-lg transition">
              Book a 10-min intro
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
              See live example
            </a>
          </div>
        </motion.div>

        <LeadMiniFlow />
      </div>

      {/* bottom subtle separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
