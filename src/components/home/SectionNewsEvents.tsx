import React, { useState } from 'react';
import { newsArticles } from '../../content/news';
import { campusEvents } from '../../content/events';
import { useI18n } from '../../context/I18nContext';
import { Calendar, ArrowRight, Clock, MapPin, Check } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export const SectionNewsEvents: React.FC = () => {
  const { t, locale } = useI18n();
  const [rsvpSent, setRsvpSent] = useState<string | null>(null);

  const featuredNews = newsArticles.find((n) => n.featured) || newsArticles[0];
  const compactNews = newsArticles.filter((n) => n.id !== featuredNews.id).slice(0, 4);

  const handleRsvp = (eventId: string) => {
    setRsvpSent(eventId);
    setTimeout(() => setRsvpSent(null), 3000);
  };

  return (
    <section className="py-24 md:py-32 bg-sand/60 border-y border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
              Section 12 · Campus Dispatches
            </span>
            <h2 className="type-h2 text-ink">
              {t.sections.newsTitle}
            </h2>
            <p className="type-body mt-2">
              {t.sections.newsSub}
            </p>
          </div>
          <a
            href="/news"
            className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1 self-start"
          >
            All News & Media Archives <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* News Grid: One large featured tile + 4 compact tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Large Tile (Col 6) */}
          <div className="lg:col-span-6 bg-cloud rounded-[28px] overflow-hidden shadow-sm border border-black/5 flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover img-warm"
                width={600}
                height={288}
              />
              <div className="absolute top-4 left-4 bg-cloud/95 backdrop-blur-md px-3 py-1 rounded-pill text-xs font-semibold text-terracotta shadow-sm">
                FEATURED STORY
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs font-semibold text-ink-55 block mb-2">
                  {featuredNews.date} · {featuredNews.category}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-3 leading-snug">
                  {locale === 'ar' ? featuredNews.titleAr : featuredNews.title}
                </h3>
                <p className="text-xs text-ink-55 leading-relaxed mb-6">
                  {locale === 'ar' ? featuredNews.summaryAr : featuredNews.summary}
                </p>
              </div>

              <a
                href={`/news/${featuredNews.slug}`}
                className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
              >
                Read Official Announcement →
              </a>
            </div>
          </div>

          {/* 4 Compact News Tiles (Col 6: 2x2 grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {compactNews.map((art) => (
              <a
                key={art.id}
                href={`/news/${art.slug}`}
                className="bg-cloud rounded-[20px] p-6 shadow-sm hover:shadow-md border border-black/5 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-pill bg-sand text-ink">
                      {art.category}
                    </span>
                    <span className="text-[11px] text-ink-55">{art.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-ink group-hover:text-terracotta transition-colors line-clamp-2 mb-2 leading-snug">
                    {locale === 'ar' ? art.titleAr : art.title}
                  </h4>
                  <p className="text-[11px] text-ink-55 line-clamp-2 leading-relaxed">
                    {locale === 'ar' ? art.summaryAr : art.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-black/5 mt-3 text-xs font-semibold text-ink-55 group-hover:text-ink flex items-center justify-between">
                  <span>Read Brief</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Events Rail with Interactive RSVP */}
        <div className="bg-cloud rounded-[28px] p-8 md:p-10 shadow-sm border border-black/5 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-black/5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-1">
                Calendar of Events
              </span>
              <h3 className="text-xl font-semibold text-ink">
                Upcoming Open Days & Information Sessions
              </h3>
            </div>
            <a href="/events" className="text-xs font-semibold text-terracotta hover:underline">
              Full Schedule →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campusEvents.map((ev) => (
              <div
                key={ev.id}
                className="bg-sand/30 rounded-card p-6 border border-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-cloud text-ink">
                      {ev.type}
                    </span>
                    <span className="text-xs font-semibold text-terracotta tabular-nums">
                      {ev.date}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-ink mb-2">{ev.title}</h4>
                  <p className="text-xs text-ink-55 leading-relaxed mb-4">{ev.description}</p>
                  <div className="space-y-1.5 text-xs text-ink-55 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-ink/60" />
                      <span>{ev.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-ink/60" />
                      <span>{ev.location}</span>
                    </div>
                  </div>
                </div>

                {rsvpSent === ev.id ? (
                  <div className="bg-mint text-emerald-900 px-4 py-2 rounded-pill text-xs font-semibold text-center flex items-center justify-center gap-1.5">
                    <Check className="w-4 h-4" /> RSVP Confirmed!
                  </div>
                ) : (
                  <button
                    onClick={() => handleRsvp(ev.id)}
                    className="w-full py-2.5 px-4 rounded-pill bg-ink text-white hover:bg-black text-xs font-semibold transition-colors"
                  >
                    RSVP for Free Pass
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
