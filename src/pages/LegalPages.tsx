import React from 'react';

interface LegalPagesProps {
  pageType: 'privacy' | 'terms' | 'accessibility';
}

export const LegalPages: React.FC<LegalPagesProps> = ({ pageType }) => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[900px] mx-auto space-y-10">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Regulatory & Legal Disclosures
        </span>
        <h1 className="type-h1 text-ink mb-4">
          {pageType === 'privacy' && 'Privacy Policy'}
          {pageType === 'terms' && 'Terms of Use'}
          {pageType === 'accessibility' && 'Accessibility Statement (WCAG 2.2 AA)'}
        </h1>
        <p className="text-xs text-ink-55">Last updated: November 2026</p>
      </div>

      <div className="prose text-ink-55 leading-relaxed space-y-6 text-sm">
        {pageType === 'privacy' && (
          <>
            <p>
              RKDF University Dubai is committed to safeguarding personal data in compliance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection and international student privacy frameworks.
            </p>
            <h3 className="text-lg font-semibold text-ink">1. Collection of Application Data</h3>
            <p>
              We collect information provided by prospective students, applicants, and educational agents including contact details, academic transcripts, identity documents, and communication preferences.
            </p>
            <h3 className="text-lg font-semibold text-ink">2. Purpose of Processing</h3>
            <p>
              Data is utilized exclusively for evaluating academic eligibility, administering scholarship awards, facilitating UAE residence visa sponsorship with GDRFA, and providing campus visit passes.
            </p>
          </>
        )}

        {pageType === 'terms' && (
          <>
            <p>
              By accessing and using the official website of RKDF University Dubai, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
            <h3 className="text-lg font-semibold text-ink">1. Informational Purpose & DUMMY Notice</h3>
            <p>
              All figures, dates, fee calculations, and regulatory status statements currently published on this demonstration instance are dummy figures designed for launch evaluation and will be replaced prior to statutory operations.
            </p>
            <h3 className="text-lg font-semibold text-ink">2. Intellectual Property & Crest</h3>
            <p>
              The official RKDF University crest, trademarks, curriculum designs, and media assets are the exclusive property of RKDF University.
            </p>
          </>
        )}

        {pageType === 'accessibility' && (
          <>
            <p>
              RKDF University Dubai is dedicated to ensuring digital accessibility for individuals of all abilities. We actively conform to WCAG 2.2 Level AA accessibility guidelines.
            </p>
            <h3 className="text-lg font-semibold text-ink">1. Compliance Status</h3>
            <p>
              This website is fully accessible via keyboard navigation, supports screen reader assistive software, honors prefers-reduced-motion OS preferences (disabling pointer tilt, magnetic spring pull, and scroll parallax), and maintains minimum 4.5:1 contrast ratios on all daylight palette color combinations.
            </p>
            <h3 className="text-lg font-semibold text-ink">2. Assistive Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Skip-to-content anchors for rapid keyboard navigation.</li>
              <li>High-contrast visible keyboard focus indicators in Focus Blue (#1B6EF3).</li>
              <li>Bilingual RTL support with native typography for Arabic readers.</li>
              <li>Tabular lining numerals on all tuition figures and statistical counters.</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
