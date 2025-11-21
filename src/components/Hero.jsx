import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      {/* gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[10%] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(147,197,253,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-blue-200 mb-4">
            <Sparkles className="w-4 h-4" />
            Modern Web Home Page
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Clean, fast, and responsive home page template
          </h1>
          <p className="mt-6 text-lg text-blue-100/80">
            A polished starting point with a sticky navbar, hero banner, feature highlights, and a shiny call-to-action — all built with HTML, CSS, and JavaScript (via React + Tailwind).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/10 text-white/90 hover:text-white hover:border-white/30 transition-colors">
              Learn More
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600/40 to-indigo-600/40 border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.06),transparent_40%)]" />
            <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
