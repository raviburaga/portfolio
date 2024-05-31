import React from 'react';
import Nav from './HeaderComponent';
import About from './AboutMeComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';

export default function HomeComponent() {
  return (
    <>
        <Nav />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}
