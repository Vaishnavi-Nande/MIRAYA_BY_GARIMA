import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ cartCount, onCartClick, onSelectCategory }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

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

  const megaMenuCollections = [
    { name: 'Lehenga', value: 'Lehenga', image: '/images/products/lehenga_crimson.png' },
    { name: 'Saree', value: 'Saree', image: '/images/products/saree_burgundy.png' },
    { name: 'Anarkali', value: 'Anarkali Suit', image: '/images/products/anarkali_ivory.png' },
    { name: 'Indo-Western', value: 'Indo-Western Gown', image: '/images/products/gown_burgundy.png' },
    { name: 'Co-ord Set', value: 'Co-ord Set', image: '/images/products/coord_emerald.png' },
    { name: 'Sharara', value: 'Sharara', image: '/images/products/sharara_rose.png' },
    { name: 'Kurti', value: 'Kurti', image: '/images/products/kurti_gold.png' },
    { name: 'Salwar Suit', value: 'Salwar Suit', image: '/images/products/salwar_peach.png' }
  ];

  return (
    <div className="absolute top-0 left-0 right-0 w-full z-50 bg-transparent pt-4 navbar-animate">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <nav className="relative w-full flex items-center justify-between bg-[#fbfaf7] rounded-full border border-stone-200/50 px-8 py-3 shadow-sm h-16 md:h-20">
        
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
        <div className="desktop-nav-links flex items-center justify-center gap-10 md:gap-14">
          
          <a 
            href="/"
            onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
            className="luxury-link text-xs tracking-widest font-light text-stone-800 transition-colors duration-300"
            style={{ 
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            HOME
          </a>

          {/* Collection Dropdown */}
          <div 
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span 
              className="luxury-link text-xs tracking-widest font-light text-stone-800 transition-colors duration-300"
              style={{ 
                cursor: 'pointer',
                paddingBottom: '20px'
              }}
            >
              COLLECTION <span style={{ fontSize: '10px', marginLeft: '4px', verticalAlign: 'middle' }}>▼</span>
            </span>

            {isDropdownOpen && (
              <div 
                className="absolute left-0 right-0 top-full mt-2 w-full max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-stone-200/60 rounded-3xl p-6 shadow-xl grid grid-cols-4 md:grid-cols-5 gap-4 z-50 animate-fade-in"
                style={{ cursor: 'default' }}
              >
                {megaMenuCollections.map((col) => (
                  <div 
                    key={col.value}
                    onClick={() => {
                      navigateTo(`/collections/${col.value.toLowerCase().replace(/ /g, '-')}`);
                      setIsDropdownOpen(false);
                    }}
                    className="flex flex-col gap-2 group cursor-pointer overflow-hidden rounded-xl"
                  >
                    <div className="w-full h-28 bg-stone-100 rounded-xl overflow-hidden mb-2">
                      <img 
                        src={col.image} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt={col.name} 
                      />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-stone-800 text-center uppercase">
                      {col.name}
                    </span>
                  </div>
                ))}

                {/* 9th card: Explore All */}
                <div 
                  onClick={() => {
                    navigateTo('/collections');
                    setIsDropdownOpen(false);
                  }}
                  className="flex flex-col gap-2 group cursor-pointer overflow-hidden rounded-xl"
                >
                  <div className="w-full h-28 bg-stone-100 rounded-xl overflow-hidden mb-2 flex items-center justify-center border border-dashed border-stone-300 group-hover:border-stone-500 transition-colors duration-300">
                    <span className="text-stone-400 group-hover:text-stone-600 transition-colors duration-300 text-lg">→</span>
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-stone-500 text-center uppercase">
                    ALL MASTERPIECES
                  </span>
                </div>

              </div>
            )}
          </div>

          <span 
            onClick={() => navigateTo('/about')}
            className="luxury-link text-xs tracking-widest font-light text-stone-800 transition-colors duration-300"
            style={{ 
              cursor: 'pointer'
            }}
          >
            ABOUT US
          </span>


          <span 
            onClick={() => navigateTo('/contact')}
            className="luxury-link text-xs tracking-widest font-light text-stone-800 transition-colors duration-300"
            style={{ 
              cursor: 'pointer'
            }}
          >
            CONTACT US
          </span>
        </div>

        {/* Shopping Bag & Hamburger */}
        <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {!isLoggedIn ? (
            <span 
              className="text-xs font-light tracking-widest text-stone-600 hover:text-stone-900 uppercase cursor-pointer mr-4"
              onClick={() => setShowAuthModal(true)}
              style={{ fontFamily: 'var(--font-body)', userSelect: 'none' }}
            >
              SIGN IN
            </span>
          ) : (
            <div 
              className="w-7 h-7 bg-stone-100 border border-stone-200 rounded-full flex items-center justify-center text-[10px] font-medium text-stone-700 tracking-tighter cursor-pointer mr-4"
              onClick={() => setIsLoggedIn(false)}
              style={{ fontFamily: 'var(--font-body)', userSelect: 'none' }}
              title="Click to sign out"
            >
              MG
            </div>
          )}

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

      </nav>

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

      {/* Mock Authentication Modal */}
      {showAuthModal && (
        <div 
          className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[99999] w-[90%] max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-stone-200"
          style={{ transform: 'translateX(-50%)' }}
        >
          {/* Close Button */}
          <button 
            onClick={() => setShowAuthModal(false)} 
            className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 text-sm font-light tracking-widest"
            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            CLOSE
          </button>

          {/* Header */}
          <div style={{ textAlign: 'center' }}>
            <span style={{ 
              fontSize: '10px', 
              fontWeight: '300', 
              letterSpacing: '0.25em', 
              color: 'var(--highlight-gold)', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px'
            }}>
              Miraya Atelier
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '28px',
              fontWeight: '300',
              color: 'var(--accent-burgundy)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              margin: 0
            }}>
              Welcome Back
            </h2>
          </div>

          {/* Simulated Auth Form */}
          <form onSubmit={(e) => {
            e.preventDefault();
            setIsLoggedIn(true);
            setShowAuthModal(false);
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{
                fontSize: '10px',
                fontWeight: '500',
                letterSpacing: '0.15em',
                color: 'var(--accent-burgundy)',
                textTransform: 'uppercase'
              }}>
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                required
                defaultValue="garima@miraya.com"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  fontSize: '13px',
                  color: 'var(--accent-burgundy)',
                  fontFamily: 'var(--font-body)',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{
                fontSize: '10px',
                fontWeight: '500',
                letterSpacing: '0.15em',
                color: 'var(--accent-burgundy)',
                textTransform: 'uppercase'
              }}>
                Password
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required
                defaultValue="premium123"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  fontSize: '13px',
                  color: 'var(--accent-burgundy)',
                  fontFamily: 'var(--font-body)',
                  outline: 'none'
                }}
              />
            </div>

            <button 
              type="submit" 
              style={{
                backgroundColor: 'var(--accent-burgundy)',
                border: 'none',
                borderRadius: '30px',
                color: 'var(--bg-warm-ivory)',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                letterSpacing: '0.2em',
                padding: '14px 20px',
                cursor: 'pointer',
                fontWeight: '600',
                textTransform: 'uppercase',
                marginTop: '10px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#4c0d16'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--accent-burgundy)'}
            >
              Sign In
            </button>
          </form>

          <div style={{ textAlign: 'center', fontSize: '11px', color: '#78716c', letterSpacing: '0.05em' }}>
            Simulating Guest Profile 'MG' (Garima)
          </div>
        </div>
      )}

    </div>
    </div>
  );
}
