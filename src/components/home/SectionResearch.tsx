import React from 'react';
import { researchLabs } from '../../content/partners';
import { researchStats } from '../../content/stats';
import { useI18n } from '../../context/I18nContext';
import { FlaskConical, Atom, Cpu, ShieldAlert, ArrowRight } from 'lucide-react';

export const SectionResearch: React.FC = () => {
  const { t, locale } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-sky/35 border-y border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
              Section 09 · Discovery & Innovation
            </span>
            <h2 className="type-h2 text-ink">
              {t.sections.researchTitle}
            </h2>
            <p className="type-body mt-2">
              {t.sections.researchSub}
            </p>
          </div>
          <a
            href="/research"
            className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1 self-start"
          >
            Explore Research Centers <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Four Image-Led Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchLabs.map((lab) => (
            <div
              key={lab.id}
              className="bg-cloud rounded-[28px] p-6 shadow-sm hover:shadow-md border border-black/5 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Image Mask */}
                <div className="w-full h-44 rounded-tile overflow-hidden mb-5">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover img-warm"
                    width={300}
                    height={176}
                  />
                </div>

                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-pill bg-sand text-ink block w-fit mb-2">
                  {lab.metric}
                </span>

                <h3 className="text-lg font-semibold text-ink mb-2">
                  {locale === 'ar' ? lab.titleAr : lab.title}
                </h3>
                <p className="text-xs text-ink-55 leading-relaxed">
                  {locale === 'ar' ? lab.focusAr : lab.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 mt-4">
                <a
                  href="/research"
                  className="text-xs font-semibold text-ink hover:text-terracotta flex items-center justify-between"
                >
                  <span>Lab Capabilities</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Data Strip: 22 labs · 9 funded projects · AED 14M budget · 6 patents filed */}
        <div className="bg-cloud rounded-card p-6 md:p-8 border border-black/5 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="block text-3xl md:text-4xl font-semibold text-ink tabular-nums">
                {researchStats.labs}
              </span>
              <span className="text-xs text-ink-55 uppercase font-medium mt-1 block">
                Teaching & Research Labs
              </span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-semibold text-ink tabular-nums">
                {researchStats.fundedProjects}
              </span>
              <span className="text-xs text-ink-55 uppercase font-medium mt-1 block">
                Active Funded Projects
              </span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-semibold text-ink tabular-nums">
                AED {researchStats.researchBudgetAED}
              </span>
              <span className="text-xs text-ink-55 uppercase font-medium mt-1 block">
                Total Research Grants Pool
              </span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-semibold text-ink tabular-nums">
                {researchStats.patentsFiled}
              </span>
              <span className="text-xs text-ink-55 uppercase font-medium mt-1 block">
                Patents Filed / Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
