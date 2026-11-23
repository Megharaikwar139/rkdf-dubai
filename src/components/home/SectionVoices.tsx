import React from 'react';
import { CardStack } from '../shared/CardStack';
import { useI18n } from '../../context/I18nContext';

export const SectionVoices: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-canvas">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
            Section 11 · Cohort Perspectives
          </span>
          <h2 className="type-h2 text-ink">
            {t.sections.voicesTitle}
          </h2>
          <p className="type-body mt-2 mx-auto">
            {t.sections.voicesSub}
          </p>
        </div>

        {/* Draggable Card Stack */}
        <CardStack />
      </div>
    </section>
  );
};
