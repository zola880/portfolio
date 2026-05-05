import { motion } from 'framer-motion';
import { 
  Code2, Palette, Server, Database, Brain, 
  GitBranch, Terminal, Layout, Globe, Sparkles 
} from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    icon: <Layout className="w-5 h-5" />,
    skills: [
      { name: 'HTML5', desc: 'Semantic & Accessible' },
      { name: 'CSS3', desc: 'Modern Styling' },
      { name: 'JavaScript', desc: 'ES6+ Features' },
      { name: 'React', desc: 'Hooks & State' },
      { name: 'Tailwind CSS', desc: 'Utility-First' },
    ]
  },
  {
    category: 'Backend',
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: 'Node.js', desc: 'Runtime Environment' },
      { name: 'PHP', desc: 'Server-Side Scripting' },
      { name: 'Python', desc: 'Versatile Language' },
      { name: 'REST APIs', desc: 'Architecture Design' },
    ]
  },
  {
    category: 'Database',
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: 'MySQL', desc: 'Relational Database' },
      { name: 'MongoDB', desc: 'NoSQL Database' },
      { name: 'SQL', desc: 'Query Language' },
    ]
  },
  {
    category: 'Tools',
    icon: <GitBranch className="w-5 h-5" />,
    skills: [
      { name: 'Git', desc: 'Version Control' },
      { name: 'GitHub', desc: 'Code Hosting' },
      { name: 'VS Code', desc: 'Primary Editor' },
      { name: 'Terminal', desc: 'Command Line' },
    ]
  },
  {
    category: 'Emerging',
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: 'Machine Learning', desc: 'Basics & Concepts' },
      { name: 'AI Integration', desc: 'Practical Apps' },
    ]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
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
              My Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: '#1D1D1F' }}
            >
              Skills & <span style={{ color: '#A4161A' }}>Technologies</span>
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
              Tools I use to build fast, reliable, and user-friendly web applications.
            </motion.p>
          </div>
        </div>

        {/* Skills Grid - Clean, consistent */}
        <div className="space-y-12">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.08 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                     style={{ 
                       backgroundColor: 'rgba(164,22,26,0.1)',
                       color: '#A4161A'
                     }}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#1D1D1F' }}>
                  {category.category}
                </h3>
              </div>

              {/* Skills - Simple cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.08 + skillIdx * 0.03 }}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-xl border transition-all cursor-default"
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      borderColor: '#D1D1D6',
                    }}
                  >
                    <p className="font-medium text-sm mb-1" style={{ color: '#1D1D1F' }}>
                      {skill.name}
                    </p>
                    <p className="text-xs" style={{ color: '#8e8e93' }}>
                      {skill.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-2 text-sm"
          style={{ color: '#8e8e93' }}
        >
          <Sparkles className="w-4 h-4" style={{ color: '#A4161A' }} />
          <span>Always learning. Always building.</span>
          <Sparkles className="w-4 h-4" style={{ color: '#A4161A' }} />
        </motion.div>

      </div>
    </section>
  );
}