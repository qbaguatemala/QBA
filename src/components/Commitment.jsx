import React from 'react';
import './Commitment.css';

const features = [
  {
    id: 1,
    icon: 'nature_people',
    title: 'Puro',
    desc: 'Sin químicos sintéticos ni aditivos nocivos.'
  },
  {
    id: 2,
    icon: 'pan_tool',
    title: 'Hecho a Mano',
    desc: 'Elaborado con cuidado en pequeños lotes.'
  },
  {
    id: 3,
    icon: 'eco',
    title: 'Ecológico',
    desc: 'Empaques pensados para ser biodegradables.'
  }
];

const Commitment = () => {
  return (
    <section className="commitment-section" id="history">
      <div className="container">
        <div className="commitment-layout">
          <div className="commitment-images">
            <div className="main-image-container">
              <img
                className="main-image"
                src="commitment_main.jpeg"
                alt="Artisan hands mixing raw botanical ingredients"
              />
            </div>
            <div className="secondary-image-container">
              <img
                className="secondary-image"
                src="commitment_secondary.jpeg"
                alt="Macro close-up of roasted coffee beans and fresh aloe"
              />
            </div>
          </div>
          <div className="commitment-content">
            <span className="commitment-subtitle">Nuestro Compromiso</span>
            <h2 className="commitment-title">La Belleza de lo Real</h2>
            <p className="commitment-desc">
              En el corazón de Guatemala, creemos en la sencillez de los ingredientes reales. Fusionamos la sabiduría de la naturaleza con procesos que respetan su origen, creando productos que cuidan tu piel sin comprometer el entorno. Cada pieza es elaborada para preservar la frescura de la lavanda, el vigor del café y la suavidad del aloe vera.
            </p>
            <div className="commitment-features">
              {features.map(feature => (
                <div key={feature.id} className="feature-item">
                  <span className="material-symbols-outlined feature-icon">{feature.icon}</span>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
