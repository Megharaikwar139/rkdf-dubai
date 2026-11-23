import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const StandardAboutJourney: React.FC = () => {
  const { locale } = useI18n();

  return (
    <section className="relative py-20 bg-canvas overflow-hidden">
      {/* Container with rich Terracotta Background matching reference */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative bg-[#9B3218] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          {/* Subtle geometric background pattern */}
          <div className="absolute inset-0 bg-radial-gradient opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-apricot block">
                Heritage & Legacy Since 1995
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
                {locale === 'ar' ? (
                  <>
                    انطلق في رحلة ملهمة: <br />
                    اكتشف قصة ورؤية جامعة RKDF
                  </>
                ) : (
                  <>
                    Embark on a Journey: <br />
                    Unveiling the Story of <br />
                    RKDF University
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                {locale === 'ar'
                  ? 'من حرم بهوبال الممتد على مساحة 50 فداناً إلى مجمعنا المتطور في المدينة الأكاديمية بدبي، نجمع بين التقاليد الأكاديمية الراسخة والابتكار في الذكاء الاصطناعي والتكنولوجيا الحديثة.'
                  : 'From our 50-acre Bhopal home research estate to our purpose-configured facility in Dubai International Academic City, we fuse three decades of rigorous academic tradition with cutting-edge Gulf innovation.'}
              </p>

              <div className="pt-2">
                <a
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-apricot transition-colors group"
                >
                  <span>{locale === 'ar' ? 'اعرف المزيد عن تاريخنا' : 'Learn More'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Imagery composition of library & classical academia (matching reference right visual) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 h-[360px] sm:h-[420px]">
                {/* Image 1: Tall Library Stacks */}
                <div className="rounded-[20px] overflow-hidden shadow-md h-full">
                  <img
                    src="/assets/rkdf-library.jpg"
                    alt="RKDF University Library Commons"
                    className="w-full h-full object-cover img-warm"
                  />
                </div>
                {/* Image 2: Campus Architecture & Sculptures */}
                <div className="rounded-[20px] overflow-hidden shadow-md h-full">
                  <img
                    src="/assets/rkdf-architecture.jpg"
                    alt="University Built Environment"
                    className="w-full h-full object-cover img-warm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Watermark Outline Text (matching reference visual footer of about) */}
        <div className="pt-8 text-center select-none pointer-events-none">
          <span
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent block"
            style={{
              WebkitTextStroke: '1.5px rgba(15, 34, 61, 0.08)',
            }}
          >
            About University
          </span>
        </div>
      </div>
    </section>
  );
};
