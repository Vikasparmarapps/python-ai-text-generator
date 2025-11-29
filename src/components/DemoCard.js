import React, { useState } from 'react';
import axios from 'axios';

const DemoCard = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/generate', {
        prompt: prompt
      });
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error generating content:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setOutput(`Error: ${error.response.data.detail || 'Server error occurred'}`);
      } else if (error.request) {
        // The request was made but no response was received
        setOutput('Error: No response from server. Please check if the backend is running.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setOutput(`Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Try the AI Generator
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          {/* Input Section */}
          <div className="mb-6">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200"
              disabled={isLoading}
            />
          </div>
          
          {/* Generate Button */}
          <div className="mb-8 text-center">
            <button
              onClick={handleGenerate}
              disabled={isLoading || !prompt.trim()}
              className="bg-soft-pastel hover:bg-soft-pastel-hover disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </div>
          
          {/* Output Section */}
          {output && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Generated Content:</h3>
              <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {output}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoCard;
