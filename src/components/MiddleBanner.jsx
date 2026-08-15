import { useState } from 'react'

export default function MiddleBanner() {
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
    <section className="bg-white pb-12 sm:pb-16 pt-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#008f82] px-8 py-10 sm:px-12 sm:py-12 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="relative z-10 max-w-xl text-left">
            <h2 className="text-2xl font-bold text-white sm:text-[26px] leading-tight tracking-tight">
              Stay informed. Stay connected.
            </h2>
            <p className="mt-2 text-[15px] text-white/90">
              Subscribe for updates about CureVirtual launch,<br className="hidden sm:block" /> health tips, and digital health news.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-md lg:mr-32 xl:mr-40">
            {submitted ? (
              <div className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/20 px-6 py-2.5 text-sm font-semibold text-white">
                You're on the list!
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <form onSubmit={handleSubmit} className="flex w-full flex-col sm:flex-row bg-white rounded-md sm:rounded-[8px] p-0.5 shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-[#008f82]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError('')
                    }}
                    placeholder="Enter your email address"
                    className="w-full min-h-[44px] bg-transparent py-2.5 pl-5 pr-4 text-sm text-[#021833] placeholder:text-gray-400 outline-none"
                    aria-label="Email address"
                    aria-invalid={!!error}
                  />
                  <button
                    type="submit"
                    className="shrink-0 min-h-[44px] bg-[#021833] px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-navy-800 rounded-r-[6px] sm:rounded-l-none rounded-md focus-visible:outline-none focus-visible:bg-navy-800"
                  >
                    Subscribe
                  </button>
                </form>
                {error && <p className="text-xs font-semibold text-red-200 pl-2 animate-fade-in">{error}</p>}
              </div>
            )}
          </div>
          
          {/* Decorative Graphic (Tablet) */}
          <div className="absolute right-0 bottom-0 md:-right-8 lg:right-0 lg:-bottom-6 hidden md:block opacity-100 pointer-events-none">
             <div className="relative flex items-center justify-end">
                <img src="/src/assets/home.png" alt="App Preview" className="h-[220px] lg:h-[260px] w-auto object-contain transform translate-y-4 lg:translate-y-6" />
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
