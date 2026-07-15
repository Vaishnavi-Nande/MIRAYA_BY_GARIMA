import React from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Data ────────────────────────────────────────────────────── */
const COLLECTIONS = [
  {
    slug: 'lehengas',
    tag: 'LEHENGAS',
    title: 'Luxury Lehengas',
    desc: 'Exquisite craftsmanship and royal elegance for life\'s most precious moments.',
    cta: 'EXPLORE LEHENGAS',
    img: '/images/collection_lehenga.png',
    fallback: '/images/about_hero_saree.png',
  },
  {
    slug: 'sarees',
    tag: 'SAREES',
    title: 'Designer Sarees',
    desc: 'Graceful drapes with a touch of tradition and a vision of modern sophistication.',
    cta: 'EXPLORE SAREES',
    img: '/images/collection_saree.png',
    fallback: '/images/about_hero_saree.png',
  },
  {
    slug: 'anarkalis',
    tag: 'ANARKALIS',
    title: 'Classic Anarkalis',
    desc: 'Timeless silhouettes that blend heritage with contemporary charm.',
    cta: 'EXPLORE ANARKALIS',
    img: '/images/collection_anarkali.png',
    fallback: '/images/hero_model.png',
  },
];

/* ─── Gold flourish divider ───────────────────────────────────── */
const GoldFlourish = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
    <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, #D4B26F)' }} />
    <svg viewBox="0 0 16 16" fill="#D4B26F" style={{ width: '9px', height: '9px', flexShrink: 0 }}>
      <path d="M8 0.5L9.8 6.2H15.8L11 9.8L12.8 15.5L8 11.9L3.2 15.5L5 9.8L0.2 6.2H6.2Z" />
    </svg>
    <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, transparent, #D4B26F)' }} />
  </div>
);

/* ─── Card internal divider (—◆—) ─────────────────────────────── */
const CardDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '10px 0 14px' }}>
    <div style={{ width: '28px', height: '1px', background: 'linear-gradient(to right, transparent, #D4B26F)' }} />
    <span style={{ color: '#D4B26F', fontSize: '6px', lineHeight: 1 }}>◆</span>
    <div style={{ width: '28px', height: '1px', background: 'linear-gradient(to left, transparent, #D4B26F)' }} />
  </div>
);

/* ─── Single Collection Card ──────────────────────────────────── */
function CollectionCard({ collection, onNavigate }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        background: '#FAF7F2',
        borderRadius: '16px',
        border: '1px solid #EADFC9',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        height: '288px',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: hovered
          ? '0 12px 40px rgba(74,29,36,0.13)'
          : '0 2px 12px rgba(74,29,36,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNavigate(`/collections/${collection.slug}`)}
    >
      {/* ── Left: Text block (60%) ──────────────────────────── */}
      <div style={{
        flex: '0 0 58%',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}>
        {/* Top group */}
        <div>
          {/* Category tag */}
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '9px',
            letterSpacing: '0.22em',
            color: '#D4B26F',
            fontWeight: 700,
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px',
          }}>
            {collection.tag}
          </span>

          {/* Title */}
          <h3 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)',
            color: '#4A1D24',
            fontWeight: 500,
            lineHeight: 1.15,
            margin: 0,
          }}>
            {collection.title}
          </h3>

          {/* Gold diamond separator */}
          <CardDivider />

          {/* Description */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12.5px',
            color: '#78716c',
            lineHeight: 1.75,
            fontWeight: 300,
            margin: 0,
            maxWidth: '220px',
          }}>
            {collection.desc}
          </p>
        </div>

        {/* Bottom: CTA Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(`/collections/${collection.slug}`); }}
          style={{
            alignSelf: 'flex-start',
            background: hovered ? '#4A1D24' : 'transparent',
            color: hovered ? '#FAF7F2' : '#4A1D24',
            border: '1px solid #4A1D24',
            borderRadius: '2px',
            padding: '8px 16px',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.25s ease, color 0.25s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {collection.cta}
        </button>
      </div>

      {/* ── Right: Image block (40%) ────────────────────────── */}
      <div style={{
        flex: '1 1 42%',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={collection.img}
          alt={collection.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
          onError={(e) => { e.target.src = collection.fallback; }}
        />
        {/* Subtle left-edge gradient to blend with text area */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '32px',
          background: 'linear-gradient(to right, #FAF7F2, transparent)',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  );
}

/* ─── Main Section Component ──────────────────────────────────── */
export default function CollectionsShowcase() {
  const navigate = useNavigate();

  return (
    <section style={{
      backgroundColor: '#F5EFE6',
      padding: 'clamp(48px, 7vw, 88px) clamp(20px, 5vw, 60px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Faint background watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(100px, 15vw, 200px)',
        color: '#4A1D24', opacity: 0.025,
        fontWeight: 700, userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '0.3em', whiteSpace: 'nowrap',
      }}>
        MIRAYA
      </div>

      {/* ── Section Header ──────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 56px)', position: 'relative', zIndex: 1 }}>
        {/* Top flourish */}
        <GoldFlourish />

        {/* Label */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.35em',
          color: '#D4B26F',
          textTransform: 'uppercase',
          fontWeight: 700,
          margin: '14px 0 4px',
        }}>
          Our Collections
        </p>

        {/* Main title */}
        <h2 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          color: '#4A1D24',
          fontWeight: 400,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          margin: '0 0 8px',
          lineHeight: 1.15,
        }}>
          The Collections
        </h2>

        {/* Bottom flourish */}
        <GoldFlourish />

        {/* Subtitle */}
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
          color: '#78716c',
          fontWeight: 400,
          marginTop: '14px',
        }}>
          Curated pieces for every occasion and every you.
        </p>
      </div>

      {/* ── 3-Card Grid ─────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(12px, 2vw, 24px)',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {COLLECTIONS.map((col) => (
          <CollectionCard key={col.slug} collection={col} onNavigate={navigate} />
        ))}
      </div>
    </section>
  );
}
