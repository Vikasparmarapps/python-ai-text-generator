import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About AI Content Generator
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          This AI Content Generator demonstrates instant text generation capabilities. 
          Built with modern React and powered by advanced AI technology, it provides 
          users with a seamless interface for creating high-quality content across 
          various domains and use cases.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
          Whether you need blog posts, marketing copy, product descriptions, or 
          creative writing, our AI-powered tool delivers professional results in seconds.
        </p>
      </div>
    </section>
  );
};

export default About;
