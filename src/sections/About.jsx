import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const stagger = (i) => ({ 
    duration: 0.5, 
    delay: 0.08 + i * 0.09, 
    ease: [0.22, 1, 0.36, 1] 
  });

  const highlights = [
    {
      title: 'Problem Solver',
      desc: 'I turn complex requirements into clean, efficient solutions that users love.',
      icon: '💡'
    },
    {
      title: 'Modern Stack',
      desc: 'React, Node.js, Python — I use the right tool for the job, not just the trendy one.',
      icon: '⚡'
    },
    {
      title: 'User First',
      desc: 'Every line of code is written with the end user in mind — performance, accessibility, clarity.',
      icon: '🎯'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        .about-accent-line {
          background: linear-gradient(90deg, #A4161A 0%, transparent 100%);
        }
        .about-card {
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }
        .about-card:hover {
          border-color: #A4161A;
          box-shadow: 0 8px 32px rgba(164,22,26,0.12);
          transform: translateY(-2px);
        }
      `}</style>

      <section
        id="about"
        className="relative py-24 md:py-32 px-6 md:px-12"
        style={{ backgroundColor: '#c7b690', fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Subtle background texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
             style={{ 
               backgroundImage: 'radial-gradient(circle at 1px 1px, #1D1D1F 1px, transparent 1px)', 
               backgroundSize: '32px 32px' 
             }} 
        />

        <div className="max-w-6xl mx-auto relative" ref={ref}>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={stagger(0)}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-0.5 about-accent-line" />
              <span className="uppercase tracking-[0.22em] text-xs font-semibold" 
                    style={{ color: '#A4161A' }}>
                About Me
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" 
                style={{ 
                  fontFamily: "'Crimson Pro', serif", 
                  color: '#1D1D1F',
                  letterSpacing: '-0.02em'
                }}>
              Building digital <br />
              <em style={{ color: '#A4161A', fontStyle: 'italic', fontWeight: 400 }}>
                experiences
              </em> that matter.
            </h2>
            
            <p className="text-lg max-w-2xl leading-relaxed" 
               style={{ color: '#3a3a3c' }}>
              I'm a Computer Science student at Bahir Dar University, passionate about creating fast, purposeful web applications that solve real problems.
            </p>
          </motion.div>

          {/* ── Content Grid ── */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: Bio */}
            <div className="lg:col-span-5 space-y-6">
              
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={stagger(1)}
                className="text-base leading-relaxed"
                style={{ color: '#3a3a3c' }}
              >
                I started coding to solve problems I encountered, and that mindset still drives my work today. I believe great software should be invisible — it just works, seamlessly.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={stagger(2)}
                className="text-base leading-relaxed"
                style={{ color: '#3a3a3c' }}
              >
                Beyond code, I'm committed to continuous learning, open source contribution, and sharing knowledge with the developer community.
              </motion.p>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={stagger(3)}
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
                  Currently: Full-stack & cloud computing
                </span>
              </motion.div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={stagger(4)}
                className="pl-5 border-l-2"
                style={{ borderColor: '#A4161A' }}
              >
                <p className="text-base italic leading-relaxed" 
                   style={{ 
                     fontFamily: "'Crimson Pro', serif", 
                     color: '#3a3a3c' 
                   }}>
                  "Clarity, performance, and care — in that order."
                </p>
              </motion.blockquote>
            </div>

            {/* Right: Highlights */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={stagger(idx + 3)}
                    className="about-card p-6 rounded-2xl border-2"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      borderColor: '#D1D1D6',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0" aria-hidden="true">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="font-bold mb-2 text-base" 
                            style={{ color: '#1D1D1F' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed" 
                           style={{ color: '#3a3a3c' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-3 gap-4 mt-6"
              >
                {[
                  { value: '2+', label: 'Years Coding' },
                  { value: '10+', label: 'Projects' },
                  { value: '100%', label: 'Commitment' }
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center py-5 px-3 rounded-xl border"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      borderColor: '#D1D1D6',
                    }}
                  >
                    <p className="text-2xl font-bold" 
                       style={{ 
                         fontFamily: "'Crimson Pro', serif",
                         color: '#A4161A' 
                       }}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide" 
                       style={{ color: '#8e8e93' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}