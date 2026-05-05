import Section from '../components/Section';
import { TIMELINE } from '../constants';

export default function Timeline() {
  return (
    <Section id="timeline" title="Timeline">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {TIMELINE.map((item, idx) => (
            <div key={item.year} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {idx + 1}
              </div>
              <div className="flex-1">
                <div className="bg-white border border-[var(--color-border)] rounded-lg p-6">
                  <span className="text-primary font-semibold">{item.year}</span>
                  <h4 className="text-lg font-bold text-[var(--color-text)] mt-1">{item.title}</h4>
                  <p className="text-[var(--color-muted)] mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
