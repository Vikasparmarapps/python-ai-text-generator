import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Content Generation',
      description: 'Generate high-quality content in seconds with our advanced AI technology.'
    },
    {
      icon: '🌍',
      title: 'Multi-language Support',
      description: 'Create content in multiple languages to reach a global audience.'
    },
    {
      icon: '🎯',
      title: 'Customizable Outputs',
      description: 'Tailor the generated content to match your specific needs and style.'
    },
    {
      icon: '🎨',
      title: 'User-friendly Interface',
      description: 'Intuitive design makes content generation simple and enjoyable.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
