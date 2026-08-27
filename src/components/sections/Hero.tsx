import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../ui/Button';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center pt-24 md:pt-32 bg-deepBlack overflow-hidden">
      {/* Subtle graphic elements */}
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-white/5 hidden lg:block" />
      <div className="absolute top-[30%] left-0 w-full h-[1px] bg-white/5 hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 lg:col-span-7 pt-2 lg:pt-0">
          <div className="hero-anim flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-white/90">Open to opportunities</span>
          </div>
          
          <h1 className="hero-anim text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-serif mb-8 text-white">
            I build AI systems that turn data into <span className="text-accent italic">useful decisions.</span>
          </h1>
          
          <div className="hero-anim max-w-2xl mb-12 flex flex-col gap-4">
            <div className="border-l-2 border-accent pl-4">
              <strong className="text-white font-medium text-xl md:text-2xl block mb-1">Hitesh Sanjaysing Girase</strong>
              <span className="text-accent/90 text-lg md:text-xl">B.E. Artificial Intelligence & Data Science — 2026 Graduate</span>
            </div>
            <p className="text-lg text-textMuted leading-relaxed max-w-xl mt-2">
              Self-motivated and quick learner with a strong analytical mindset and keen interest in Artificial Intelligence and Data Science.
            </p>
          </div>
          
          <div className="hero-anim flex flex-wrap items-center gap-4 mt-8">
            <a href="#work" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white text-black hover:bg-white/90 text-sm font-semibold tracking-widest uppercase px-8">
                View My Work
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-black text-sm font-semibold tracking-widest uppercase px-8">
                Let's Connect
              </Button>
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 lg:order-2 lg:col-span-5 relative mt-8 lg:mt-0 mb-8 lg:mb-0">
          <div className="hero-anim relative w-full max-w-[280px] sm:max-w-[340px] mx-auto lg:ml-auto">
            {/* Subtle atmospheric glow behind */}
            <div className="absolute inset-0 bg-accent/10 blur-[60px] rounded-full translate-y-8" />
            
            {/* Clean, minimalist image container */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-deepBlack">
              <img 
                src="/hitesh_portfolio_img.jpeg" 
                alt="Hitesh Girase"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Minimalist structural accents (framing lines) */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-b border-l border-white/5 rounded-bl-3xl z-0" />
            <div className="absolute -top-4 -right-4 w-1/2 h-1/2 border-t border-r border-accent/20 rounded-tr-2xl z-0" />
          </div>
        </div>

      </div>
    </section>
  );
}
