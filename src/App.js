import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoCard from './components/DemoCard';
import OtherProjects from './components/OtherProjects';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <DemoCard />
      <About />
      <OtherProjects />
      <Footer />
    </div>
  );
}

export default App;
