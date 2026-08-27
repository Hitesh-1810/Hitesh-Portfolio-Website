import React, { useState } from 'react';

const skillCategories = [
  { label: 'Languages', skills: 'Python, C++ (Basic)' },
  { label: 'AI/ML Concepts', skills: 'Machine Learning, Deep Learning, NLP, Computer Vision, Recommendation Systems, Statistics' },
  { label: 'ML/DL Techniques', skills: 'Random Forest, CNN, LSTM, Cosine Similarity, Transfer Learning' },
  { label: 'Libraries/Frameworks', skills: 'NumPy, Pandas, Scikit-learn, TensorFlow/Keras, OpenCV, Streamlit' },
  { label: 'Data Visualization', skills: 'Matplotlib, Seaborn, Plotly' },
  { label: 'Databases', skills: 'MySQL (Basic), MongoDB (Basic)' },
  { label: 'Web Technologies', skills: 'HTML, CSS' },
  { label: 'Tools/Platforms', skills: 'Excel, Jupyter Notebook, Google Colab, VS Code, Kaggle, GitHub' }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-12 md:py-20 bg-deepBlack text-white border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="w-full">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase font-bold text-accent mb-4">SKILLS</h2>
            <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] text-white">
              Technical Expertise.
            </h3>
          </div>
          
          <ul className="space-y-5 text-base md:text-lg lg:text-xl font-light">
            {skillCategories.map((cat, idx) => (
              <li key={idx} className="relative pl-6 leading-relaxed text-justify">
                <span className="absolute left-0 top-[0.6rem] md:top-[0.7rem] w-1.5 h-1.5 bg-accent rounded-full"></span>
                <span className="font-semibold text-white mr-2">{cat.label}:</span>
                <span className="text-white/90 font-light">{cat.skills}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
