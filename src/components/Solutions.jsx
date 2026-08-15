import { CheckCircle2 } from 'lucide-react'
import { solutions } from '../data/solutions'

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {solutions.map((s, index) => (
            <div
              key={s.title}
              className="flex flex-col overflow-hidden rounded-3xl border-2 border-green-500 bg-white shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              {/* Top Section */}
              <div className="relative flex-1 bg-white p-8 sm:p-10 pb-6 z-10 flex flex-col">
                {/* Header */}
                <div className="relative z-10">
                  <h3 className="text-[22px] font-bold text-[#021833] tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-black font-medium pr-[40%]">
                    {s.tagline}
                  </p>
                </div>

                {/* Body (Checkmarks + Button) */}
                <div className="relative z-10 mt-6 flex-1 flex flex-col">
                  <ul className="space-y-3.5 w-[55%]">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[12px] font-semibold text-black leading-tight">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 sm:mt-10">
                    <a
                      href="#contact"
                      className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center rounded-full bg-[#021833] px-6 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-teal shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal"
                    >
                      {s.btnText}
                    </a>
                  </div>
                </div>

                {/* Right Image Container */}
                <div className="absolute bottom-0 right-0 z-0 h-full w-[55%] pointer-events-none flex items-end justify-end">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full max-h-[90%] object-contain object-right-bottom sm:object-center-bottom"
                    style={{ 
                      maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
                    }}
                  />
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col items-center justify-start bg-[#f8fcfb] p-8 sm:p-10 text-center min-h-[160px] relative z-20 border-t border-gray-50">
                <h4 className="text-[17px] font-bold text-[#021833] max-w-[200px] leading-snug">
                  {s.footerText}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
