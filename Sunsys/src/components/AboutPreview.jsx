
import React from 'react';

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Leading the Solar Revolution</h2>
            <p>SunSys has been at the forefront of renewable energy solutions for over a decade. Our mission is to make solar power accessible to everyone while maintaining the highest standards of quality and service.</p>
            <p>We specialize in residential and commercial solar installations, battery storage solutions, and ongoing maintenance to ensure your system operates at peak performance for years to come.</p>
            <a href="about.html" className="btn">Our Story</a>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Solar panels installation" />
          </div>
        </div>
      </div>
    </section>
  );
}
