import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  return (
    <ScrollReveal>
      <div className="py-20 sm:py-28 text-center min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Contact Us</h2>
        <p className="mt-4 text-base text-navy/65">
          Email us at <a href="mailto:info@briamshealth.com" className="text-teal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm">info@briamshealth.com</a> or call <a href="tel:+233539246331" className="text-teal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm">+233 539246331</a>.
        </p>
      </div>
    </ScrollReveal>
  );
}
