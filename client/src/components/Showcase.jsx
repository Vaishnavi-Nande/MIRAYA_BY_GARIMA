import React from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Collection definitions ──────────────────────────────────── */
const COLLECTIONS = [
  {
    slug: 'lehengas',
    tag: 'LEHENGAS',
    title: 'Luxury Lehengas',
    desc: 'Heirloom silhouettes hand-embroidered with zardozi threadwork on raw silk.',
    cta: 'EXPLORE',
    categoryValue: 'Lehenga',
    img: '/images/products/lehenga_crimson.png',
  },
  {
    slug: 'sarees',
    tag: 'SAREES',
    title: 'Designer Sarees',
    desc: 'Graceful drapes in fluid organzas and pure georgettes with hand-embroidered borders.',
    cta: 'EXPLORE',
    categoryValue: 'Saree',
    img: '/images/products/saree_burgundy.png',
  },
  {
    slug: 'anarkalis',
    tag: 'ANARKALIS',
    title: 'Classic Anarkalis',
    desc: 'Voluminous kalidas with intricate dabka work and delicate sheer dupattas.',
    cta: 'EXPLORE',
    categoryValue: 'Anarkali Suit',
    img: '/images/products/anarkali_ivory.png',
  },
  {
    slug: 'sharara-suits',
    tag: 'SHARARAS',
    title: 'Festive Shararas',
    desc: 'Flared bottoms paired with heavily embellished short kurtis and borders.',
    cta: 'EXPLORE',
    categoryValue: 'Sharara Suit',
    img: '/images/products/sharara_mint.png',
  },
  {
    slug: 'indo-western-gowns',
    tag: 'GOWNS',
    title: 'Couture Gowns',
    desc: 'Contemporary fusion silhouettes with structured drapes and modern detailing.',
    cta: 'EXPLORE',
    categoryValue: 'Indo-Western Gown',
    img: '/images/products/gown_burgundy.png',
  },
  {
    slug: 'kurtis',
    tag: 'KURTIS',
    title: 'Designer Kurtis',
    desc: 'Chic everyday and festive tunics with fine lucknowi and aari hand-work details.',
    cta: 'EXPLORE',
    categoryValue: 'Kurti',
    img: '/images/products/kurti_gold.png',
  },
  {
    slug: 'salwar-suits',
    tag: 'SALWARS',
    title: 'Traditional Salwars',
    desc: 'Timeless straight-cut suits in fine cottons and silks with classic hand embroidery.',
    cta: 'EXPLORE',
    categoryValue: 'Salwar Suit',
    img: '/images/products/salwar_peach.png',
  },
  {
    slug: 'co-ord-sets',
    tag: 'CO-ORD SETS',
    title: 'Modern Co-ords',
    desc: 'Elegant matching sets in premium textures blending ease, comfort, and luxury.',
    cta: 'EXPLORE',
    categoryValue: 'Co-ord Set',
    img: '/images/products/coord_emerald.png',
  },
];

/* ─── Gold star flourish ──────────────────────────────────────── */
const GoldFlourish = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
    <div style={{ width: '36px', height: '1px', background: 'linear-gradient(to right, transparent, #D4B26F)' }} />
    <svg viewBox="0 0 16 16" fill="#D4B26F" style={{ width: '9px', height: '9px', flexShrink: 0 }}>
      <path d="M8 0.5L9.8 6.2H15.8L11 9.8L12.8 15.5L8 11.9L3.2 15.5L5 9.8L0.2 6.2H6.2Z" />
    </svg>
    <div style={{ width: '36px', height: '1px', background: 'linear-gradient(to left, transparent, #D4B26F)' }} />
  </div>
);

/* ─── Card internal diamond divider ──────────────────────────── */
const CardDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', margin: '8px 0 12px' }}>
    <div style={{ width: '22px', height: '1px', background: 'linear-gradient(to right, transparent, #D4B26F)' }} />
    <span style={{ color: '#D4B26F', fontSize: '5px', lineHeight: 1 }}>◆</span>
    <div style={{ width: '22px', height: '1px', background: 'linear-gradient(to left, transparent, #D4B26F)' }} />
  </div>
);

/* ─── Single card ─────────────────────────────────────────────── */
function CollectionCard({ col, onNavigate, products }) {
  const [hovered, setHovered] = React.useState(false);

  // Try to pull a real product image first; fall back to static
  const productImg = React.useMemo(() => {
    if (!products?.length) return null;
    const match = products.find(p => p.category === col.categoryValue);
    return match?.image || null;
  }, [products, col.categoryValue]);

  const imgSrc = productImg || col.img;

  return (
    <div
      onClick={() => onNavigate(`/collections/${col.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FAF7F2',
        borderRadius: '14px',
        border: '1px solid #EADFC9',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        height: '288px',
        cursor: 'pointer',
        transition: 'transform 0.28s ease, box-shadow 0.28s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 14px 40px rgba(74,29,36,0.13)'
          : '0 2px 10px rgba(74,29,36,0.05)',
      }}
    >
      {/* Left — text (60%) */}
      <div style={{
        flex: '0 0 55%',
        padding: '28px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}>
        <div>
          {/* Tag */}
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '8px',
            letterSpacing: '0.22em',
            color: '#D4B26F',
            fontWeight: 700,
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '7px',
          }}>
            {col.tag}
          </span>

          {/* Title */}
          <h3 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)',
            color: '#4A1D24',
            fontWeight: 500,
            lineHeight: 1.15,
            margin: 0,
          }}>
            {col.title}
          </h3>

          {/* Divider */}
          <CardDivider />

          {/* Description */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12.5px',
            color: '#78716c',
            lineHeight: 1.75,
            fontWeight: 300,
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {col.desc}
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(`/collections/${col.slug}`); }}
          style={{
            alignSelf: 'flex-start',
            background: hovered ? '#4A1D24' : 'transparent',
            color: hovered ? '#FAF7F2' : '#4A1D24',
            border: '1px solid #4A1D24',
            borderRadius: '2px',
            padding: '5px 12px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '8px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.22s, color 0.22s',
            whiteSpace: 'nowrap',
          }}
        >
          {col.cta}
        </button>
      </div>

      {/* Right — image (45%) */}
      <div style={{ flex: '0 0 45%', overflow: 'hidden', position: 'relative' }}>
        <img
          src={imgSrc}
          alt={col.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            transition: 'transform 0.45s ease',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
          }}
          onError={(e) => { e.target.src = '/images/textile_detail.png'; }}
        />
        {/* Blend gradient */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '28px',
          background: 'linear-gradient(to right, #FAF7F2, transparent)',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
}

/* ─── Main exported section ───────────────────────────────────── */
export default function Showcase({ products }) {
  const navigate = useNavigate();

  return (
    <section
      id="explore-collections"
      className="showcase-section"
      style={{
        backgroundColor: '#FAF7F2',
        padding: 'clamp(48px, 7vw, 88px) clamp(20px, 5vw, 60px)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Faint background watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(90px, 14vw, 190px)',
        color: '#4A1D24', opacity: 0.022,
        fontWeight: 700, userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '0.3em', whiteSpace: 'nowrap',
      }}>
        MIRAYA
      </div>

      {/* ── Header ────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 52px)', position: 'relative', zIndex: 1 }}>
        <GoldFlourish />

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.35em',
          color: '#D4B26F',
          textTransform: 'uppercase',
          fontWeight: 700,
          margin: '14px 0 2px',
        }}>
          Our Collections
        </p>

        <h2 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          color: '#4A1D24',
          fontWeight: 400,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          margin: '0 0 6px',
          lineHeight: 1.15,
        }}>
          The Collections
        </h2>

        <GoldFlourish />

        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
          color: '#78716c',
          fontWeight: 400,
          marginTop: '12px',
        }}>
          Curated pieces for every occasion and every you.
        </p>
      </div>

      {/* ── 8-Card Responsive Grid ───────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'clamp(16px, 2.5vw, 32px)',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
        className="collections-grid"
      >
        {COLLECTIONS.map((col) => (
          <CollectionCard
            key={col.slug}
            col={col}
            onNavigate={navigate}
            products={products}
          />
        ))}
      </div>
    </section>
  );
}
