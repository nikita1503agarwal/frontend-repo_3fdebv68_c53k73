import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* faint background texture */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(147,197,253,0.1),transparent_45%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} BlueHome. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="text-blue-200/70 hover:text-white">Features</a>
            <a href="#contact" className="text-blue-200/70 hover:text-white">Contact</a>
            <a href="#home" className="text-blue-200/70 hover:text-white">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
