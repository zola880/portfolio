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
          <div className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                className="px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200"
                style={{ 
                  color: '#1D1D1F',
                  backgroundColor: 'rgba(255,255,255,0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#A4161A';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.color = '#1D1D1F';
                }}
              >
                {link.label}
              </a>
            ))}
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