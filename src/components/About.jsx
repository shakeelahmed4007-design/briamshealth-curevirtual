import { whyChooseUs } from '../data/whyChooseUs'
import doctorImg from '../assets/1223.PNG'

export default function About() {
  return (
    <section id="about" className="bg-[#f8fcfb] py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[4fr_6fr]">

          {/* Left Box: About BriamsHealth */}
          <div className="relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white pt-8 px-8 sm:p-12 pb-0 sm:pb-12 shadow-sm border border-gray-100 sm:min-h-[500px]">
            <div className="relative z-10 w-full sm:w-[50%] lg:w-[55%] pb-6 sm:pb-0">
              <h2 className="text-[28px] font-bold text-[#021833] tracking-tight">About BriamsHealth</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-[#021833]/80 font-medium">
                We are a digital health company passionate about making healthcare accessible, affordable, and effective, through technology.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-[17px] font-bold text-[#021833]">Our Mission</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#021833]/70 font-medium pr-4">
                    To connect people to quality healthcare through innovative digital solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#021833]">Our Vision</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#021833]/70 font-medium pr-4">
                    A world where everyone has easy access to quality healthcare.
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="relative sm:absolute sm:bottom-0 sm:right-0 z-0 w-[80%] mx-auto sm:mx-0 sm:w-[50%] lg:w-[45%] flex items-end justify-center sm:justify-end pointer-events-none mt-auto">
              <img
                src={doctorImg}
                alt="Doctor"
                className="w-full h-auto object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right Box: Why Choose BriamsHealth? */}
          <div className="flex flex-col rounded-[2.5rem] bg-white p-8 sm:p-12 shadow-sm border border-gray-100">
            <h2 className="text-[28px] font-bold text-[#021833] tracking-tight">
              Why Choose <span className="text-teal">BriamsHealth?</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200">
                    <item.icon className="h-5 w-5 text-gray-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#021833]">{item.title}</h4>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-[#021833]/70 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
