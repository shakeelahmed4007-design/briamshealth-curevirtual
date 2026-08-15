import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If element is visible, set state and unobserve
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </div>
  );
}
