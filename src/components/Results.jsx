import React, { useEffect, useState } from 'react'

const Counter = ({ to, label, prefix = '', suffix = '' }) => {
  const [value, setValue] = useState(0)

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
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="text-3xl font-semibold text-slate-900">{prefix}{value}{suffix}</div>
      <p className="mt-1 text-slate-600">{label}</p>
    </div>
  )
}

export default function Results() {
  return (
    <section className="relative py-20" id="results">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-slate-900 tracking-tight">What you get</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Counter to={50} prefix="+" suffix="%" label={"More demos"} />
          <Counter to={0} label={"Lost leads"} />
          <Counter to={10} prefix="–" label={"hours admin per week"} />
        </div>
        <div className="sr-only">
          <p>+20–50% more demos</p>
          <p>0 lost leads</p>
          <p>–10 hours admin/week</p>
        </div>
      </div>
    </section>
  )
}
