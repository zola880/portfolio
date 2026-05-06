import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import experienceImg from '../assets/unnamed.png';
import achievementImg from '../assets/unnamed.png';
 
// ── Lightbox Modal ──────────────────────────────────────────────────────────
function Lightbox({ src, alt, label, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
        style={{ backgroundColor: 'rgba(10,8,6,0.85)', backdropFilter: 'blur(12px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-3xl w-full"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Decorative corner accents */}
          <span className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 rounded-tl-sm z-10"
                style={{ borderColor: '#A4161A' }} />
          <span className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 rounded-tr-sm z-10"
                style={{ borderColor: '#A4161A' }} />
          <span className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 rounded-bl-sm z-10"
                style={{ borderColor: '#A4161A' }} />
          <span className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 rounded-br-sm z-10"
                style={{ borderColor: '#A4161A' }} />
 
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl"
               style={{ border: '1px solid rgba(164,22,26,0.3)' }}>
            <img src={src} alt={alt} className="w-full h-auto max-h-[70vh] object-contain"
                 style={{ backgroundColor: '#1a1714' }} />
            <div className="px-5 py-3 flex items-center justify-between"
                 style={{ backgroundColor: '#1a1714', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="text-sm font-medium tracking-wide" style={{ color: '#e8dcc8', fontFamily: "'Crimson Pro', Georgia, serif" }}>
                {label}
              </span>
              <span className="text-xs uppercase tracking-widest" style={{ color: '#A4161A' }}>
                Zelalem Ybabe
              </span>
            </div>
          </div>
 
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 focus:outline-none"
            style={{ backgroundColor: '#A4161A', color: '#fff' }}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
 
// ── Main Component ───────────────────────────────────────────────────────────
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const [lightbox, setLightbox] = useState(null); // { src, alt, label }
 
  const cards = [
    {
      img: experienceImg,
      alt: 'Hands-on Projects',
      label: 'Hands-on Projects',
      tag: 'Experience',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        </svg>
      ),
    },
    {
      img: achievementImg,
      alt: 'Certifications',
      label: 'Certifications & Awards',
      tag: 'Achievements',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
      ),
    },
  ];
 
  const stagger = (i) => ({ duration: 0.55, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] });
 
  return (
    <>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .about-divider { background: linear-gradient(90deg, #A4161A 0%, transparent 100%); }
        .about-card-btn {
          position: relative; overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .about-card-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .about-card-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(0,0,0,0.22); }
        .about-card-btn:hover::after { opacity: 1; }
        .about-card-btn:active { transform: translateY(-1px); }
        .line-ornament { width: 44px; height: 2px; background: #A4161A; display: inline-block; vertical-align: middle; margin-right: 12px; }
      `}</style>
 
      <section
        id="about"
        className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden"
        style={{ backgroundColor: '#c7b690', fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Subtle background texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1D1D1F 1px, transparent 0)', backgroundSize: '28px 28px' }} />
 
        {/* Large decorative letter */}
        <div className="pointer-events-none absolute top-10 right-0 md:right-8 select-none leading-none"
             style={{ fontFamily: "'Crimson Pro', serif", fontSize: 'clamp(140px,18vw,220px)', fontWeight: 600, color: 'rgba(29,29,31,0.04)', lineHeight: 1 }}>
          A
        </div>
 
        <div className="max-w-6xl mx-auto relative" ref={ref}>
 
          {/* ── Section label ── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={stagger(0)}
            className="mb-12 flex items-center gap-3"
          >
            <span className="line-ornament" />
            <span className="uppercase tracking-[0.22em] text-xs font-medium" style={{ color: '#A4161A' }}>
              About Me
            </span>
          </motion.div>
 
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
 
            {/* ── LEFT ── */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
 
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={stagger(1)}
              >
                <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 'clamp(2.6rem,5vw,3.8rem)', fontWeight: 600, lineHeight: 1.12, color: '#1D1D1F' }}>
                  Crafting digital<br />
                  <em style={{ color: '#A4161A', fontStyle: 'italic' }}>experiences</em><br />
                  with purpose.
                </h2>
              </motion.div>
 
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={stagger(2)}
                className="text-base leading-relaxed"
                style={{ color: '#3a3a3c', maxWidth: '38ch' }}
              >
                I'm <span className="font-medium" style={{ color: '#1D1D1F' }}>Zelalem Ybabe</span>, a Computer Science student at Bahir Dar University — building fast, real-world web applications with modern tools and intentional design.
              </motion.p>
 
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={stagger(3)}
                className="text-sm leading-relaxed"
                style={{ color: '#555' }}
              >
                When I'm not coding, I'm exploring new technologies, contributing to open source, or sharing what I learn with the developer community.
              </motion.p>
 
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={stagger(4)}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                style={{ backgroundColor: 'rgba(29,29,31,0.07)', border: '1px solid rgba(29,29,31,0.1)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                        style={{ backgroundColor: '#A4161A' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2"
                        style={{ backgroundColor: '#A4161A' }} />
                </span>
                <span className="text-xs font-medium tracking-wide" style={{ color: '#1D1D1F' }}>
                  Full-stack development & cloud computing
                </span>
              </motion.div>
 
              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={stagger(5)}
                className="relative pl-5 mt-2"
                style={{ borderLeft: '3px solid #A4161A' }}
              >
                <p className="text-sm italic leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.05rem', color: '#3a3a3c' }}>
                  "Great software isn't about complexity — it's about solving real problems with clarity, performance, and care."
                </p>
              </motion.blockquote>
            </div>
 
            {/* ── RIGHT ── */}
            <div className="lg:col-span-7 space-y-6">
 
              {/* Cards */}
              <div className="grid sm:grid-cols-2 gap-5">
                {cards.map((card, i) => (
                  <motion.div
                    key={card.tag}
                    initial={{ opacity: 0, y: 28 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...stagger(i + 3), delay: 0.25 + i * 0.12 }}
                    className="group rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.55)',
                      border: '1px solid rgba(255,255,255,0.7)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ height: '200px' }}>
                      <img
                        src={card.img}
                        alt={card.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Tag pill */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                           style={{ backgroundColor: 'rgba(164,22,26,0.9)', color: '#fff', backdropFilter: 'blur(4px)' }}>
                        {card.icon}
                        {card.tag}
                      </div>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0"
                           style={{ background: 'linear-gradient(to top, rgba(29,29,31,0.6) 0%, transparent 55%)' }} />
                      <p className="absolute bottom-3 left-4 text-white text-sm font-medium tracking-wide"
                         style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1rem' }}>
                        {card.label}
                      </p>
                    </div>
 
                    {/* Button */}
                    <div className="px-4 py-4">
                      <button
                        onClick={() => setLightbox({ src: card.img, alt: card.alt, label: card.label })}
                        className="about-card-btn w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium tracking-wide transition-colors focus:outline-none focus-visible:ring-2"
                        style={{
                          backgroundColor: '#A4161A',
                          color: '#fff',
                          boxShadow: '0 4px 18px rgba(164,22,26,0.35)',
                          focusRingColor: '#A4161A',
                        }}
                        aria-label={`View ${card.label}`}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                        View {card.tag}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
 
              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: '3+', label: 'Years coding' },
                  { value: '10+', label: 'Projects built' },
                  { value: '5+', label: 'Certificates' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center py-5 px-3 rounded-2xl"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.55)',
                      border: '1px solid rgba(255,255,255,0.7)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: '2rem', fontWeight: 600, color: '#A4161A', lineHeight: 1 }}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs tracking-wide uppercase" style={{ color: '#555' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
 
          </div>
        </div>
      </section>
 
      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          label={lightbox.label}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}