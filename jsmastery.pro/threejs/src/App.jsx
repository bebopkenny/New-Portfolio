import React from 'react';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx"; // Import Hero component
import About from "./sections/About.jsx"; // Import About component
import Projects from './sections/Projects.jsx'; // Import Projects component

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About /> 
      <Projects />  
    </main>
  );
};

export default App;
