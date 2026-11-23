import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const StandardHero: React.FC = () => {
  const { t, locale } = useI18n();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
      {/* Immersive Campus Building Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/assets/rkdf-building-enhanced.jpg"
          alt="RKDF University Dubai Campus"
          className="w-full h-full object-cover object-center filter brightness-[0.45] saturate-[1.1] scale-105"
        />
        {/* Warm desert sunset gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/50 mix-blend-multiply" />
      </div>

      <div className="max-w-[1000px] mx-auto text-white space-y-6 relative z-10">
        {/* Centered University Laurel Crest (matching reference top badge) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
            {/* Laurel & Crest Icon */}
            <svg className="w-10 h-10 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M32 10v44M20 22c-4 4-6 10-6 16 0 8 8 14 18 16 10-2 18-8 18-16 0-6-2-12-6-16" strokeLinecap="round" />
              <path d="M14 26c3 0 6-3 6-6s-3-6-6-6-6 3-6 6 3 6 6 6zM50 26c3 0 6-3 6-6s-3-6-6-6-6 3-6 6 3 6 6 6z" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </div>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-white"
        >
          {locale === 'ar' ? (
            <>
              رحلتك الأكاديمية تبدأ في <br className="hidden sm:inline" />
              جامعة RKDF دبي
            </>
          ) : (
            <>
              Academic Journey <br className="hidden sm:inline" />
              Begins at RKDF Dubai
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          {locale === 'ar'
            ? 'تنقل جامعة RKDF ثلاثة عقود من التميز الأكاديمي إلى مدينة دبي الأكاديمية العالمية — 38 برنامجاً دراسياً عبر سبع كليات بدفعات مصغرة.'
            : 'RKDF University Dubai brings three decades of Indian academic heritage to Dubai International Academic City — 38 programmes, seven schools, and seminar cohorts where your dean knows your name.'}
        </motion.p>

        {/* Terracotta Centered Pill Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="/programs"
            className="inline-flex items-center gap-2 bg-terracotta hover:brightness-110 active:brightness-95 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-pill shadow-lg shadow-terracotta/30 transition-all hover:scale-105"
          >
            <span>{locale === 'ar' ? 'استكشف برامجنا الأكاديمية' : 'View Our Programs'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/apply"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 active:bg-white/10 text-white backdrop-blur-md border border-white/30 font-semibold text-sm sm:text-base px-8 py-4 rounded-pill transition-all"
          >
            <span>{locale === 'ar' ? 'قدّم لدورة يناير 2027' : 'Apply for January 2027'}</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Trust Bar at the very bottom of hero */}
      <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center px-4">
        <div className="bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-pill border border-white/15 text-white/80 text-xs flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <span>KHDA Permit No. DXB-HE-2026-0147</span>
          <span className="opacity-40 hidden sm:inline">•</span>
          <span>MoHESR / CAA Licensure in Progress</span>
          <span className="opacity-40 hidden sm:inline">•</span>
          <span>Dual-Campus Degree with Bhopal</span>
        </div>
      </div>
    </section>
  );
};
