import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-float">
          AI Content Generator
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Generate high-quality content instantly with AI
        </p>
        <button className="bg-soft-pastel hover:bg-soft-pastel-hover text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
          Try Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
