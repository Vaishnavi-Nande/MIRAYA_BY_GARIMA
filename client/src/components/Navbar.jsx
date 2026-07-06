import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ cartCount, onCartClick, onSelectCategory }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);

  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collections = [
    { name: 'Lehenga', value: 'Lehenga' },
    { name: 'Saree', value: 'Saree' },
    { name: 'Anarkali Suit', value: 'Anarkali Suit' },
    { name: 'Sharara Suit', value: 'Sharara Suit' },
    { name: 'Indo-Western Gown', value: 'Indo-Western Gown' },
    { name: 'Kurti', value: 'Kurti' },
    { name: 'Salwar Suit', value: 'Salwar Suit' },
    { name: 'Co-ord Set', value: 'Co-ord Set' },
  ];

  return (
    <nav className={`navbar navbar-animate ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        
        {/* Brand Logo & Name */}
        <div className="navbar-brand-container" style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }} onClick={() => { navigateTo('/'); setIsMobileMenuOpen(false); }}>
          <img 
            src="/R.png" 
            alt="Miraya by Garima Logo" 
            className="navbar-logo"
            style={{ height: '48px', width: 'auto', padding: '4px' }} 
            onError={(e) => {
              // fallback to logo R.png if R.png fails
              e.target.src = '/logo R.png';
            }}
          />
        </div>

        {/* Navigation Links */}
        <div className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          
          <a 
            href="/"
            onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
            style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '13px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              color: 'var(--text-dark)', 
              cursor: 'pointer',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            Home
          </a>

          {/* Collection Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '13px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              color: 'var(--text-dark)', 
              cursor: 'pointer',
              fontWeight: '500',
              paddingBottom: '8px'
            }}>
              Collections <span style={{ fontSize: '10px', marginLeft: '4px', verticalAlign: 'middle' }}>▼</span>
            </span>

            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '24px',
                left: '-10px',
                backgroundColor: 'var(--bg-warm-ivory)',
                border: '1px solid var(--gold-border)',
                minWidth: '220px',
                boxShadow: '0 10px 30px rgba(94, 10, 11, 0.08)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                animation: 'fadeIn 0.2s ease-out forwards'
              }}>
                <button 
                  onClick={() => { navigateTo('/collections'); setIsDropdownOpen(false); }}
                  style={{
                    textAlign: 'left',
                    padding: '12px 20px',
                    border: 'none',
                    background: 'none',
                    fontSize: '13px',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.1em',
                    color: 'var(--text-dark)',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(198, 164, 106, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  All Masterpieces
                </button>
                {collections.map((col) => (
                  <button 
                    key={col.value}
                    onClick={() => { navigateTo(`/collections/${col.value.toLowerCase().replace(/ /g, '-')}`); setIsDropdownOpen(false); }}
                    style={{
                      textAlign: 'left',
                      padding: '12px 20px',
                      border: 'none',
                      background: 'none',
                      fontSize: '13px',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.1em',
                      color: 'var(--text-dark)',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                      borderTop: '1px solid rgba(198, 164, 106, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(198, 164, 106, 0.1)';
                      e.target.style.color = 'var(--accent-burgundy)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--text-dark)';
                    }}
                  >
                    {col.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span 
            onClick={() => navigateTo('/about')}
            style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '13px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              color: 'var(--text-dark)', 
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            About
          </span>


          <span 
            onClick={() => navigateTo('/contact')}
            style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '13px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              color: 'var(--text-dark)', 
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Contact Us
          </span>
        </div>

        {/* Shopping Bag & Hamburger */}
        <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          <div 
            onClick={onCartClick} 
            className="navbar-bag-btn"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              cursor: 'pointer', 
              padding: '6px 12px',
              border: '1px solid var(--gold-border)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-burgundy)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--gold-border)'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-burgundy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '12px', 
              letterSpacing: '0.1em', 
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              Bag ({cartCount})
            </span>
          </div>

          <button 
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <a 
          href="/"
          className="mobile-menu-link"
          style={{ textDecoration: 'none' }}
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/');
            setIsMobileMenuOpen(false);
          }}
        >
          Home
        </a>

        <button 
          className="mobile-menu-link" 
          onClick={() => setIsMobileCollectionsOpen(!isMobileCollectionsOpen)}
        >
          <span>Collections</span>
          <span style={{ fontSize: '10px' }}>{isMobileCollectionsOpen ? '▲' : '▼'}</span>
        </button>
        
        <div className={`mobile-submenu ${isMobileCollectionsOpen ? 'open' : ''}`}>
          <button 
            className="mobile-submenu-btn"
            onClick={() => {
              navigateTo('/collections');
              setIsMobileMenuOpen(false);
            }}
          >
            All Masterpieces
          </button>
          {collections.map((col) => (
            <button 
              key={col.value}
              className="mobile-submenu-btn"
              onClick={() => {
                navigateTo(`/collections/${col.value.toLowerCase().replace(/ /g, '-')}`);
                setIsMobileMenuOpen(false);
              }}
            >
              {col.name}
            </button>
          ))}
        </div>

        <button 
          className="mobile-menu-link"
          onClick={() => {
            navigateTo('/about');
            setIsMobileMenuOpen(false);
          }}
        >
          About
        </button>


        <button 
          className="mobile-menu-link"
          onClick={() => {
            navigateTo('/contact');
            setIsMobileMenuOpen(false);
          }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
