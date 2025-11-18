import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Flow from './components/Flow'
import Results from './components/Results'
import Pricing from './components/Pricing'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
            <span className="text-sm font-medium tracking-wide">AI Lead Engine</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#problem" className="hover:text-slate-900 transition">Problem</a>
            <a href="#solution" className="hover:text-slate-900 transition">Solution</a>
            <a href="#how" className="hover:text-slate-900 transition">How it works</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          </nav>
          <a href="#book" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm font-medium">Book intro</a>
        </div>
      </header>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Flow />
        <Results />
        <Pricing />
        <SocialProof />
        <FinalCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-xs text-slate-500">
          <span>© {new Date().getFullYear()} AI Lead Engine</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
