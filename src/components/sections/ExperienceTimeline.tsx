import React from 'react';

const experience = [
  {
    company: 'NetLeap IT Training & Solutions',
    role: 'Data Science Internship',
    period: 'Dec 2024 – Feb 2025',
    location: 'Nashik',
    points: [
      'Developed a robust content-based movie recommendation system, leveraging advanced similarity measures and comprehensive feature engineering to deliver highly personalized user suggestions.',
      'Engineered a machine learning-driven crop recommendation system, analyzing complex agricultural datasets to optimize yields and support intelligent farming decisions.',
      'Mastered the end-to-end data science lifecycle—from deep data preprocessing and exploratory analysis to model training, evaluation, and interactive deployment using Python, Streamlit, and Jupyter.'
    ]
  },
  {
    company: 'AICTE-EduSkills',
    role: 'Virtual Internships',
    period: 'Sep 2022 - July 2026',
    location: 'Remote',
    points: [
      'Google AI-ML Virtual Internship: Explored advanced machine learning concepts, neural network architectures, and deployed intelligent models utilizing Google Cloud platforms.',
      'AWS Data Engineering Virtual Internship: Gained hands-on experience designing scalable data pipelines, enterprise data warehousing, and optimizing complex ETL processes on AWS.',
      'Python Full-Stack Developer Virtual Internship: Designed and developed end-to-end web applications, integrating modern Python backend frameworks with responsive frontend technologies.',
      'Advanced Robotics Using AI and IoT Virtual Internship: Interfaced intelligent algorithms with IoT hardware to prototype automated, responsive, and data-driven robotic systems.'
    ]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-32 bg-charcoal text-white border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-10 md:mb-20">
          <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase font-bold text-accent mb-4">Experience</h2>
          <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] text-white">
            Professional Timeline.
          </h3>
        </div>

        <div className="flex flex-col border-l border-white/10 ml-2 md:ml-4 space-y-10 md:space-y-20 py-4">
          {experience.map((item, index) => (
            <div key={index} className="group relative pl-6 sm:pl-8 md:pl-16">
              
              {/* Timeline line dot */}
              <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 bg-white/20 rounded-full group-hover:bg-accent group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(255,100,50,0.5)] transition-all duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-3">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white group-hover:text-accent transition-colors duration-300">
                  {item.company}
                </h4>
                <div className="flex items-center gap-3 text-xs tracking-widest uppercase md:mb-1">
                  <span className="text-accent font-semibold">{item.period}</span>
                  <span className="text-white/20">|</span>
                  <span className="text-white/90 font-medium">{item.location}</span>
                </div>
              </div>
              
              <div className="text-xl text-white/80 mb-8 font-light tracking-wide">{item.role}</div>
              
              <ul className="space-y-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0"></span>
                    <span className="text-base md:text-lg text-white/90 leading-relaxed font-light text-justify">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
