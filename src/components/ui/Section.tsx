import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from './Button';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fullHeight?: boolean;
}

export function Section({ children, className, fullHeight = false, ...props }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative w-full px-6 md:px-12 lg:px-24 py-20 scroll-mt-24",
        fullHeight ? "min-h-screen flex flex-col justify-center" : "",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
