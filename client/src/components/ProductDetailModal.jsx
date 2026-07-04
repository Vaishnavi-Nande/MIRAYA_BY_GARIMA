import React, { useState } from 'react';

export default function ProductDetailModal({ product, isOpen, onClose, onAddToBag }) {
  const [selectedSize, setSelectedSize] = useState('');

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    if (product.sizes.length > 0 && !selectedSize && product.sizes[0] !== 'Free Size') {
      alert('Please select a size first.');
      return;
    }
    onAddToBag(product, selectedSize || 'Free Size');
    setSelectedSize('');
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div 
        className="modal-content-container animate-fade-in" 
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: 'var(--text-dark)',
            zIndex: 100
          }}
        >
          &times;
        </button>

        {/* Left Side: Product Image */}
        <div style={{ flex: '1 1 450px', height: '600px', overflow: 'hidden', borderRight: '1px solid var(--gold-border)' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = '/images/hero_model.png';
            }}
          />
        </div>

        {/* Right Side: Product Details */}
        <div style={{ flex: '1 1 400px', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '11px', 
              letterSpacing: '0.2em', 
              color: 'var(--highlight-gold)', 
              textTransform: 'uppercase',
              fontWeight: '600',
              display: 'block',
              marginBottom: '12px'
            }}>
              {product.category}
            </span>
            <h2 style={{ fontSize: '32px', color: 'var(--accent-burgundy)', fontWeight: '300', marginBottom: '16px', lineHeight: '1.2' }}>
              {product.name}
            </h2>
            <div style={{ fontSize: '24px', color: 'var(--text-dark)', fontWeight: '400', marginBottom: '24px' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '32px' }}>
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && product.sizes[0] !== 'Free Size' && (
              <div style={{ marginBottom: '32px' }}>
                <span style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  color: 'var(--text-dark)', 
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  Select Size
                </span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '10px 16px',
                        border: '1px solid',
                        borderColor: selectedSize === size ? 'var(--accent-burgundy)' : 'var(--gold-border)',
                        backgroundColor: selectedSize === size ? 'var(--accent-burgundy)' : 'transparent',
                        color: selectedSize === size ? 'var(--bg-warm-ivory)' : 'var(--text-dark)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedSize !== size) e.target.style.borderColor = 'var(--accent-burgundy)';
                      }}
                      onMouseLeave={(e) => {
                        if (selectedSize !== size) e.target.style.borderColor = 'var(--gold-border)';
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Fabric & Details List */}
            {product.details && (
              <div style={{ marginBottom: '32px', borderTop: '1px solid var(--gold-border)', paddingTop: '20px' }}>
                <span style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  color: 'var(--text-dark)', 
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  Creation Details
                </span>
                <ul style={{ listStyleType: 'square', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {product.details.map((detail, idx) => (
                    <li key={idx} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button className="cta-button" style={{ width: '100%' }} onClick={handleAdd}>
            <span>Add to Shopping Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
}
