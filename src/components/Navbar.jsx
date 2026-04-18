import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="/logo.svg" alt="Qba Guatemala Logo" style={{ height: '190px', width: 'auto', transformOrigin: 'left center', marginTop: '15px' }} />
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menú">
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <div className={`navbar-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <a href="#products" onClick={closeMenu}>Productos</a>
          <a href="#history" onClick={closeMenu}>Nuestra Historia</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
        </div>

        <div className="navbar-cta-container">
          <button className="navbar-cta" onClick={() => document.getElementById('contact').scrollIntoView()}>
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
