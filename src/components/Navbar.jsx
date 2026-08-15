import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeartPulse, ArrowRight, X, Menu } from 'lucide-react'
import { navLinks } from '../data/navLinks'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-navy-50 shadow-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-navy shadow-soft transition-transform duration-300 group-hover:scale-105">
              <HeartPulse className="h-6 w-6 text-sky" strokeWidth={2.25} />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-teal ring-2 ring-white" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold tracking-tight text-navy">
                Briams<span className="text-teal">Health</span>
              </p>
              <p className="text-[11px] font-medium tracking-wide text-navy-600/70">
                Care. Connected. Anywhere.
              </p>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-teal after:transition-all after:duration-300 hover:after:w-full ${
                    isActive ? 'text-teal after:w-full' : 'text-navy/80 after:w-0'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-teal-600 hover:shadow-card hover:-translate-y-0.5"
            >
              Get Launch Updates
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-navy hover:bg-navy-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal min-h-[44px] min-w-[44px]"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden border-t border-navy-50 bg-white transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center min-h-[44px] rounded-lg px-3 py-2.5 text-[15px] font-medium hover:bg-lightbg hover:text-teal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                  isActive ? 'bg-lightbg text-teal' : 'text-navy/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Get Launch Updates
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
