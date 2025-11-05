import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onClick = (e) => {
      if (e.target.closest('.nav-links')) return;
      setMobileOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [mobileOpen]);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQETxx69gHYOIQ/company-logo_200_200/B56ZcmVEgQGoAI-/0/1748694747793/sunsystechsol_pvt_ltd_logo?e=2147483647&v=beta&t=Bp5-uWeMcBFIs1ezLJp1MY6gtxpekGAjtZxelDR4BAg"
              alt="SunSys Logo"
              className="logo-img"
            />
          </div>

          <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/enquiry">Enquiry</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>

          <div className="mobile-menu" onClick={() => setMobileOpen(v => !v)}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
