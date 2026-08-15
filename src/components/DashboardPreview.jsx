import { Stethoscope, Activity, Bell, Video, ChevronRight } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Floating widget: doctor availability */}
      <div className="absolute -left-4 top-6 z-20 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card animate-[float_6s_ease-in-out_infinite]">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
          <Stethoscope className="h-5 w-5 text-teal-700" />
        </div>
        <div>
          <p className="text-xs font-semibold text-navy">Dr. Amara Boateng</p>
          <p className="flex items-center gap-1 text-[11px] text-teal-700">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Online now
          </p>
        </div>
      </div>

      {/* Floating widget: vitals */}
      <div className="absolute -right-3 bottom-24 z-20 hidden sm:block rounded-2xl bg-white px-4 py-3 shadow-card animate-[float_7s_ease-in-out_infinite_0.5s]">
        <div className="flex items-center gap-2 text-navy">
          <Activity className="h-4 w-4 text-sky" />
          <p className="text-xs font-semibold">Heart Rate</p>
        </div>
        <p className="mt-1 text-xl font-bold text-navy">
          78 <span className="text-xs font-medium text-navy/50">bpm</span>
        </p>
      </div>

      {/* Main card */}
      <div className="relative z-10 rounded-3xl bg-gradient-to-br from-navy to-deepbg p-6 shadow-glow sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          </div>
          <Bell className="h-4 w-4 text-white/50" />
        </div>

        <p className="mt-5 text-xs font-medium uppercase tracking-wider text-sky/80">
          Today's Consultations
        </p>

        <div className="mt-4 space-y-3">
          {[
            { name: 'Kwame Mensah', time: '10:30 AM', tag: 'Follow-up', color: 'bg-teal' },
            { name: 'Efua Owusu', time: '11:15 AM', tag: 'New Patient', color: 'bg-sky' },
            { name: 'James Appiah', time: '1:00 PM', tag: 'Lab Review', color: 'bg-amber-400' },
          ].map((appt) => (
            <div
              key={appt.name}
              className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 backdrop-blur-sm border border-white/10 transition-colors hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${appt.color}`} />
                <div>
                  <p className="text-sm font-semibold text-white">{appt.name}</p>
                  <p className="text-[11px] text-white/50">{appt.tag}</p>
                </div>
              </div>
              <p className="text-xs font-medium text-white/70">{appt.time}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-teal/15 px-4 py-3 border border-teal/30">
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4 text-teal" />
            <p className="text-xs font-semibold text-white">Join video call</p>
          </div>
          <ChevronRight className="h-4 w-4 text-teal" />
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute -bottom-8 -right-8 -z-10 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
      <div className="absolute -top-8 -left-8 -z-10 h-40 w-40 rounded-full bg-sky/20 blur-3xl" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
