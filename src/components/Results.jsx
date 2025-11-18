import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Counter = ({ to, label }) => {
  const [value, setValue] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    let raf
    const duration = 1200
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setValue(Math.floor(p * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to])

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="text-3xl font-semibold text-white">{value}{typeof to === 'number' && to > 0 ? '+' : ''}</div>
      <p className="mt-1 text-white/70">{label}</p>
    </div>
  )
}

export default function Results() {
  return (
    <section className="relative py-20" id="results">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-white tracking-tight">What you get.</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Counter to={50} label={"Faster, consistent follow-up wins deals."} />
          <Counter to={100} label={"Everything is captured, qualified and handled."} />
          <Counter to={10} label={"Your team stops writing emails and coordinating calls."} />
        </div>
        <div className="sr-only">
          {/* Descriptions for context */}
          <p>+20–50% more demos</p>
          <p>0 leads lost</p>
          <p>–10 hours admin/week</p>
        </div>
      </div>
    </section>
  )
}
