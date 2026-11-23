import React, { useState } from 'react';
import { FeeCalculator } from '../shared/FeeCalculator';
import { Stepper } from '../shared/Stepper';
import { Countdown } from '../shared/Countdown';
import { academicRequirements, englishRequirements } from '../../content/requirements';
import { useI18n } from '../../context/I18nContext';
import { ChevronDown, FileCheck2, Globe2 } from 'lucide-react';

export const SectionCostAdmissions: React.FC = () => {
  const { t, locale } = useI18n();
  const [activeCurriculum, setActiveCurriculum] = useState<string>(academicRequirements[0].id);

  return (
    <section className="py-24 md:py-32 bg-canvas">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        {/* Section Header */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
            Section 07 · Transparency & Enrolment
          </span>
          <h2 className="type-h2 text-ink">
            {t.sections.costTitle}
          </h2>
          <p className="type-body mt-2">
            {t.sections.costSub}
          </p>
        </div>

        {/* Left: Live Fee Calculator | Right: 5-Step Stepper + Countdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <FeeCalculator />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Countdown />
            <Stepper />
          </div>
        </div>

        {/* Full-width Entry Requirements Matrix as an Accordion by Curriculum */}
        <div className="bg-cloud rounded-[28px] p-8 md:p-10 shadow-sm border border-black/5 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-sand text-ink text-xs font-semibold mb-2">
                <FileCheck2 className="w-3.5 h-3.5 text-terracotta" />
                <span>Standardized Grade Matrix</span>
              </div>
              <h3 className="text-2xl font-semibold text-ink">
                Entry Requirements Matrix by Curriculum
              </h3>
              <p className="text-xs text-ink-55 mt-1">
                Equivalencies mapped for leading high school systems across India, the UK, IB, USA, and the UAE.
              </p>
            </div>
          </div>

          {/* Curriculum Tabs / Accordion Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {academicRequirements.map((cur) => (
              <button
                key={cur.id}
                onClick={() => setActiveCurriculum(cur.id)}
                className={`p-4 rounded-tile text-left border transition-all ${
                  activeCurriculum === cur.id
                    ? 'bg-sand text-ink border-ink shadow-sm'
                    : 'bg-sand/20 hover:bg-sand/50 text-ink border-black/5'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-semibold text-ink">{cur.name}</h4>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeCurriculum === cur.id ? 'rotate-180 text-terracotta' : 'text-ink-55'
                    }`}
                  />
                </div>
                <p className="text-xs font-semibold text-terracotta mb-1">{cur.requirement}</p>
                <p className="text-[11px] text-ink-55 leading-relaxed">{cur.notes}</p>
              </button>
            ))}
          </div>

          {/* English Proficiency Threshold Strip */}
          <div className="p-6 rounded-card bg-sand/30 border border-black/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink block mb-1">
                English Language Proficiency Benchmarks
              </span>
              <p className="text-xs text-ink-55">
                Applicants whose prior education was not in English must achieve one of the following official scores.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {englishRequirements.map((eng, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 rounded-pill bg-cloud border border-black/5 shadow-sm text-xs"
                >
                  <span className="font-semibold text-ink">{eng.test}:</span>{' '}
                  <span className="text-terracotta font-medium">{eng.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
