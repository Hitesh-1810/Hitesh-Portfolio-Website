import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { CanvasScroll } from './components/sections/CanvasScroll';
import { About } from './components/sections/About';
import { Capabilities } from './components/sections/Capabilities';
import { Projects } from './components/sections/Projects';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { Education } from './components/sections/Education';
import { Research } from './components/sections/Research';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);

  // Custom Cursor Logic
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || 'ontouchstart' in window) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Interactive elements hover state
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    
    const onEnter = () => {
      gsap.to(cursor, { scale: 1.5, backgroundColor: 'transparent', border: '1px solid white', duration: 0.2 });
    };
    
    const onLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'white', border: 'none', duration: 0.2 });
    };

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div className="bg-deepBlack min-h-screen text-white font-sans selection:bg-accent selection:text-white cursor-none">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      <Navigation />
      <main>
        <Hero />
        <CanvasScroll />
        <About />
        <Capabilities />
        <ExperienceTimeline />
        <Education />
        <Projects />
        <Research />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
