import React from 'react';
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Power Your Life with Solar Energy</h1>
        <p>Clean. Sustainable. Affordable. Join the movement for a greener tomorrow with SunSys.</p>
        <div className="hero-btns">
          <Link to = "/about" className="btn">Learn More</Link>
          <Link to ="/contact" className="btn btn-secondary">Get a Quote</Link>
        </div>
      </div>
    </section>
  );
}
