import React from 'react';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Home8UpcomingEvent: React.FC = () => {
  const { locale } = useI18n();

  return (
    <section className="relative py-20 bg-[#890C25] text-white overflow-hidden">
      {/* Decorative Title SVG Backdrop from Home-8 */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <img
          src="/assets/home8/title.svg"
          alt="Title Backdrop"
          className="w-full max-w-4xl object-contain"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-[32px] border border-white/20 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <span className="px-4 py-1 rounded-pill bg-white/20 text-white text-xs font-semibold uppercase tracking-wider inline-block">
              Upcoming Event
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              {locale === 'ar'
                ? 'مهرجان التوظيف: استكشف مستقبلك المهني في دبي'
                : 'Career Carnival: Explore Your Professional Journey'}
            </h2>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/90 pt-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-apricot" />
                <span>November 27, 2026 • 10:00 AM GST</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-apricot" />
                <span>Block 11, Dubai Academic City</span>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="/events"
              className="inline-flex items-center gap-2 bg-white text-[#890C25] hover:bg-white/90 font-bold text-sm px-8 py-4 rounded-pill shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span>Join Now Free</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
