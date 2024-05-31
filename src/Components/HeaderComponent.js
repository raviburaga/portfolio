import React, { useState } from 'react';
import './Name.css';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    toggleMenu(); // Close the menu after clicking on a link
  };

  return (
    <header className="bg-gray-900 text-white py-4 relative overflow-hidden">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo text-2xl font-bold text-yellow-400 relative">
          <span className="animated-text inline-block">R</span>
          <span className="animated-text inline-block">a</span>
          <span className="animated-text inline-block">v</span>
          <span className="animated-text inline-block">i</span>
          <span className="animated-text inline-block">&nbsp;</span>
          <span className="animated-text inline-block">B</span>
          <span className="animated-text inline-block">u</span>
          <span className="animated-text inline-block">r</span>
          <span className="animated-text inline-block">a</span>
          <span className="animated-text inline-block">g</span>
          <span className="animated-text inline-block">a</span>
          <div className="animation-line h-0.5 w-0 bg-yellow-400 absolute bottom-0 left-0 transition-all duration-300"></div>
        </div>
        <div className="flex items-center">
         
          <nav className="md:hidden relative">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
            {isMenuOpen && (
              <div className="fixed top-0 right-0 w-1/2 bg-gray-900 bg-opacity-75 backdrop-blur-md text-white py-4 z-50 border-2 border-yellow-400 rounded-lg">
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="container mx-auto flex justify-center items-center">
                  <ul className="flex flex-col space-y-4 items-center">
                    <li><button onClick={() => smoothScroll('about')} className="hover:text-yellow-400 focus:outline-none">About Me</button></li>
                    <li><button onClick={() => smoothScroll('projects')} className="hover:text-yellow-400 focus:outline-none">Projects</button></li>
                    <li><button onClick={() => smoothScroll('skills')} className="hover:text-yellow-400 focus:outline-none">Skills</button></li>
                    <li><button onClick={() => smoothScroll('contact')} className="hover:text-yellow-400 focus:outline-none">Contact</button></li>
                  </ul>
                </div>
              </div>
            )}
          </nav>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><button onClick={() => smoothScroll('about')} className="hover:text-yellow-400 focus:outline-none">About Me</button></li>
              <li><button onClick={() => smoothScroll('projects')} className="hover:text-yellow-400 focus:outline-none">Projects</button></li>
              <li><button onClick={() => smoothScroll('skills')} className="hover:text-yellow-400 focus:outline-none">Skills</button></li>
              <li><button onClick={() => smoothScroll('contact')} className="hover:text-yellow-400 focus:outline-none">Contact</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
