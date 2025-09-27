import React from 'react';
import { portfolioData } from '../mock';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="w-6 h-6" />;
      case 'education':
        return <GraduationCap className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'experience':
        return 'from-green-500/20 to-emerald-500/20';
      case 'education':
        return 'from-blue-500/20 to-indigo-500/20';
      default:
        return 'from-purple-500/20 to-pink-500/20';
    }
  };

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-cyan-400/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-cyan-400/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-400/5 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Professional journey and academic background in data science and machine learning
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {portfolioData.experience.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-black z-10"></div>
                
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-gradient-to-br ${getTypeColor(item.type)} backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:border-cyan-400/40`}>
                    {/* Type indicator */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-cyan-400">{getIcon(item.type)}</div>
                      <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {item.type}
                      </span>
                    </div>
                    
                    {/* Title and Company */}
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">{item.company}</span>
                    </div>
                    
                    {/* Duration */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-4 h-4 text-white/60" />
                      <span className="text-white/60 text-sm">{item.duration}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/80 mb-4 leading-relaxed">{item.description}</p>
                    
                    {/* Responsibilities/Achievements */}
                    {item.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">
                          {item.type === 'experience' ? 'Key Achievements:' : 'Key Areas:'}
                        </h4>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-white/70 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Technologies */}
                    {item.technologies.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="bg-white/5 text-white/80 px-2 py-1 rounded text-xs font-medium border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;