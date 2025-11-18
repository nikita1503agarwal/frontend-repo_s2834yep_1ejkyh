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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
            <span className="text-sm font-medium tracking-wide">AI Lead Engine</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#problem" className="hover:text-white transition">Problem</a>
            <a href="#solution" className="hover:text-white transition">Solution</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>
          <a href="#book" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-3 py-1.5 text-sm font-medium">Book intro</a>
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
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-xs text-white/60">
          <span>© {new Date().getFullYear()} AI Lead Engine</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
