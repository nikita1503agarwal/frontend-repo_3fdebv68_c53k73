export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Build your next idea faster</h2>
            <p className="mt-3 text-blue-100/80">Tell us what you want to make and we will turn it into a working app, step by step.</p>
            <form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Your email" className="w-full rounded-full bg-slate-900/60 border border-white/10 px-5 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:border-blue-400/40" />
              <button className="rounded-full bg-white text-slate-900 font-medium px-6 py-3 hover:bg-blue-50 transition-colors">Notify me</button>
            </form>
            <p className="mt-3 text-xs text-blue-200/70">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
