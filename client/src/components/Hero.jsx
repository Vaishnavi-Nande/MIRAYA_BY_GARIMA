import React from 'react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="hero-video-section border-grid-bottom" style={{ marginTop: 'var(--navbar-height)' }}>
      
      {/* Absolute Background Container with Autoplaying Video */}
      <div className="hero-video-bg-container">
        <video 
          src="/hero-bg.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video-bg"
        />
        {/* Subtle, premium tint mask overlay */}
        <div className="hero-video-overlay" />
      </div>

      {/* Foreground Text Layering with premium dark luxury typography colors */}
      <div className="hero-video-content">
        <span style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: '14px', 
          letterSpacing: '0.3em', 
          color: 'rgba(254, 243, 199, 0.8)', // soft gold/champagne: text-amber-100/80
          textTransform: 'uppercase',
          fontWeight: '600',
          marginBottom: '24px',
          display: 'block'
        }}>
          MIRAYA BY GARIMA
        </span>
        
        {/* Main Headline Stacked */}
        <h1 style={{ margin: 0, padding: 0 }}>
          <span className="hero-title-art" style={{ 
            fontFamily: 'var(--font-heading)', 
            fontStyle: 'italic',
            fontSize: 'clamp(32px, 4.5vw, 48px)', // text-4xl md:text-5xl
            fontWeight: '300', // font-light
            color: '#F6F1EA', // Boutique Cream
            display: 'block',
            marginBottom: '8px', // mb-2
            textTransform: 'capitalize'
          }}>
            The Art of
          </span>
          <span className="hero-title-elegance" style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(44px, 6.5vw, 80px)', // bold capitalized base size
            fontWeight: '700', // bold
            letterSpacing: '0.05em',
            lineHeight: '1.1',
            color: '#f5f5f5', // premium off-white: text-neutral-100
            textTransform: 'uppercase',
            display: 'block'
          }}>
            ELEGANCE
          </span>
        </h1>

        {/* Paragraph Body Block */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(14px, 1.6vw, 16px)', // text-sm md:text-base
          color: 'rgba(229, 229, 229, 0.9)', // text-neutral-200/90
          maxWidth: '36rem', // max-w-xl
          fontWeight: '300',
          lineHeight: '1.7', // leading-relaxed
          marginTop: '16px', // mt-4
          marginBottom: '32px', // mb-8
          display: 'block'
        }}>
          Meaningful ethnic wear, designed to celebrate you. We weave traditional Indian craftsmanship into refined silhouettes for the modern wardrobe.
        </p>

        <div>
          <a href="#masterpieces" className="pointer-events-auto" style={{ pointerEvents: 'auto', textDecoration: 'none', display: 'inline-block' }}>
            <button className="hero-ghost-btn" onClick={onExploreClick} style={{ marginTop: 0 }}>
              <span>EXPLORE MASTERPIECES</span> <span className="arrow-icon">→</span>
            </button>
          </a>
        </div>
      </div>

    </section>
  );
}




