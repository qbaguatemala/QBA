import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ toggleCart, cartItemsCount }) => {
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
          <Link to="/">
            <img src="/logo.svg" alt="Qba Guatemala Logo" style={{ height: '190px', width: 'auto', transformOrigin: 'left center', marginTop: '15px' }} />
          </Link>
        </div>

        <div className="mobile-actions">
          <button className="cart-btn" onClick={toggleCart} aria-label="Carrito">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
          </button>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menú">
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <Link to="/catalog" onClick={closeMenu}>Catálogo</Link>
          <a href="/#history" onClick={closeMenu}>Nuestra Historia</a>
          <a href="/#contact" onClick={closeMenu}>Contacto</a>
        </div>

        <div className="navbar-cta-container">
          <button className="cart-btn desktop-cart-btn" onClick={toggleCart} aria-label="Carrito">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
          </button>
          <button className="navbar-cta" onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/#contact';
            } else {
              document.getElementById('contact')?.scrollIntoView();
            }
          }}>
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
