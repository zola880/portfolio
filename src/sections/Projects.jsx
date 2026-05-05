import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-12"
      style={{ backgroundColor: '#c7b690' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Simple, asymmetric */}
        <div className="grid md:grid-cols-12 gap-6 mb-12">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1.5 rounded-full text-sm font-medium mb-4 border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderColor: '#D1D1D6',
                color: '#A4161A'
              }}
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: '#1D1D1F' }}
            >
              Featured <span style={{ color: '#A4161A' }}>Projects</span>
            </motion.h2>
          </div>
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base"
              style={{ color: '#3a3a3c' }}
            >
              Recent work and personal projects built with modern tools.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid - 4 cards per row, compact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS.slice(0, 8).map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl overflow-hidden border-2 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderColor: '#D1D1D6',
              }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Hover Overlay - Simple */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1F]/90 via-[#1D1D1F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.github}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
                    style={{ color: '#1D1D1F' }}
                    title="View Code"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveDemo}
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                    style={{ background: '#A4161A', color: 'white' }}
                    title="Live Demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-bold mb-1.5 line-clamp-1" style={{ color: '#1D1D1F' }}>
                  {project.title}
                </h3>
                
                <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: '#3a3a3c' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-[10px] font-medium border"
                      style={{ 
                        backgroundColor: 'rgba(164,22,26,0.08)',
                        borderColor: '#D1D1D6',
                        color: '#A4161A'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More - Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/zola880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border-2 transition-colors"
            style={{ 
              borderColor: '#A4161A',
              color: '#A4161A',
              backgroundColor: 'transparent'
            }}
          >
            View More on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}