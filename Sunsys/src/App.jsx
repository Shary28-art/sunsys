import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Feature';
import AboutPreview from './components/AboutPreview';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Enquiry from './Pages/Enquiry';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Features />
            <AboutPreview />
            <Stats />
            <CTA />
          </main>
        } />
        <Route path="/about" element={<AboutUs />} />
         <Route path="/projects" element={<div>Projects Page Coming Soon</div>} />
        <Route path="/services" element={<div>Services Page Coming Soon</div>} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/team" element={<div>Team Page Coming Soon</div>} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}