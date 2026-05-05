import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import experienceImg from '../assets/unnamed.jpg';
import achievementImg from '../assets/unnamed.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 md:px-12"
      style={{ backgroundColor: '#c7b690' }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Sticky heading */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#1D1D1F' }}>
              About <span style={{ color: '#A4161A' }}>Me</span>
            </h2>
            <div className="mt-5 w-16 h-1 rounded-full" style={{ backgroundColor: '#A4161A' }} />
          </motion.div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5"
            >
              <p className="text-lg leading-relaxed" style={{ color: '#3a3a3c' }}>
                Hi, I'm <span className="font-semibold" style={{ color: '#A4161A' }}>Zelalem Ybabe</span>, a 
                Computer Science student at Bahir Dar University in Ethiopia.
              </p>

              <p className="text-base leading-relaxed" style={{ color: '#3a3a3c' }}>
                I build simple, fast, and real-world web applications with modern tools and clean design. 
                I love turning complex problems into elegant solutions that actually help people.
              </p>

              <p className="text-base leading-relaxed" style={{ color: '#3a3a3c' }}>
                When I'm not coding, I'm exploring new technologies, contributing to open source, 
                or sharing what I learn with the developer community.
              </p>
            </motion.div>

            {/* Current Focus Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderColor: '#D1D1D6',
                color: '#1D1D1F'
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                      style={{ backgroundColor: '#A4161A' }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" 
                      style={{ backgroundColor: '#A4161A' }} />
              </span>
              <span className="text-sm font-medium">
                Currently: Full-stack development & cloud computing
              </span>
            </motion.div>

            {/* Images - Simple, clean */}
            <div className="grid sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative rounded-xl overflow-hidden border-2"
                style={{ borderColor: '#D1D1D6' }}
              >
                <img 
                  src={experienceImg} 
                  alt="Development work" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3" 
                     style={{ background: 'linear-gradient(to top, rgba(29,29,31,0.9), transparent)' }}>
                  <span className="text-white text-sm font-medium">Hands-on Projects</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative rounded-xl overflow-hidden border-2 sm:mt-8"
                style={{ borderColor: '#D1D1D6' }}
              >
                <img 
                  src={achievementImg} 
                  alt="Achievements" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3" 
                     style={{ background: 'linear-gradient(to top, rgba(29,29,31,0.9), transparent)' }}>
                  <span className="text-white text-sm font-medium">Certifications</span>
                </div>
              </motion.div>
            </div>

            {/* Quote / Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-xl border-l-4"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.85)',
                borderLeftColor: '#A4161A',
                borderColor: '#D1D1D6'
              }}
            >
              <p className="text-base font-medium italic" style={{ color: '#1D1D1F' }}>
                "I believe great software isn't about complexity — it's about solving real problems 
                with clarity, performance, and care."
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}