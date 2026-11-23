import React from 'react';
import { ArrowUpRight, ArrowRight, Calendar, Tag } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Home8CampusNews: React.FC = () => {
  const { locale } = useI18n();

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-black/5">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#890C25]">
              Dispatches & Research
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink">
              {locale === 'ar' ? 'أخبار الحرم الجامعي والمقالات' : 'Campus News'}
            </h2>
          </div>

          <a
            href="/news"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#890C25] hover:underline"
          >
            <span>See All News</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2-Column Editorial Grid (matching Home 8 style7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Large Featured Article */}
          <div className="lg:col-span-7 bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md border border-black/5 flex flex-col sm:flex-row group transition-all">
            <div className="sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden bg-sand/30">
              <img
                src="/assets/home8/img-23-300x340.webp"
                alt="Research at RKDF"
                className="w-full h-full object-cover img-warm group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-ink-55">
                  <span className="px-2.5 py-0.5 rounded-pill bg-[#890C25]/10 text-[#890C25] font-semibold">
                    Education
                  </span>
                  <span>August 6, 2026</span>
                </div>
                <h3 className="text-lg font-bold text-ink group-hover:text-[#890C25] transition-colors leading-snug">
                  10 Effective Study Frameworks for College Success in Gulf Tech Cohorts
                </h3>
                <p className="text-xs text-ink-55 leading-relaxed line-clamp-3">
                  How seminar cohorts, early corporate apprenticeships, and dual-campus exchanges redefine modern undergraduate achievement in the UAE.
                </p>
              </div>

              <div className="pt-4 border-t border-black/5">
                <a
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#890C25] hover:underline"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: 2 Stacked Horizontal Articles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Article 2 */}
            <div className="bg-white rounded-[24px] p-5 shadow-sm hover:shadow-md border border-black/5 flex gap-5 group transition-all">
              <div className="w-28 h-28 rounded-[16px] overflow-hidden shrink-0 bg-sand/30">
                <img
                  src="/assets/home8/img-24-150x150.webp"
                  alt="Study Abroad"
                  className="w-full h-full object-cover img-warm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-between space-y-2 flex-1">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-ink-55">
                    <span className="text-[#890C25] font-semibold">Study Abroad</span>
                    <span>• August 4, 2026</span>
                  </div>
                  <h4 className="text-sm font-bold text-ink group-hover:text-[#890C25] transition-colors leading-snug line-clamp-2">
                    Classroom Community-Building: Testing Frontier AI Pedagogy
                  </h4>
                </div>
                <a href="/news" className="text-[11px] font-semibold text-[#890C25] hover:underline flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-[24px] p-5 shadow-sm hover:shadow-md border border-black/5 flex gap-5 group transition-all">
              <div className="w-28 h-28 rounded-[16px] overflow-hidden shrink-0 bg-sand/30">
                <img
                  src="/assets/home8/frame_522_1x-150x150.webp"
                  alt="Healthcare Tech"
                  className="w-full h-full object-cover img-warm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-between space-y-2 flex-1">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-ink-55">
                    <span className="text-[#890C25] font-semibold">Health Tech</span>
                    <span>• July 28, 2026</span>
                  </div>
                  <h4 className="text-sm font-bold text-ink group-hover:text-[#890C25] transition-colors leading-snug line-clamp-2">
                    Cardiovascular AI Biomarkers: Collaborative Research with Bhopal Labs
                  </h4>
                </div>
                <a href="/news" className="text-[11px] font-semibold text-[#890C25] hover:underline flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
