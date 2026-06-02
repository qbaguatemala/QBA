import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ isOpen, toggleCart, cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => {
    const price = item.precio || 0;
    return sum + (price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    alert("Función de pago en desarrollo. Por ahora este carrito es solo visual.");
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={toggleCart}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Tu Carrito</h2>
          <button className="close-cart-btn" onClick={toggleCart} aria-label="Cerrar carrito">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span className="material-symbols-outlined empty-icon">shopping_bag</span>
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.imagen || 'https://via.placeholder.com/80x80?text=No+Img'} alt={item.nombre} />
                </div>
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.nombre}</h4>
                  <p className="cart-item-price">
                    {item.moneda} {item.precio ? item.precio.toFixed(2) : "0.00"}
                  </p>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>Q {total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
