import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout, Server, Database, GitBranch, Brain, Smartphone } from 'lucide-react';
 
const skillsData = [
  {
    category: 'Frontend',
    icon: Layout,
    number: '01',
    color: '#A4161A',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
    tags: ['Semantic', 'ES6+', 'Hooks', 'Utility-First', 'Accessible'],
  },
  {
    category: 'Backend',
    icon: Server,
    number: '02',
    color: '#7C3A3B',
    skills: ['Node.js', 'PHP', 'Python', 'REST APIs'],
    tags: ['Runtime', 'Server-Side', 'Versatile', 'Architecture'],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    number: '03',
    color: '#5C2E2F',
    skills: ['Flutter Basics', 'Dart Fundamentals', 'Responsive UI'],
    tags: ['Cross-platform', 'Widgets', 'App Layout'],
  },
  {
    category: 'Database',
    icon: Database,
    number: '04',
    color: '#5C2E2F',
    skills: ['MySQL', 'MongoDB'],
    tags: ['Relational', 'NoSQL'],
  },
  {
    category: 'Tools & DevOps',
    icon: GitBranch,
    number: '05',
    color: '#3D2020',
    skills: ['Git', 'GitHub'],
    tags: ['Version Control', 'Code Hosting'],
  },
  {
    category: 'Emerging Tech',
    icon: Brain,
    number: '06',
    color: '#A4161A',
    skills: ['Basics of Machine Learning', 'AI Integration'],
    tags: ['Basics & Concepts', 'Practical Apps'],
  },
];
 
function SkillRow({ data, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = data.icon;
  const isEven = index % 2 === 0;
 
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Thin separator */}
      <div className="absolute top-0 left-0 right-0 h-px"
           style={{ background: 'linear-gradient(90deg, rgba(164,22,26,0.4) 0%, rgba(29,29,31,0.08) 100%)' }} />
 
      <div className="grid lg:grid-cols-12 gap-0 py-7 items-start">
 
        {/* ── Left meta ── */}
        <div className="lg:col-span-3 flex items-start gap-4 mb-5 lg:mb-0 pr-6">
          {/* Number */}
          <span
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: '0.7rem',
              color: 'rgba(164,22,26,0.5)',
              letterSpacing: '0.05em',
              paddingTop: '4px',
              minWidth: '22px',
            }}
          >
            {data.number}
          </span>
 
          {/* Icon box */}
          <div
            className="flex-shrink-0 w-9 h-9 rounded-sm flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(164,22,26,0.08)',
              border: '1px solid rgba(164,22,26,0.15)',
              color: '#A4161A',
            }}
          >
            <Icon size={16} strokeWidth={1.8} />
          </div>
 
          {/* Category name */}
          <div>
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#1D1D1F',
                lineHeight: 1.2,
              }}
            >
              {data.category}
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#8e8e93',
                marginTop: '3px',
              }}
            >
              {data.skills.length} technologies
            </p>
          </div>
        </div>
 
        {/* ── Skill pills ── */}
        <div className="lg:col-span-9 flex flex-wrap gap-2.5">
          {data.skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: index * 0.07 + i * 0.04 + 0.15 }}
              whileHover={{ y: -2, scale: 1.03 }}
              className="relative group/pill cursor-default"
            >
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-sm"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 12px rgba(29,29,31,0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
                  transition: 'all 0.2s ease',
                }}
              >
                {/* Dot accent */}
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#A4161A', opacity: 0.7 }}
                />
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#1D1D1F',
                    letterSpacing: '0.01em',
                  }}
                >
                  {skill}
                </span>
                {/* Sub-label on hover */}
                <span
                  className="hidden group-hover/pill:inline-block"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '10px',
                    color: '#8e8e93',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    borderLeft: '1px solid rgba(29,29,31,0.1)',
                    paddingLeft: '8px',
                    marginLeft: '2px',
                  }}
                >
                  {data.tags[i]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
 
export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
      `}</style>
 
      <section
        id="skills"
        className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden"
        style={{ backgroundColor: '#c7b690', fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Noise texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '180px 180px',
          }}
        />
 
        {/* Large faint background word */}
        <div
          className="pointer-events-none absolute select-none"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 'clamp(100px, 15vw, 180px)',
            fontWeight: 700,
            color: 'rgba(29,29,31,0.03)',
            right: 0,
            top: '6%',
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          Skills
        </div>
 
        <div className="max-w-6xl mx-auto relative z-10" ref={headerRef}>
 
          {/* ── Header ── */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-3 mb-5"
              >
                <span
                  style={{
                    width: '44px', height: '2px',
                    background: '#A4161A',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#A4161A',
                  }}
                >
                  Technical Stack
                </span>
              </motion.div>
 
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 }}
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#1D1D1F',
                }}
              >
                Skills &{' '}
                <em style={{ color: '#A4161A', fontWeight: 400, fontStyle: 'italic' }}>
                  Technologies
                </em>
              </motion.h2>
            </div>
 
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 16 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  color: '#555',
                  fontWeight: 300,
                  borderLeft: '2px solid rgba(164,22,26,0.3)',
                  paddingLeft: '16px',
                }}
              >
                Tools I reach for to ship fast, reliable, and user-centric web applications — from pixel to production.
              </p>
            </motion.div>
          </div>
 
          {/* ── Skill Rows ── */}
          <div>
            {skillsData.map((cat, i) => (
              <SkillRow key={cat.category} data={cat} index={i} />
            ))}
            {/* Final rule */}
            <div
              className="h-px mt-0"
              style={{ background: 'linear-gradient(90deg, rgba(164,22,26,0.4) 0%, rgba(29,29,31,0.08) 100%)' }}
            />
          </div>
 
          {/* ── Footer note ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center justify-between flex-wrap gap-4"
          >
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: '0.85rem',
                fontStyle: 'italic',
                color: 'rgba(29,29,31,0.35)',
              }}
            >
              Always learning. Always building.
            </p>
            <div className="flex items-center gap-2">
              {['#', '{}', '/>', '~'].map((sym, i) => (
                <span
                  key={sym}
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: i === 0 ? '#A4161A' : `rgba(164,22,26,${0.25 + i * 0.15})`,
                    letterSpacing: '0.05em',
                  }}
                >
                  {sym}
                </span>
              ))}
            </div>
          </motion.div>
 
        </div>
      </section>
    </>
  );
}