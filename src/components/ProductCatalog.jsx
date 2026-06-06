import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productsData from '../data/products.json';
import './ProductCatalog.css';

const productFilters = [
  { id: 'all', label: 'Todos' },
  { id: 'general', label: 'Catalogo' },
  { id: 'jabon', label: 'Jabones' },
];

const ProductCatalog = () => {
  const { productos } = productsData;
  const [activeFilter, setActiveFilter] = useState('all');
  const location = useLocation();
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;

  useEffect(() => {
    const syncFilterWithHash = () => {
      const hash = window.location.hash.replace('#catalog-', '');
      const selectedFilter = productFilters.some(filter => filter.id === hash) ? hash : 'all';
      setActiveFilter(selectedFilter);
    };

    syncFilterWithHash();
    window.addEventListener('hashchange', syncFilterWithHash);

    return () => window.removeEventListener('hashchange', syncFilterWithHash);
  }, []);

  useEffect(() => {
    const hash = location.hash.replace('#catalog-', '');
    const selectedFilter = productFilters.some(filter => filter.id === hash) ? hash : 'all';
    setActiveFilter(selectedFilter);
  }, [location.hash]);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith('#catalog-')) return;

    window.setTimeout(() => {
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }, [activeFilter]);

  const jabones = productos.filter(product => product.categoria === 'jabon');
  const otrosProductos = productos.filter(product => product.categoria !== 'jabon' && product.categoria !== 'evento');

  const productSections = [
    {
      id: 'jabon',
      title: 'Jabones Artesanales',
      subtitle: 'Nuestra coleccion especial de jabones decorativos, humectantes y nutritivos',
      products: jabones,
    },
    {
      id: 'general',
      title: 'Nuestro Catalogo',
      subtitle: 'Descubre nuestra linea completa de productos naturales',
      products: otrosProductos,
    },
  ];

  const filterCounts = productSections.reduce((counts, section) => {
    counts[section.id] = section.products.length;
    counts.all += section.products.length;
    return counts;
  }, { all: 0, general: 0, jabon: 0 });

  const visibleSections = activeFilter === 'all'
    ? productSections.filter(section => section.products.length > 0)
    : productSections.filter(section => section.id === activeFilter);

  const getProductContactUrl = (product) => {
    const message = `Hola, me gustaria recibir mas informacion sobre ${product.nombre}.`;

    if (!phoneNumber) {
      return `/#contact`;
    }

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const renderProductCard = (product) => {
    const contactUrl = getProductContactUrl(product);

    return (
      <div key={product.id} className="product-card">
        <div className="product-image-container">
          {product.agotado ? (
            <span className="badge sold-out">Agotado</span>
          ) : (
            <>
              {product.destacado && <span className="badge featured">Destacado</span>}
              {product.nuevo && <span className="badge new">Nuevo</span>}
            </>
          )}
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
            <span className="product-price">
              {product.moneda} {product.precio ? product.precio.toFixed(2) : '0.00'}
            </span>
            {product.agotado ? (
              <span className="product-status">No disponible</span>
            ) : (
              <a
                className="product-contact-btn"
                href={contactUrl}
                target={phoneNumber ? '_blank' : undefined}
                rel={phoneNumber ? 'noopener noreferrer' : undefined}
              >
                Consultar
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="product-catalog-section">
      <div className="container">
        <div id="catalog-all" className="catalog-filter-bar" aria-label="Filtrar productos por tipo">
          {productFilters.map(filter => (
            <button
              key={filter.id}
              type="button"
              className={`catalog-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(filter.id);
                const hash = filter.id === 'all' ? 'catalog-all' : `catalog-${filter.id}`;
                window.history.replaceState(null, '', `${window.location.pathname}#${hash}`);
              }}
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
            id={`catalog-${section.id}`}
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
                <p>Aun no hay productos disponibles en esta categoria.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
