import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FloatingCodeSnippets from './components/FloatingCodeSnippets';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Parallax effect for sections
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App relative bg-black text-white overflow-x-hidden">
      {/* Floating code snippets background */}
      <FloatingCodeSnippets />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-black border-t border-cyan-400/20 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">
              Lovely Ramchandani
            </div>
            <p className="text-white/60 mb-6">
              Data Scientist | Machine Learning Engineer | AI Researcher
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="mailto:lovelynarenderramchandani@gmail.com" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                Email
              </a>
              <a href="https://linkedin.com/in/LovelyNarendraRamchandani" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/LovelyRamchandani" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                GitHub
              </a>
            </div>
            <div className="text-white/40 text-sm">
              © 2025 Lovely Ramchandani. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
