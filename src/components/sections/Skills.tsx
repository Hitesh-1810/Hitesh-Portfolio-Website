import React from 'react';
import { Section } from '../ui/Section';
import Magnetic from '../ui/Magnetic';

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++ (Basic)"]
    },
    {
      title: "AI/ML Concepts",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Recommendation Systems", "Statistics"]
    },
    {
      title: "ML/DL Techniques",
      skills: ["Random Forest", "CNN", "LSTM", "Cosine Similarity", "Transfer Learning"]
    },
    {
      title: "Libraries/Frameworks",
      skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow/Keras", "OpenCV", "Streamlit"]
    },
    {
      title: "Data Visualization",
      skills: ["Matplotlib", "Seaborn", "Plotly"]
    },
    {
      title: "Databases",
      skills: ["MySQL (Basic)", "MongoDB (Basic)"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS"]
    },
    {
      title: "Tools/Platforms",
      skills: ["Excel", "Jupyter Notebook", "Google Colab", "VS Code", "Kaggle", "GitHub"]
    }
  ];

  return (
    <Section id="skills" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-accent tracking-wider uppercase mb-4">Technical Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h3>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-16 border-b border-white/10 pb-12 last:border-0">
              <h4 className="text-xl text-textMuted font-medium min-w-[250px] shrink-0">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => (
                  <Magnetic key={sIdx}>
                    <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default backdrop-blur-sm shadow-sm">
                      <span className="font-medium tracking-wide">{skill}</span>
                    </div>
                  </Magnetic>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
