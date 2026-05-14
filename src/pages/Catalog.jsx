import React from 'react';
import ProductCatalog from '../components/ProductCatalog';

const Catalog = ({ addToCart }) => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <ProductCatalog addToCart={addToCart} />
    </main>
  );
};

export default Catalog;
