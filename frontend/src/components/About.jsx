import React from 'react';
import { portfolioData } from '../mock';
import { Brain, Code, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Specialized in deep learning, NLP, and AI-assisted text detection with proven research outcomes."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Big Data Processing",
      description: "Expert in building scalable real-time data pipelines processing millions of records per hour."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in Python, web frameworks, and cloud technologies for end-to-end solution development."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data Visualization",
      description: "Creating interactive dashboards and insights that drive business decisions and strategic growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 209, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 209, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                {portfolioData.about.intro}
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                Currently based in {portfolioData.personal.location}, I leverage cutting-edge technologies 
                to solve complex data challenges and create meaningful insights that drive business value. 
                With strong analytical skills and a passion for continuous learning, I excel at transforming 
                raw data into actionable intelligence.
              </p>
            </div>
            
            {/* Professional Focus Areas */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-lg font-bold text-cyan-400 mb-2">Recent Post-Graduate</div>
                <div className="text-white/80 text-sm">M.Sc Data Science</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:border-cyan-400/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;