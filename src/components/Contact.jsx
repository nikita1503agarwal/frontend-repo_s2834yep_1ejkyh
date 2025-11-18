import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      message: form.get('message'),
      budget: form.get('budget') || undefined,
      source: 'landing-contact'
    }

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong')
    }
  }

  return (
    <section className="relative py-24" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0,rgba(99,102,241,0.2),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Talk to us</h3>
          <p className="mt-3 text-white/80">Share a bit about your inbound flow and we’ll set up a tailored walkthrough.</p>
          {status === 'success' && (
            <div className="mt-6 inline-flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
              <span>Thanks! We’ll reach out shortly.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-6 text-rose-400">{error}</div>
          )}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-4">
            <label className="text-sm">Name
              <input name="name" required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30" placeholder="Jane Doe" />
            </label>
            <label className="text-sm">Email
              <input type="email" name="email" required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30" placeholder="jane@company.com" />
            </label>
            <label className="text-sm">Company
              <input name="company" className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30" placeholder="Acme Inc." />
            </label>
            <label className="text-sm">Budget (optional)
              <select name="budget" className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30">
                <option value="">Select</option>
                <option value="<$2k">Less than $2k</option>
                <option value="$2k–$5k">$2k–$5k</option>
                <option value="$5k–$10k">$5k–$10k</option>
                <option value=">$10k">More than $10k</option>
              </select>
            </label>
            <label className="text-sm">Message
              <textarea name="message" required rows={4} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30" placeholder="What would you like to automate?" />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            {status === 'loading' ? 'Sending…' : 'Send message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
