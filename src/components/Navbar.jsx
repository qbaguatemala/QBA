import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ toggleCart, cartItemsCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const location = useLocation();

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);

    updateHash();
    window.addEventListener('hashchange', updateHash);

    return () => window.removeEventListener('hashchange', updateHash);
  }, [location.pathname, location.hash]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Catalogo', to: '/catalog' },
    { label: 'Eventos', to: '/events' },
    { label: 'Historia', to: '/#history' },
    { label: 'Contacto', to: '/#contact' },
  ];

  const isLinkActive = (link) => {
    const target = new URL(link.to || link.href, window.location.origin);
    const activeHash = location.hash || currentHash;
    const normalizePath = (path) => path !== '/' ? path.replace(/\/$/, '') : path;
    const currentPath = normalizePath(location.pathname);
    const targetPath = normalizePath(target.pathname);

    if (target.hash) {
      return currentPath === targetPath && activeHash === target.hash;
    }

    if (targetPath === '/catalog') {
      return currentPath === targetPath && (!activeHash || activeHash === '#catalog-all');
    }

    return currentPath === targetPath && !activeHash;
  };

  const renderNavLink = (link) => {
    const active = isLinkActive(link);
    const commonProps = {
      className: active ? 'active' : undefined,
      onClick: closeMenu,
      'aria-current': active ? 'page' : undefined,
    };

    return link.to ? (
      <Link key={link.label} to={link.to} {...commonProps}>{link.label}</Link>
    ) : (
      <a key={link.label} href={link.href} {...commonProps}>{link.label}</a>
    );
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

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          {navLinks.map(renderNavLink)}
        </div>

        <div className="navbar-cta-container">
          <button className="navbar-cta navbar-cta-cart" onClick={toggleCart}>
            <span className="material-symbols-outlined" aria-hidden="true">shopping_bag</span>
            {cartItemsCount > 0 ? `Mi pedido (${cartItemsCount})` : 'Mi pedido'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
