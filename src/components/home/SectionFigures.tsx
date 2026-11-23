import React from 'react';
import { keyFigures, breakdownStats } from '../../content/stats';
import { BentoGrid } from '../common/BentoGrid';
import { Tile } from '../common/Tile';
import { SpringCounter } from '../common/SpringCounter';
import { Users, GraduationCap, Globe2, FlaskConical, Briefcase, Sparkles, PieChart } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const SectionFigures: React.FC = () => {
  const { t, locale } = useI18n();

  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-ink/60" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-ink/60" />,
    Globe2: <Globe2 className="w-5 h-5 text-ink/60" />,
    FlaskConical: <FlaskConical className="w-5 h-5 text-ink/60" />,
    Briefcase: <Briefcase className="w-5 h-5 text-ink/60" />,
    Sparkles: <Sparkles className="w-5 h-5 text-ink/60" />,
  };

  return (
    <section className="py-24 md:py-32 bg-sky/35 border-y border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
            Section 01 · Institutional Metrics
          </span>
          <h2 className="type-h2 text-ink">
            {t.sections.figuresTitle}
          </h2>
          <p className="type-body mt-2">
            {t.sections.figuresSub}
          </p>
        </div>

        {/* Bento Grid: One 2x2 hero tile plus six 1x1 tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 2x2 Hero Tile: 38 programmes with animated arc breakdown chart */}
          <div className="md:col-span-2 md:row-span-2 bg-cloud rounded-[28px] p-8 md:p-10 shadow-md border border-black/5 flex flex-col justify-between hover:bg-apricot/[0.12] transition-colors duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-pill bg-sand text-ink">
                  Curriculum Architecture
                </span>
                <PieChart className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-2">
                <span className="tabular-nums font-semibold">38</span> Programmes across Seven Schools
              </h3>
              <p className="text-sm text-ink-55 leading-relaxed max-w-md">
                Purposefully configured degrees responding directly to GCC sovereign transformation agendas, robotics automation, and regional financial jurisprudence.
              </p>
            </div>

            {/* Arc Chart Breakdown representation */}
            <div className="py-8 my-4 border-y border-black/5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-ink">Undergraduate (UG)</span>
                <span className="font-semibold text-ink tabular-nums">26 Programmes (68%)</span>
              </div>
              <div className="w-full h-3 bg-sand/60 rounded-full overflow-hidden flex">
                <div className="bg-terracotta h-full w-[68%]" />
                <div className="bg-apricot h-full w-[19%]" />
                <div className="bg-sky h-full w-[13%]" />
              </div>
              <div className="flex flex-wrap items-center gap-6 text-xs text-ink-55 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-terracotta" />
                  <span>26 Undergraduate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-apricot" />
                  <span>7 Postgraduate (Master's)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-sky" />
                  <span>5 Foundation & Pathways</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-ink-55">Total reconciled across all 7 faculties</span>
              <a href="/programs" className="text-xs font-semibold text-terracotta hover:underline">
                Explore All 38 Programmes →
              </a>
            </div>
          </div>

          {/* Six 1x1 Tiles: 2,400 students · 180 faculty · 46 nationalities · 22 labs · 94% outcomes · 31 societies */}
          {keyFigures.map((fig) => (
            <div
              key={fig.id}
              className="bg-cloud rounded-[20px] p-6 shadow-sm border border-black/5 hover:bg-apricot/[0.12] transition-colors duration-300 flex flex-col justify-between h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-ink-55">{fig.caption}</span>
                {iconMap[fig.iconName]}
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-1 tabular-nums">
                  <SpringCounter
                    value={fig.value}
                    prefix={fig.prefix}
                    suffix={fig.suffix}
                  />
                </div>
                <p className="text-sm font-semibold text-ink">
                  {locale === 'ar' ? fig.labelAr : fig.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
