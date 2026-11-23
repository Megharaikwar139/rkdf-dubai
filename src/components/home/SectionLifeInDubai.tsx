import React from 'react';
import { ArchMask } from '../common/ArchMask';
import { livingExpensesInDubai } from '../../content/fees';
import { useI18n } from '../../context/I18nContext';
import { Train, Utensils, Shield, Smartphone, HeartHandshake, Compass } from 'lucide-react';

export const SectionLifeInDubai: React.FC = () => {
  const { t, locale } = useI18n();

  const chips = [
    '31 Student Societies',
    '4 Modern Sports Facilities',
    'Multifaith Prayer Rooms',
    '24/7 Safe Study Pods',
    'Olympic Swimming Pool Access',
    'Dedicated Women’s Lounge',
  ];

  return (
    <section className="py-24 md:py-32 bg-sand/60 border-y border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
              Section 08 · Student Experience
            </span>
            <h2 className="type-h2 text-ink">
              {t.sections.lifeTitle}
            </h2>
            <p className="type-body mt-2">
              {t.sections.lifeSub}
            </p>
          </div>
          {/* Chips */}
          <div className="flex flex-wrap gap-2 max-w-md">
            {chips.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-pill bg-cloud border border-black/5 text-xs font-semibold text-ink shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Photo Bento with mixed rounded and Arch masks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Photo 1: Large Arch Mask (Campus Life 1) */}
          <div className="md:col-span-5 h-[360px] md:h-[440px]">
            <ArchMask variant="md" className="w-full h-full shadow-md">
              <img
                src="/assets/rkdf-campus-1.jpg"
                alt="Student Collaborative Commons at Academic City"
                className="w-full h-full object-cover img-warm"
                width={500}
                height={440}
              />
            </ArchMask>
          </div>

          {/* Photo 2: Wide Rounded Mask (Campus Aerial) */}
          <div className="md:col-span-7 h-[360px] md:h-[440px] rounded-[28px] overflow-hidden shadow-md border border-black/5 relative group">
            <img
              src="/assets/rkdf-campus-aerial.jpg"
              alt="Dubai International Academic City Campus Aerial View"
              className="w-full h-full object-cover img-warm group-hover:scale-105 transition-transform duration-700"
              width={700}
              height={440}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-apricot block mb-1">
                  Location Focus
                </span>
                <h4 className="text-xl font-semibold">
                  Dubai International Academic City (DIAC)
                </h4>
                <p className="text-xs text-white/80 max-w-md mt-1">
                  A dedicated higher education free zone hosting 28,000+ students from 150 nationalities.
                </p>
              </div>
            </div>
          </div>

          {/* Cost-of-Living Widget Tile (Col 6) */}
          <div className="md:col-span-6 bg-cloud rounded-[28px] p-8 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-1">
                Student Budgeting Index
              </span>
              <h3 className="text-2xl font-semibold text-ink mb-2">
                Typical Cost of Living in Dubai
              </h3>
              <p className="text-xs text-ink-55 leading-relaxed mb-6">
                All-inclusive realistic estimates for international students living in Academic City student housing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {livingExpensesInDubai.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-tile bg-sand/30 border border-black/5 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-full bg-cloud text-ink shadow-sm shrink-0">
                      <Compass className="w-4 h-4 text-terracotta" />
                    </div>
                    <div>
                      <span className="text-xs text-ink-55 block">{exp.item}</span>
                      <span className="text-sm font-semibold text-ink tabular-nums">{exp.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-black/5 mt-6 flex items-center justify-between text-xs text-ink-55">
              <span>University sponsors 1-year renewable residence visas</span>
              <a href="/admissions/visa" className="font-semibold text-terracotta hover:underline">
                Visa Guidelines →
              </a>
            </div>
          </div>

          {/* Photos 3 & 4 (Col 3 each) */}
          <div className="md:col-span-3 h-[320px] rounded-[28px] overflow-hidden shadow-sm border border-black/5">
            <img
              src="/assets/rkdf-campus-3.jpg"
              alt="Design studios and cultural auditorium"
              className="w-full h-full object-cover img-warm"
              width={350}
              height={320}
            />
          </div>

          <div className="md:col-span-3 h-[320px] rounded-[28px] overflow-hidden shadow-sm border border-black/5">
            <img
              src="/assets/rkdf-campus-4.jpg"
              alt="Outdoor courtyard and sports fields"
              className="w-full h-full object-cover img-warm"
              width={350}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
