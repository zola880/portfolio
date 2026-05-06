import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

// ── REAL PROJECT DATA ──────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'Heart Disease Predictor',
    description: 'Machine learning model that analyzes patient data to predict heart disease risk with 90% accuracy. Built with Python, Streamlit, and ML algorithms. Trained on 300+ patient records to provide instant health risk assessment.',
    shortDesc: 'ML model predicting heart disease risk with 90% accuracy',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Machine Learning', 'Healthcare', 'Streamlit'],
    liveDemo: 'https://heart-disease-project-zkpefojs9h3ctuy6c8vdle.streamlit.app/',
    github: 'https://github.com/zola880/HEART-DISEASE-PROJECT',
    year: 2024,
  },
  {
    id: 2,
    title: 'Intern Finder AI',
    description: 'AI-powered platform connecting students with internship opportunities. Facilitates seamless communication between students, companies, and university staff. Features automated acceptance letter delivery and remote application processing.',
    shortDesc: 'AI platform connecting students with internships',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'AI Integration', 'MongoDB'],
    liveDemo: 'https://intern-finder-eoul.vercel.app/',
    github: 'https://github.com/zola880/intern__finder',
    year: 2024,
  },
  {
    id: 3,
    title: 'Navigate Addis',
    description: 'Comprehensive transportation guide for newcomers to Addis Ababa. Features route planning, fare calculation, live maps, and multiple transport options. Helps users navigate the city efficiently with real-time information.',
    shortDesc: 'Transport navigation & route planner for Addis Ababa',
    image: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Maps API', 'Transportation', 'UI/UX'],
    liveDemo: '#',
    github: 'https://github.com/zola880/Navigate_addis',
    year: 2025,
  },
  {
    id: 4,
    title: 'Tena Health Advisor',
    description: 'AI-integrated health advisory platform for Ethiopians. Provides localized health advice, gym routines, and nutrition guidance tailored to Ethiopian lifestyle and dietary preferences. Acts as a personal health companion.',
    shortDesc: 'AI health advisor with Ethiopian-focused guidance',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'Health', 'React', 'Nutrition'],
    liveDemo: 'https://tena-rbej.vercel.app/',
    github: 'https://github.com/zola880/Tena',
    year: 2025,
  },
  {
    id: 5,
    title: 'Social Connect Platform',
    description: 'Full-featured social media platform with video sharing, real-time chat, and voice/video calling capabilities. Built for local community engagement with modern communication features.',
    shortDesc: 'Social platform with video, chat & calling',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'WebRTC', 'Socket.io', 'Video'],
    liveDemo: 'https://dating-platform-for-people-with-hiv-orcin.vercel.app/',
    github: 'https://github.com/zola880',
    year: 2025,
  },
];

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index, expanded, onToggle }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="project-card group relative rounded-sm overflow-hidden"
      style={{
        backgroundColor: 'rgba(255,255,255,0.85)',
        border: '1px solid rgba(255,255,255,0.9)',
        boxShadow: '0 4px 24px rgba(29,29,31,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* ── Image wrapper ── */}
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Index badge */}
        <div
          className="absolute top-3 left-3 w-7 h-7 rounded-sm flex items-center justify-center text-white z-10"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: '11px',
            fontWeight: 700,
            backgroundColor: 'rgba(164,22,26,0.92)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Year badge */}
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-sm text-white text-xs z-10"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            backgroundColor: 'rgba(29,29,31,0.85)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {project.year}
        </div>

        {/* ── Overlay ─ */}
        <div
          className="card-overlay absolute inset-0 flex flex-col justify-end p-4 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(12,7,5,0.95) 0%, rgba(12,7,5,0.55) 55%, transparent 100%)',
            opacity: 0,
            pointerEvents: 'none',
            transition: 'opacity 0.28s ease',
          }}
        >
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-sm text-white text-xs font-medium"
              style={{
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '0.04em',
                border: '1px solid rgba(255,255,255,0.35)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(6px)',
                transition: 'background 0.2s, color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.92)';
                e.currentTarget.style.color = '#1D1D1F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = '#fff';
              }}
            >
              <Github size={13} />
              Code
            </a>
            {project.liveDemo !== '#' && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-2 rounded-sm text-white text-xs font-medium"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: '0.04em',
                  backgroundColor: '#A4161A',
                  border: '1px solid #A4161A',
                  transition: 'opacity 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <ExternalLink size={13} />
                Live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-bold leading-snug flex-1"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: '0.95rem',
              color: '#1D1D1F',
            }}
          >
            {project.title}
          </h3>
          <ArrowUpRight
            size={14}
            className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: '#A4161A' }}
          />
        </div>

        {/* Description - Expandable */}
        <div className="relative">
          <p
            className="text-sm leading-relaxed mb-3"
            style={{
              fontFamily: "'Outfit', sans-serif",
              color: '#3a3a3c',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            {expanded ? project.description : project.shortDesc}
          </p>
          
          {/* Expand/Collapse button */}
          <button
            onClick={() => onToggle(project.id)}
            className="flex items-center gap-1 text-xs font-medium transition-colors"
            style={{
              color: '#A4161A',
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {expanded ? (
              <>
                Show Less
                <ChevronUp size={12} />
              </>
            ) : (
              <>
                Read More
                <ChevronDown size={12} />
              </>
            )}
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#A4161A',
                backgroundColor: 'rgba(164,22,26,0.08)',
                border: '1px solid rgba(164,22,26,0.15)',
                padding: '3px 8px',
                borderRadius: '2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom sweep bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ backgroundColor: '#A4161A' }}
      />
    </motion.article>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const [showAll, setShowAll] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  // Toggle description expand/collapse
  const toggleExpand = (id) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Show first 4 or all projects
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        .project-card:hover .card-overlay {
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `}</style>

      <section
        id="projects"
        className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden"
        style={{ backgroundColor: '#c7b690' }}
      >
        {/* Background texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '180px 180px',
          }}
        />

        {/* Large watermark */}
        <div
          className="pointer-events-none absolute select-none"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 'clamp(90px, 14vw, 170px)',
            fontWeight: 700,
            color: 'rgba(29,29,31,0.03)',
            left: '-1vw',
            bottom: '4%',
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          Work
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── Header ─ */}
          <div ref={headerRef} className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-3 mb-5"
              >
                <span style={{ width: '44px', height: '2px', background: '#A4161A', display: 'inline-block' }} />
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#A4161A',
                }}>
                  Portfolio
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
                Featured{' '}
                <em style={{ color: '#A4161A', fontWeight: 400, fontStyle: 'italic' }}>Projects</em>
              </motion.h2>
            </div>

            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 16 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: '#555',
                fontWeight: 300,
                borderLeft: '2px solid rgba(164,22,26,0.3)',
                paddingLeft: '16px',
              }}>
                Real-world applications solving real problems — from healthcare AI to transportation navigation.
              </p>
            </motion.div>
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedProjects.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={idx}
                expanded={expandedProjects.has(project.id)}
                onToggle={toggleExpand}
              />
            ))}
          </div>

          {/* ── Show More Button ── */}
          {!showAll && PROJECTS.length > 4 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-10 flex justify-center"
            >
              <button
                onClick={() => setShowAll(true)}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-sm font-semibold transition-all"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '14px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  border: '2px solid rgba(164,22,26,0.2)',
                  color: '#A4161A',
                  boxShadow: '0 4px 16px rgba(164,22,26,0.12)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#A4161A';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#A4161A';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(164,22,26,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
                  e.currentTarget.style.color = '#A4161A';
                  e.currentTarget.style.borderColor = 'rgba(164,22,26,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(164,22,26,0.12)';
                }}
              >
                View All Projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </motion.div>
          )}

          {/* ── Footer CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-12 flex items-center justify-between flex-wrap gap-4"
          >
            <p style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: '0.85rem',
              fontStyle: 'italic',
              color: 'rgba(29,29,31,0.45)',
            }}>
              Showing {displayedProjects.length} of {PROJECTS.length} projects
            </p>

            <a
              href="https://github.com/zola880"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2.5 transition-all"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#1D1D1F',
                textDecoration: 'none',
              }}
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-sm transition-all duration-200 group-hover/cta:bg-[#A4161A] group-hover/cta:text-white group-hover/cta:border-[#A4161A]"
                style={{ border: '1.5px solid rgba(29,29,31,0.2)', color: '#1D1D1F' }}
              >
                <Github size={15} />
              </span>
              View GitHub Profile
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                style={{ color: '#A4161A' }}
              />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}