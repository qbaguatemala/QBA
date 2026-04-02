import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">Qba Guatemala</div>
        <div className="navbar-links">
          <a href="#products">Productos</a>
          <a href="#history">Nuestra Historia</a>
          <a href="#contact">Contacto</a>
        </div>
        <button className="navbar-cta" onClick={() => document.getElementById('contact').scrollIntoView()}>
          Contacto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
