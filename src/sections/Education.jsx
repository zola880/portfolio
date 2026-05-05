import Section from '../components/Section';
import { EDUCATION } from '../constants';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <Section id="education" title="Academic Foundations" subtitle="Education">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="glass-effect p-10 rounded-[2.5rem] border-slate-200 relative overflow-hidden group shadow-sm bg-white"
            >
              <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-primary/10 transition-colors">
                <GraduationCap size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <div className="p-2 bg-primary/5 rounded-lg">
                    <BookOpen size={20} />
                  </div>
                  <span className="font-mono text-sm tracking-widest">{edu.period}</span>
                </div>
                
                <h4 className="text-3xl font-bold text-navy mb-2">{edu.school}</h4>
                <p className="text-xl text-cool-gray mb-6">{edu.degree}</p>
                <div className="h-px w-20 bg-primary/30 mb-6" />
                <p className="text-cool-gray/80 leading-relaxed max-w-xl">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="glass-effect p-8 rounded-[2.5rem] bg-indigo-50/50 border-indigo-100 shadow-sm">
            <h5 className="text-lg font-bold mb-6 flex items-center gap-2 text-navy">
              <Award className="text-primary w-5 h-5" /> Recent Focus
            </h5>
            <ul className="space-y-4">
              {[
                'Advanced Algorithms',
                'Human-Computer Interaction',
                'Distributed Systems',
                'Cloud Architecture',
                'Cybersecurity Essentials'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-cool-gray">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-effect p-8 rounded-[2.5rem] bg-slate-50 border-slate-200 shadow-sm">
            <p className="text-sm italic text-cool-gray/60 leading-relaxed text-center">
              "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
