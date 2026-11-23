import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { programmes } from '../../content/programmes';
import { useI18n } from '../../context/I18nContext';

export const StandardPrograms: React.FC = () => {
  const { locale } = useI18n();
  const [activeTab, setActiveTab] = useState<'all' | 'UG' | 'PG' | 'FD'>('all');

  const programCategories = [
    {
      title: 'Undergraduate Degrees',
      titleAr: 'برامج البكالوريوس',
      count: '26 Programmes',
      image: '/assets/rkdf-engineering.jpg',
      link: '/programs?level=UG',
      category: 'UG',
    },
    {
      title: 'Postgraduate & Executive MBA',
      titleAr: 'الدراسات العليا والماجستير التنفيذي',
      count: '7 Programmes',
      image: '/assets/rkdf-library.jpg',
      link: '/programs?level=PG',
      category: 'PG',
    },
    {
      title: 'Computing, AI & Robotics',
      titleAr: 'الحوسبة والذكاء الاصطناعي',
      count: 'Gulf AI Compute Lab',
      image: '/assets/rkdf-research.jpg',
      link: '/academics/computing',
      category: 'UG',
    },
    {
      title: 'Architecture & Built Environment',
      titleAr: 'العمارة والتصميم المستدام',
      count: 'Desert Materials Rigs',
      image: '/assets/rkdf-architecture.jpg',
      link: '/academics/engineering',
      category: 'UG',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-canvas overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (matching reference layout) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
              Academic Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight">
              {locale === 'ar' ? 'برامجنا الأكاديمية' : 'Our Programs'}
            </h2>
            <p className="type-body leading-relaxed">
              {locale === 'ar'
                ? 'انطلق في رحلة معرفية وبحثية استثنائية في جامعة RKDF دبي. صممت معايير القبول لدينا لاستقطاب العقول المبدعة والواعدة للمساهمة في بناء المستقبل.'
                : 'Embark on a journey of knowledge, discovery, and growth at RKDF University Dubai. Our admissions process is designed to identify bright, motivated individuals who are eager to contribute to our dynamic academic community.'}
            </p>

            {/* Hand-drawn curved arrow & tilted terracotta pill button (matching reference) */}
            <div className="relative pt-6 pb-2">
              {/* Hand-drawn style SVG curved arrow */}
              <div className="absolute -top-3 left-10 w-20 h-16 pointer-events-none opacity-60">
                <svg viewBox="0 0 100 80" fill="none" stroke="#C0542E" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M15 15 C 35 10, 65 30, 75 60" />
                  <path d="M65 58 L 76 62 L 78 50" />
                </svg>
              </div>

              {/* Tilted Pill Button */}
              <div className="pt-8">
                <a
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-terracotta hover:brightness-110 active:brightness-95 text-white font-semibold text-sm px-7 py-3.5 rounded-pill shadow-md transform -rotate-12 hover:-rotate-6 transition-all duration-300"
                >
                  <span>{locale === 'ar' ? 'عرض جميع الـ 38 برنامجاً' : 'View All Programs'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Reconciled 38 programmes note */}
            <div className="pt-6 border-t border-black/5 flex items-center gap-3 text-xs text-ink-55">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>38 total degrees across 7 schools (26 UG · 7 PG · 5 Foundation)</span>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Rounded Photo Cards (matching reference) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {programCategories.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="group relative h-64 sm:h-72 rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-black/5 flex items-end"
                >
                  {/* Photo with zoom on hover */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover img-warm group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

                  {/* Overlay Content at bottom */}
                  <div className="relative z-10 p-6 w-full text-white flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-apricot block mb-1">
                        {item.count}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold leading-snug">
                        {locale === 'ar' ? item.titleAr : item.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-terracotta group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
