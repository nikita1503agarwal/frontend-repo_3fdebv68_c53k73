import { useState, useEffect } from 'react'
import { Menu, X, Flame, Star } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <span className="relative inline-flex">
            <Flame className="w-6 h-6 text-blue-400" />
          </span>
          <span className="text-white font-semibold tracking-tight">BlueHome</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-200 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 transition-colors">
            <Star className="w-4 h-4" />
            Get Started
          </a>
        </div>
        <button aria-label="Open menu" className="md:hidden text-white p-2" onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute top-0 right-0 w-80 h-full bg-slate-900 border-l border-white/10 p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2">
                <Flame className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">BlueHome</span>
              </div>
              <button aria-label="Close menu" className="text-white p-2" onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 transition-colors w-max">
                <Star className="w-4 h-4" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
