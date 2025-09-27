import React from 'react';
import { portfolioData } from '../mock';

const Skills = () => {
  const skillCategories = Object.entries(portfolioData.skills);

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive expertise across the data science and machine learning ecosystem
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(([category, skills], categoryIndex) => (
            <div 
              key={category}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:border-cyan-400/40"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 pb-3 border-b border-cyan-400/20">
                {category}
              </h3>
              
              <div className="space-y-3">
                {skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between group cursor-pointer"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="text-white/90 group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                    <div className="w-2 h-2 bg-cyan-400/60 rounded-full group-hover:bg-cyan-400 transition-colors duration-200"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative elements */}
        <div className="mt-16 flex justify-center space-x-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;