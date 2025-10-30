import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Feature';
import AboutPreview from './components/AboutPreview';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutPreview />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}