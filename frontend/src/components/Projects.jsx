import React, { useState } from 'react';
import { portfolioData } from '../mock';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const categoryColors = {
    'AI/ML': 'from-purple-500/20 to-pink-500/20',
    'NLP': 'from-indigo-500/20 to-purple-500/20',
    'Analytics': 'from-blue-500/20 to-cyan-500/20',
    'Big Data': 'from-green-500/20 to-teal-500/20'
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 255, 209, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0, 255, 209, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Showcasing innovative data science solutions and real-world applications
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div 
              key={project.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-br ${categoryColors[project.category]} backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 h-full hover:border-cyan-400/40 transition-all duration-300`}>
                {/* Project Category */}
                <div className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-start">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-white/5 text-white/80 px-2 py-1 rounded text-xs font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-cyan-400/20 hover:bg-cyan-400 text-cyan-400 hover:text-black px-4 py-2 rounded transition-all duration-300 text-sm font-medium">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-black border border-cyan-400/20 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {selectedProject.category}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            
            <p className="text-white/80 mb-8 leading-relaxed text-lg">
              {selectedProject.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-white/80 flex items-start">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-white/10 text-white px-3 py-2 rounded font-medium border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;