import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './Components/AboutMeComponent';
import Projects from './Components/ProjectsComponent';
import Contact from './Components/ContactComponent';
import Home from './Components/HomeComponent';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  )
}

