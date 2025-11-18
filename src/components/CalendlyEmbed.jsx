import React from 'react'

export default function CalendlyEmbed({ url = 'https://calendly.com/' }) {
  return (
    <section className="relative py-24" id="book">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
            <iframe
              title="Calendly scheduling"
              src={url}
              className="w-full h-full"
              style={{ minHeight: 560 }}
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
