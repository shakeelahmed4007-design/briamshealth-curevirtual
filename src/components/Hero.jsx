import { Sparkles, ArrowRight, Calendar, Pill, FolderOpen, ChevronRight } from 'lucide-react'
import heroBg from '../assets/hero-bg.jpg'
import ganaImg from '../assets/Gana.png'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white min-h-[calc(100vh-80px)] flex items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-gray-50" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:py-0">
        
        {/* Left Content */}
        <div className="relative z-10">
          <div 
            className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal-50 px-4 py-1.5 shadow-sm animate-fade-slide-down" 
            style={{ animationDelay: '100ms' }}
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal text-white">
              <Sparkles className="h-3 w-3" />
            </div>
            <span className="text-[11px] font-bold tracking-[0.08em] text-teal-700">
              DIGITAL HEALTHCARE SOLUTIONS
            </span>
          </div>

          <h1 className="mt-8 text-[3.2rem] font-bold leading-[1.05] tracking-tight text-[#021833] sm:text-6xl lg:text-[4.2rem]">
            <span className="block animate-fade-slide-up" style={{ animationDelay: '200ms' }}>Healthcare.</span>
            <span className="block animate-fade-slide-up" style={{ animationDelay: '300ms' }}>Connected.</span>
            <span className="block text-teal animate-fade-slide-up" style={{ animationDelay: '400ms' }}>Anywhere.</span>
          </h1>

          <p 
            className="mt-7 max-w-lg text-[17px] leading-relaxed text-black font-medium animate-fade-in" 
            style={{ animationDelay: '500ms' }}
          >
            BriamsHealth is building digital healthcare solutions that connect patients, healthcare professionals, and facilities through secure, accessible technology.
          </p>

          <div 
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-slide-up" 
            style={{ animationDelay: '600ms' }}
          >
            <a
              href="#curevirtual"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#021833] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-navy-800 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(2,24,51,0.2)] min-h-[44px]"
            >
              Explore CureVirtual <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-teal px-8 py-3.5 text-[15px] font-semibold text-teal transition-all duration-300 hover:bg-teal hover:text-white min-h-[44px]"
            >
              Partner With Us
            </a>
          </div>

          <div 
            className="mt-12 flex items-center gap-3 animate-fade-slide-up" 
            style={{ animationDelay: '700ms' }}
          >
            <img src={ganaImg} alt="Ghana" className="h-[18px] w-auto object-contain" />
            <p className="text-[15px] font-semibold text-[#021833]">
              Launching Soon in Ghana
            </p>
            <img src={ganaImg} alt="Ghana" className="h-[18px] w-auto object-contain" />
          </div>
        </div>

        {/* Right Content / Image with Floating Cards */}
        <div className="relative w-full h-[400px] lg:h-[75vh] lg:max-h-[600px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
          
          {/* Main Background Image - masked smoothly into white background */}
          <div 
            className="absolute right-0 top-0 h-full w-full max-w-[600px] overflow-hidden rounded-[40px] opacity-90 lg:opacity-100 animate-fade-scale" 
            style={{ animationDelay: '400ms' }}
          >
             {/* Gradient fade on left to blend into the white section */}
             <div className="absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-white to-transparent" />
             <div className="absolute inset-x-0 bottom-0 z-10 h-1/4 bg-gradient-to-t from-white to-transparent" />
             
             <img 
               src={heroBg} 
               alt="Telehealth Consultation" 
               className="h-full w-full object-cover object-center" 
             />
          </div>

          {/* Floating Cards Container */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-20 w-[280px]">
            
            {/* Card 1 */}
            <div className="animate-fade-slide-right" style={{ animationDelay: '800ms' }}>
              <div className="animate-float-1">
                <div className="rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform translate-x-4 lg:translate-x-16 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-gray-100">
                      <img src="https://i.pravatar.cc/100?img=47" alt="Doctor avatar" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Upcoming Appointment</p>
                      <p className="text-[15px] font-bold text-[#021833]">Dr. Ama Serewa</p>
                      <div className="mt-1 flex items-center justify-between text-xs font-medium text-gray-500">
                        Tomorrow, 10:00 AM <Calendar className="h-3 w-3 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="animate-fade-slide-right" style={{ animationDelay: '1000ms' }}>
              <div className="animate-float-2">
                <div className="rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform translate-x-12 lg:translate-x-32 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal text-white">
                      <Pill className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Prescription Ready</p>
                      <p className="text-[15px] font-bold text-[#021833] leading-tight">2 medications</p>
                      <a href="#" className="mt-1 inline-flex items-center gap-1 text-[12px] font-bold text-teal hover:underline">
                        View details <ChevronRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="animate-fade-slide-right" style={{ animationDelay: '1200ms' }}>
              <div className="animate-float-3">
                <div className="rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform translate-x-8 lg:translate-x-20 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <FolderOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Health Record</p>
                      <p className="text-[15px] font-bold text-[#021833] leading-tight">Updated</p>
                      <a href="#" className="mt-1 inline-flex items-center gap-1 text-[12px] font-bold text-teal hover:underline">
                        View record <ChevronRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
