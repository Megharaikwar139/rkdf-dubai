import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { ArrowRight, Users, Compass, Sparkles } from 'lucide-react';

export const StandardCampusLife: React.FC = () => {
  const { locale } = useI18n();

  return (
    <section className="py-24 bg-canvas">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center space-y-8">
        {/* Top Oval Pill Badge (matching reference) */}
        <div className="flex justify-center">
          <span className="px-4 py-1.5 rounded-pill bg-sand text-ink text-xs font-semibold tracking-wider uppercase">
            Campus Life
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight">
            {locale === 'ar'
              ? 'الازدهار خارج قاعات المحاضرات: الحياة في حرم دبي'
              : 'Thriving Beyond Classes: Campus Life at RKDF'}
          </h2>
          <p className="type-body text-sm sm:text-base mx-auto">
            {locale === 'ar'
              ? 'بيئة جامعية حيوية وآمنة تجمع 46 جنسية تحت سماء دبي، مع أنشطة رياضية وثقافية ومختبرات مفتوحة على مدار الساعة.'
              : 'A vibrant, collaborative ecosystem where 46 nationalities connect, innovate, and launch their careers in Dubai International Academic City.'}
          </p>
        </div>

        {/* Hero Photo Collage (matching reference students walking on campus) */}
        <div className="pt-6">
          <div className="relative w-full max-w-5xl mx-auto h-[380px] sm:h-[460px] md:h-[520px] rounded-[32px] overflow-hidden shadow-lg border border-black/5">
            <img
              src="/assets/rkdf-campus-hero.jpg"
              alt="Students thriving on campus"
              className="w-full h-full object-cover object-center img-warm"
            />
            {/* Subtle bottom vignette */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent flex items-end p-8 text-white">
              <div className="flex flex-wrap items-center justify-between w-full gap-4">
                <span className="text-sm font-semibold">
                  Block 11 Campus Plaza & Green Spaces · Dubai Academic City
                </span>
                <a
                  href="/student-life"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-apricot hover:underline"
                >
                  Explore Student Clubs & Societies →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Four Highlight Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 text-xs text-ink-55">
          <div className="p-4 bg-cloud rounded-card border border-black/5 shadow-sm text-center">
            <span className="text-xl font-semibold text-ink block mb-0.5 tabular-nums">31</span>
            <span>Clubs & Societies</span>
          </div>
          <div className="p-4 bg-cloud rounded-card border border-black/5 shadow-sm text-center">
            <span className="text-xl font-semibold text-ink block mb-0.5 tabular-nums">4</span>
            <span>Sports Facilities</span>
          </div>
          <div className="p-4 bg-cloud rounded-card border border-black/5 shadow-sm text-center">
            <span className="text-xl font-semibold text-ink block mb-0.5 tabular-nums">24/7</span>
            <span>Secure Study Pods</span>
          </div>
          <div className="p-4 bg-cloud rounded-card border border-black/5 shadow-sm text-center">
            <span className="text-xl font-semibold text-ink block mb-0.5 tabular-nums">100%</span>
            <span>Visa Sponsorship</span>
          </div>
        </div>
      </div>
    </section>
  );
};
