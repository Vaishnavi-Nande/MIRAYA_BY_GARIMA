import React from 'react';
import Footer from './Footer';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: 'var(--navbar-height)' }}>
      
      {/* 1. Top Banner Block */}
      <div 
        className="about-banner border-grid-bottom" 
        style={{ 
          height: '400px', 
          position: 'relative', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img 
          src="/images/textile_detail.png" 
          alt="Discover Miraya Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(74, 14, 23, 0.45)', // dark burgundy tint overlay
          zIndex: 1
        }}></div>
        <h1 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: 'clamp(36px, 5vw, 64px)', 
          color: 'var(--bg-warm-ivory)', 
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: '300',
          zIndex: 10,
          margin: 0
        }}>
          Discover Miraya
        </h1>
      </div>

      {/* 2. Story Content Block */}
      <div 
        className="about-story border-grid-bottom" 
        style={{ 
          padding: '80px 40px', 
          backgroundColor: 'var(--bg-white)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <h2 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: '36px', 
          color: 'var(--accent-burgundy)', 
          letterSpacing: '0.05em',
          fontWeight: '400',
          marginBottom: '24px'
        }}>
          The Miraya Experience
        </h2>
        <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--highlight-gold)', marginBottom: '32px' }}></div>
        <p style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: '18px', 
          lineHeight: '1.85', 
          color: 'var(--text-dark)', 
          maxWidth: '800px',
          margin: '0 auto 24px auto',
          textAlign: 'justify'
        }}>
          Miraya by Garima is born out of a passion to keep the heritage of Indian handlooms and artisans alive in a modern context. Every piece is crafted with raw silks, georgettes, and velvets, and features hand-embroidery like zardozi, dabka, and aari. The label focuses on creating heirloom items that transition gracefully across celebratory occasions and generations.
        </p>
        <span style={{ 
          fontFamily: 'var(--font-heading)', 
          fontStyle: 'italic', 
          fontSize: '24px', 
          color: 'var(--highlight-gold)', 
          letterSpacing: '0.05em',
          marginTop: '16px'
        }}>
          By Garima
        </span>
      </div>

      {/* 3. Philosophy Content Block */}
      <div 
        className="about-philosophy border-grid-bottom" 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          width: '100%',
          backgroundColor: 'var(--bg-warm-ivory)'
        }}
      >
        {/* Left Column: Text */}
        <div 
          className="about-phil-left" 
          style={{ 
            flex: '1 1 50%', 
            padding: '80px 60px', 
            borderRight: '1px solid var(--gold-border)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '32px', 
            color: 'var(--accent-burgundy)', 
            letterSpacing: '0.05em',
            fontWeight: '400',
            marginBottom: '24px'
          }}>
            The Essence of Miraya
          </h2>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--highlight-gold)', marginBottom: '32px' }}></div>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '16px', 
            lineHeight: '1.8', 
            color: 'var(--text-dark)', 
            textAlign: 'justify',
            margin: 0
          }}>
            Our philosophy rests on the integration of history, luxury, and wearability. We believe that festive wear should not only be breathtakingly beautiful but also comfortable and enduring. By marrying traditional motifs with contemporary cuts, Miraya designs silhouettes that empower women to celebrate their identity with effortless elegance.
          </p>
        </div>

        {/* Right Column: Image Frame */}
        <div 
          className="about-phil-right" 
          style={{ 
            flex: '1 1 50%', 
            position: 'relative',
            minHeight: '450px',
            overflow: 'hidden'
          }}
        >
          <img 
            src="/images/hero_model.png" 
            alt="The Essence of Miraya" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(74, 14, 23, 0.1)',
            pointerEvents: 'none'
          }}></div>
        </div>
      </div>

      {/* 4. Footer Integration */}
      <Footer />
      
    </div>
  );
}
