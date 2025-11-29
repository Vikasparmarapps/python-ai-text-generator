import React from 'react';

const OtherProjects = () => {
  const projects = [
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent conversational AI for customer support and engagement.',
      image: '🤖'
    },
    {
      title: 'Content Analyzer',
      description: 'Advanced text analysis and sentiment detection tool.',
      image: '📊'
    },
    {
      title: 'Translation Service',
      description: 'Real-time multi-language translation with context awareness.',
      image: '🌐'
    },
    {
      title: 'SEO Optimizer',
      description: 'AI-powered SEO optimization for better search rankings.',
      image: '🔍'
    },
    {
      title: 'Social Media Manager',
      description: 'Automated content creation and scheduling for social platforms.',
      image: '📱'
    },
    {
      title: 'Email Campaign Tool',
      description: 'Personalized email marketing with AI-generated content.',
      image: '📧'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Other Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4 text-center">{project.image}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
