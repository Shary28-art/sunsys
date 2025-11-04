import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>SunSys</h3>
            <p>Leading the transition to clean, renewable energy with innovative solar solutions for homes and businesses.</p>
            <div className="social-links">
              <a href="https://x.com/Chalo_Saathi"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/chalo_saathi/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/sunsystechsol-pvt-ltd/posts/?feedView=all"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul>
              <li><i className="fas fa-envelope"></i> info@chalosaathi.com</li>
              <li><i className="fas fa-envelope"></i> admin@chalosaathi.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 SunSys | Designed with 🌿 sustainability in mind | <a href="privacy-policy.html">Privacy Policy</a> | <a href="terms-conditions.html">Terms & Conditions</a></p>
        </div>
      </div>

      
    </footer>
  );
}

