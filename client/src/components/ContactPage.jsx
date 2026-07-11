import React, { useState } from 'react';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: 'var(--navbar-height)' }}>
      
      {/* A. Top Banner Header (Centered) */}
      <ScrollReveal>
        <div 
          className="contact-banner border-grid-bottom relative w-full text-center py-20 overflow-hidden bg-stone-50/50"
          style={{ 
            padding: '120px 20px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Giant Translucent Watermark Background Layer */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <span className="text-8xl md:text-[12rem] font-serif font-light text-stone-300/70 tracking-[0.25em] uppercase select-none">
              MIRAYA
            </span>
          </div>

          <span className="relative z-10" style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '11px', 
            letterSpacing: '0.25em', 
            textTransform: 'uppercase', 
            color: 'var(--highlight-gold)',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            GET IN TOUCH
          </span>
          <h1 className="relative z-10" style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(32px, 4vw, 54px)', 
            color: 'var(--accent-burgundy)', 
            letterSpacing: '0.05em',
            textTransform: 'none',
            fontWeight: '300',
            margin: 0
          }}>
            Visit our <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>ATELIER</span>
          </h1>
          <div className="relative z-10" style={{ width: '40px', height: '1px', backgroundColor: 'var(--highlight-gold)', marginTop: '24px' }}></div>
        </div>
      </ScrollReveal>

      {/* B. Two-Column Split Layout Section */}
      <ScrollReveal>
        <div 
          className="contact-split-section border-grid-bottom" 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            width: '100%',
            backgroundColor: 'var(--bg-warm-ivory)'
          }}
        >
          {/* Left Column: Connect with Miraya Form */}
          <div 
            className="contact-col-left" 
            style={{ 
              flex: '1 1 50%', 
              padding: '120px 60px', 
              borderRight: '1px solid var(--gold-border)',
              boxSizing: 'border-box'
            }}
          >
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '32px', 
              color: 'var(--accent-burgundy)', 
              letterSpacing: '0.05em',
              fontWeight: '300',
              marginBottom: '16px'
            }}>
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>Connect with</span> <strong>Miraya</strong>
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '15px', 
              lineHeight: '1.6', 
              color: 'var(--text-dark)', 
              marginBottom: '48px'
            }}>
              For bespoke appointments or general inquiries, please leave us a message below.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <input 
                type="text" 
                placeholder="FULL NAME" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ 
                  border: 'none', 
                  borderBottom: '1px solid var(--gold-border)', 
                  background: 'transparent', 
                  padding: '16px 0', 
                  outline: 'none', 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  width: '100%', 
                  marginBottom: '32px', 
                  color: 'var(--text-dark)',
                  borderRadius: 0
                }} 
              />
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ 
                  border: 'none', 
                  borderBottom: '1px solid var(--gold-border)', 
                  background: 'transparent', 
                  padding: '16px 0', 
                  outline: 'none', 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  width: '100%', 
                  marginBottom: '32px', 
                  color: 'var(--text-dark)',
                  borderRadius: 0
                }} 
              />
              <input 
                type="text" 
                placeholder="SUBJECT" 
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                style={{ 
                  border: 'none', 
                  borderBottom: '1px solid var(--gold-border)', 
                  background: 'transparent', 
                  padding: '16px 0', 
                  outline: 'none', 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  width: '100%', 
                  marginBottom: '32px', 
                  color: 'var(--text-dark)',
                  borderRadius: 0
                }} 
              />
              <textarea 
                placeholder="MESSAGE" 
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{ 
                  border: 'none', 
                  borderBottom: '1px solid var(--gold-border)', 
                  background: 'transparent', 
                  padding: '16px 0', 
                  outline: 'none', 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  width: '100%', 
                  marginBottom: '40px', 
                  color: 'var(--text-dark)',
                  resize: 'none',
                  borderRadius: 0
                }} 
              />

              <button 
                type="submit" 
                className="premium-cta-btn"
                style={{ width: '100%' }}
              >
                <span>{submitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}</span> <span className="arrow-icon">→</span>
              </button>
            </form>
          </div>

          {/* Right Column: Our Atelier Info */}
          <div 
            className="contact-col-right" 
            style={{ 
              flex: '1 1 50%', 
              padding: '120px 60px', 
              boxSizing: 'border-box',
              backgroundColor: 'rgba(198, 164, 106, 0.03)'
            }}
          >
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '32px', 
              color: 'var(--accent-burgundy)', 
              letterSpacing: '0.05em',
              fontWeight: '300',
              marginBottom: '16px'
            }}>
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>Our</span> <strong>Atelier</strong>
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '15px', 
              lineHeight: '1.6', 
              color: 'var(--text-dark)', 
              marginBottom: '48px'
            }}>
              We invite you to experience our collections in person. Our doors are open for those who appreciate the finer details.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              
              {/* Flagship Store */}
              <div>
                <h3 style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  color: 'var(--highlight-gold)', 
                  fontWeight: '600',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  📍 FLAGSHIP STORE
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '14px', 
                  lineHeight: '1.6', 
                  color: 'var(--text-dark)',
                  margin: 0
                }}>
                  Shop no. UG/5, Jagat Plaza, Mouze Pandharabodi, Law College Square, Amravati Rd, Nagpur, Maharashtra 440033
                </p>
              </div>

              {/* Contact Details */}
              <div>
                <h3 style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  color: 'var(--highlight-gold)', 
                  fontWeight: '600',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  📞 CONTACT DETAILS
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '14px', 
                  lineHeight: '1.6', 
                  color: 'var(--text-dark)',
                  margin: '0 0 6px 0'
                }}>
                  <a href="mailto:hello@miraya.com" style={{ color: 'var(--text-dark)', textDecoration: 'none', borderBottom: '1px solid var(--gold-border)' }}>
                    hello@miraya.com
                  </a>
                </p>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '14px', 
                  lineHeight: '1.6', 
                  color: 'var(--text-dark)',
                  margin: 0
                }}>
                  +91 98765 43210
                </p>
              </div>

              {/* Store Hours */}
              <div>
                <h3 style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  color: 'var(--highlight-gold)', 
                  fontWeight: '600',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  ⏰ STORE HOURS
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '14px', 
                  lineHeight: '1.6', 
                  color: 'var(--text-dark)',
                  margin: '0 0 6px 0'
                }}>
                  Monday - Saturday: 11:00 AM - 8:00 PM
                </p>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '14px', 
                  lineHeight: '1.6', 
                  color: 'var(--text-dark)',
                  margin: 0
                }}>
                  Sunday: By Appointment Only
                </p>
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* C. Embedded Maps Container */}
      <ScrollReveal>
        <div 
          className="contact-map border-grid-bottom" 
          style={{ 
            width: '100%', 
            height: '500px', 
            backgroundColor: '#eee', 
            position: 'relative' 
          }}
        >
          <iframe 
            title="Miraya Atelier Nagpur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.144883492723!2d79.05608107593649!3d21.146633683713537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f58999999f%3A0xe2128e08d6d24666!2sJagat%20Plaza%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </ScrollReveal>

      {/* D. Global Brand Footer Wrapper */}
      <Footer />

    </div>
  );
}
