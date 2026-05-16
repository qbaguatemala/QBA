import React from 'react';
import productsData from '../data/products.json';
import './ProductCatalog.css';

const ProductCatalog = ({ addToCart }) => {
  const { productos } = productsData;

  const eventos = productos.filter(p => p.categoria === 'evento');
  const jabones = productos.filter(p => p.categoria === 'jabon');
  const otrosProductos = productos.filter(p => p.categoria !== 'jabon' && p.categoria !== 'evento');

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
        {/* Sección de Eventos */}
        {eventos.length > 0 && (
          <>
            <div className="section-header" style={{ marginBottom: '2rem' }}>
              <h2 className="section-title">Eventos y Detalles Especiales</h2>
              <p className="section-subtitle">Jabones y productos únicos, perfectos para regalar en ocasiones especiales</p>
            </div>
            
            <div className="catalog-grid" style={{ marginBottom: '5rem' }}>
              {eventos.map(renderProductCard)}
            </div>
          </>
        )}
        {/* Sección de Jabones */}
        {jabones.length > 0 && (
          <>
            <div className="section-header" style={{ marginBottom: '2rem' }}>
              <h2 className="section-title">Jabones Artesanales</h2>
              <p className="section-subtitle">Nuestra colección especial de jabones decorativos, humectantes y nutritivos</p>
            </div>
            
            <div className="catalog-grid" style={{ marginBottom: '5rem' }}>
              {jabones.map(renderProductCard)}
            </div>
          </>
        )}

        {/* Sección del resto del catálogo */}
        {otrosProductos.length > 0 && (
          <>
            <div className="section-header">
              <h2 className="section-title">Nuestro Catálogo</h2>
              <p className="section-subtitle">Descubre nuestra línea completa de productos botánicos</p>
            </div>
            
            <div className="catalog-grid">
              {otrosProductos.map(renderProductCard)}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default ProductCatalog;
