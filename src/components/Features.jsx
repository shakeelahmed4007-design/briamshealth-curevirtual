import { features } from '../data/features'
import { highlightBar } from '../data/highlightBar'

export default function Features() {
  return (
    <section id="curevirtual" className="bg-white min-h-[calc(100vh-80px)] flex flex-col justify-center py-10 sm:py-12 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#021833] sm:text-5xl">
            Meet <span className="text-teal">CureVirtual</span>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#021833]/80 font-medium sm:text-[18px]">
            Our all-in-one digital healthcare platform designed to<br className="hidden sm:block"/> make healthcare simple, fast, and convenient.
          </p>
        </div>

        <div className="mt-10 lg:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {features.map((f, i) => {
            const colors = [
              'text-blue-600',
              'text-pink-600',
              'text-emerald-600',
              'text-purple-600',
              'text-orange-600',
              'text-cyan-600',
              'text-indigo-600'
            ]
            const headingColor = colors[i % colors.length]

            return (
                <div
                  key={f.title}
                  className="flex flex-col items-center text-center rounded-2xl bg-white p-4 sm:p-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card border-2 border-green-500 group"
                >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-50/50 border border-blue-50 text-[#021833] transition-colors duration-300 group-hover:bg-blue-50">
                  <f.icon className="h-5 w-5 sm:h-6 sm:w-6 text-navy" strokeWidth={1.75} />
                </div>
                <h3 className={`mt-4 text-[13px] font-bold leading-tight ${headingColor}`}>{f.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-black font-medium">{f.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Highlight bar */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 gap-6 rounded-3xl bg-[#021833] px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-8">
          {highlightBar.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center lg:items-start gap-4 ${index !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''}`}
            >
              <item.icon className="h-8 w-8 text-teal shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col text-left">
                <h4 className="text-[14px] font-bold text-white leading-tight">{item.title}</h4>
                <p className="mt-1 text-[12px] leading-relaxed text-white/70 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
