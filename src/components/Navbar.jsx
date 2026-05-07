import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex justify-between items-center rounded-2xl px-6 py-4 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-red-900/5' 
            : 'bg-white/60 backdrop-blur-md'
        }`}
        style={{
          border: scrolled ? '1px solid rgba(164,22,26,0.1)' : '1px solid rgba(255,255,255,0.3)',
        }}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden transition-transform group-hover:rotate-12">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #A4161A, #660708)' }} />
              <span className="relative z-10 flex items-center justify-center h-full text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-bold text-lg tracking-tight" style={{ color: '#1D1D1F' }}>
              Zelalem<span style={{ color: '#A4161A' }}>.dev</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-red-50/50"
                style={{ color: '#3a3a3c' }}
              >
                {link.name}
                <span 
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 transition-all duration-300"
                  style={{ backgroundColor: '#A4161A' }}
                />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ 
                background: 'linear-gradient(135deg, #A4161A, #660708)',
                boxShadow: '0 4px 12px rgba(164,22,26,0.25)'
              }}
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#1D1D1F' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 mx-6 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-red-100 overflow-hidden">
          <div className="p-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{ color: '#1D1D1F' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}