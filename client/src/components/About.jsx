import React from 'react';

export default function About() {
  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* Upper Text Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 text-left">
        <h2 className="font-serif text-3xl md:text-4xl text-[#4A1D24] tracking-widest uppercase mb-6 leading-tight">
          OUR STITCH,<br />YOUR STORY
        </h2>
        <p className="text-gray-700 font-sans text-sm md:text-base leading-relaxed max-w-5xl">
          Miraya by Garima is a premium ethnic wear brand that celebrates timeless Indian craftsmanship with a refined contemporary perspective. 
          Designed for women across generations, Miraya offers thoughtfully curated festive and occasion wear ranging from <span className="font-semibold text-[#8C764D]">₹5,000 to ₹30,000</span>, blending luxurious fabrics, graceful silhouettes, and sophisticated detailing for every special moment.
        </p>
      </div>

      {/* Lower Image Banner — Hardlocked Vertical Constraints */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-4">
        <div 
          className="w-full relative overflow-hidden rounded-2xl" 
          style={{ height: '350px', maxHeight: '350px' }}
        >
          <img 
            src="/images/textile_detail.png" 
            alt="The Art of Zardozi" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            style={{ height: '100%', width: '100%', objectPosition: 'center 35%' }}
          />
          {/* Bottom Left Overlay Text */}
          <div className="absolute bottom-6 left-6 md:left-12 text-left z-10">
            <h3 className="font-serif text-white text-xl md:text-2xl tracking-wide mb-1 drop-shadow-sm">
              The Art of Zardozi
            </h3>
            <p className="text-[#D4B26F] text-[10px] md:text-xs tracking-[0.2em] font-sans uppercase drop-shadow-sm">
              INTRICATE DETAILING & METICULOUS METALLIC THREADWORK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
