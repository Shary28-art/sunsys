import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About SunSys</h2>
          <p>Leading the Solar Revolution Since 2015</p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3>Our Mission</h3>
            <p>At SunSys, we're committed to accelerating the world's transition to sustainable energy. We provide innovative solar solutions that make clean energy accessible and affordable for homes and businesses.</p>
            
            <h3>Our Vision</h3>
            <p>We envision a future powered by renewable energy, where every roof contributes to a cleaner, more sustainable world. Through cutting-edge technology and exceptional service, we're making this vision a reality.</p>

            <div className="core-values">
              <h3>Our Core Values</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> Innovation in Sustainability</li>
                <li><i className="fas fa-check-circle"></i> Customer-First Approach</li>
                <li><i className="fas fa-check-circle"></i> Environmental Stewardship</li>
                <li><i className="fas fa-check-circle"></i> Quality Excellence</li>
              </ul>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="SunSys Team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}