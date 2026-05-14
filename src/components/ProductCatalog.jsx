import React from 'react';
import productsData from '../data/products.json';
import './ProductCatalog.css';

const ProductCatalog = ({ addToCart }) => {
  const { productos } = productsData;

  return (
    <section className="product-catalog-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestro Catálogo</h2>
          <p className="section-subtitle">Descubre nuestra línea completa de productos botánicos</p>
        </div>
        
        <div className="catalog-grid">
          {productos.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                {product.destacado && <span className="badge featured">Destacado</span>}
                {product.nuevo && <span className="badge new">Nuevo</span>}
                <img 
                  src={product.imagen} 
                  alt={product.nombre} 
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.nombre}</h3>
                <p className="product-description">{product.descripcion}</p>
                <div className="product-footer">
                  <span className="product-price">{product.moneda} {product.precio ? product.precio.toFixed(2) : (product.precio_min ? product.precio_min.toFixed(2) : "0.00")}</span>
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
