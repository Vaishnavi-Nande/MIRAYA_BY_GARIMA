import React from 'react';

export default function About() {
  return (
    <section id="about" className="border-grid-bottom" style={{ backgroundColor: 'var(--bg-warm-ivory)' }}>
      {/* Premium Asymmetrical Split Layout Brand Story Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16 pb-12 px-6">
        {/* Left Column Header (Span 1) */}
        <div className="md:col-span-1 border-r border-stone-200 pr-6 text-left">
          <span className="text-xs tracking-[0.3em] uppercase text-stone-400 block mb-2" style={{ fontFamily: 'var(--font-body)' }}>THE MAISON</span>
          <h2 className="text-3xl font-serif tracking-wide text-stone-800 uppercase font-light" style={{ margin: 0 }}>OUR STITCH,<br/>YOUR STORY</h2>
        </div>

        {/* Right Column Paragraph (Span 2) */}
        <p className="md:col-span-2 text-sm md:text-base font-light tracking-wide text-stone-600 leading-relaxed text-left pl-2" style={{ fontFamily: 'var(--font-body)', margin: 0 }}>
          Miraya by Garima is a premium ethnic wear brand that celebrates timeless Indian craftsmanship with a refined contemporary perspective. Designed for women across generations, Miraya offers thoughtfully curated festive and occasion wear ranging from ₹5,000 to ₹30,000, blending luxurious fabrics, graceful silhouettes, and sophisticated detailing for every special moment.
        </p>
      </div>

      {/* Inner panel with macro textile embroidery detail shot */}
      <div className="border-grid-top about-textile-container" style={{ padding: '80px 40px' }}>
        <div 
          className="editorial-image-container about-textile-frame" 
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
          <div 
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10"
            style={{
              position: 'absolute',
              color: 'var(--bg-warm-ivory)',
              zIndex: 10
            }}
          >
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
