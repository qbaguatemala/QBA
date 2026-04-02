import React from 'react';
import './Quote.css';

const Quote = () => {
  return (
    <section className="quote-section">
      <div className="container">
        <div className="quote-container">
          <blockquote className="quote-text">
            "La naturaleza ofrece todo lo que necesitamos para florecer. En Qba, nos dedicamos a entregarte esa esencia de la forma más honesta posible."
          </blockquote>
          <cite className="quote-author">— Qba Guatemala</cite>
        </div>
      </div>
    </section>
  );
};

export default Quote;
