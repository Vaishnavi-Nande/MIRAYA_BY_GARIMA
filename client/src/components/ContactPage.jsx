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
          className="contact-banner relative w-full text-center pt-10 pb-6 overflow-hidden"
          style={{ 
            padding: '40px 20px 24px 20px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {/* Giant Translucent Watermark Background Layer */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0" style={{ opacity: 0.12 }}>
            <span className="text-8xl md:text-[12rem] font-serif font-light text-stone-400 tracking-[0.3em] uppercase select-none">
              M I R A Y A
            </span>
          </div>

          <span className="relative z-10" style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '11px', 
            letterSpacing: '0.3em', 
            textTransform: 'uppercase', 
            color: '#D4B26F',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            GET IN TOUCH
          </span>
          <h1 className="relative z-10 font-serif text-[#4A1D24]" style={{ 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            letterSpacing: '0.05em',
            textTransform: 'none',
            fontWeight: '300',
            margin: 0
          }}>
            Visit our <span className="italic font-light">ATELIER</span>
          </h1>
          
          <div className="relative z-10 flex items-center justify-center gap-2" style={{ marginTop: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#D4B26F' }}></div>
            <span style={{ color: '#D4B26F', fontSize: '8px' }}>◆</span>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#D4B26F' }}></div>
          </div>
        </div>
      </ScrollReveal>

      {/* B. Two-Column Split Layout Dashboard */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 mb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Card: Connect with Miraya Form */}
            <div className="bg-[#FAF7F2] rounded-3xl p-8 md:p-12 border border-stone-200/50 shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-3xl text-[#4A1D24] font-normal mb-2">
                  Connect <span className="italic font-light">with</span> Miraya
                </h2>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed mb-8">
                  For bespoke appointments or general inquiries, please leave us a message below.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-stone-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </span>
                      <input 
                        type="text" 
                        placeholder="FULL NAME" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#FCFAF7] border border-stone-200/60 rounded-xl py-3.5 px-4 pl-11 text-xs tracking-wider text-stone-800 placeholder-stone-400 focus:border-[#C2A478] focus:outline-none transition-colors"
                      />
                    </div>
                    {/* Email */}
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-stone-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </span>
                      <input 
                        type="email" 
                        placeholder="EMAIL ADDRESS" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#FCFAF7] border border-stone-200/60 rounded-xl py-3.5 px-4 pl-11 text-xs tracking-wider text-stone-800 placeholder-stone-400 focus:border-[#C2A478] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-stone-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </span>
                    <input 
                      type="text" 
                      placeholder="SUBJECT" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-[#FCFAF7] border border-stone-200/60 rounded-xl py-3.5 px-4 pl-11 text-xs tracking-wider text-stone-800 placeholder-stone-400 focus:border-[#C2A478] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative flex">
                    <span className="absolute left-4 top-4 text-stone-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                    </span>
                    <textarea 
                      placeholder="MESSAGE" 
                      rows="5"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#FCFAF7] border border-stone-200/60 rounded-xl py-3.5 px-4 pl-11 text-xs tracking-wider text-stone-800 placeholder-stone-400 focus:border-[#C2A478] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#4A1D24] text-white font-semibold text-xs tracking-widest py-4 px-6 rounded-xl hover:bg-[#3B151C] transition-colors flex items-center justify-center gap-2 uppercase shadow-md mt-2"
                  >
                    <span>{submitted ? 'MESSAGE SENT' : 'SEND MESSAGE —>'}</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Card: Our Atelier Info & Image */}
            <div className="bg-[#FAF7F2] rounded-3xl p-8 md:p-10 border border-stone-200/50 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-stretch justify-between gap-6 w-full h-full">
              
              {/* Atelier Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
                <div>
                  <h2 className="font-serif text-3xl text-[#4A1D24] font-normal mb-2">
                    Our <span className="italic font-light">Atelier</span>
                  </h2>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed mb-4">
                    We invite you to experience our collections in person. Our doors are open for those who appreciate the finer details.
                  </p>

                  <div className="flex flex-col gap-3.5 w-full">
                    
                    {/* Flagship Store */}
                    <div className="bg-[#FCFAF7] border border-stone-200/40 p-3 rounded-2xl flex gap-3.5 items-center">
                      <div className="w-9 h-9 rounded-full bg-[#4A0E17] text-white flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-semibold text-stone-600 tracking-wider mb-0.5 uppercase">FLAGSHIP STORE</h4>
                        <p className="text-xs text-stone-800 leading-relaxed font-light">
                          Shop no. UG/5, Jagat Plaza, Mouze Pandharabodi, Law College Square, Amravati Rd, Nagpur, Maharashtra 440033
                        </p>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="bg-[#FCFAF7] border border-stone-200/40 p-3 rounded-2xl flex gap-3.5 items-center">
                      <div className="w-9 h-9 rounded-full bg-[#4A0E17] text-white flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.116-4.094-6.92-6.92l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-semibold text-stone-600 tracking-wider mb-0.5 uppercase">CONTACT DETAILS</h4>
                        <p className="text-xs text-stone-800 leading-relaxed font-light">
                          hello@miraya.com <br />
                          +91 98765 43210
                        </p>
                      </div>
                    </div>

                    {/* Store Hours */}
                    <div className="bg-[#FCFAF7] border border-stone-200/40 p-3 rounded-2xl flex gap-3.5 items-center">
                      <div className="w-9 h-9 rounded-full bg-[#4A0E17] text-white flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-semibold text-stone-600 tracking-wider mb-0.5 uppercase">STORE HOURS</h4>
                        <p className="text-xs text-stone-800 leading-relaxed font-light">
                          Monday - Saturday: 11:00 AM - 8:00 PM <br />
                          Sunday: By Appointment Only
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Arched Picture Frame */}
              <div className="relative w-full md:w-1/2 h-[450px] md:h-full p-2 border border-[#D4B26F] rounded-t-full overflow-hidden flex items-stretch">
                <div className="w-full h-full border border-[#D4B26F] rounded-t-full overflow-hidden p-1 flex items-stretch">
                  <img 
                    src="/images/atelier_interior.png" 
                    alt="Miraya Atelier Interior" 
                    className="w-full h-full object-cover rounded-t-full"
                    onError={(e) => {
                      e.target.src = '/images/textile_detail.png';
                    }}
                  />
                </div>
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

          {/* Floating Dark Burgundy Address Card */}
          <div 
            className="absolute bottom-6 left-1/2 md:left-24 transform -translate-x-1/2 md:translate-x-0 bg-[#4A1D24] text-white p-5 rounded-2xl shadow-2xl max-w-sm w-[90%] md:w-auto z-10 border border-[#D4B26F]/30"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#D4B26F]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide mb-1 text-white">Jagat Plaza</h4>
                <p className="text-[11px] text-stone-300 leading-relaxed font-light max-w-[260px]">
                  Shop no. UG/5, Jagat Plaza, Mouze Pandharabodi, Law College Square, Amravati Rd, Nagpur, Maharashtra 440033
                </p>
              </div>
            </div>
            {/* Pointer tip at the bottom of the card */}
            <div className="absolute top-full left-1/2 md:left-12 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#4A1D24]" />
          </div>

          {/* Symmetrical Round Get Directions Icon Button */}
          <a 
            href="https://maps.google.com/?q=Shop+no.+UG/5,+Jagat+Plaza,+Mouze+Pandharabodi,+Nagpur" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute bottom-6 right-24 bg-[#4A1D24] text-white p-3 rounded-full shadow-2xl flex flex-col items-center justify-center z-10 hover:bg-[#3B151C] transition-colors border border-[#D4B26F]/30"
            style={{ width: '60px', height: '60px', textDecoration: 'none' }}
          >
            <svg className="w-5 h-5 text-[#D4B26F] mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <span className="text-[7px] tracking-wider font-semibold uppercase text-stone-300">GET DIRECTIONS</span>
          </a>
        </div>
      </ScrollReveal>

      {/* D. Global Brand Footer Wrapper */}
      <Footer />

    </div>
  );
}
