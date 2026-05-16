import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          className="hero-image" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY-S-PTF2hlMJkS7rFio2wzGHOzXC8Jqe04QdmaoPZ4uk1vQo3Riiyr2ri5tb-b44CraeyA521BE_fKT2d87sn05lCe9ko_f1XD-R79KQ5iOn0FUfl_LeagdxbkEzkBHHPAlxa9o23nN7qnBUR1qdTHpvAJPzSgKXOJqq6sxKUdL65J8mIPISFC7KxX4bdas8WJ6HKJg4VtLDg4zny0E1V6bbbGQqJHhQbGeuavXTgwt40UjI4_jMU-xch1C8UwQY5Jhd1m5Feezm2" 
          alt="Dreamy artistic composition of dried botanical elements" 
        />
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Cuidado Personal con Ingredientes Naturales
        </h1>
        <p className="hero-description">
          Descubre el bienestar a través de fórmulas artesanales elaboradas con la pureza de la tierra.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => document.getElementById('history').scrollIntoView()}>
            Nuestra Filosofía
          </button>
          <button className="btn-secondary" onClick={() => navigate('/catalog')}>
            Ver Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
