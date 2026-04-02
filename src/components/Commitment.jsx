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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaUynNDZt8N-59ieZ8DdeMYkp0dRfJ2j4gP4PX_sWVRYOtIGSS4wRFU0eXXhYMYuPrP4mw-DmW5vauc-zZKbvbzV7kbkKVXwHKI8H8pk5WhJJdTtSQgPSft9o7yY5WlJ0psQxzjDGW8G2CunMf-gihFY4iSMR1PLrkv00ZTCJXCkCWzVmVCsluY7OIXSHrwb2YnHnwiO8E1vN-I4IBU-z0lvnK_8yHk90YZIrUAM_gC4YzYQO93JwijbD_GwUt3WQJjEj37VA5RrYk" 
                alt="Artisan hands mixing raw botanical ingredients" 
              />
            </div>
            <div className="secondary-image-container">
              <img 
                className="secondary-image" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTlwJdmIRouptVtpSsNl4B6m3MAsbzPJ9fbEAzRZ_VBMa74im0mhwPZqHHj5VWotN7QqzBvac9OTAegg5iTPtmihc1P2HEjMRpI3sZ29BLnEv1iyYz3NyBi2R5yDixRIcZW-llgYvzwI84H8EnmZQxyzEhdgYp29ox_BX8fYMBl2BUdLKMZ1s7xRYD9SXcWoOmvA-alg5hKcibc-Cwh6QEYVJY8Kpf85OYQD8qmXN_abfMpOM2f3OxO0vf2dR0b6q2iobehv4Vqc0S" 
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
