import React from 'react';

export default function About() {
  return (
    <section className="border-grid-bottom" style={{ backgroundColor: 'var(--bg-warm-ivory)' }}>
      {/* 2-Column Intro Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        {/* Left Column: Title */}
        <div style={{ 
          flex: '1 1 40%', 
          padding: '80px 60px', 
          borderRight: '1px solid var(--gold-border)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          <h2 style={{ 
            fontSize: '48px', 
            color: 'var(--accent-burgundy)', 
            fontWeight: '300',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Introduction
          </h2>
          <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--highlight-gold)', marginTop: '24px' }}></div>
        </div>

        {/* Right Column: Narrative */}
        <div style={{ 
          flex: '1 1 60%', 
          padding: '80px 60px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center' 
        }}>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '18px', 
            lineHeight: '1.85', 
            color: 'var(--text-dark)',
            letterSpacing: '0.02em',
            textAlign: 'justify'
          }}>
            Miraya by Garima is a premium ethnic wear brand that celebrates timeless Indian craftsmanship with a refined contemporary perspective. Designed for women across generations, Miraya offers thoughtfully curated festive and occasion wear ranging from ₹5,000 to ₹30,000, blending luxurious fabrics, graceful silhouettes, and sophisticated detailing for every special moment.
          </p>
        </div>
      </div>

      {/* Inner panel with macro textile embroidery detail shot */}
      <div className="border-grid-top" style={{ padding: '40px' }}>
        <div 
          className="editorial-image-container" 
          style={{ 
            height: '450px', 
            border: '1px solid var(--gold-border)', 
            position: 'relative' 
          }}
        >
          <img 
            src="/images/textile_detail.png" 
            alt="Hand-embroidered zardozi gold details on raw silk" 
            className="editorial-image-frame"
          />
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(94, 10, 11, 0.1)',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            color: 'var(--bg-warm-ivory)',
            zIndex: 10
          }}>
            <h3 style={{ color: 'var(--bg-warm-ivory)', fontSize: '24px', marginBottom: '8px', letterSpacing: '0.1em' }}>
              The Art of Zardozi
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Intricate detailing & meticulous metallic threadwork
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
