import React from 'react';
import { whyRkdfPoints } from '../../content/partners';
import { useI18n } from '../../context/I18nContext';
import { motion, useReducedMotion } from 'framer-motion';

export const SectionWhyRKDF: React.FC = () => {
  const { t, locale } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  // Custom SVG line illustrations instead of stock icons
  const lineIllustrations = [
    // 01 Dual campus mobility
    (
      <svg className="w-12 h-12 text-terracotta" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 38h36M12 38V18l12-10 12 10v20" />
        <circle cx="24" cy="22" r="4" />
        <path d="M4 14l8-4 8 4" />
      </svg>
    ),
    // 02 Cohorts under 30
    (
      <svg className="w-12 h-12 text-terracotta" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="14" r="6" />
        <path d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12" />
        <circle cx="10" cy="18" r="4" />
        <path d="M4 36c0-4.418 3.582-8 8-8" />
        <circle cx="38" cy="18" r="4" />
        <path d="M36 28c4.418 0 8 3.582 8 8" />
      </svg>
    ),
    // 03 Paid 12-week placement
    (
      <svg className="w-12 h-12 text-terracotta" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="32" height="24" rx="4" />
        <path d="M18 14V10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
        <path d="M8 22h32" />
        <path d="M22 28h4" />
      </svg>
    ),
    // 04 40% below Western branch campuses
    (
      <svg className="w-12 h-12 text-terracotta" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="24" r="12" />
        <path d="M20 18v12M16 21h8M16 27h8" />
        <path d="M32 16l8 8-8 8" />
      </svg>
    ),
    // 05 61% doctorates, 44% industry practice
    (
      <svg className="w-12 h-12 text-terracotta" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16l18-8 18 8-18 8-18-8z" />
        <path d="M12 20v10c0 6 6 10 12 10s12-4 12-10V20" />
        <path d="M42 16v16" />
      </svg>
    ),
    // 06 Two years career support
    (
      <svg className="w-12 h-12 text-terracotta" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6l6 12 12 2-9 9 2 13-11-6-11 6 2-13-9-9 12-2z" />
      </svg>
    ),
  ];

  return (
    <section className="py-24 md:py-32 bg-apricot/30 border-y border-black/[0.04] relative overflow-hidden">
      {/* Background warm texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "url('/assets/rkdf-why-bg.jpg')" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
            Section 06 · The Distinctive Value
          </span>
          <h2 className="type-h2 text-ink">
            {t.sections.whyTitle}
          </h2>
          <p className="type-body mt-2">
            {t.sections.whySub}
          </p>
        </div>

        {/* 6-Tile Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyRkdfPoints.map((pt, idx) => (
            <motion.div
              key={pt.number}
              whileHover={!shouldReduceMotion ? { y: -4 } : undefined}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="bg-cloud rounded-[28px] p-8 md:p-10 shadow-sm hover:shadow-md border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-semibold text-ink-55 tabular-nums">
                    {pt.number}
                  </span>
                  <div className="p-3 rounded-tile bg-sand/40">
                    {lineIllustrations[idx]}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-ink mb-3">
                  {locale === 'ar' ? pt.titleAr : pt.title}
                </h3>
                <p className="text-sm text-ink-55 leading-relaxed">
                  {locale === 'ar' ? pt.bodyAr : pt.body}
                </p>
              </div>

              <div className="pt-6 border-t border-black/5 mt-6">
                <span className="text-xs font-semibold text-terracotta inline-flex items-center gap-1">
                  Guaranteed student charter commitment
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
