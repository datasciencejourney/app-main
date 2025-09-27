import React, { useEffect, useState } from 'react';
import { codeSnippets } from '../mock';

const FloatingCodeSnippets = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const createSnippet = () => {
      const snippet = {
        id: Math.random(),
        code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        speed: 0.5 + Math.random() * 1,
        opacity: 0.7 + Math.random() * 0.3
      };
      
      setSnippets(prev => [...prev.slice(-4), snippet]);
    };

    const interval = setInterval(createSnippet, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animate = () => {
      setSnippets(prev => 
        prev.map(snippet => ({
          ...snippet,
          y: snippet.y - snippet.speed
        })).filter(snippet => snippet.y > -200)
      );
    };

    const animationFrame = setInterval(animate, 50);
    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="absolute text-xs font-mono text-cyan-400 whitespace-pre-line"
          style={{
            left: `${snippet.x}px`,
            top: `${snippet.y}px`,
            opacity: snippet.opacity,
            filter: 'blur(0.5px)',
            textShadow: '0 0 10px rgba(0, 255, 209, 0.5)'
          }}
        >
          {snippet.code}
        </div>
      ))}
    </div>
  );
};

export default FloatingCodeSnippets;