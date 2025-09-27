import React, { useState } from 'react';
import { portfolioData } from '../mock';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: portfolioData.personal.email,
      link: `mailto:${portfolioData.personal.email}`,
      color: 'from-red-500/20 to-pink-500/20'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: portfolioData.personal.phone,
      link: `tel:${portfolioData.personal.phone}`,
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: portfolioData.personal.linkedin,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'View my code',
      link: portfolioData.personal.github,
      color: 'from-purple-500/20 to-indigo-500/20'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to collaborate on exciting data science projects? Let's connect and discuss opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white/80">{portfolioData.personal.location}</span>
              </div>
            </div>
            
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`bg-gradient-to-br ${method.color} backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all duration-300`}>
                    <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{method.label}</h4>
                    <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Let's Collaborate On:</h4>
              <ul className="space-y-3">
                <li className="text-white/80 flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Machine Learning & AI Projects
                </li>
                <li className="text-white/80 flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Data Analysis & Visualization
                </li>
                <li className="text-white/80 flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Research & Development
                </li>
                <li className="text-white/80 flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Consulting & Advisory
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="Project Collaboration"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-white text-black px-6 py-4 font-semibold transition-all duration-400 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                  style={{
                    boxShadow: '0 0 30px rgba(0, 255, 209, 0.3)'
                  }}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;