import React from 'react';
import { useI18n } from '../../context/I18nContext';

export const Home8Counters: React.FC = () => {
  const { locale } = useI18n();

  const stats = [
    { value: '38+', label: 'Undergraduate & Graduate Programmes', sub: 'Across 7 Academic Schools' },
    { value: '46', label: 'Nationalities On Campus', sub: 'Global Student Community' },
    { value: '300k+', label: 'Global RKDF Alumni Worldwide', sub: 'Active in 32 Countries' },
    { value: '94%', label: 'Career Placement in 6 Months', sub: '12-Week Industry Internships' },
  ];

  return (
    <section className="pt-28 sm:pt-36 lg:pt-48 pb-20 bg-white border-b border-black/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#890C25] tracking-tight tabular-nums block">
                {s.value}
              </span>
              <h3 className="text-sm font-semibold text-ink leading-snug">{s.label}</h3>
              <p className="text-xs text-ink-55">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
