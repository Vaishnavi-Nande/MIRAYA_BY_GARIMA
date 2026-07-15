import React from 'react';

/* ─── Icon SVGs for each pillar badge ─────────────────────────── */

// Detailed Luxury Lotus Emblem — REFINED
const LotusIcon = () => (
  <svg viewBox="0 0 64 64" style={{ width: '32px', height: '32px' }} fill="none" stroke="#D4B26F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Center Bud Leaf */}
    <path d="M32 14c0 0-4 6-4 14s4 18 4 18 4-10 4-18-4-14-4-14z" />
    {/* Inner Left Petal */}
    <path d="M32 20c-3 2-8 7-8 14 0 6 3.5 10 5.5 11" />
    {/* Inner Right Petal */}
    <path d="M32 20c3 2 8 7 8 14 0 6-3.5 10-5.5 11" />
    {/* Wide Left Flourish Petal */}
    <path d="M28 26c-5 1.5-11 6-11 13 0 5 4 8 8 8.5" />
    {/* Wide Right Flourish Petal */}
    <path d="M36 26c5 1.5 11 6 11 13 0 5-4 8-8 8.5" />
    {/* Bottom Base Support Leaves */}
    <path d="M20 44c-3 0-6 1.5-7 3.5 0 0 4 2.5 9 1.5M44 44c3 0 6 1.5 7 3.5 0 0-4 2.5-9 1.5" />
    {/* Center Base Node */}
    <circle cx="32" cy="48" r="1.5" fill="#D4B26F" />
  </svg>
);

// Intricate Royal Lattice / Jaal Diamond Emblem — AUTHENTIC
const WeaveIcon = () => (
  <svg viewBox="0 0 64 64" style={{ width: '32px', height: '32px' }} fill="none" stroke="#D4B26F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer Diamond Framework */}
    <path d="M32 12L50 30L32 48L14 30Z" />
    {/* Internal Grid Lines — traditional lattice weave */}
    <path d="M23 21l18 18M41 21L23 38M32 12v36M14 30h36" />
    {/* Corner Frame Accents */}
    <path d="M27 17l5-5 5 5M27 43l5 5 5-5M19 25l-5 5 5 5M45 25l5 5-5 5" />
    {/* Dot Highlights */}
    <circle cx="32" cy="30" r="2" fill="#D4B26F" />
    <circle cx="32" cy="20" r="1" fill="#D4B26F" />
    <circle cx="32" cy="40" r="1" fill="#D4B26F" />
    <circle cx="22" cy="30" r="1" fill="#D4B26F" />
    <circle cx="42" cy="30" r="1" fill="#D4B26F" />
  </svg>
);

// Symmetric Foliage Crest / Tulip Emblem — ASPIRATIONAL
const FloralIcon = () => (
  <svg viewBox="0 0 64 64" style={{ width: '32px', height: '32px' }} fill="none" stroke="#D4B26F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Central Vertical Stem */}
    <path d="M32 14v34" />
    {/* Outer Symmetrical Shield/Petal Enclosure */}
    <path d="M32 16c-6 0-12 5-12 16 0 10 9 14 12 16 3-2 12-6 12-16 0-11-6-16-12-16z" />
    {/* Internal Curved Foliage Details */}
    <path d="M22 28c4 1 8 4 10 8M42 28c-4 1-8 4-10 8" />
    <path d="M25 36c3 .5 5 2 7 4M39 36c-3 .5-5 2-7 4" />
    {/* Top Crown Tip Accents */}
    <path d="M28 16l4-4 4 4" />
  </svg>
);

/* ─── Gold diamond divider inside each card ───────────────────── */
const CardDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', margin: '14px 0 20px' }}>
    <div style={{ width: '36px', height: '1px', background: 'linear-gradient(to right, transparent, #D4B26F)' }} />
    <span style={{ color: '#D4B26F', fontSize: '7px', lineHeight: 1 }}>◆</span>
    <div style={{ width: '36px', height: '1px', background: 'linear-gradient(to left, transparent, #D4B26F)' }} />
  </div>
);

/* ─── Section header flourish ─────────────────────────────────── */
const HeaderFlourish = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '6px 0 0' }}>
    <div style={{ width: '28px', height: '1px', background: '#D4B26F', opacity: 0.6 }} />
    <svg viewBox="0 0 16 16" fill="#D4B26F" style={{ width: '10px', height: '10px' }}>
      <path d="M8 1 L9.5 6.5 L15 8 L9.5 9.5 L8 15 L6.5 9.5 L1 8 L6.5 6.5 Z"/>
    </svg>
    <div style={{ width: '28px', height: '1px', background: '#D4B26F', opacity: 0.6 }} />
  </div>
);

/* ─── Pillar data ─────────────────────────────────────────────── */
const pillars = [
  {
    key: 'refined',
    icon: <LotusIcon />,
    subtitle: 'PRECISE ELEGANCE',
    title: 'REFINED',
    desc: 'Every silhouette is meticulously tailored, balancing structured drapery with fluid grace. We choose only the finest silks, georgettes, and organic fabrics that whisper luxury with every thread and stitch.'
  },
  {
    key: 'authentic',
    icon: <WeaveIcon />,
    subtitle: 'HERITAGE CRAFT',
    title: 'AUTHENTIC',
    desc: 'Our garments celebrate the handloom weavers and zardozi artisans of India. By preserving age-old embellishment techniques, we honor heritage while breathing new life into traditional occasion wear.'
  },
  {
    key: 'aspirational',
    icon: <FloralIcon />,
    subtitle: 'FOR GENERATIONS',
    title: 'ASPIRATIONAL',
    desc: 'Miraya designs are created to be heirloom pieces. Bridging the aesthetic tastes of mothers, daughters, and granddaughters, we cultivate a shared lineage of style, dignity, and elegance.'
  }
];

/* ─── Main Component ──────────────────────────────────────────── */
export default function Pillars() {
  return (
    <section
      id="brand-pillars"
      style={{
        backgroundColor: '#FAF7F2',
        padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 80px)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Faint background watermark motif */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(120px, 18vw, 220px)',
        color: '#4A1D24', opacity: 0.025,
        fontWeight: 700, userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '0.15em', lineHeight: 1, whiteSpace: 'nowrap'
      }}>
        MG
      </div>

      {/* ── Section Header ────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)', position: 'relative', zIndex: 1 }}>
        {/* "OUR PHILOSOPHY" label */}
        <span style={{
          fontFamily: 'var(--font-body, Inter, sans-serif)',
          fontSize: '11px',
          letterSpacing: '0.3em',
          color: '#D4B26F',
          textTransform: 'uppercase',
          fontWeight: 600,
          display: 'block',
          marginBottom: '4px'
        }}>
          Our Philosophy
        </span>

        {/* Gold diamond flourish below label */}
        <HeaderFlourish />

        {/* Main Section Title */}
        <h2 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          color: '#4A1D24',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          margin: '20px 0 14px',
          lineHeight: 1.15
        }}>
          The Core Pillars of Miraya
        </h2>

        {/* Tagline */}
        <p style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
          color: '#78716c',
          fontWeight: 400,
          letterSpacing: '0.02em'
        }}>
          Rooted in tradition. Designed for today. Created to inspire for generations.
        </p>
      </div>

      {/* ── Pillars Card Grid ─────────────────────────────────── */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(16px, 3vw, 28px)',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {pillars.map((p) => (
          <div
            key={p.key}
            style={{
              flex: '1 1 280px',
              maxWidth: '360px',
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid rgba(212,178,111,0.35)',
              padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 32px rgba(74,29,36,0.05), 0 1px 4px rgba(74,29,36,0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(74,29,36,0.12), 0 4px 12px rgba(74,29,36,0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 32px rgba(74,29,36,0.05), 0 1px 4px rgba(74,29,36,0.04)';
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute', top: 0, left: '20%', right: '20%',
              height: '2px',
              background: 'linear-gradient(to right, transparent, #D4B26F 40%, #D4B26F 60%, transparent)'
            }} />

            {/* Maroon circular badge with gold icon */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#4A1D24',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              boxShadow: '0 8px 24px rgba(74,29,36,0.3), 0 0 0 6px rgba(212,178,111,0.12)',
              flexShrink: 0
            }}>
              {p.icon}
            </div>

            {/* Subtitle tag */}
            <span style={{
              fontFamily: 'var(--font-body, Inter, sans-serif)',
              fontSize: '9px',
              letterSpacing: '0.28em',
              color: '#D4B26F',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '8px',
              display: 'block'
            }}>
              {p.subtitle}
            </span>

            {/* Pillar Title */}
            <h3 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
              color: '#4A1D24',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              lineHeight: 1.1,
              margin: 0
            }}>
              {p.title}
            </h3>

            {/* Gold diamond divider */}
            <CardDivider />

            {/* Description */}
            <p style={{
              fontFamily: 'var(--font-body, Inter, sans-serif)',
              fontSize: 'clamp(0.78rem, 1.2vw, 0.875rem)',
              lineHeight: 1.85,
              color: '#57534e',
              fontWeight: 300,
              maxWidth: '300px',
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
