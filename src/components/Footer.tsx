import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/90">
        <div>
          <span className="font-bold text-textMain tracking-wide">Hitesh Sanjaysing Girase</span>
          <span className="mx-2 hidden md:inline">|</span>
          <span className="block md:inline mt-1 md:mt-0">AI & Data Science Engineer</span>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="hover:text-accent transition-colors">Home</a>
          <a href="#work" className="hover:text-accent transition-colors">Projects</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
        
        <div>
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
