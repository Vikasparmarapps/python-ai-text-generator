import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm shadow-md fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-800">AI Content Generator</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:underline"
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:underline"
              >
                Features
              </a>
              <a 
                href="#demo" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:underline"
              >
                Demo
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:underline"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-95 backdrop-blur-sm">
          <a 
            href="#home" 
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
          >
            Home
          </a>
          <a 
            href="#features" 
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
          >
            Features
          </a>
          <a 
            href="#demo" 
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
          >
            Demo
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
