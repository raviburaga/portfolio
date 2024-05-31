import React, { useState } from 'react';
import './Name.css';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark'); // Toggle dark mode class on the root element
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
          <button onClick={toggleDarkMode} className="focus:outline-none mr-4 relative">
            {isDarkMode ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M17.657 10.343a1 1 0 010 1.414l-2.122 2.122a1 1 0 01-1.414-1.414l2.122-2.122a1 1 0 011.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3.464 3.464a1 1 0 111.414 1.414l-2.122 2.122a1 1 0 01-1.414-1.414l2.122-2.122zm14.142 0a1 1 0 10-1.414 1.414l2.122 2.122a1 1 0 101.414-1.414l-2.122-2.122zM10 18a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M1.929 10.929a1 1 0 00-1.414 1.414l2.122 2.122a1 1 0 001.414-1.414L1.93 10.93zM18.07 3.464a1 1 0 10-1.414 1.414l2.122 2.122a1 1 0 001.414-1.414L18.07 3.464zM18.071 15.536a1 1 0 01-1.414-1.414l-2.122 2.122a1 1 0 101.414 1.414l2.122-2.122zM1.93 5.464a1 1 0 011.414-1.414l-2.122-2.122a1 1 0 10-1.414 1.414l2.122 2.122z" clipRule="evenodd" />
                </svg>
                <div className="moon-sun absolute w-8 h-8 rounded-full bg-gray-700 top-0 left-0"></div>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.707 7.707a1 1 0 011.414 1.414L4.414 12l2.707 2.293a1 1 0 01-1.414 1.414L3 13.414V11a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 14l2.293 2.293a1 1 0 01-1.414 1.414L5 15.414V18a1 1 0 11-2 0v-2.586L.707 16.707a1 1 0 01-1.414-1.414L2.586 12 .293 9.707a1 1 0 010-1.414l2.293-2.293A1 1 0 013 6.586V4a1 1 0 112 0v2.586l2.293-2.293a1 1 0 011.414 1.414L6.414 8l2.293 2.293a1 1 0 01-1.414 1.414L5 9.414V12a1 1 0 11-2 0V9.414l-2.293 2.293a1 1 0 01-1.414-1.414L2.586 8l-2.293-2.293a1 1 0 010-1.414L3 3.586V1a1 1 0 112 0v2.586l2.293-2.293a1 1 0 011.414 1.414L6.414 6l2.293 2.293a1 1 0 01-1.414 1.414L5 7.414V10a1 1 0 11-2 0V7.414l-2.293 2.293a1 1 0 01-1.414-1.414L3 6.586V4a1 1 0 112 0v2.586l2.293-2.293a1 1 0 011.414 1.414L6.414 8l2.293 2.293a1 1 0 01-1.414 1.414L5 9.414V12a1 1 0 11-2 0V9.414l-2.293 2.293a1 1 0 01-1.414-1.414L2.586 8l-2.293-2.293a1 1 0 010-1.414L3 3.586V1a1 1 0 112 0v2.586l2.293-2.293a1 1 0 011.414 1.414L6.414 6l2.293 2.293a1 1 0 01-1.414 1.414L5 7.414z" clipRule="evenodd" />
                </svg>
                <div className="moon-sun absolute w-8 h-8 rounded-full bg-yellow-400 top-0 left-0"></div>
              </>
            )}
          </button>
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
