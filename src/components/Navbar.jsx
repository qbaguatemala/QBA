import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Qba Guatemala Logo" style={{ height: '80px', width: 'auto', transform: 'scale(1.7)', transformOrigin: 'left center' }} />
        </div>
        <div className="navbar-links">
          <a href="#products">Productos</a>
          <a href="#history">Nuestra Historia</a>
          <a href="#contact">Contacto</a>
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
