import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';

export default function Navbar({ cartCount, onCartClick, onSelectCategory }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/about';

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
    <div className={isHome ? "absolute top-0 left-0 w-full z-50 bg-transparent border-none shadow-none pt-4 navbar-animate" : "relative w-full z-50 bg-[#FAF7F2] border-b border-stone-200 shadow-sm navbar-animate"}>
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <nav className="relative w-full flex items-center justify-between bg-transparent border-none shadow-none px-8 py-3 h-20 md:h-24">
        
        {/* Brand Logo */}
        <div className="flex-shrink-0 flex items-center" onClick={() => { navigateTo('/'); setIsMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>
          <img 
            src="/R.png" 
            alt="Miraya by Garima Logo" 
            className="navbar-logo h-16 md:h-20 w-auto"
            style={{ padding: '2px', filter: isHome ? 'brightness(0) invert(1)' : 'none' }} 
            onError={(e) => {
              // fallback to logo R.png if R.png fails
              e.target.src = '/logo R.png';
              e.target.style.filter = isHome ? 'brightness(0) invert(1)' : 'none';
            }}
          />
        </div>

        {/* Navigation Links */}
        <div className="desktop-nav-links flex items-center justify-center gap-10 md:gap-14">
          
          <a 
            href="/"
            onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
            className={`luxury-link text-xs tracking-widest font-light transition-colors duration-300 ${isHome ? 'text-white' : 'text-stone-800'}`}
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
              className={`luxury-link text-xs tracking-widest font-light transition-colors duration-300 ${isHome ? 'text-white' : 'text-stone-800'}`}
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
                    <div className="w-full h-28 bg-[#FAF7F2] rounded-xl overflow-hidden mb-2">
                      <img 
                        src={col.image} 
                        className="w-full h-full object-contain bg-[#FAF7F2] transition-transform duration-500 group-hover:scale-105" 
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
            className={`luxury-link text-xs tracking-widest font-light transition-colors duration-300 ${isHome ? 'text-white' : 'text-stone-800'}`}
            style={{ 
              cursor: 'pointer'
            }}
          >
            ABOUT US
          </span>


          <span 
            onClick={() => navigateTo('/contact')}
            className={`luxury-link text-xs tracking-widest font-light transition-colors duration-300 ${isHome ? 'text-white' : 'text-stone-800'}`}
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
              className={`text-xs font-light tracking-widest uppercase cursor-pointer mr-4 ${isHome ? 'text-white hover:text-stone-200' : 'text-stone-600 hover:text-stone-900'}`}
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
            className={`navbar-bag-btn ${isHome ? 'text-white' : 'text-stone-800'}`}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              cursor: 'pointer', 
              padding: '6px 12px',
              border: isHome ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid var(--gold-border)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = isHome ? '#ffffff' : 'var(--accent-burgundy)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = isHome ? 'rgba(255, 255, 255, 0.4)' : 'var(--gold-border)'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isHome ? 'currentColor' : 'var(--accent-burgundy)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
            className={`mobile-nav-toggle ${isHome ? 'text-white' : ''}`}
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
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        onSuccess={() => setIsLoggedIn(true)} 
      />

    </div>
    </div>
  );
}
