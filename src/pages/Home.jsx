import ScrollReveal from '../components/ScrollReveal';
import Hero from '../components/Hero';
import Features from '../components/Features';
import UserRoles from '../components/UserRoles';
import Newsletter from '../components/Newsletter';
import Solutions from '../components/Solutions';
import About from '../components/About';

export default function Home() {
  return (
    <>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      <ScrollReveal>
        <UserRoles />
      </ScrollReveal>
      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>
      <ScrollReveal>
        <Solutions />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
    </>
  );
}
