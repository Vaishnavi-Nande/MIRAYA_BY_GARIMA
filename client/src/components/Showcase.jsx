import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function Showcase({ products }) {
  const navigate = useNavigate();
  
  const categories = [
    { name: 'Lehenga', value: 'Lehenga', label: 'Luxury Lehengas', narrative: 'Heirloom silhouettes hand-embroidered with zardozi threadwork on raw silk.' },
    { name: 'Saree', value: 'Saree', label: 'Designer Sarees', narrative: 'Graceful drapes crafted in fluid organzas and pure georgettes with hand-embroidered borders.' },
    { name: 'Anarkali Suit', value: 'Anarkali Suit', label: 'Classic Anarkalis', narrative: 'Voluminous kalidas featuring intricate dabka work and delicate sheer dupattas.' },
    { name: 'Sharara Suit', value: 'Sharara Suit', label: 'Festive Shararas', narrative: 'Playful flared bottoms paired with heavily embellished short kurtis and borders.' },
    { name: 'Indo-Western Gown', value: 'Indo-Western Gown', label: 'Couture Gowns', narrative: 'Sculpted contemporary fusion silhouettes with structured drapes and modern detailing.' },
    { name: 'Kurti', value: 'Kurti', label: 'Designer Kurtis', narrative: 'Chic everyday and festive tunics with fine lucknowi and aari hand-work details.' },
    { name: 'Salwar Suit', value: 'Salwar Suit', label: 'Traditional Salwars', narrative: 'Timeless straight-cut suits crafted in fine cottons and silks with classic hand embroidery.' },
    { name: 'Co-ord Set', value: 'Co-ord Set', label: 'Modern Co-ords', narrative: 'Elegant matching sets in premium textures blending ease, comfort, and luxury aesthetics.' }
  ];

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

  const getCategoryImageUrl = (catValue) => {
    const matched = products.find(p => p.category === catValue);
    if (matched && matched.image) {
      return matched.image;
    }
    return '/images/textile_detail.png';
  };

  return (
    <section className="showcase-section" style={{ backgroundColor: 'var(--bg-warm-ivory)', width: '100%' }}>
      {categories.map((cat, index) => {
        const isEven = index % 2 === 1;
        const imageUrl = getCategoryImageUrl(cat.value);
        const romanIndex = romanNumerals[index];

        return (
          <ScrollReveal key={cat.value}>
            <div 
              className="showcase-row border-grid-bottom grid-cols-12" 
              style={{ 
                width: '100%'
              }}
            >
              {/* Text Column */}
              <div 
                className={`showcase-text-col col-span-5-lg ${isEven ? 'order-2-lg' : 'order-1-lg'}`}
                style={{ 
                  minWidth: '320px',
                  padding: '120px 60px', 
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: 'var(--bg-white)',
                  borderRight: !isEven ? '1px solid var(--gold-border)' : 'none',
                  borderLeft: isEven ? '1px solid var(--gold-border)' : 'none'
                }}
              >
                <span style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.2em', 
                  color: 'var(--highlight-gold)', 
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}>
                  COLLECTION {romanIndex}
                </span>
                <h3 style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '36px', 
                  color: 'var(--accent-burgundy)', 
                  letterSpacing: '0.05em',
                  fontWeight: '300',
                  marginBottom: '24px',
                  textTransform: 'none'
                }}>
                  {cat.label}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '15px', 
                  lineHeight: '1.7', 
                  color: 'var(--text-dark)', 
                  marginBottom: '32px',
                  textAlign: 'justify'
                }}>
                  {cat.narrative}
                </p>
                <div>
                  <button 
                    onClick={() => navigate(`/collections/${cat.value.toLowerCase().replace(/ /g, '-')}`)}
                    className="premium-cta-btn"
                  >
                    <span>EXPLORE {cat.name}S</span> <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>

              {/* Image Column */}
              <div 
                className={`showcase-image-col col-span-7-lg ${isEven ? 'order-1-lg' : 'order-2-lg'}`}
                style={{ 
                  minWidth: '320px',
                  height: '550px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    overflow: 'hidden'
                  }}
                  className="showcase-zoom-container"
                >
                  <div className="border border-stone-300/60 p-3 md:p-4 w-full h-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt={cat.label} 
                      className="w-full h-full object-cover showcase-image-frame image-smooth-fade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </section>
  );
}
