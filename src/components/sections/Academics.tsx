import React from 'react';
import { Section } from '../ui/Section';
import { BookOpen, Award } from 'lucide-react';

export function Academics() {
  return (
    <Section id="academics" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-accent tracking-wider uppercase mb-4">Research & Recognition</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Publications & Certifications</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-accent" />
              <h4 className="text-2xl font-bold">Publications</h4>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-8 group hover:border-white/20 transition-colors">
                <h5 className="text-lg font-bold mb-3 leading-snug group-hover:text-accent transition-colors">
                  “IntelliFarm: A Unified AI-Driven Decision Support System for Crop Planning, Disease Detection, and Market Price Forecasting”
                </h5>
                <p className="text-sm text-textMuted mb-4">
                  International Journal of Innovative Research in Engineering & Multidisciplinary Physical Sciences (IJIRMPS)
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs font-medium text-white/50 uppercase tracking-wider">
                  <span>Vol. 14, Issue 3, May–June 2026</span>
                  <span>E-ISSN: 2349-7300</span>
                </div>
              </div>

              <div className="glass-card p-8 group hover:border-white/20 transition-colors">
                <h5 className="text-lg font-bold mb-3 leading-snug group-hover:text-accent transition-colors">
                  “Content-Based Movie Recommendation System”
                </h5>
                <p className="text-sm text-textMuted mb-4">
                  International Journal of Progressive Research in Engineering Management and Science (IJPREMS)
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs font-medium text-white/50 uppercase tracking-wider">
                  <span>Vol. 05, Issue 04, April 2025</span>
                  <span>e-ISSN: 2583-1062</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-accent" />
              <h4 className="text-2xl font-bold">Certifications</h4>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Data Science Internship Certificate', org: 'NetLeap IT Training & Solutions, Nashik' },
                { name: 'Google AI-ML Virtual Internship Certificate', org: 'AICTE EduSkills' },
                { name: 'AWS Academy Data Engineering Virtual Internship Certificate', org: 'AICTE EduSkills' },
                { name: 'Python Full-Stack Developer Virtual Internship Certificate', org: 'AICTE EduSkills' },
                { name: 'Advanced Robotics Using AI and IoT Virtual Internship Certificate', org: 'AICTE EduSkills' },
                { name: 'Machine Learning Using Python Certificate', org: 'Simplilearn' },
                { name: 'Python Libraries for Data Science Certificate', org: 'Simplilearn' },
                { name: 'Digital Application Fundamentals (STEM) Certificate', org: 'FutureSkills Prime, NASSCOM IT-ITeS SSC' }
              ].map((cert, idx) => (
                <div key={idx} className="glass-card p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
                  <h6 className="font-bold text-sm mb-4 leading-tight">{cert.name}</h6>
                  <span className="text-xs text-accent uppercase tracking-wider font-medium">{cert.org}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
