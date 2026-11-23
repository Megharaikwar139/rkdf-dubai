import React, { useState } from 'react';
import { Plus, Minus, Share2 } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Home8Professors: React.FC = () => {
  const { locale } = useI18n();
  const [expandedSocial, setExpandedSocial] = useState<number | null>(null);

  const professors = [
    {
      id: 0,
      name: 'Prof. C. Hannah Ueno',
      designation: 'Assistant Professor & Head of Design',
      image: '/assets/home8/1-668a3b3758d6f.webp',
      dept: 'Design & Built Environment',
    },
    {
      id: 1,
      name: 'Dr. Thomas Fred',
      designation: 'Associate Professor & AI Lab Lead',
      image: '/assets/home8/2-668a3b38785e6.webp',
      dept: 'School of Computing',
    },
    {
      id: 2,
      name: 'Prof. Jennifer Aarons',
      designation: 'Professor of Management & Dean',
      image: '/assets/home8/3-668a3b38c2618.webp',
      dept: 'School of Business',
    },
    {
      id: 3,
      name: 'Dr. Michael McGarvey',
      designation: 'Professor of Public Policy & Law',
      image: '/assets/home8/4-668a3b39cf942.webp',
      dept: 'Faculty of Law & Policy',
    },
  ];

  return (
    <section className="py-24 bg-canvas border-t border-black/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#890C25]">
            World-Class Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight">
            {locale === 'ar' ? 'أساتذة وعمداء الجامعة' : 'University Professors'}
          </h2>
          <p className="text-sm text-ink-55">
            Mentors with international PhDs, patent holdings, and extensive GCC industry advisory experience.
          </p>
        </div>

        {/* 4-Column Grid (matching Home 8 team members) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {professors.map((prof, idx) => {
            const isShareOpen = expandedSocial === prof.id;

            return (
              <div
                key={prof.id}
                className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg border border-black/5 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Photo & Social Flyout */}
                <div className="relative aspect-[4/5] overflow-hidden bg-sand/20">
                  <img
                    src={prof.image}
                    alt={prof.name}
                    className="w-full h-full object-cover object-top img-warm group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Social Share Trigger */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                    {isShareOpen && (
                      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-pill shadow-md text-[11px] font-semibold text-[#890C25] animate-in fade-in slide-in-from-right-2">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-70 px-1">IN</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-70 px-1">X</a>
                        <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="hover:opacity-70 px-1">PUB</a>
                      </div>
                    )}
                    <button
                      onClick={() => setExpandedSocial(isShareOpen ? null : prof.id)}
                      className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-[#890C25] hover:bg-[#890C25] hover:text-white transition-colors"
                      aria-label="Toggle Social Links"
                    >
                      {isShareOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-6 text-center space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#890C25] block">
                    {prof.dept}
                  </span>
                  <h3 className="text-base font-bold text-ink group-hover:text-[#890C25] transition-colors">
                    {prof.name}
                  </h3>
                  <p className="text-xs text-ink-55">{prof.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
