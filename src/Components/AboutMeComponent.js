import React from 'react';

export default function AboutMeComponent() {
  return (
    <section id="about" className="bg-gray-900 py-16 text-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 m-4">
      <div className='bg-gradient-to-r from-yellow-400 to-purple-300 rounded-full h-48 w-56 m-10 '>
        
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-500 flex justify-center items-center shadow-2xl overflow-hidden relative">
          <img src="https://i.ibb.co/McWMwTj/IMG-5304.jpg" alt="Ravi Buraga" className="w-full h-full object-cover rounded-full shadow-2xl" />
         
        </div>
        </div>
        <div className="max-w-md text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300">
            I'm a Web Developer. My goal is to become a creative web dev. Currently, I'm studying CSE 3rd year. I'm open to work with anyone who needs my skills.
          </p>
        </div>
      </div>
    </section>
  );
}
