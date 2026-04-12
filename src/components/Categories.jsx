import React from 'react';
import './Categories.css';

import categoriesData from '../data/categories.json';

const Categories = () => {
  return (
    <section id="products" className="categories-section">
      <div className="container">
        <div className="categories-header">
          <span className="categories-subtitle">Selección Especial</span>
          <h2 className="categories-title">Nuestras Categorías</h2>
        </div>
        <div className="categories-grid">
          {categoriesData.map(category => (
            <div key={category.id} className="category-card">
              <div className={`category-image-wrapper ${category.bordered ? 'bordered' : ''}`}>
                <img
                  className="category-image"
                  src={category.image}
                  alt={category.alt}
                />
              </div>
              <h3 className="category-name">{category.title}</h3>
              <p className="category-desc">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
