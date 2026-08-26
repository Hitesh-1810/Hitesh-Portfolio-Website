import React from 'react';

const publications = [
  {
    title: 'IntelliFarm: A Unified AI-Driven Decision Support System for Crop Planning, Disease Detection, and Market Price Forecasting',
    journal: 'IJIRMPS (Vol. 14, Issue 3, E-ISSN: 2349-7300)',
    date: 'May-June 2026',
    driveLink: 'https://drive.google.com/file/d/1KBknVglr3QWKWyGPzQiK1eamFzEJjHfS/view?usp=drive_link',
    pdfLink: '/Intellifarm Paper.pdf', 
    description: 'A comprehensive study on the application of deep learning (DenseNet) and machine learning (Random Forest, LSTM) in precision agriculture. This paper proposes an integrated system that empowers farmers with data-driven crop management, accurate disease identification, and market trend forecasting to maximize yield and profitability.'
  },
  {
    title: 'Content-Based Movie Recommendation System',
    journal: 'IJPREMS (Vol. 05, Issue 04, e-ISSN: 2583-1062)',
    date: 'April 2025',
    driveLink: 'https://drive.google.com/file/d/1sreuQiMkKGL7bzrvlt6FLyj0sekrwxwA/view?usp=drive_link',
    pdfLink: '/content based paper.pdf',
    description: 'Evaluates the efficiency of content-based recommendation techniques using cosine similarity and natural language processing algorithms. The research focuses on extracting high-value features from textual metadata to solve the cold-start problem and deliver highly personalized cinematic experiences.'
  }
];

export function Research() {
  return (
    <section id="research" className="py-16 md:py-32 bg-deepBlack text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-24">
          <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase font-bold text-accent mb-4">Research</h2>
          <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] text-white">
            Publications.
          </h3>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-2xl p-8 md:p-10 border border-white/10 flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-accent font-serif text-xl">{pub.date}</span>
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full"></span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {pub.journal}
                  </span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-serif text-white leading-snug mb-4 group-hover:text-accent transition-colors duration-300">
                  {pub.title}
                </h4>
                
                <p className="text-base text-white/60 leading-relaxed text-justify max-w-5xl">
                  {pub.description}
                </p>
              </div>

              <div className="md:shrink-0 mt-6 md:mt-0 self-start md:self-auto flex flex-row md:flex-col gap-4">
                <a 
                  href={pub.pdfLink} 
                  download
                  title="Download PDF"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-deepBlack transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
                <a 
                  href={pub.driveLink} 
                  title="View on Google Drive"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-deepBlack transition-all duration-300 hover:scale-110"
                >
                  <span className="text-xl md:text-2xl font-light transform transition-transform duration-300 hover:rotate-45">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
