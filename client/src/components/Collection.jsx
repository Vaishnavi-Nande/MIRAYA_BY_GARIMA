import React from 'react';

export default function Collection({ products, activeCategory, onSelectCategory, onProductClick }) {
  const categories = [
    { label: 'All Masterpieces', value: null },
    { label: 'Lehenga', value: 'Lehenga' },
    { label: 'Saree', value: 'Saree' },
    { label: 'Anarkali Suit', value: 'Anarkali Suit' },
    { label: 'Sharara Suit', value: 'Sharara Suit' },
    { label: 'Indo-Western Gown', value: 'Indo-Western Gown' },
    { label: 'Kurti', value: 'Kurti' },
    { label: 'Salwar Suit', value: 'Salwar Suit' },
    { label: 'Co-ord Set', value: 'Co-ord Set' }
  ];

  return (
    <section id="masterpieces" className="border-grid-bottom" style={{ backgroundColor: 'var(--bg-white)', paddingTop: 'var(--navbar-height)' }}>
      {/* Category Navigation Bar */}
      <div 
        className="border-grid-bottom category-scroll-container flex flex-wrap items-center justify-center gap-x-4 gap-y-3 w-full max-w-7xl mx-auto px-6 py-6 mb-8" 
        style={{ 
          backgroundColor: 'var(--bg-warm-ivory)'
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={`category-tab flex-shrink-0 ${activeCategory === cat.value ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Product Cards */}
      <div className="grid-cols-4 animate-fade-in-quick grid grid-cols-1 md:grid-cols-3" key={activeCategory || 'all'}>
        {products.map((product) => (
          <div 
            key={product.id}
            onClick={() => onProductClick(product)}
            style={{
              backgroundColor: 'var(--bg-warm-ivory)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'var(--transition-smooth)',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="product-card"
          >
            {/* Image Container */}
            <div 
              className="editorial-image-container" 
              style={{ 
                height: '420px', 
                borderBottom: '1px solid var(--gold-border)' 
              }}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="editorial-image-frame image-smooth-fade"
                onError={(e) => {
                  e.target.src = '/images/hero_model.png';
                }}
              />
            </div>

            {/* Product Meta Details */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <span style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  color: 'var(--highlight-gold)', 
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  {product.category}
                </span>
                <h3 style={{ 
                  fontSize: '20px', 
                  lineHeight: '1.25', 
                  color: 'var(--text-dark)', 
                  marginBottom: '12px',
                  fontWeight: '300'
                }}>
                  {product.name}
                </h3>
              </div>
              
              <div className="product-card-meta" style={{ marginTop: '16px' }}>
                {/* Occasion Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {product.tags.map((tag) => (
                    <span 
                      key={tag} 
                      style={{ 
                        fontFamily: 'var(--font-body)', 
                        fontSize: '9px', 
                        letterSpacing: '0.05em', 
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(198, 164, 106, 0.25)',
                        padding: '3px 8px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  borderTop: '1px dashed var(--gold-border)',
                  paddingTop: '12px'
                }}>
                  <span style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '11px', 
                    letterSpacing: '0.1em', 
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}>
                    Price
                  </span>
                  <span style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: 'var(--accent-burgundy)' 
                  }}>
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Hover overlay button effect */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(94, 10, 11, 0.02)',
                opacity: 0,
                transition: 'var(--transition-fast)',
                pointerEvents: 'none'
              }}
              className="product-card-overlay"
            />
          </div>
        ))}
      </div>
      
      {products.length === 0 && (
        <div style={{ padding: '80px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
            No creations found in this collection.
          </p>
        </div>
      )}
    </section>
  );
}
