import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 300;
const currentFrame = (index: number) => 
  `/frames/frame_${(index + 1).toString().padStart(6, '0')}.png`;

export function CanvasScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const dpr = window.devicePixelRatio || 1;
    const originalWidth = 1920;
    const originalHeight = 1080;

    canvas.width = originalWidth * dpr;
    canvas.height = originalHeight * dpr;
    canvas.style.width = `${originalWidth}px`;
    canvas.style.height = `${originalHeight}px`;

    context.scale(dpr, dpr);

    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      if (images[airpods.frame]) {
        context.clearRect(0, 0, originalWidth, originalHeight);
        context.drawImage(images[airpods.frame], 0, 0, originalWidth, originalHeight);
      }
    };

    if (!prefersReducedMotion) {
      const firstImg = new Image();
      firstImg.src = currentFrame(0);
      firstImg.onload = () => {
        images[0] = firstImg;
        render();

        let i = 1;
        const loadNextFrame = () => {
          if (i >= FRAME_COUNT) return;
          const img = new Image();
          img.src = currentFrame(i);
          images[i] = img;
          
          if (airpods.frame === i) render();
          
          i++;
          if (i % 5 === 0 && 'requestIdleCallback' in window) {
            window.requestIdleCallback(loadNextFrame);
          } else {
            setTimeout(loadNextFrame, 0);
          }
        };
        loadNextFrame();
      };
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=400%', 
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onLeave: () => {
            gsap.to(container, { autoAlpha: 0, duration: 0.5 });
          },
          onEnterBack: () => {
            gsap.to(container, { autoAlpha: 1, duration: 0.5 });
          }
        }
      });

      if (!prefersReducedMotion) {
        tl.to(airpods, {
          frame: FRAME_COUNT - 1,
          snap: 'frame',
          ease: 'none',
          onUpdate: render
        }, 0);
      }

      tl.to('.cine-text-1', { opacity: 1, y: 0, duration: 0.1 }, 0.1)
        .to('.cine-text-1', { opacity: 0, y: -50, duration: 0.1 }, 0.25)
        .to('.cine-text-2', { opacity: 1, y: 0, duration: 0.1 }, 0.35)
        .to('.cine-text-2', { opacity: 0, y: -50, duration: 0.1 }, 0.5)
        .to('.cine-text-3', { opacity: 1, y: 0, duration: 0.1 }, 0.6)
        .to('.cine-text-3', { opacity: 0, y: -50, duration: 0.1 }, 0.75)
        .to('.cine-text-4', { opacity: 1, y: 0, duration: 0.1 }, 0.85);
    }, containerRef);

    const handleResize = () => {
      const scale = Math.max(window.innerWidth / originalWidth, window.innerHeight / originalHeight);
      canvas.style.transform = `scale(${scale})`;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100svh] bg-deepMaroon overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute origin-center opacity-40 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center relative w-full h-full">
          <h2 className="cine-text-1 absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-serif text-white opacity-0 translate-y-12">
            "I DON'T JUST WORK WITH DATA."
          </h2>
          <h2 className="cine-text-2 absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-serif text-white opacity-0 translate-y-12">
            "I TURN DATA INTO INSIGHT."
          </h2>
          <h2 className="cine-text-3 absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-serif text-white opacity-0 translate-y-12">
            "I BUILD INTELLIGENT SYSTEMS."
          </h2>
          <div className="cine-text-4 absolute inset-0 flex flex-col items-center justify-center opacity-0 translate-y-12">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-2xl">
              HITESH GIRASE
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-8 md:w-16 h-[1px] bg-white/20"></div>
              <p className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-white/70 drop-shadow-md">
                AI & Data Science Engineer
              </p>
              <div className="w-8 md:w-16 h-[1px] bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
