import React from 'react';
import { outcomesStats } from '../../content/stats';
import { partnerOrganisations } from '../../content/partners';
import { useI18n } from '../../context/I18nContext';
import { Briefcase, Building, TrendingUp } from 'lucide-react';

export const SectionOutcomes: React.FC = () => {
  const { t, locale } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-mint/35 border-y border-black/[0.04] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-14">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
            Section 10 · Graduate Trajectory
          </span>
          <h2 className="type-h2 text-ink">
            {t.sections.outcomesTitle}
          </h2>
          <p className="type-body mt-2">
            {t.sections.outcomesSub}
          </p>
        </div>

        {/* Four Stat Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomesStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-cloud rounded-[28px] p-8 shadow-sm border border-black/5 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl md:text-4xl font-semibold text-ink tabular-nums block mb-2">
                  {stat.value}
                </span>
                <h4 className="text-sm font-semibold text-ink mb-1">
                  {locale === 'ar' ? stat.labelAr : stat.label}
                </h4>
              </div>
              <p className="text-[11px] text-ink-55 pt-4 border-t border-black/5 mt-4">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Marquee with Invented Names (Rounded Cloud pills paused on hover) */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-55">
              Placement Hosts & Corporate Partners (Invented Mock Network)
            </span>
            <span className="text-xs text-ink-55">310 Connected Organizations</span>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            {/* Infinite Marquee Track */}
            <div className="flex gap-4 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
              {/* Double array for seamless loop */}
              {[...partnerOrganisations, ...partnerOrganisations].map((org, i) => (
                <div
                  key={i}
                  className="bg-cloud hover:bg-sand/40 border border-black/5 px-6 py-3.5 rounded-pill shadow-sm flex items-center gap-3 transition-colors shrink-0"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-apricot shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-ink block">{org.name}</span>
                    <span className="text-[10px] text-ink-55 block">
                      {org.sector} · {org.city}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
