import React from 'react';
import './CtaSection.css';

const CtaSection = () => {
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-card">
          <div className="cta-background-icon">
            <span className="material-symbols-outlined cta-bg-icon-size">eco</span>
          </div>
          <h2 className="cta-title">¿Deseas conocer más sobre nuestros productos?</h2>
          <p className="cta-desc">
            Contáctanos por WhatsApp para recibir asesoría personalizada sobre el cuidado de tu piel con ingredientes 100% naturales.
          </p>
          <div className="cta-actions">
            {/* <button className="btn-catalog">
              Ver Catálogo
            </button> */}
            <button className="btn-whatsapp" onClick={() => window.open(`https://wa.me/${phoneNumber}?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos`, '_blank')}>
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
