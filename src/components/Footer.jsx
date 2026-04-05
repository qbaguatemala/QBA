import React from 'react';
import './Footer.css';

const Footer = () => {
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER
  const emailAddress = process.env.REACT_APP_EMAIL_ADDRESS
  const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL

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
            <a href={instagramUrl || "#"} target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 2C4.46243 2 2 4.46243 2 7.5V16.5C2 19.5376 4.46243 22 7.5 22H16.5C19.5376 22 22 19.5376 22 16.5V7.5C22 4.46243 19.5376 2 16.5 2H7.5ZM7.5 4H16.5C18.433 4 20 5.567 20 7.5V16.5C20 18.433 18.433 20 16.5 20H7.5C5.567 20 4 18.433 4 16.5V7.5C4 5.567 5.567 4 7.5 4ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12ZM17.5 7.5C17.5 8.05228 17.0523 8.5 16.5 8.5C15.9477 8.5 15.5 8.05228 15.5 7.5C15.5 6.94772 15.9477 6.5 16.5 6.5C17.0523 6.5 17.5 6.94772 17.5 7.5Z" />
              </svg>
              Instagram
            </a>
            <a href={`https://wa.me/${phoneNumber}?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos`} target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.013 2.012c-5.464 0-9.897 4.435-9.897 9.897 0 1.745.454 3.447 1.317 4.945L2.012 21.99l5.28-1.385c1.458.788 3.109 1.205 4.721 1.205 5.46 0 9.894-4.437 9.894-9.899 0-5.46-4.432-9.898-9.894-9.898zm0 16.638c-1.464 0-2.898-.387-4.16-1.121l-.299-.174-3.09.811.826-3.013-.19-.3A8.257 8.257 0 0 1 3.784 11.91c0-4.544 3.696-8.24 8.244-8.24 4.544 0 8.238 3.696 8.238 8.24 0 4.546-3.694 8.24-8.238 8.24zm4.526-6.177c-.248-.124-1.467-.724-1.693-.807-.227-.082-.392-.124-.557.124-.165.247-.64.807-.784.97-.145.166-.289.186-.537.062-.248-.124-1.047-.386-1.995-1.233-.738-.66-1.236-1.474-1.381-1.722-.145-.248-.016-.381.108-.505.112-.112.248-.288.372-.433.124-.145.165-.248.248-.413.082-.165.041-.309-.021-.433-.062-.124-.557-1.342-.763-1.838-.201-.484-.405-.418-.557-.426h-.475c-.165 0-.434.062-.66.309-.227.248-.867.848-.867 2.066s.888 2.395 1.011 2.56c.124.165 1.745 2.664 4.226 3.733.59.255 1.05.408 1.41.523.593.188 1.132.161 1.558.098.476-.071 1.467-.6 1.674-1.178.206-.579.206-1.074.145-1.178-.062-.103-.227-.165-.475-.289z" />
              </svg>
              WhatsApp
            </a>
            <a href={`mailto:${emailAddress}`} className="icon-link">
              <span className="material-symbols-outlined icon-size-small">mail</span>
              Correo
            </a>
            <a href="#contact" className="icon-link">
              <span className="material-symbols-outlined icon-size-small">support_agent</span>
              Contacto
            </a>
            {/* <a href="#privacidad" className="icon-link">
              <span className="material-symbols-outlined icon-size-small">shield</span>
              Privacidad
            </a> */}
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
