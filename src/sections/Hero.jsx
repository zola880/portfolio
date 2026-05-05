import { motion } from 'framer-motion';
import profileImg from '../assets/unnamed.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden"
      style={{ backgroundColor: '#c7b690' }}
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20" 
             style={{ background: 'radial-gradient(circle, #A4161A, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15" 
             style={{ background: 'radial-gradient(circle, #660708, transparent)', filter: 'blur(80px)' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-10" 
             style={{ background: 'radial-gradient(circle, #D97706, transparent)', filter: 'blur(70px)' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#1D1D1F 1px, transparent 1px), linear-gradient(90deg, #1D1D1F 1px, transparent 1px)`,
               backgroundSize: '60px 60px'
             }} 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE - Content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border"
                 style={{ 
                   backgroundColor: 'rgba(255,255,255,0.9)', 
                   borderColor: 'rgba(164,22,26,0.2)',
                   boxShadow: '0 4px 20px rgba(164,22,26,0.1)'
                 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                      style={{ backgroundColor: '#A4161A' }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" 
                      style={{ backgroundColor: '#A4161A' }} />
              </span>
              <span className="text-sm font-semibold tracking-wide" style={{ color: '#1D1D1F' }}>
                Available for opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              <span className="block" style={{ color: '#1D1D1F' }}>Hi, I'm</span>
              <span className="relative inline-block mt-2">
                <span className="relative z-10" 
                      style={{ 
                        background: 'linear-gradient(135deg, #A4161A 0%, #660708 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                  Zelalem Ybabe
                </span>
                <svg className="absolute -bottom-3 left-0 w-full h-3 opacity-30" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0 6 Q 50 0, 100 6 T 200 6 T 300 6" 
                        stroke="#A4161A" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-xl leading-relaxed" style={{ color: '#3a3a3c' }}>
              I build <span className="font-semibold" style={{ color: '#A4161A' }}>simple, fast</span>, and real-world web applications with modern tools and clean design.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-xl transition-all"
                style={{ 
                  background: 'linear-gradient(135deg, #A4161A, #660708)',
                  boxShadow: '0 10px 30px rgba(164,22,26,0.3)'
                }}
              >
                View Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-all bg-white/80 backdrop-blur-sm"
                style={{ 
                  borderColor: '#A4161A', 
                  color: '#1D1D1F',
                }}
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium" style={{ color: '#8e8e93' }}>Connect</span>
              <div className="h-px w-12" style={{ backgroundColor: '#D1D1D6' }} />
              <div className="flex gap-3">
                {['github', 'linkedin'].map((social) => (
                  <motion.a
                    key={social}
                    href={social === 'github' ? 'https://github.com/zola880' : 'https://www.linkedin.com/in/zelalem-ybabe-685371405/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center border-2 transition-all backdrop-blur-sm"
                    style={{ 
                      borderColor: 'rgba(164,22,26,0.2)', 
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      color: '#1D1D1F'
                    }}
                  >
                    {social === 'github' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.389-1.979 1.027-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022.797-.222 1.652-.333 2.502-.333.85 0 1.705.111 2.502.333 1.91-1.29 2.75-1.022 2.75-1.022.544 1.372.201 2.386.099 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z"/>
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl rotate-12 opacity-20" 
                   style={{ background: 'linear-gradient(135deg, #A4161A, #660708)' }} />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-20" 
                   style={{ background: 'linear-gradient(135deg, #D97706, #A4161A)' }} />
              
              {/* Main Image Container */}
              <div className="relative p-3 rounded-3xl" 
                   style={{ 
                     background: 'linear-gradient(135deg, #A4161A, #660708)',
                     boxShadow: '0 25px 50px -12px rgba(164,22,26,0.4)'
                   }}>
                <div className="relative rounded-2xl overflow-hidden bg-white p-2">
                  <img
                    src={profileImg}
                    alt="Zelalem Ybabe"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg backdrop-blur-md border shadow-lg"
                       style={{ 
                         backgroundColor: 'rgba(255,255,255,0.95)',
                         borderColor: 'rgba(164,22,26,0.2)'
                       }}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono" style={{ color: '#A4161A' }}>&lt;/&gt;</span>
                      <span className="text-xs font-bold" style={{ color: '#1D1D1F' }}>Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open for freelance badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl backdrop-blur-xl border shadow-xl flex items-center gap-2"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  borderColor: 'rgba(164,22,26,0.2)'
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                        style={{ backgroundColor: '#10B981' }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" 
                        style={{ backgroundColor: '#10B981' }} />
                </span>
                <span className="text-sm font-semibold" style={{ color: '#1D1D1F' }}>Open for freelance</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}