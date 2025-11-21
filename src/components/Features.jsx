import { Zap, Shield, Rocket } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning-fast',
    desc: 'Optimized assets and clean layout ensure a smooth experience on any device.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Best practices baked in so you can start from a safe foundation.'
  },
  {
    icon: Rocket,
    title: 'Ready to launch',
    desc: 'Pre-styled sections with a modern aesthetic help you ship faster.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-blue-400/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 flex items-center justify-center text-blue-300 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-blue-100/80 mt-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
