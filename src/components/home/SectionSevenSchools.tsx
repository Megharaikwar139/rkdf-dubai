import React from 'react';
import { DragCarousel } from '../shared/DragCarousel';
import { useI18n } from '../../context/I18nContext';

export const SectionSevenSchools: React.FC = () => {
  const { t, locale } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-canvas">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
              Section 04 · Academic Faculties
            </span>
            <h2 className="type-h2 text-ink">
              {t.sections.schoolsTitle}
            </h2>
            <p className="type-body mt-2">
              {t.sections.schoolsSub}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-pill bg-sand text-ink">
              38 Degrees Reconciled
            </span>
            <a
              href="/programs"
              className="text-xs font-semibold text-terracotta hover:underline"
            >
              View Full Course Catalog →
            </a>
          </div>
        </div>

        {/* 380px wide Arch-masked drag carousel */}
        <DragCarousel />
      </div>
    </section>
  );
};
