import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Qba Guatemala</div>
            <p className="footer-desc">
              Dedicados al bienestar a través del respeto por los ingredientes puros que la tierra nos regala.
            </p>
          </div>

          <div className="footer-links">
            <span className="footer-heading">Explora</span>
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
            <a href="#contact">Contacto</a>
            <a href="#">Privacidad</a>
          </div>

          <div className="footer-newsletter">
            <span className="footer-heading">Novedades</span>
            <p className="footer-desc">Suscríbete para recibir consejos de cuidado natural.</p>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Tu correo"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Qba Guatemala. Cuidado Personal Natural.
      </div>
    </footer>
  );
};

export default Footer;
