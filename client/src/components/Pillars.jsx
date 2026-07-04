import React from 'react';

export default function Pillars() {
  const pillars = [
    {
      title: "Refined",
      subtitle: "PRECISE ELEGANCE",
      desc: "Every silhouette is meticulously tailored, balancing structured drapery with fluid grace. We choose only the finest silks, georgettes, and organic fabrics that whisper luxury with every thread and stitch."
    },
    {
      title: "Authentic",
      subtitle: "HERITAGE CRAFT",
      desc: "Our garments celebrate the handloom weavers and zardozi artisans of India. By preserving age-old embellishment techniques, we honor heritage while breathing new life into traditional occasion wear."
    },
    {
      title: "Aspirational",
      subtitle: "FOR GENERATIONS",
      desc: "Miraya designs are created to be heirloom pieces. Bridging the aesthetic tastes of mothers, daughters, and granddaughters, we cultivate a shared lineage of style, dignity, and elegance."
    }
  ];

  return (
    <section id="brand-pillars" className="border-grid-bottom" style={{ backgroundColor: 'var(--bg-warm-ivory)' }}>
      {/* Title block */}
      <div className="border-grid-bottom" style={{ padding: '60px 40px', textAlign: 'center' }}>
        <span style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: '11px', 
          letterSpacing: '0.25em', 
          color: 'var(--highlight-gold)', 
          textTransform: 'uppercase',
          fontWeight: '600',
          display: 'block',
          marginBottom: '16px'
        }}>
          Our Philosophy
        </span>
        <h2 style={{ fontSize: '36px', color: 'var(--accent-burgundy)', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          The Core Pillars of Miraya
        </h2>
      </div>

      {/* 3-column Grid */}
      <div className="pillars-row" style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        {pillars.map((p, idx) => (
          <div 
            key={p.title} 
            style={{ 
              flex: '1 1 33.333%', 
              padding: '60px 40px', 
              borderRight: idx < 2 ? '1px solid var(--gold-border)' : 'none',
              backgroundColor: 'var(--bg-warm-ivory)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
            className="pillar-column"
          >
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'var(--highlight-gold)',
              textTransform: 'uppercase',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              {p.subtitle}
            </span>
            <h3 style={{ 
              fontSize: '32px', 
              color: 'var(--accent-burgundy)', 
              fontWeight: '300', 
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {p.title}
            </h3>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '14px', 
              lineHeight: '1.8', 
              color: 'var(--text-muted)',
              maxWidth: '320px',
              margin: '0 auto'
            }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
