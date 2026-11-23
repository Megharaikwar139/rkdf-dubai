import React from 'react';
import { ProgrammeMatcher } from '../shared/ProgrammeMatcher';
import { useI18n } from '../../context/I18nContext';

export const SectionProgrammeMatcher: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-sky/35 border-y border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
            Section 05 · Intelligent Advisory
          </span>
          <h2 className="type-h2 text-ink">
            {t.sections.matcherTitle}
          </h2>
          <p className="type-body mt-2">
            {t.sections.matcherSub}
          </p>
        </div>

        {/* Programme Matcher Widget and Grid */}
        <ProgrammeMatcher />
      </div>
    </section>
  );
};
