import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/unnamed.png';
 
// ── Magnetic cursor tilt on the photo ────────────────────────────────────────
function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 });
 
  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };
 
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
 
// ── Typewriter role cycling ────────────────────────────────────────────────────
const ROLES = ['Full-Stack Developer', 'UI Craftsman', 'Open Source Contributor', 'Cloud Explorer'];
 
function RoleCycler() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
 
  useEffect(() => {
    const target = ROLES[idx];
    let timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);
 
  return (
    <span style={{ fontFamily: "'Libre Baskerville', serif", color: '#A4161A', fontStyle: 'italic' }}>
      {displayed}
      <span className="inline-block w-0.5 h-5 ml-0.5 align-middle animate-pulse"
            style={{ backgroundColor: '#A4161A', marginBottom: '2px' }} />
    </span>
  );
}
 
// ── Main Hero ─────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
 
        .hero-noise {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 200px 200px; opacity: 0.5;
        }
        .hero-rule { width: 1px; height: 80px; background: linear-gradient(to bottom, transparent, #A4161A, transparent); }
        .pill-tag {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 14px; border-radius: 100px;
          font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          border: 1px solid rgba(164,22,26,0.25);
          background: rgba(255,255,255,0.7); color: #3a3a3c;
          backdrop-filter: blur(8px);
        }
        .cta-primary {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px; border-radius: 4px;
          font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          background: #A4161A; color: #fff;
          box-shadow: 0 2px 0 #660708, 0 8px 24px rgba(164,22,26,0.25);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          text-decoration: none;
        }
        .cta-primary::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 0 #660708, 0 14px 32px rgba(164,22,26,0.3); }
        .cta-primary:active { transform: translateY(1px); box-shadow: 0 1px 0 #660708; }
 
        .cta-ghost {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 28px; border-radius: 4px;
          font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          border: 1.5px solid rgba(29,29,31,0.3); color: #1D1D1F;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          text-decoration: none; background: transparent;
        }
        .cta-ghost:hover { border-color: #A4161A; color: #A4161A; background: rgba(164,22,26,0.04); }
 
        .social-link {
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid rgba(29,29,31,0.15); color: #3a3a3c;
          background: rgba(255,255,255,0.5); backdrop-filter: blur(4px);
          transition: border-color 0.2s, color 0.2s, transform 0.2s, background 0.2s;
        }
        .social-link:hover { border-color: #A4161A; color: #A4161A; transform: translateY(-3px); background: rgba(255,255,255,0.9); }
 
        /* ✨ Enhanced Photo Frame - Simple & Responsive */
        .photo-frame {
          position: relative;
          border-radius: 16px; /* Rounded corners */
          overflow: hidden;
          box-shadow: 
            0 20px 40px -8px rgba(29,29,31,0.2),
            0 0 0 1px rgba(29,29,31,0.08);
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,240,230,0.95));
        }
        .photo-frame::before {
          /* Subtle animated border glow - simple pulse */
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 17px;
          background: linear-gradient(135deg, transparent, rgba(164,22,26,0.3), transparent);
          animation: border-glow 3s ease-in-out infinite;
          pointer-events: none;
          opacity: 0.6;
        }
        @keyframes border-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .photo-image {
          width: 100%;
          display: block;
          aspect-ratio: 3/4;
          object-fit: cover;
          object-position: center top;
          border-radius: 16px; /* Match frame */
          transition: transform 0.3s ease;
        }
        .photo-frame:hover .photo-image {
          transform: scale(1.03);
        }
 
        /* ✨ Corner Badge - Simple */
        .corner-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 2;
          padding: 5px 12px;
          background: rgba(255,255,255,0.95);
          border: 1px solid rgba(164,22,26,0.2);
          border-radius: 100px;
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #A4161A;
        }
 
        /* Floating stat cards */
        .stat-float {
          position: absolute;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 6px 20px rgba(29,29,31,0.1);
          border-radius: 8px;
          padding: 8px 14px;
          z-index: 2;
        }
 
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .float-anim { animation: float-y 4s ease-in-out infinite; }
        .float-anim-delay { animation: float-y 4s ease-in-out 1.5s infinite; }
 
        .stat-num {
          font-family: 'Libre Baskerville', serif;
          font-weight: 700;
          font-size: 1.2rem;
          line-height: 1;
          color: #1D1D1F;
        }
        .stat-label {
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8e8e93;
          margin-top: 2px;
        }
      `}</style>
 
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: '#c7b690', fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Noise texture */}
        <div className="hero-noise" />
 
        {/* Thin vertical decorative line — left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-px opacity-20"
             style={{ background: 'linear-gradient(to bottom, transparent 10%, #A4161A 40%, #A4161A 60%, transparent 90%)' }} />
 
        {/* Large faint serif initial — background */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 'clamp(280px, 32vw, 480px)',
            fontWeight: 700,
            color: 'rgba(29,29,31,0.035)',
            lineHeight: 1,
            right: '-2vw', top: '50%',
            transform: 'translateY(-50%)',
            letterSpacing: '-0.04em',
          }}
        >
          Z
        </div>
 
        {/* Horizontal rule across the top */}
        <div className="absolute top-0 left-0 right-0 h-px opacity-20"
             style={{ background: 'linear-gradient(90deg, transparent, #A4161A 30%, #A4161A 70%, transparent)' }} />
 
        {/* ── Main content ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
 
            {/* ── LEFT ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Status pill */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="pill-tag">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                          style={{ backgroundColor: '#A4161A' }} />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5"
                          style={{ backgroundColor: '#A4161A' }} />
                  </span>
                  Available for opportunities
                </span>
              </motion.div>
 
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs uppercase tracking-[0.25em] mb-3"
                   style={{ color: '#8e8e93', fontFamily: "'Outfit', sans-serif" }}>
                  Portfolio · 2025
                </p>
                <h1 style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: '#1D1D1F',
                }}>
                  Zelalem<br />
                  <span style={{ color: '#A4161A', fontStyle: 'italic', fontWeight: 400 }}>Ybabe</span>
                </h1>
              </motion.div>
 
              {/* Divider with role */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="hero-rule" />
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: '#3a3a3c', minHeight: '1.5rem' }}>
                  <RoleCycler />
                </p>
              </motion.div>
 
              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.38 }}
                className="max-w-md text-base leading-relaxed"
                style={{ color: '#3a3a3c', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
              >
                CS student at Bahir Dar University — I build{' '}
                <span style={{ fontWeight: 500, color: '#1D1D1F' }}>fast, purposeful web applications</span>{' '}
                that solve real problems. Clean code, sharp design, no fluff.
              </motion.p>
 
              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.46 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a href="#projects" className="cta-primary">
                  View Work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#contact" className="cta-ghost">
                  Get in Touch
                </a>
              </motion.div>
 
              {/* Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex items-center gap-4 pt-2"
              >
                <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8e8e93' }}>
                  Find me
                </span>
                <div className="h-px w-8" style={{ backgroundColor: 'rgba(29,29,31,0.15)' }} />
                <a href="https://github.com/zola880" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.389-1.979 1.027-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.6 9.6 0 0112 6.836a9.6 9.6 0 012.502.333c1.91-1.29 2.75-1.022 2.75-1.022.544 1.372.201 2.386.099 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/zelalem-ybabe-685371405/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.222 0 22.225 0z"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
 
            {/* ── RIGHT — Responsive Photo ── */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Offset grid ornament */}
              <div className="absolute pointer-events-none hidden md:block"
                   style={{
                     top: '-20px', left: '4%',
                     width: '120px', height: '120px',
                     backgroundImage: 'radial-gradient(circle, rgba(164,22,26,0.35) 1.5px, transparent 0)',
                     backgroundSize: '14px 14px',
                   }} />
              <div className="absolute pointer-events-none hidden md:block"
                   style={{
                     bottom: '-16px', right: '6%',
                     width: '90px', height: '90px',
                     backgroundImage: 'radial-gradient(circle, rgba(29,29,31,0.2) 1.5px, transparent 0)',
                     backgroundSize: '12px 12px',
                   }} />
 
              <div className="relative" style={{ width: 'min(280px, 90vw)' }}> {/* Smaller on mobile */}
                <TiltCard>
                  <div className="photo-frame">
                    {/* ✨ Corner Badge */}
                    <div className="corner-badge">CS Student</div>
                    
                    {/* Red accent bar at top */}
                    <div style={{ height: '3px', background: 'linear-gradient(90deg, #A4161A, #660708)' }} />
                    
                    {/* Image with rounded corners */}
                    <img
                      src={profileImg}
                      alt="Zelalem Ybabe — Computer Science Student"
                      className="photo-image"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </TiltCard>
 
                {/* Floating stat — top right (hidden on mobile) */}
                <motion.div
                  className="stat-float float-anim hidden md:block"
                  style={{ top: '12px', right: '-15px' }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="stat-num">10+</div>
                  <div className="stat-label">Projects</div>
                </motion.div>
 
                {/* Floating stat — bottom left (hidden on mobile) */}
                <motion.div
                  className="stat-float float-anim-delay hidden md:block"
                  style={{ bottom: '18px', left: '-15px' }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style={{ backgroundColor: '#10B981' }} />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5"
                            style={{ backgroundColor: '#10B981' }} />
                    </span>
                    <span className="stat-num" style={{ fontSize: '0.8rem' }}>Open</span>
                  </div>
                  <div className="stat-label">Freelance</div>
                </motion.div>
 
                {/* Floating tag — bottom right (simplified for mobile) */}
                <motion.div
                  className="stat-float"
                  style={{ bottom: '-10px', right: '10px' }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="flex items-center gap-1">
                    <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '0.65rem', color: '#A4161A', fontStyle: 'italic' }}>&lt;/&gt;</span>
                    <span className="stat-label" style={{ marginTop: 0, color: '#1D1D1F', fontSize: '10px', fontWeight: 500 }}>Full Stack</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
 
          </div>
        </div>
 
        {/* Bottom scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8e8e93' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A4161A" strokeWidth="2" strokeLinecap="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}