import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import UserRoles from './UserRoles'
import MiddleBanner from './MiddleBanner'
import Solutions from './Solutions'
import About from './About'
import Newsletter from './Newsletter'
import Footer from './Footer'

export default function BriamsHealthLanding() {
  return (
    <div className="min-h-screen bg-white font-sans text-navy antialiased">
      <Navbar />
      <Hero />
      <Features />
      <UserRoles />
      <MiddleBanner />
      <Solutions />
      <About />
      <Newsletter />
      <Footer />
    </div>
  )
}
