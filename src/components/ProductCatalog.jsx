import React, { useState } from 'react';
import productsData from '../data/products.json';
import './ProductCatalog.css';

const productFilters = [
  { id: 'all', label: 'Todos' },
  { id: 'general', label: 'Catálogo' },
  { id: 'jabon', label: 'Jabones' },
  { id: 'evento', label: 'Eventos' },
];

const ProductCatalog = ({ addToCart }) => {
  const { productos } = productsData;
  const [activeFilter, setActiveFilter] = useState('all');

  const eventos = productos.filter(p => p.categoria === 'evento');
  const jabones = productos.filter(p => p.categoria === 'jabon');
  const otrosProductos = productos.filter(p => p.categoria !== 'jabon' && p.categoria !== 'evento');

  const productSections = [
    {
      id: 'evento',
      title: 'Eventos y Detalles Especiales',
      subtitle: 'Jabones y productos únicos, perfectos para regalar en ocasiones especiales',
      products: eventos,
    },
    {
      id: 'jabon',
      title: 'Jabones Artesanales',
      subtitle: 'Nuestra colección especial de jabones decorativos, humectantes y nutritivos',
      products: jabones,
    },
    {
      id: 'general',
      title: 'Nuestro Catálogo',
      subtitle: 'Descubre nuestra línea completa de productos botánicos',
      products: otrosProductos,
    },
  ];

  const filterCounts = productSections.reduce((counts, section) => {
    counts[section.id] = section.products.length;
    counts.all += section.products.length;
    return counts;
  }, { all: 0, general: 0, jabon: 0, evento: 0 });

  const visibleSections = activeFilter === 'all'
    ? productSections.filter(section => section.products.length > 0)
    : productSections.filter(section => section.id === activeFilter);

  const renderProductCard = (product) => (
    <div key={product.id} className="product-card">
      <div className="product-image-container">
        {product.destacado && <span className="badge featured">Destacado</span>}
        {product.nuevo && <span className="badge new">Nuevo</span>}
        <img
          src={product.imagen || '/catalog/placeholder.jpeg'}
          alt={product.nombre}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.nombre}</h3>
        <p className="product-description">{product.descripcion}</p>
        <div className="product-footer">
          <span className="product-price">{product.moneda} {product.precio ? product.precio.toFixed(2) : (product.precio_min ? `${product.precio_min.toFixed(2)} - ${product.precio_max.toFixed(2)}` : "0.00")}</span>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="product-catalog-section">
      <div className="container">
        <div className="catalog-filter-bar" aria-label="Filtrar productos por tipo">
          {productFilters.map(filter => (
            <button
              key={filter.id}
              type="button"
              className={`catalog-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
            >
              <span>{filter.label}</span>
              <span className="catalog-filter-count">{filterCounts[filter.id] || 0}</span>
            </button>
          ))}
        </div>

        {visibleSections.map((section, index) => (
          <div
            key={section.id}
            className={`catalog-section ${index === visibleSections.length - 1 ? 'last' : ''}`}
          >
            <div className="section-header">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-subtitle">{section.subtitle}</p>
            </div>

            {section.products.length > 0 ? (
              <div className="catalog-grid">
                {section.products.map(renderProductCard)}
              </div>
            ) : (
              <div className="catalog-empty-state">
                <span className="material-symbols-outlined">inventory_2</span>
                <p>Aún no hay productos disponibles en esta categoría.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
