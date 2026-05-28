import React from 'react';
import eventsData from '../data/events.json';
import './Events.css';

const Events = () => {
  const { eventos } = eventsData;
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
  const whatsappMessage = 'Hola, me gustaria cotizar detalles personalizados para un evento.';
  const whatsappUrl = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : '#contact-events';

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
              >
                <img src={event.imagen} alt={event.nombre} />
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
    </main>
  );
};

export default Events;
