import React from 'react';
import { portfolioData } from '../mock';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const categoryColors = {
    'AI/ML': 'from-purple-500/20 to-pink-500/20',
    'Data Analytics': 'from-blue-500/20 to-cyan-500/20',
    'Data Visualization': 'from-green-500/20 to-teal-500/20'
  };

  const categoryIcons = {
    'AI/ML': '🤖',
    'Data Analytics': '📊',
    'Data Visualization': '📈'
  };

  return (
    <section id="certifications" className="py-20 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(0, 255, 209, 0.1) 10px,
              rgba(0, 255, 209, 0.1) 20px
            )
          `
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-cyan-400">Certifications</span> & Credentials
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Professional certifications and continuous learning in data science and analytics
          </p>
        </div>
        
        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <div 
              key={index}
              className="group transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-br ${categoryColors[cert.category]} backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 h-full hover:border-cyan-400/40 transition-all duration-300`}>
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center space-x-2 bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                    <span>{categoryIcons[cert.category] || '🏆'}</span>
                    <span>{cert.category}</span>
                  </div>
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                
                {/* Certification Name */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.name}
                </h3>
                
                {/* Provider */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-400 font-medium">{cert.provider}</span>
                </div>
                
                {/* Year */}
                <div className="flex items-center space-x-2 mb-6">
                  <Calendar className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-sm">{cert.year}</span>
                </div>
                
                {/* Verify Button */}
                <button className="w-full flex items-center justify-center space-x-2 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 px-4 py-3 rounded border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 text-sm font-medium">
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Learning Section */}
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous <span className="text-cyan-400">Learning</span>
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Committed to staying current with the latest developments in AI, machine learning, 
              and data science through ongoing education and professional development.
            </p>
            
            {/* Learning Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-cyan-400/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-white/80 text-sm">Hours of Learning/Week</div>
              </div>
              <div className="bg-cyan-400/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-white/80 text-sm">Research Papers Read/Month</div>
              </div>
              <div className="bg-cyan-400/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400 mb-2">3+</div>
                <div className="text-white/80 text-sm">Technical Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;