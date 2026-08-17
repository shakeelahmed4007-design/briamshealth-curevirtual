import { HeartPulse, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../data/footerLinks'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#021833] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              {/* Keeping HeartPulse as placeholder for the custom logo */}
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/20">
                <HeartPulse className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
              <div className="leading-none">
                <p className="text-xl font-bold tracking-tight text-white">
                  BriamsHealth
                </p>
                <p className="mt-1.5 text-[8px] font-medium tracking-[0.2em] text-white/80">
                  — CARE. CONNECTED. ANYWHERE. —
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/80">
              Building the future of healthcare through technology, innovation, and compassionate care.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-base font-semibold text-white">{heading}</p>
              <ul className="mt-6 space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#021833] rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us */}
          <div>
            <p className="text-base font-semibold text-white">Contact Us</p>
            <div className="mt-6 space-y-4">
              <a href="mailto:info@briamshealth.com" className="flex items-center gap-3 text-[15px] text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm">
                <Mail className="h-5 w-5 shrink-0" strokeWidth={1.5} /> info@briamshealth.com
              </a>
              <a href="tel:+233539246331" className="flex items-center gap-3 text-[15px] text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm">
                <Phone className="h-5 w-5 shrink-0" strokeWidth={1.5} /> +233 539246331
              </a>
              <a href="https://maps.google.com/?q=Accra,+Ghana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[15px] text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm">
                <MapPin className="h-5 w-5 shrink-0" strokeWidth={1.5} /> Accra, Ghana
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#021833] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#021833]">
                <Facebook className="h-4 w-4" fill="currentColor" stroke="none" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#021833] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#021833]">
                <Linkedin className="h-4 w-4" fill="currentColor" stroke="none" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#021833] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#021833]">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#021833] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#021833]">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-sm text-white/70">
          <p>
            © 2024 BriamsHealth. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
