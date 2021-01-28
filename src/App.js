import React, { useState } from 'react';
import Product from './components/Product/Product';
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero';
import Product2 from './components/Product2/Product2';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Hero />
        <Services />
        <Product />
        <Banner />
        <Product2 />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
