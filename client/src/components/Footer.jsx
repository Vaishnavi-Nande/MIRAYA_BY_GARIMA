import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();
      if (res.ok) {
        setIsSuccess(true);
        setStatusMsg(data.message);
        setEmail('');
      } else {
        setIsSuccess(false);
        setStatusMsg(data.message || 'An error occurred.');
      }
    } catch (err) {
      console.error(err);
      setIsSuccess(false);
      setStatusMsg('Could not connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="footer-brand" className="brand-footer" style={{ 
      backgroundColor: 'var(--accent-burgundy)', 
      color: 'var(--bg-warm-ivory)',
      padding: '80px 40px 40px 40px',
      borderTop: '1px solid var(--gold-border-solid)'
    }}>
      <div className="container-fluid">
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          gap: '48px',
          marginBottom: '60px'
        }}>
          
          {/* Brand Info & Newsletter */}
          <div style={{ flex: '1 1 400px', minWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <img 
                src="/R.png" 
                alt="Miraya Logo" 
                style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)' }} 
                onError={(e) => {
                  e.target.src = '/logo R.png';
                }}
              />
              <span style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '22px', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                color: 'var(--bg-warm-ivory)'
              }}>
                Miraya
              </span>
            </div>
            
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '14px', 
              color: 'rgba(248, 245, 240, 0.75)', 
              lineHeight: '1.7',
              marginBottom: '32px',
              maxWidth: '360px'
            }}>
              Join the inner circle of Miraya for early access to private seasonal launches, design histories, and exclusive artisanal exhibitions.
            </p>

            {/* Newsletter form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', borderBottom: '1px solid var(--highlight-gold)', paddingBottom: '8px' }}>
                <input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--bg-warm-ivory)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    flexGrow: 1,
                    padding: '8px 0'
                  }}
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'var(--highlight-gold)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '0 8px',
                    textTransform: 'uppercase'
                  }}
                >
                  {loading ? 'Submitting...' : 'Subscribe'}
                </button>
              </div>

              {statusMsg && (
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '12px', 
                  color: isSuccess ? 'var(--highlight-gold)' : '#ff6b6b',
                  letterSpacing: '0.05em',
                  marginTop: '8px',
                  lineHeight: '1.4'
                }}>
                  {statusMsg}
                </p>
              )}
            </form>

            {/* Boutique Contact Details */}
            <div className="mt-12 text-left max-w-sm">
              <h4 className="text-xs font-medium tracking-[0.25em] text-stone-300 uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Boutique
              </h4>
              <div className="text-xs font-light tracking-widest text-stone-400 leading-relaxed space-y-2" style={{ fontFamily: 'var(--font-body)' }}>
                <p style={{ margin: 0 }}>Shop no. UG/5, Jagat Plaza, Mouze Pandharabodi, Law College Square, Amravati Rd, Nagpur, Maharashtra 440033</p>
                <p style={{ margin: 0 }}>Email: <a href="mailto:hello@miraya.com" className="text-xs font-light tracking-widest text-stone-400 hover:text-amber-600 transition-colors duration-300" style={{ textDecoration: 'none' }}>hello@miraya.com</a></p>
                <p style={{ margin: 0 }}>Phone: +91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Sitemaps */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', flex: '1 1 400px' }}>
            {/* Catalog Sitemap */}
            <div style={{ minWidth: '150px' }}>
              <h4 className="text-xs font-medium tracking-[0.25em] text-stone-300 uppercase mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                Collections
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Lehengas', 'Sarees', 'Anarkalis', 'Shararas', 'Gowns', 'Kurtis'].map((item) => (
                  <li key={item}>
                    <a href="#collection-grid" className="text-xs font-light tracking-widest text-stone-400 hover:text-amber-600 transition-colors duration-300 block my-3" style={{ 
                      textDecoration: 'none',
                      fontFamily: 'var(--font-body)'
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand Sitemap */}
            <div style={{ minWidth: '150px' }}>
              <h4 className="text-xs font-medium tracking-[0.25em] text-stone-300 uppercase mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                The Maison
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Our Story', 'Artisanal Legacy', 'Exhibitions', 'Press', 'Private Dressing', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#brand-pillars" className="text-xs font-light tracking-widest text-stone-400 hover:text-amber-600 transition-colors duration-300 block my-3" style={{ 
                      textDecoration: 'none',
                      fontFamily: 'var(--font-body)'
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assistance Sitemap */}
            <div style={{ minWidth: '150px' }}>
              <h4 className="text-xs font-medium tracking-[0.25em] text-stone-300 uppercase mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                Services
              </h4>
               <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Contact Boutique', 'Sizing Consultation', 'Shipping & Customs', 'Returns & Exchanges', 'Care & Restorations'].map((item) => (
                  <li key={item}>
                    <span className="text-xs font-light tracking-widest text-stone-400 hover:text-amber-600 transition-colors duration-300 block my-3" style={{ 
                      fontFamily: 'var(--font-body)',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      if (item === 'Contact Boutique') {
                        alert(
                          `Official Contact Information:\n\n` +
                          `Address: Shop no. UG/5, Jagat Plaza, Mouze Pandharabodi, Law College Square, Amravati Rd, Nagpur, Maharashtra 440033\n` +
                          `Email: hello@miraya.com\n` +
                          `Phone: +91 98765 43210`
                        );
                      } else {
                        alert(`Consultation service detail: Please contact hello@miraya.com`);
                      }
                    }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>


          </div>

        </div>

        {/* Footer Bottom */}
        <div style={{ 
          borderTop: '1px solid rgba(248, 245, 240, 0.15)', 
          paddingTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px'
        }}>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '12px', 
            color: 'rgba(248, 245, 240, 0.5)',
            letterSpacing: '0.05em'
          }}>
            &copy; {new Date().getFullYear()} Miraya by Garima. Crafted with Pride in India. All Rights Reserved.
          </p>

          {/* Social Icons (SVGs) */}
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Instagram */}
            <a href="#" style={{ color: 'var(--highlight-gold)' }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" style={{ color: 'var(--highlight-gold)' }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.498 3.146 1.124.347 2.317.535 3.554.535 6.622 0 11.988-5.366 11.988-11.987C23.997 5.367 18.631 0 12.017 0z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" style={{ color: 'var(--highlight-gold)' }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
