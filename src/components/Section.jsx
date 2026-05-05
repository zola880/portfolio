import { motion } from 'framer-motion';

export default function Section({
  id,
  children,
  className = '',
  title,
  subtitle,
  badge,
  align = 'left',        // 'left' | 'center' | 'right' | 'asymmetric'
  bgColor = '#c7b690',   // Default to your beige
  textColor = '#1D1D1F',
  mutedColor = '#8e8e93',
  accentColor = '#A4161A',
  border = false,
  divider = false,
  animate = true,
  ...props
}) {
  // Alignment classes
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
    asymmetric: 'text-left items-start' // Default asymmetric: content left, decorative right
  };

  return (
    <>
      {/* Optional Top Divider */}
      {divider && (
        <div className="w-full h-px mx-auto max-w-7xl px-6 md:px-12" 
             style={{ backgroundColor: '#D1D1D6' }} />
      )}

      <section
        id={id}
        className={`relative py-20 md:py-28 px-6 md:px-12 ${className}`}
        style={{ backgroundColor: bgColor }}
        {...props}
      >
        {/* Optional Border Accent */}
        {border && (
          <div className="absolute top-0 left-0 right-0 h-px mx-auto max-w-7xl" 
               style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
        )}

        <div className="max-w-7xl mx-auto relative">
          
          {/* Header Block - Optional */}
          {(title || subtitle || badge) && (
            <motion.div
              initial={animate ? { opacity: 0, y: 15 } : undefined}
              whileInView={animate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className={`mb-10 md:mb-14 flex flex-col ${alignClasses[align]}`}
            >
              {/* Badge */}
              {badge && (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium mb-4 border"
                      style={{ 
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        borderColor: '#D1D1D6',
                        color: accentColor
                      }}>
                  {badge}
                </span>
              )}

              {/* Title */}
              {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3" 
                    style={{ color: textColor }}>
                  {title}
                  {accentColor && (
                    <span className="inline-block w-16 h-1 rounded-full ml-3 align-middle" 
                          style={{ backgroundColor: accentColor }} />
                  )}
                </h2>
              )}

              {/* Subtitle */}
              {subtitle && (
                <p className="text-base md:text-lg max-w-2xl" style={{ color: mutedColor }}>
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={animate ? { opacity: 0, y: 20 } : undefined}
            whileInView={animate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={align === 'asymmetric' ? 'grid lg:grid-cols-12 gap-8' : ''}
          >
            {children}
          </motion.div>

        </div>
      </section>
    </>
  );
}