import React, { useCallback, useEffect, useState } from 'react';
import eventsData from '../data/events.json';
import './Events.css';

const Events = () => {
  const { eventos } = eventsData;
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
  const whatsappMessage = 'Hola, me gustaria cotizar detalles personalizados para un evento.';
  const whatsappUrl = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : '#contact-events';

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = useCallback(() => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % eventos.length);
  }, [eventos.length]);

  const prevImage = useCallback(() => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + eventos.length) % eventos.length);
  }, [eventos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIndex, nextImage, prevImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImageIndex]);

  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="container events-hero-inner">
          <div className="events-hero-copy">
            <span className="events-kicker">Detalles para eventos</span>
            <h1>Regalos hechos para momentos especiales</h1>
            <p>
              Creamos jabones y detalles personalizados para bodas, bautizos,
              cumpleaños, reuniones y celebraciones con una presentacion natural.
            </p>
          </div>
        </div>
      </section>

      <section className="events-gallery-section" aria-label="Galeria de detalles para eventos">
        <div className="container">
          <div className="events-bento-grid">
            {eventos.map((event, index) => (
              <article
                key={event.id}
                className={`event-bento-card event-bento-card-${(index % 6) + 1}`}
                onClick={() => openLightbox(index)}
              >
                <img src={event.imagen} alt={event.nombre} />
                <div className="event-bento-card-zoom-indicator">
                  <span className="material-symbols-outlined">zoom_in</span>
                </div>
                <div className="event-bento-overlay">
                  <span>{event.nombre}</span>
                  <p>{event.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="events-contact-section" id="contact-events">
        <div className="container">
          <div className="events-contact-panel">
            <div>
              <span className="events-kicker">Cotizacion directa</span>
              <h2>Cuentanos que tienes en mente</h2>
              <p>
                Podemos ajustar colores, cantidades, presentacion y estilo segun
                tu evento. Cada pedido se cotiza de forma personalizada.
              </p>
            </div>
            <a
              className="events-whatsapp-btn"
              href={whatsappUrl}
              target={phoneNumber ? '_blank' : undefined}
              rel={phoneNumber ? 'noopener noreferrer' : undefined}
            >
              <span className="material-symbols-outlined" aria-hidden="true">chat</span>
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="events-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar galeria">
            <span className="material-symbols-outlined">close</span>
          </button>
          
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Imagen anterior"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-wrapper">
              <img 
                src={eventos[activeImageIndex].imagen} 
                alt={eventos[activeImageIndex].nombre} 
                className="lightbox-image"
              />
            </div>
            <div className="lightbox-caption">
              <div className="lightbox-caption-header">
                <h3>{eventos[activeImageIndex].nombre}</h3>
                <span className="lightbox-counter">
                  {activeImageIndex + 1} de {eventos.length}
                </span>
              </div>
              <p>{eventos[activeImageIndex].descripcion}</p>
            </div>
          </div>

          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Siguiente imagen"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      )}
    </main>
  );
};

export default Events;
