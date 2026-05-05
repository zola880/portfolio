import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 md:px-12 border-t"
            style={{ 
              backgroundColor: '#1D1D1F',
              borderColor: 'rgba(164,22,26,0.2)'
            }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                 style={{ background: 'linear-gradient(135deg, #A4161A, #660708)' }}>
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zelalem.dev</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm" style={{ color: '#8e8e93' }}>
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 fill-current" style={{ color: '#A4161A' }} />
            <span>by Zelalem Ybabe</span>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            style={{ 
              backgroundColor: 'rgba(164,22,26,0.1)',
              color: '#A4161A',
              border: '1px solid rgba(164,22,26,0.2)'
            }}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}