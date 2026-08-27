import React from 'react';

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-charcoal text-white border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Statement */}
          <div className="lg:w-5/12">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase font-bold text-accent mb-4">ABOUT</h2>
              <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] text-white">
                Career Summary.
              </h3>
            </div>
          </div>

          {/* Right: Intro & Metrics */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <div className="space-y-6 mb-16 text-justify">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                I am a self-motivated and quick learner with a strong analytical mindset and keen interest in Artificial Intelligence and Data Science. Familiar with Python, SQL, Machine Learning, Deep Learning, and web technologies.
              </p>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                I have hands-on experience through academic, internship, workshop, and competition-based projects. I am highly interested in problem-solving and applying data-driven approaches to develop practical and innovative solutions. When I'm not coding, you can find me enjoying my hobbies: Cycling, Badminton, Cricket, and Reading Books.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
