import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { faGithub , faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function FooterComponent() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-purple-300">Ravi Buraga</h1>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">Quick Links</h3>
              <a href="#about" className="hover:text-blue-400">About Me</a>
              <a href="#projects" className="hover:text-blue-400">Projects</a>
              <a href="#skills" className="hover:text-blue-400">Skills</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">Contact Details</h3>
              <div className="flex space-x-2 items-center text-purple-300">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>buragaravi2002@gmail.com</p>
              </div>
              <div className="flex space-x-2 items-center text-purple-300">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <p>+919010462357</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">Social Media</h3>
              <div className="flex space-x-2 text-purple-300">
                <a href="https://github.com/raviburaga" className="hover:text-blue-400">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="nkedin.com/in/ravi-buraga-54b0bb280/" className="hover:text-blue-400">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://instagram.com/royalsun1318" className="hover:text-blue-400">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="https://youtube.com/@raviburaga" className="hover:text-blue-400">
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
