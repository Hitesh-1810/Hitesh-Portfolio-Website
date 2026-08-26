import React from 'react';

const education = [
  {
    institution: 'Guru Gobind Singh College of Engineering and Research Center',
    location: 'Nashik',
    degree: 'B.E. in Artificial Intelligence & Data Science',
    period: '2022 – 2026',
    grade: '8.12 CGPA',
    honors: 'First Class with Distinction'
  },
  {
    institution: 'Kai Sau G.F. Patil Junior College',
    location: 'Shahada',
    degree: 'HSC (Class 12), Science',
    period: '2021 – 2022',
    grade: '78.50%',
    honors: 'First Class'
  },
  {
    institution: 'Sheth V.K. Shah Vidyamandir',
    location: 'Shahada',
    degree: 'SSC (Class 10)',
    period: '2019 – 2020',
    grade: '82.60%',
    honors: 'First Class'
  }
];

export function Education() {
  return (
    <section id="education" className="py-16 md:py-32 bg-deepBlack text-white border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-10 md:mb-20">
          <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase font-bold text-accent mb-4">Education</h2>
          <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] text-white">
            Academic Background.
          </h3>
        </div>

        <div className="flex flex-col">
          {education.map((item, index) => (
            <div key={index} className="group relative border-t border-white/10 py-16 flex flex-col md:flex-row gap-6 md:gap-16">
              
              {/* Left Column: Date & Grade */}
              <div className="md:w-1/3 lg:w-1/4 shrink-0 mt-2">
                <div className="text-sm font-medium tracking-widest uppercase text-accent mb-2">{item.period}</div>
                <div className="text-xs text-white/50 uppercase tracking-[0.2em] mb-4">{item.location}</div>
                <div className="text-lg font-serif text-white">{item.grade}</div>
                {item.honors && (
                  <div className="text-xs font-medium text-accent/90 mt-1.5 uppercase tracking-wider">{item.honors}</div>
                )}
              </div>
              
              {/* Right Column: Details */}
              <div className="md:w-2/3 lg:w-3/4 max-w-4xl">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.institution}
                </h4>
                <div className="text-xl text-white/80 font-light tracking-wide">{item.degree}</div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
