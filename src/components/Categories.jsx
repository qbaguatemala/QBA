import React from 'react';
import './Categories.css';

const categoriesData = [
  {
    id: 1,
    title: 'Jabones de Glicerina',
    description: 'Hidratación profunda con aromas naturales',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSHXX1z-KpyrtpG32w7QcnHxZZXlX_guapyW_PqMZLZStNtJVz8i5CUYL7bEl5OdYwRcrxZD56e84_6sCRS1Ss43SbW-3Ew0lNPiV1ve8X3-WiP-NMQK3mgXIQ97GQgYJwuJ-EfViR-xGJL0OT6rilI9Fn3Y0RpWSUyY-R4tDsL5vfp-bsx2PqaGIHYlLgIDf9ZVhwGLrD1SFW4BsLvF0hB_1MRVOp7c14XVUgixehDn0ZwrSX7_UDn8SGwVyssDgaNuvkInY7OylV',
    alt: 'Handcrafted clear and colorful glycerin soaps',
  },
  {
    id: 2,
    title: 'Champú Sólido',
    description: 'Cuidado capilar zero waste y concentrado',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHvZaUJaLVeodAMLpQU2OetFF--fN3-VdAOSv8hfim_DMrHLSmvRn87I6yXsVk2iEVX3H_PdM3n1xWMjIAkxwGooHx1pnQPSmHOWlUleR0lXh-EFEIabifBRBPh71V_CPsZ3wMLVWeThrFc79PkMr8ywgSRNaZhERmt3q1xprPBBxCq-3eXdUxjevT_x1XgMiEHIY9Awgh_cFbVJHs-NWjR9qRcOTrDDhpYr0z-d6f57r3Fb1k2rWJKPlR-6ejyVUzhZcIalN7-gvo',
    alt: 'Minimalist solid shampoo bars',
    bordered: true,
  },
  {
    id: 3,
    title: 'Desodorantes Naturales',
    description: 'Protección efectiva libre de químicos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpiaW7XD_70Cks8L5Ln-UIksdHna3O0EgAgL09k5TlEtV3QN1c7gs0l23Yei8le6Xznyny70tda6hPRwbuV19_lo5-a2Z0T-A_pHYQGyMZXnMVMNQFwP3dQEyJG5hhlNqlpV8OpXlBS0Ya79QQnc7VOstoKR-P9s6dMhjjsILHwqb61O4hq-NEppZeiHdoMEzGU9U81IjX2XGTzBlasAz_z0a4wO_OZzAAy2NPVGA5LPpOL3aQKgrcLzfwrUNpMPzjpwgyr_dVtxDR',
    alt: 'Natural cream deodorants',
  }
];

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
