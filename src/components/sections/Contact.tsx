import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-deepBlack text-white flex flex-col">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center w-full">
        <div className="mb-12 md:mb-24">
          <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase font-bold text-accent mb-4">CONTACT</h2>
          <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] text-white">
            Ready to build <span className="text-accent italic">intelligent systems?</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16 border-t border-white/10 pt-16 mt-auto">
          <div>
            <p className="text-lg text-white/70 max-w-md leading-relaxed mb-8">
              I am currently open to new opportunities, collaborations, and conversations about AI, Data Science, and Software Engineering.
            </p>
            <a 
              href="mailto:hiteshgirase03@gmail.com"
              className="inline-flex items-center gap-4 text-2xl md:text-4xl font-serif hover:text-accent transition-colors duration-300"
            >
              Let's Talk
              <span className="text-accent text-3xl">→</span>
            </a>
          </div>

          <div className="flex flex-col justify-end w-full lg:w-4/5 ml-auto">
            <div className="flex flex-col">
              <a href="mailto:hiteshgirase03@gmail.com" className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 py-6 hover:border-accent transition-colors gap-4 md:gap-0">
                <div className="flex items-center gap-4 text-white/90 group-hover:text-accent transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span className="tracking-widest uppercase text-xs font-semibold">Email</span>
                </div>
                <span className="text-white/90 text-lg group-hover:text-white transition-colors">hiteshgirase03@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/hitesh-girase-b39224289" className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 py-6 hover:border-accent transition-colors gap-4 md:gap-0">
                <div className="flex items-center gap-4 text-white/90 group-hover:text-accent transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  <span className="tracking-widest uppercase text-xs font-semibold">LinkedIn</span>
                </div>
                <span className="text-white/90 text-lg group-hover:text-white transition-colors">@hitesh-girase-b39224289</span>
              </a>

              <a href="tel:+919420684464" className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 py-6 hover:border-accent transition-colors gap-4 md:gap-0">
                <div className="flex items-center gap-4 text-white/90 group-hover:text-accent transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span className="tracking-widest uppercase text-xs font-semibold">Phone</span>
                </div>
                <span className="text-white/90 text-lg group-hover:text-white transition-colors">+91 9420684464</span>
              </a>

              <a href="https://github.com/hitesh-1810" className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 py-6 hover:border-accent transition-colors gap-4 md:gap-0">
                <div className="flex items-center gap-4 text-white/90 group-hover:text-accent transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <span className="tracking-widest uppercase text-xs font-semibold">GitHub</span>
                </div>
                <span className="text-white/90 text-lg group-hover:text-white transition-colors">@hitesh-1810</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
