import React from 'react';
import { campusEvents } from '../../content/events';
import { useI18n } from '../../context/I18nContext';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export const StandardEvents: React.FC = () => {
  const { locale } = useI18n();

  return (
    <section className="py-24 bg-canvas border-t border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Header (matching reference: UPCOMING EVENT on left, View All on right) */}
        <div className="flex items-center justify-between pb-4 border-b border-black/5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-1">
              UPCOMING EVENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink">
              {locale === 'ar' ? 'الفعاليات والأيام المفتوحة القادمة' : 'Open Days & Info Sessions'}
            </h2>
          </div>

          <a
            href="/events"
            className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
          >
            <span>View All Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Event Cards (matching reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campusEvents.map((ev, idx) => (
            <div
              key={ev.id}
              className="bg-cloud rounded-[24px] overflow-hidden shadow-sm hover:shadow-md border border-black/5 flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Event Photo Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={idx === 0 ? '/assets/rkdf-building-enhanced.jpg' : idx === 1 ? '/assets/rkdf-campus-hero.jpg' : '/assets/rkdf-library.jpg'}
                    alt={ev.title}
                    className="w-full h-full object-cover img-warm group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-pill bg-cloud/95 backdrop-blur-md text-[11px] font-semibold text-terracotta shadow-sm">
                    {ev.date}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-ink-55">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{ev.time}</span>
                  </div>
                  <h3 className="text-base font-semibold text-ink group-hover:text-terracotta transition-colors leading-snug">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-ink-55 line-clamp-2 leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-black/5 mt-2 flex items-center justify-between text-xs">
                <span className="text-ink-55 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Academic City
                </span>
                <a
                  href="/events"
                  className="font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
                >
                  RSVP Free →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
