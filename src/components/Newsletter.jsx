import { useState } from 'react'
import { Bell, CheckCircle2, Mail, ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      setError('Email is required')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email')
      return
    }
    setError('')
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 4000)
  }

  return (
    <section id="newsletter" className="bg-white pt-2 sm:pt-4 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#008f82] px-6 py-6 sm:px-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-md">
          
          {/* Left Text */}
          <div className="relative z-10 lg:w-[45%] text-left">
            <h2 className="text-xl font-bold text-white sm:text-[22px] leading-tight tracking-tight">
              Be the first to know when CureVirtual launches!
            </h2>
            <p className="mt-1.5 text-[14px] text-white/90">
              Sign up for updates, news, and early access.
            </p>
          </div>

          {/* Right Input and Button */}
          <div className="relative z-10 flex flex-1 items-center lg:justify-end lg:pr-24">
            {submitted ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2.5 text-sm font-semibold text-white">
                <CheckCircle2 className="h-4 w-4" />
                You're on the list!
              </div>
            ) : (
              <div className="flex flex-col gap-2 w-full max-w-sm">
                <form onSubmit={handleSubmit} className="flex w-full flex-col sm:flex-row bg-white rounded-md p-1 shadow-sm focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-[#008f82]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError('')
                    }}
                    placeholder="Enter your email address"
                    className="w-full min-h-[44px] bg-transparent py-2.5 pl-4 pr-3 text-[13px] text-[#021833] placeholder:text-gray-400 outline-none"
                    aria-label="Email address"
                    aria-invalid={!!error}
                  />
                  <button
                    type="submit"
                    className="shrink-0 min-h-[44px] rounded bg-[#021833] px-6 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-navy-800 mt-2 sm:mt-0 focus-visible:outline-none focus-visible:bg-navy-800"
                  >
                    Notify Me
                  </button>
                </form>
                {error && <p className="text-xs font-semibold text-red-200 pl-2 animate-fade-in">{error}</p>}
              </div>
            )}
          </div>

          {/* Decorative Graphic (Phone + Bell) */}
          <div className="absolute right-0 bottom-0 md:-right-8 lg:right-0 lg:-bottom-12 hidden md:block opacity-100 pointer-events-none transform scale-90 lg:scale-100">
            <div className="relative flex items-center justify-end">
              <img src="/src/assets/home.png" alt="App Preview" className="h-[280px] w-auto object-contain transform translate-y-8" />
              <div className="absolute top-10 right-4 lg:-right-8 xl:-right-12">
                <Bell className="h-10 w-10 text-white drop-shadow-md" fill="white" />
                <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-[#008f82]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
