import React, { useState } from 'react';
import { ArrowUpRight, Check, Star, BookOpen, GraduationCap } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Home8Academics: React.FC = () => {
  const { locale } = useI18n();
  const [activeTab, setActiveTab] = useState<'UG' | 'PG'>('UG');

  const ugPrograms = [
    'B.Tech Artificial Intelligence & Data Science',
    'B.Tech Computer Science & Cyber Security',
    'B.Sc Biomedical Informatics & Health Tech',
    'Bachelor of Business Administration (BBA)',
    'B.Arch Sustainable Architecture & Urbanism',
    'B.Sc Biotechnology & Gene Tech',
  ];

  const pgPrograms = [
    'Master of Business Administration (Executive MBA)',
    'M.Sc Artificial Intelligence & Applied Robotics',
    'LLM International Commercial & Maritime Law',
    'M.Sc Sustainable Energy & Desert Systems',
    'Master of Public Health (MPH)',
    'M.Sc Cyber Security & Cloud Defense',
  ];

  return (
    <section className="py-24 bg-canvas border-t border-black/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/5">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#890C25]">
              Curriculum & Degrees
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight">
              {locale === 'ar' ? 'البرامج الأكاديمية والدرجات' : 'Academics & Program'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-pill bg-white border border-black/5 shadow-sm text-xs">
              <span className="font-bold text-ink tabular-nums">4.9</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-ink-55">• 38 Programmes</span>
            </div>

            <a
              href="/programs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#890C25] hover:underline"
            >
              <span>View All 38 Degrees</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content Composition: 2 Program Cards + Image Stack (matching Home 8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Undergraduate (Burgundy Card) */}
          <div className="lg:col-span-4 bg-[#890C25] text-white rounded-[28px] p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                  26 Degrees
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Undergraduate</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Four-year bachelor degrees with built-in 12-week industry internship and hands-on lab projects.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                {ugPrograms.map((prog, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-white/95">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/60 shrink-0" />
                    <span>{prog}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-white/15 mt-8 flex items-center justify-between text-xs">
              <span className="text-white/70">Intake: Jan & Sep 2027</span>
              <a href="/programs?level=UG" className="font-semibold text-white underline hover:opacity-80">
                Explore UG →
              </a>
            </div>
          </div>

          {/* Card 2: Graduate Programs (Clean White Card) */}
          <div className="lg:col-span-4 bg-white rounded-[28px] p-8 sm:p-10 shadow-sm border border-black/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-[#890C25]/10 flex items-center justify-center text-[#890C25]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-55">
                  7 Degrees
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-ink mb-2">Graduate</h3>
                <p className="text-xs text-ink-55 leading-relaxed">
                  Postgraduate and executive programmes tailored for working professionals and researchers.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                {pgPrograms.map((prog, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-ink">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#890C25] shrink-0" />
                    <span>{prog}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-black/5 mt-8 flex items-center justify-between text-xs">
              <span className="text-ink-55">Evening & Weekend cohorts</span>
              <a href="/programs?level=PG" className="font-semibold text-[#890C25] underline hover:opacity-80">
                Explore PG →
              </a>
            </div>
          </div>

          {/* Card 3: Dual Image Stack (from Home-8 assets: h8_p4 and h8_p3) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="rounded-[24px] overflow-hidden shadow-sm border border-black/5 flex-1 relative bg-sand/30 min-h-[220px]">
              <img
                src="/assets/home8/h8_p4.webp"
                alt="Students in lecture"
                className="w-full h-full object-cover img-warm hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-tile text-xs font-semibold text-ink shadow-sm">
                Collaborative Seminar Suites · Block 11
              </div>
            </div>

            <div className="rounded-[24px] overflow-hidden shadow-sm border border-black/5 flex-1 relative bg-sand/30 min-h-[220px]">
              <img
                src="/assets/home8/h8_p3.webp"
                alt="Research laboratory"
                className="w-full h-full object-cover img-warm hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-tile text-xs font-semibold text-ink shadow-sm">
                Advanced AI & Robotics Computing Lab
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
