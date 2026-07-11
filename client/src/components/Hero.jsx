import React from 'react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="hero-video-section border-grid-bottom pt-24 md:pt-32 lg:pt-36 w-full min-h-[90vh] lg:min-h-screen relative flex items-center" style={{ marginTop: 0 }}>
      
      {/* Absolute Background Container with Autoplaying Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video 
          src="/hero-bg.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
        {/* Subtle, premium tint mask overlay */}
        <div className="hero-video-overlay" />
      </div>

      {/* Foreground Text Layering with premium dark luxury typography colors */}
      <div className="hero-video-content">
        <span className="text-xs font-light tracking-[0.3em] uppercase text-stone-200 mb-4 block">
          MIRAYA BY GARIMA
        </span>
        
        {/* Main Headline */}
        <h1 className="font-light tracking-[0.18em] uppercase text-white md:text-6xl lg:text-7xl">
          The Art Of ELEGANCE
        </h1>

        {/* Paragraph Body Block */}
        <p className="max-w-3xl mx-auto text-center text-sm md:text-base font-light tracking-wide text-stone-600 leading-relaxed md:leading-loose my-8" style={{ fontFamily: 'var(--font-body)' }}>
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




