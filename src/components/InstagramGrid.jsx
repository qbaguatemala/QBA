import React from 'react';
import './InstagramGrid.css';

const images = [
  {
    id: 1,
    className: "bento-item main-item",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHCjCNMVjhr0E-l8XVuOWMxQ9a4b2Tz_u7vr1sbxkakuHQB5enNis0gho6WOBhkdz4gyYqsfadiE4fJYxoINYJDvC66wdV39M-TI23XnUrIHQyBcLZ4zLVmyBk9clWoLQzbpPHwfERfq41C2f55wgidzuNifSGObguTS3xYx3EHFCVw-NnLXlvMQW8oYEHQWPLH-XIz_2BGMFmdRvg9oG76DVvcSbGw3vNolY8vx17uK1I5IRBiKVNBirN4eEpOSNgRDFdmEnd6n4F",
    alt: "Atmospheric shot of botanical skin care products"
  },
  {
    id: 2,
    className: "bento-item",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd1m3NxxNvmq5PqRc7qonzP7wSY1J1vyXBf_YcvrVhtAVNyVVS2CEAN82F66M4J583GnuJAQkV0GooHz96-3KsTKL9eIlgM9L-FSu5SlXiFAA7inaX12lzWXul1QLb88gw4zkfoUnHcR-u0lsiQIRhKmx8Q88gUwds93WSMgb07Po5ekrcFOv9u3yGv0L6HYWIrLvbe_ga_m8qwipoIT95etHPU1oXZmK6W02lGXYkQzOIq6kWlvwUmT1v-jalxT7HkNbu6QCbn5vJ",
    alt: "Close up of essential oil drops"
  },
  {
    id: 3,
    className: "bento-item",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8IUBfMvlVD3FfA00kSSsWkomX7KHrTYiJGHfNc8bdMY2bTqT2TWEwEuFfc4ZAS4a3-JANBV5V4cA73UDcHjQ0PrtpE6F9Oms06Qq9YrsIPYVt0Jh7LzHFXbdiCBUixdHf2sJO76KOcl2KsyJOWDba0Sn1TMZWSRZWJwJj4j4kMNW0DFTgkBjQgYMLHIT0tHZA2Do5QqifTMCWV3HBQ1e6fnJo2YSgLnc9NlSeQVXczDw3C2wdlBG1W2A37_wzWWv1mnqidd-AnCla",
    alt: "Drying herbs hanging from wooden beams"
  },
  {
    id: 4,
    className: "bento-item wide-item",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtOrPoYV6tyIHZND4zYnnfeHHzzExDpSBjSco5iPQgA2CbRHOEiD8ZCGGFW6uQtT6HQaYWSbVIOv7oVHcU1pg1J_j5H1tC16yrr9JHlmt4FG2mZklGvMnUs1EhQjbLoqrvaMiCymHams2Ii6tfVO-xRKl3-Jwt5C4-HteoFdJOUX1u9O61E5YN_NAjBbmUuxXzez7qLnO4uG0ZrCfyQEyfnJ57DRBuLG22dYUEP5IW3xo0yN5kzMEo3c3nErSMHUHfQomuc30dxlQ0",
    alt: "Minimalist layout of botanical soaps"
  }
];

const InstagramGrid = () => {
  return (
    <section className="insta-section">
      <div className="container">
        <div className="insta-header">
          <h2 className="insta-title">Sigue nuestra historia en Instagram</h2>
          <p className="insta-handle">@qba_guatemala</p>
        </div>
        <div className="insta-grid">
          {images.map(image => (
            <div key={image.id} className={image.className}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
