import React from 'react';

const certifications = [
  {
    title: 'Data Science Internship Certificate',
    provider: 'NetLeap IT Training & Solutions',
    date: '2025',
    link: 'https://drive.google.com/file/d/1imSLs0QOdzdwZRbbljRpyAahHVSCGy4g/view?usp=sharing'
  },
  {
    title: 'Google AI-ML Virtual Internship Certificate',
    provider: 'AICTE EduSkills',
    date: '2026',
    link: 'https://drive.google.com/file/d/1I632IBITHADGqZX873oUI47DDQ0rDS6D/view?usp=sharing'
  },
  {
    title: 'AWS Academy Data Engineering Virtual Internship Certificate',
    provider: 'AICTE EduSkills',
    date: '2026',
    link: 'https://drive.google.com/file/d/14mLn3GJQcSo0FvKITXVDq17EAvApGECZ/view?usp=sharing'
  },
  {
    title: 'Python Full-Stack Developer Virtual Internship Certificate',
    provider: 'AICTE EduSkills',
    date: '2026',
    link: 'https://drive.google.com/file/d/1e-QfZ6cybwajqVPbJ2efpEzD2vRDUPm7/view?usp=sharing'
  },
  {
    title: 'Advanced Robotics Using AI and IoT Virtual Internship Certificate',
    provider: 'AICTE EduSkills',
    date: '2026',
    link: 'https://drive.google.com/file/d/1oRWDh2y5v4xHABCp_QRpQ1kh-E5HZUn6/view?usp=sharing'
  },
  {
    title: 'Machine Learning Using Python Certificate',
    provider: 'Simplilearn',
    date: '2025',
    link: 'https://drive.google.com/file/d/1a9g-dK2xFFGgl6WdjVgZBViv7h9SOFGc/view?usp=sharing'
  },
  {
    title: 'Python Libraries for Data Science Certificate',
    provider: 'Simplilearn',
    date: '2025',
    link: 'https://drive.google.com/file/d/1raP-qSk0RzPDfpBHp5dMinLGQyPFmTfT/view?usp=sharing'
  },
  {
    title: 'Digital Application Fundamentals (STEM) Certificate',
    provider: 'FutureSkills Prime',
    date: '2026',
    link: 'https://drive.google.com/file/d/1-mCEHBtYg2ZY4ZQEBC_T6gm3GZmdngib/view?usp=sharing'
  },
  {
    title: 'Intellifarm Research Paper Certificate',
    provider: 'IJIRMPS',
    date: '2026',
    link: 'https://drive.google.com/file/d/1XvglcWL4159tHgNEPNqfzsm55FxUwI9Z/view?usp=drive_link'
  },
  {
    title: 'Movie Recommendation Research Paper Certificate',
    provider: 'IJPREMS',
    date: '2025',
    link: 'https://drive.google.com/file/d/1UFVcEova485lw7Ho1puXvVWKRwC-vOvv/view?usp=drive_link'
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-charcoal text-white border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase font-bold text-accent mb-4">Certifications</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif">
            Continuous Learning.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 border-t border-white/10 pt-16">
          {certifications.map((cert, index) => (
            <div key={index} className="group cursor-default relative">
              <div className="text-accent font-serif text-3xl mb-6">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <h4 className="text-xl font-medium leading-snug mb-3">
                {cert.title}
              </h4>
              <div className="text-sm font-medium tracking-widest uppercase text-white/50 mb-1">
                {cert.provider}
              </div>
              <div className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
                {cert.date}
              </div>
              <a 
                href={cert.link}
                className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-white hover:text-accent transition-colors"
              >
                View
                <span className="text-lg leading-none transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
