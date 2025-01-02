import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <>
    <Navbar/>
    

    <Hero />
     
     
    <About />
    <Portfolio/>
    <Contact />
    <Footer /> 
    </>
  );
}

export default App;
/* -Navbar
   -Hero Section
   -About Section with Skills
   -Portfolio Section
   -Contact Section
   -footer */ 