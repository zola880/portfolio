import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';

// Lazy load below-fold sections for better initial load performance
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

// Loading skeleton for lazy sections
const SectionSkeleton = ({ height = 'h-96' }) => (
  <div className={`w-full ${height} animate-pulse rounded-2xl`} 
       style={{ backgroundColor: 'var(--color-soft)' }} />
);

export default function App() {
  const { scrollY } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Scroll progress for top indicator (0 to 100)
  const scrollProgress = useTransform(scrollY, [0, 2500], [0, 100]);
  
  // Show back-to-top button after scrolling 400px
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setShowBackToTop(latest > 400);
      
      // Update active section for nav highlighting
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Smooth scroll handler for anchor links
  const scrollToSection = (e, id) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  // Back to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Skip to Content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-[var(--color-text)] focus:font-medium focus:shadow-lg border-2"
        style={{ borderColor: 'var(--color-border)' }}
      >
        Skip to content
      </a>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left"
        style={{ 
          backgroundColor: 'var(--color-primary)',
          scaleX: scrollProgress,
        }}
      />

      {/* Main App Wrapper */}
      <main 
        id="main-content"
        className="relative min-h-screen"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
        <Hero onNavigate={scrollToSection} />

        {/* 
          🎯 PERFECT SECTION SPACING
          Using CSS custom properties for consistent, responsive gaps
          Values based on visual weight and content flow
        */}
        <div className="flex flex-col" style={{ gap: 'var(--section-gap)' }}>
          
          <Suspense fallback={<SectionSkeleton height="h-[60vh]" />}>
            <section id="about" className="section section-about">
              <About />
            </section>
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-[50vh]" />}>
            <section id="skills" className="section section-skills">
              <Skills />
            </section>
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-[50vh]" />}>
            <section id="projects" className="section section-projects">
              <Projects />
            </section>
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-[60vh]" />}>
            <section id="contact" className="section section-contact">
              <Contact />
            </section>
          </Suspense>

        </div>

        <Footer />

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 p-3 rounded-xl border-2 shadow-lg hover:shadow-xl transition-all"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-primary)'
              }}
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

      </main>

      {/* Global Styles - now using CSS variables from index.css */}
      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }
        :focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: var(--color-bg);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border-radius: 4px;
          opacity: 0.7;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--color-primary-dark);
          opacity: 1;
        }
      `}</style>
    </>
  );
}