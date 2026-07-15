import React from 'react';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

// Lotus / floral decorative SVG icon
const LotusIcon = ({ size = 20, color = '#D4B26F' }) => (
  <svg style={{ width: size, height: size, flexShrink: 0 }} viewBox="0 0 24 24" fill={color}>
    <path d="M12 21c-2-2.5-5-3-7-1.5 1-4 4.5-5.5 7-5.5s6 1.5 7 5.5c-2-1.5-5-1-7 1.5z" />
    <path d="M12 16c0-3-2-5-4-6 0 3 1.5 5.5 4 6z" />
    <path d="M12 16c0-3 2-5 4-6 0 3-1.5 5.5-4 6z" />
    <path d="M12 10c0-2.5-1.5-4.5-3-5.5C9 7 10 9.5 12 10z" />
    <path d="M12 10c0-2.5 1.5-4.5 3-5.5-0 2.5-1 5-3 5.5z" />
  </svg>
);

// Gold horizontal rule divider
const GoldDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '12px 0 24px' }}>
    <div style={{ width: '48px', height: '1px', background: '#D4B26F', opacity: 0.7 }} />
    <span style={{ color: '#D4B26F', fontSize: '8px' }}>◆</span>
    <div style={{ width: '48px', height: '1px', background: '#D4B26F', opacity: 0.7 }} />
  </div>
);

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: 'var(--navbar-height)' }}>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1: "Discover Miraya" Hero Banner (Deep Burgundy)
      ═══════════════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <div style={{ position: 'relative', width: '100%', background: '#4A1D24', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', minHeight: '520px' }}>
          
          {/* Left Text Block */}
          <div style={{ flex: '0 0 45%', minWidth: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 10, color: 'white', padding: '80px 8% 80px 10%' }}>
            
            {/* Tagline row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <LotusIcon size={16} />
              <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#D4B26F', fontWeight: 600, textTransform: 'uppercase' }}>
                Rooted in Tradition. Designed for Today.
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 300, letterSpacing: '0.04em', lineHeight: 1.1, marginBottom: '20px', color: 'white' }}>
              DISCOVER <br />
              <span style={{ color: '#D4B26F' }}>MIRAYA</span>
            </h1>

            {/* Gold divider */}
            <GoldDivider />

            {/* Subtext */}
            <p style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', color: '#d6d3d1', lineHeight: 1.8, fontWeight: 300, maxWidth: '380px' }}>
              Timeless silhouettes, exquisite craftsmanship, and heritage woven into every thread.
            </p>

            {/* Curved SVG shape at right boundary */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '100%', width: '100px', color: '#4A1D24', zIndex: 20, pointerEvents: 'none', marginLeft: '-1px' }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 100 500" preserveAspectRatio="none" fill="currentColor">
                <path d="M0,0 L100,0 C65,150 35,350 0,500 Z" />
              </svg>
            </div>
          </div>

          {/* Right Image Block */}
          <div style={{ flex: '1 1 55%', minWidth: '280px', position: 'relative', overflow: 'hidden', minHeight: '380px' }}>
            <img
              src="/images/about_hero_saree.png"
              alt="Discover Miraya Saree Showcase"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              onError={(e) => { e.target.src = '/images/hero_model.png'; }}
            />
            {/* Subtle vignette overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #4A1D24 0%, transparent 20%, transparent 80%, #4A1D24 100%)', opacity: 0.3, pointerEvents: 'none' }} />
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2: "The Miraya Experience" — Cream Three-Column Block
      ═══════════════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <div style={{ background: '#FAF7F2', borderBottom: '1px solid rgba(120,113,108,0.15)', position: 'relative', overflow: 'hidden', padding: 'clamp(40px, 8%, 80px) 10%' }}>
          
          {/* Faint watermark floral in background */}
          <svg style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '180px', height: 'auto', opacity: 0.035, pointerEvents: 'none', color: '#4A1D24' }} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M20,100 C40,70 60,60 80,80 C100,100 120,70 140,50" />
            <path d="M80,80 C70,110 90,130 110,120 C130,110 150,130 170,100" />
            <circle cx="80" cy="80" r="4" fill="currentColor" />
            <circle cx="110" cy="120" r="3.5" fill="currentColor" />
            <path d="M40,90 Q70,75 90,95 T150,60" />
          </svg>

          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
            
            {/* Column 1 — Brand Narrative */}
            <div style={{ flex: '0 1 280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <LotusIcon size={22} />
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#4A1D24', fontWeight: 400, marginTop: '14px', marginBottom: '8px', lineHeight: 1.2 }}>
                  The Miraya <em style={{ fontWeight: 300 }}>Experience</em>
                </h2>
                <div style={{ width: '48px', height: '1px', background: '#D4B26F', marginBottom: '20px' }} />
                <p style={{ fontSize: '0.82rem', color: '#57534e', lineHeight: 1.9, fontWeight: 300, marginBottom: '12px' }}>
                  Miraya by Garima is born out of a passion to keep the heritage of Indian handlooms and artisans alive in a modern context. Every piece is crafted with raw silks, georgettes, and velvets, and features hand-embroidery like zardozi, dabka, and aari.
                </p>
                <p style={{ fontSize: '0.82rem', color: '#57534e', lineHeight: 1.9, fontWeight: 300, marginBottom: '28px' }}>
                  The label focuses on creating heirloom items that transition gracefully across celebratory occasions and generations.
                </p>
              </div>
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', fontSize: '1.4rem', color: '#D4B26F', letterSpacing: '0.04em' }}>
                By Garima
              </span>
            </div>

            {/* Column 2 — Three Core Brand Pillars */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexWrap: 'wrap', gap: '24px', borderLeft: '1px solid rgba(120,113,108,0.15)', borderRight: '1px solid rgba(120,113,108,0.15)', padding: '0 48px' }}>
              
              {/* Pillar 1 */}
              <div style={{ flex: 1, minWidth: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '8px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#4A1D24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', boxShadow: '0 4px 12px rgba(74,29,36,0.25)' }}>
                  <LotusIcon size={20} />
                </div>
                <h4 style={{ fontSize: '10px', fontWeight: 600, color: '#44403c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>Heritage<br />Rooted</h4>
                <p style={{ fontSize: '11px', color: '#78716c', lineHeight: 1.7, fontWeight: 300 }}>Honoring India's rich traditions and timeless craftsmanship.</p>
                <div style={{ width: '32px', height: '1px', background: '#D4B26F', opacity: 0.5, marginTop: '14px' }} />
              </div>

              <div style={{ width: '1px', background: 'rgba(120,113,108,0.15)', alignSelf: 'stretch' }} />

              {/* Pillar 2 */}
              <div style={{ flex: 1, minWidth: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '8px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#4A1D24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', boxShadow: '0 4px 12px rgba(74,29,36,0.25)' }}>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="#D4B26F" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h4 style={{ fontSize: '10px', fontWeight: 600, color: '#44403c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>Exquisite<br />Craftsmanship</h4>
                <p style={{ fontSize: '11px', color: '#78716c', lineHeight: 1.7, fontWeight: 300 }}>Intricate detailing and handcrafted with love by skilled artisans.</p>
                <div style={{ width: '32px', height: '1px', background: '#D4B26F', opacity: 0.5, marginTop: '14px' }} />
              </div>

              <div style={{ width: '1px', background: 'rgba(120,113,108,0.15)', alignSelf: 'stretch' }} />

              {/* Pillar 3 */}
              <div style={{ flex: 1, minWidth: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '8px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#4A1D24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', boxShadow: '0 4px 12px rgba(74,29,36,0.25)' }}>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="#D4B26F" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h4 style={{ fontSize: '10px', fontWeight: 600, color: '#44403c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>Timeless<br />Elegance</h4>
                <p style={{ fontSize: '11px', color: '#78716c', lineHeight: 1.7, fontWeight: 300 }}>Designs that celebrate you, today and for generations to come.</p>
                <div style={{ width: '32px', height: '1px', background: '#D4B26F', opacity: 0.5, marginTop: '14px' }} />
              </div>
            </div>

            {/* Column 3 — Arched Accent Niche Image */}
            <div style={{ flex: '0 1 200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '180px', height: '260px', background: '#EFEBE4', borderRadius: '90px 90px 8px 8px', padding: '6px', border: '1px solid rgba(212,178,111,0.35)', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '84px 84px 6px 6px', overflow: 'hidden', border: '1px solid rgba(212,178,111,0.2)' }}>
                  <img
                    src="/images/about_arch_vase.png"
                    alt="Minimal ceramic vase with twigs"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '84px 84px 6px 6px' }}
                    onError={(e) => { e.target.src = '/images/atelier_interior.png'; }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3: "The Essence of Miraya" — Dark Burgundy Craft Grid
      ═══════════════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <div style={{ width: '100%', background: '#4A1D24', color: 'white', position: 'relative', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: '48px', padding: 'clamp(40px, 8%, 80px) 10%', minHeight: '480px' }}>
          
          {/* Left: Text Content */}
          <div style={{ flex: '0 1 380px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <LotusIcon size={22} />
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 300, letterSpacing: '0.04em', margin: '16px 0 8px', color: 'white' }}>
              The Essence of Miraya
            </h2>
            <GoldDivider />
            <p style={{ fontSize: '0.82rem', color: '#d6d3d1', lineHeight: 1.9, fontWeight: 300, textAlign: 'justify', maxWidth: '420px' }}>
              Our philosophy rests on the integration of history, luxury, and wearability. We believe that festive wear should not only be breathtakingly beautiful but also comfortable and enduring. By marrying traditional motifs with contemporary cuts, Miraya designs silhouettes that empower women to celebrate their identity with effortless elegance.
            </p>
          </div>

          {/* Right: Diagonal Image Panels */}
          <div style={{ flex: '1 1 320px', position: 'relative', minHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Skewed container holding panels */}
            <div style={{ display: 'flex', gap: '12px', width: '100%', height: '380px', overflow: 'hidden', transform: 'skewX(-6deg)', padding: '0 8px' }}>
              
              {/* Panel 1 */}
              <div style={{ flex: 1, overflow: 'hidden', position: 'relative', borderRadius: '12px', border: '1px solid rgba(212,178,111,0.3)', background: '#1a0a0c' }}>
                <img
                  src="/images/about_embroidery_detail.png"
                  alt="Gold Zardozi Embroidery detail"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'skewX(6deg) scale(1.15)' }}
                  onError={(e) => { e.target.src = '/images/textile_detail.png'; }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 12px 10px', background: 'linear-gradient(transparent, rgba(74,29,36,0.9))', zIndex: 2 }}>
                  <p style={{ fontSize: '9px', color: '#D4B26F', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center' }}>Zardozi</p>
                </div>
              </div>

              {/* Panel 2 */}
              <div style={{ flex: 1, overflow: 'hidden', position: 'relative', borderRadius: '12px', border: '1px solid rgba(212,178,111,0.3)', background: '#1a0a0c', marginTop: '24px' }}>
                <img
                  src="/images/about_artisan_hands.png"
                  alt="Artisan hands weaving raw silk"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'skewX(6deg) scale(1.15)' }}
                  onError={(e) => { e.target.src = '/images/atelier_interior.png'; }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 12px 10px', background: 'linear-gradient(transparent, rgba(74,29,36,0.9))', zIndex: 2 }}>
                  <p style={{ fontSize: '9px', color: '#D4B26F', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center' }}>Artisans</p>
                </div>
              </div>

              {/* Panel 3 */}
              <div style={{ flex: 1, overflow: 'hidden', position: 'relative', borderRadius: '12px', border: '1px solid rgba(212,178,111,0.3)', background: '#1a0a0c' }}>
                <img
                  src="/images/textile_detail.png"
                  alt="Raw silk textiles folded"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'skewX(6deg) scale(1.15)' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 12px 10px', background: 'linear-gradient(transparent, rgba(74,29,36,0.9))', zIndex: 2 }}>
                  <p style={{ fontSize: '9px', color: '#D4B26F', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center' }}>Textiles</p>
                </div>
              </div>
            </div>

            {/* Floating Capsule Badge */}
            <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', background: '#FAF7F2', padding: '10px 24px', borderRadius: '100px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)', zIndex: 10, border: '1px solid rgba(212,178,111,0.4)', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
              <LotusIcon size={12} />
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 600, color: '#4A1D24', textTransform: 'uppercase' }}>
                Handcrafted. Heartmade. Heirloomed.
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4: "Meet the Designer" — Garima Profile (Cream)
      ═══════════════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <div style={{ background: '#FAF7F2', position: 'relative', overflow: 'hidden', padding: 'clamp(48px, 8%, 96px) 10%' }}>
          
          {/* Faint gold monogram watermark background */}
          <div style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(200px, 20vw, 280px)', color: '#D4B26F', opacity: 0.03, fontWeight: 700, userSelect: 'none', pointerEvents: 'none', lineHeight: 1, letterSpacing: '0.05em' }}>
            G
          </div>

          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center', position: 'relative', zIndex: 1 }}>

            {/* Left: Designer Photo */}
            <div style={{ flex: '0 1 340px', position: 'relative' }}>
              {/* Decorative gold border frame offset */}
              <div style={{ position: 'absolute', top: '-12px', left: '-12px', right: '12px', bottom: '12px', border: '1px solid rgba(212,178,111,0.4)', borderRadius: '4px', pointerEvents: 'none', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1, borderRadius: '4px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(74,29,36,0.12)' }}>
                <img
                  src="/images/about_designer_garima.png"
                  alt="Garima — Designer & Founder of Miraya"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  onError={(e) => { e.target.src = '/images/hero_model.png'; }}
                />
                {/* Subtle bottom gradient overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(transparent, rgba(74,29,36,0.35))', pointerEvents: 'none' }} />
                {/* Name badge overlay */}
                <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(250,247,242,0.9)', backdropFilter: 'blur(8px)', padding: '8px 24px', borderRadius: '100px', border: '1px solid rgba(212,178,111,0.5)', textAlign: 'center', whiteSpace: 'nowrap' }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', fontSize: '1rem', color: '#4A1D24', fontWeight: 400, margin: 0 }}>Garima</p>
                  <p style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#78716c', textTransform: 'uppercase', margin: '2px 0 0' }}>Founder & Creative Director</p>
                </div>
              </div>
            </div>

            {/* Right: Designer Story */}
            <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              
              {/* Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '32px', height: '1px', background: '#D4B26F' }} />
                <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#D4B26F', fontWeight: 600, textTransform: 'uppercase' }}>The Vision Behind Miraya</span>
              </div>

              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 300, color: '#4A1D24', lineHeight: 1.15, marginBottom: '24px' }}>
                Woven from <em>Passion,</em><br />
                Guided by <em>Heritage</em>
              </h2>

              <div style={{ width: '64px', height: '1px', background: '#D4B26F', marginBottom: '24px' }} />

              <p style={{ fontSize: '0.875rem', color: '#57534e', lineHeight: 1.9, fontWeight: 300, marginBottom: '16px' }}>
                Garima's journey into the world of couture began not in the studios of Paris or Milan, but in the warm, lantern-lit workshops of Lucknow and Varanasi — where master craftsmen bent over wooden frames, pulling golden threads through silk with the patience of generations.
              </p>

              <p style={{ fontSize: '0.875rem', color: '#57534e', lineHeight: 1.9, fontWeight: 300, marginBottom: '32px' }}>
                Drawing inspiration from the grace of Indian women who wore their culture with quiet pride, Garima founded Miraya with a singular mission: to create garments that tell a story — of artistry, of memory, and of a woman who knows exactly who she is.
              </p>

              {/* Quote block */}
              <div style={{ borderLeft: '2px solid #D4B26F', paddingLeft: '20px', margin: '0 0 32px' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem', color: '#4A1D24', lineHeight: 1.6, fontWeight: 400 }}>
                  "Every thread I choose carries a conversation between the past and the present — and I want every woman who wears Miraya to feel that dialogue."
                </p>
                <p style={{ fontSize: '0.75rem', color: '#D4B26F', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '10px', fontWeight: 600 }}>— Garima</p>
              </div>

              {/* Stats Row */}
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                {[['12+', 'Years of Design'], ['400+', 'Artisan Partners'], ['3000+', 'Pieces Crafted']].map(([num, label]) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', color: '#4A1D24', fontWeight: 300, lineHeight: 1 }}>{num}</div>
                    <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#78716c', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 5: "From the Atelier" — Editorial Collection Strip (Burgundy)
      ═══════════════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <div style={{ background: '#3D1520', position: 'relative', overflow: 'hidden', padding: 'clamp(40px, 7%, 80px) 10%' }}>
          
          {/* Background watermark text */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(80px, 10vw, 140px)', color: '#FAF7F2', opacity: 0.03, letterSpacing: '0.5em', fontWeight: 700, userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
            MIRAYA
          </div>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '48px', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
              <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'rgba(212,178,111,0.4)' }} />
              <LotusIcon size={16} />
              <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'rgba(212,178,111,0.4)' }} />
            </div>
            <p style={{ fontSize: '10px', letterSpacing: '0.35em', color: '#D4B26F', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>Curated Creations</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'white', letterSpacing: '0.04em' }}>
              From the <em style={{ color: '#D4B26F' }}>Atelier</em>
            </h2>
          </div>

          {/* Image Strip — 4 column cards */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            {[
              { src: '/images/about_hero_saree.png', fallback: '/images/hero_model.png', label: 'Silk Sarees', tag: 'Heritage' },
              { src: '/images/about_embroidery_detail.png', fallback: '/images/textile_detail.png', label: 'Zardozi Work', tag: 'Craftsmanship' },
              { src: '/images/about_collection_strip.png', fallback: '/images/atelier_interior.png', label: 'Anarkalis & Lehengas', tag: 'Couture' },
              { src: '/images/about_artisan_hands.png', fallback: '/images/textile_detail.png', label: 'Artisan Process', tag: 'Heritage' },
            ].map(({ src, fallback, label, tag }, i) => (
              <div key={i} style={{ flex: '1 1 220px', maxWidth: '280px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(212,178,111,0.2)', background: '#1a0a0c', position: 'relative', boxShadow: '0 12px 40px rgba(0,0,0,0.3)', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'; }}>
                <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                  <img
                    src={src}
                    alt={label}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    onError={(e) => { e.target.src = fallback; }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                </div>
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(transparent, rgba(20,5,8,0.95))', pointerEvents: 'none' }} />
                {/* Card labels */}
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <div style={{ display: 'inline-block', background: 'rgba(212,178,111,0.15)', border: '1px solid rgba(212,178,111,0.3)', borderRadius: '100px', padding: '2px 10px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '8px', color: '#D4B26F', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{tag}</span>
                  </div>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1rem', color: 'white', fontWeight: 400, margin: 0 }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 6: "The Promise of Miraya" — Values / CTA Block (Cream)
      ═══════════════════════════════════════════════════════════════════ */}
      <ScrollReveal>
        <div style={{ background: '#FAF7F2', padding: 'clamp(48px, 8%, 96px) 10%', position: 'relative', overflow: 'hidden' }}>
          
          {/* Faint background monogram */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(150px, 18vw, 260px)', color: '#4A1D24', opacity: 0.025, fontWeight: 700, userSelect: 'none', pointerEvents: 'none', letterSpacing: '0.05em', lineHeight: 1 }}>
            MG
          </div>

          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            
            {/* Top: Section header */}
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
                <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: '#D4B26F', opacity: 0.6 }} />
                <LotusIcon size={16} color="#4A1D24" />
                <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: '#D4B26F', opacity: 0.6 }} />
              </div>
              <p style={{ fontSize: '10px', letterSpacing: '0.35em', color: '#D4B26F', textTransform: 'uppercase', fontWeight: 600, marginBottom: '14px' }}>Our Commitment</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 300, color: '#4A1D24', letterSpacing: '0.04em', lineHeight: 1.15 }}>
                The Promise of <em>Miraya</em>
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#78716c', maxWidth: '520px', margin: '16px auto 0', lineHeight: 1.8, fontWeight: 300 }}>
                Every garment we create carries our unwavering commitment to quality, conscience, and artistry.
              </p>
            </div>

            {/* Promise Pillars — 3 card grid */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', marginBottom: '72px' }}>
              {[
                {
                  icon: (
                    <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="#D4B26F" strokeWidth="1.25" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Authentic Materials',
                  body: 'We source only the finest silks, georgettes, and velvets directly from heritage looms across India — ensuring authenticity in every weave.'
                },
                {
                  icon: (
                    <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="#D4B26F" strokeWidth="1.25" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  ),
                  title: 'Artisan Livelihoods',
                  body: 'Every purchase directly supports the skilled craftswomen and craftsmen whose families have practiced these embroidery traditions for generations.'
                },
                {
                  icon: (
                    <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="#D4B26F" strokeWidth="1.25" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  ),
                  title: 'Heirloom Quality',
                  body: 'Each piece is built to last generations — crafted with care to become a treasured heirloom, not a seasonal trend.'
                }
              ].map(({ icon, title, body }, i) => (
                <div key={i} style={{ flex: '1 1 280px', maxWidth: '360px', background: 'white', borderRadius: '20px', padding: '36px 32px', border: '1px solid rgba(212,178,111,0.2)', boxShadow: '0 4px 24px rgba(74,29,36,0.06)', position: 'relative', overflow: 'hidden', transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(74,29,36,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(74,29,36,0.06)'; }}>
                  {/* Top accent bar */}
                  <div style={{ position: 'absolute', top: 0, left: '32px', right: '32px', height: '2px', background: 'linear-gradient(to right, transparent, #D4B26F, transparent)' }} />
                  {/* Icon circle */}
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#4A1D24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 8px 24px rgba(74,29,36,0.2)' }}>
                    {icon}
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.35rem', color: '#4A1D24', fontWeight: 500, marginBottom: '12px' }}>{title}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#78716c', lineHeight: 1.85, fontWeight: 300 }}>{body}</p>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div style={{ background: 'linear-gradient(135deg, #4A1D24 0%, #6B2D38 50%, #4A1D24 100%)', borderRadius: '24px', padding: 'clamp(40px, 6%, 64px) clamp(32px, 8%, 80px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '32px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(74,29,36,0.25)' }}>
              
              {/* Decorative top-right gold circle */}
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(212,178,111,0.15)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', border: '1px solid rgba(212,178,111,0.1)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#D4B26F', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>Begin Your Journey</p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'white', lineHeight: 1.2, maxWidth: '480px' }}>
                  Discover a Creation That <em style={{ color: '#D4B26F' }}>Speaks Your Story</em>
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                <a href="/collections"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#D4B26F', color: '#4A1D24', padding: '14px 32px', borderRadius: '100px', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 20px rgba(212,178,111,0.4)', transition: 'background 0.25s, transform 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#c4a25f'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#D4B26F'; e.currentTarget.style.transform = 'scale(1)'; }}>
                  Explore Collections
                  <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: 'white', padding: '14px 32px', borderRadius: '100px', fontWeight: 500, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', transition: 'border-color 0.25s, background 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4B26F'; e.currentTarget.style.background = 'rgba(212,178,111,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent'; }}>
                  Visit Our Atelier
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Footer */}
      <Footer />

    </div>
  );
}
