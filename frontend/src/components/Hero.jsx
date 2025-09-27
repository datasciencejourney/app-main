import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../mock';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Digital rain effect
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    
    const matrix = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00FFD1';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Digital Rain Background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated intro text */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
            {portfolioData.about.intro}
          </p>
          
          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {portfolioData.about.highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="text-cyan-400 text-sm font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Name with glowing effect - positioned closer to button */}
        <div className="mb-8">
          <h1 
            ref={nameRef}
            className="text-6xl md:text-8xl font-bold text-white mb-6 animate-pulse"
            style={{
              textShadow: '0 0 20px rgba(0, 255, 209, 0.5), 0 0 40px rgba(0, 255, 209, 0.3), 0 0 60px rgba(0, 255, 209, 0.2)'
            }}
          >
            {portfolioData.personal.name}
          </h1>
        </div>
        
        {/* CTA Button - Made more prominent */}
        <div className="mb-16">
          <button 
            onClick={scrollToAbout}
            className="bg-cyan-400 hover:bg-white text-black px-10 py-5 text-xl font-bold transition-all duration-400 transform hover:scale-110 hover:shadow-2xl"
            style={{
              boxShadow: '0 0 40px rgba(0, 255, 209, 0.5), 0 0 80px rgba(0, 255, 209, 0.3)'
            }}
          >
            Explore My Work
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400 w-8 h-8" />
        </div>
      </div>
      
      {/* Side decorative elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero;