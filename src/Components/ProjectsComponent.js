import React from 'react';
import './Projects.css'; // Import CSS file for styling

function Projects() {
  return (
    <section id="projects" className="py-12 bg-gray-900 text-white"> {/* Change background color and text color */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="project-card">
            <img src="https://i.ibb.co/VBycrMk/Untitled.png" alt="Temperature Converter" className="w-full mb-4 rounded-lg project-image" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Temperature Converter</h3>
              <p className="text-gray-400 mb-4">This project converts the temperature from one unit to other units.</p>
              <a href="https://raviburaga.github.io/BHARATINTERN/TASK-1/index.html" className="text-blue-500 hover:text-blue-700">Link to Project</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img src="https://i.ibb.co/5cpsPgP/Screenshot-2023-09-14-204135.png" alt="Currency Converter" className="w-full mb-4 rounded-lg project-image" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Currency Converter</h3>
              <p className="text-gray-400 mb-4">This project converts one form of currency value into other form of currency values.</p>
              <a href="https://raviburaga.github.io/TECHNO_HACKS/Task-3/index.html" className="text-blue-500 hover:text-blue-700">Link to Project</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img src="https://i.ibb.co/j55FkmP/Screenshot-2023-09-14-205017.png" alt="Calculator" className="w-full mb-4 rounded-lg project-image" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Calculator</h3>
              <p className="text-gray-400 mb-4">This project performs basic mathematical or arithmetic operations.</p>
              <a href="https://raviburaga.github.io/TECHNO_HACKS/Task-1/Calculator.html" className="text-blue-500 hover:text-blue-700">Link to Project</a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <img src="https://i.ibb.co/MnP3sfh/Screenshot-2024-02-09-143838.png" alt="React Calculator" className="w-full mb-4 rounded-lg project-image" />
            <div>
              <h3 className="text-xl font-semibold mb-2">React Calculator</h3>
              <p className="text-gray-400 mb-4">It performs basic mathematical operations.</p>
              <a href="https://calculatorbyraviburaga.vercel.app/" className="text-blue-500 hover:text-blue-700">Link to Project</a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <img src="https://i.ibb.co/FHXgD8r/Screenshot-2024-02-09-145024.png" alt="Registration Form" className="w-full mb-4 rounded-lg project-image" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Registration Form</h3>
              <p className="text-gray-400 mb-4">It takes input from the user and saves the data in MongoDB.</p>
              <a href="https://registration-form-ravi-buraga.vercel.app/" className="text-blue-500 hover:text-blue-700">Link to Project</a>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card">
            <img src="https://i.ibb.co/vdtzJF3/Screenshot-2024-02-09-145440.png" alt="Event Registration" className="w-full mb-4 rounded-lg project-image" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Event Registration With QR Code</h3>
              <p className="text-gray-400 mb-4">It gives a QR for event registration. The registration form takes input and saves the data in MongoDB.</p>
              <a href="https://hackathon-alpha-lemon.vercel.app/" className="text-blue-500 hover:text-blue-700">Link to Project</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
