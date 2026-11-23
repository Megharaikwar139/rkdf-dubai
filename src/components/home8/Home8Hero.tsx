import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Home8Hero: React.FC = () => {
  const { locale } = useI18n();

  return (
    <section className="relative pt-36 md:pt-44 pb-20 bg-canvas overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle, Ratings, CTAs */}
          <div className="lg:col-span-6 space-y-7">
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-[#890C25]/10 text-[#890C25] text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{locale === 'ar' ? 'التميز في التعليم الأكاديمي' : 'Excellence in Education'}</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-[1.12]"
            >
              {locale === 'ar' ? (
                <>
                  اكتشف آفاق الابتكار <br />
                  الأكاديمي في دبي
                </>
              ) : (
                <>
                  Discover a World of <br />
                  Academic Innovation
                </>
              )}
            </motion.h1>

            {/* Subheading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-ink-55 max-w-xl leading-relaxed font-normal"
            >
              {locale === 'ar'
                ? 'تنقل جامعة RKDF ثلاثة عقود من التميز الأكاديمي والبحثي إلى مدينة دبي الأكاديمية العالمية — 38 برنامجاً معتمداً، وسبع كليات، وفرص تدريب عملي ورعاية تأشيرة كاملة.'
                : 'Discover a world of academic innovation, research opportunities, and a vibrant campus life at RKDF University Dubai in Dubai International Academic City.'}
            </motion.p>

            {/* Rating & Admissions Trust Box (matching reference Home-8) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 p-4 rounded-[20px] bg-white border border-black/5 shadow-sm max-w-lg"
            >
              <div className="flex items-center gap-2 pr-6 border-r border-black/10">
                <span className="text-2xl font-bold text-ink tabular-nums">4.9</span>
                <div className="flex flex-col">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-ink-55 font-medium">Student Satisfaction</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-base font-bold text-[#890C25] tabular-nums">
                  4,558+ Applications
                </span>
                <span className="text-[11px] text-ink-55 font-medium">
                  38 Programmes Across 7 Schools
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="/programs"
                className="inline-flex items-center gap-2 bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-semibold text-sm px-7 py-4 rounded-pill shadow-md transition-all hover:scale-105"
              >
                <span>{locale === 'ar' ? 'استكشف الـ 38 برنامجاً' : 'Explore All Programs'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/apply"
                className="inline-flex items-center gap-2 bg-sand/60 hover:bg-sand active:brightness-95 text-ink font-semibold text-sm px-7 py-4 rounded-pill border border-black/5 transition-all"
              >
                <span>{locale === 'ar' ? 'التقديم لدورة يناير 2027' : 'Apply for January 2027'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Banner Image & Floating Badges (matching reference) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-[32px] overflow-hidden shadow-xl border border-black/5 aspect-[4/3] sm:aspect-[16/11] bg-sand/20"
            >
              <img
                src="/assets/home8/h8_banner-img.webp"
                alt="RKDF University Dubai Campus Students"
                className="w-full h-full object-cover object-center img-warm hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Corner Arrow Button */}
              <div className="absolute top-5 right-5 w-14 h-14 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-black/5 flex items-center justify-center text-[#890C25] hover:rotate-45 transition-transform duration-300 pointer-events-none">
                <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
              </div>

              {/* Floating Bottom Trust Chip */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md px-5 py-3 rounded-[20px] shadow-lg border border-black/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#890C25]/10 flex items-center justify-center text-[#890C25] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ink">Block 11, Academic City</h4>
                  <p className="text-[11px] text-ink-55">KHDA Permit No. DXB-HE-2026-0147</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
