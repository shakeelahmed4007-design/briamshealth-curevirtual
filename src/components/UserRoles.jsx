import { ArrowRight } from 'lucide-react'
import { roles } from '../data/roles'

export default function UserRoles() {
  return (
    <section id="roles" className="bg-white pt-12 sm:pt-16 pb-2 sm:pb-4">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#021833] sm:text-4xl">
            How will you use <span className="text-teal">CureVirtual?</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 sm:mt-14 grid max-w-5xl grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
          {roles.map((role) => {
            const isTeal = role.colorTheme === 'teal'
            const isPurple = role.colorTheme === 'purple'
            const isNavy = role.colorTheme === 'navy'

            return (
              <div
                key={role.title}
                className="group flex w-full flex-col items-center text-center rounded-3xl bg-[#f8fcfb] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card border-2 border-green-500"
              >
                <div className="flex h-16 w-16 items-center justify-center">
                  <role.icon
                    className={`h-12 w-12 ${
                      isTeal ? 'text-teal' : isPurple ? 'text-purple-600' : 'text-blue-600'
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className={`mt-6 text-xl font-bold ${
                    isTeal ? 'text-teal' : isPurple ? 'text-purple-600' : 'text-blue-600'
                  }`}
                >
                  {role.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-black font-medium">
                  {role.desc}
                </p>
                <a
                  href="#solutions"
                  className={`mt-8 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border bg-white px-6 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isTeal
                      ? 'border-teal/30 text-teal hover:bg-teal-50 focus-visible:ring-teal'
                      : isPurple
                      ? 'border-purple-200 text-purple-600 hover:bg-purple-50 focus-visible:ring-purple-600'
                      : 'border-blue-200 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-600'
                  }`}
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
