import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../../context/I18nContext';
import { ShieldCheck, Award, Building, ChevronDown, Check } from 'lucide-react';

export const SectionAccreditation: React.FC = () => {
  const { t, locale } = useI18n();
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-mint/35 border-y border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header - kept high per prompt */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-mint text-emerald-900 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Regulatory Status</span>
          </div>
          <h2 className="type-h2 text-ink">
            {t.sections.accreditationTitle}
          </h2>
          <p className="type-body mt-2">
            {t.sections.accreditationSub}
          </p>
        </div>

        {/* Three Cloud Tiles with Line-Icon Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Tile 1: KHDA */}
          <div className="bg-cloud rounded-[28px] p-8 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-full bg-sand/60 text-ink w-fit mb-6">
                <Building className="w-6 h-6 text-terracotta" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-1">
                Dubai Regulatory Authority
              </span>
              <h3 className="text-xl font-semibold text-ink mb-2">
                KHDA Educational Permit
              </h3>
              <p className="text-xs font-mono text-terracotta font-semibold mb-3">
                Permit No. DXB-HE-2026-0147 (DUMMY)
              </p>
              <p className="text-xs text-ink-55 leading-relaxed">
                The Dubai Government authority responsible for the growth and quality of private education in the emirate. All degrees issued by RKDF University Dubai are certified under KHDA quality frameworks.
              </p>
            </div>
            <div className="pt-6 border-t border-black/5 mt-6">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                <Check className="w-4 h-4" /> Operational Permit Granted
              </span>
            </div>
          </div>

          {/* Tile 2: MoHESR / CAA */}
          <div className="bg-cloud rounded-[28px] p-8 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-full bg-sand/60 text-ink w-fit mb-6">
                <Award className="w-6 h-6 text-terracotta" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-1">
                Federal UAE Recognition
              </span>
              <h3 className="text-xl font-semibold text-ink mb-2">
                MoHESR / CAA Licensure
              </h3>
              <p className="text-xs font-mono text-terracotta font-semibold mb-3">
                Licensure in Progress (DUMMY)
              </p>
              <p className="text-xs text-ink-55 leading-relaxed">
                Initial Institutional Licensure application submitted to the Commission for Academic Accreditation (CAA), Ministry of Higher Education and Scientific Research. Enables degree attestation across UAE federal entities.
              </p>
            </div>
            <div className="pt-6 border-t border-black/5 mt-6">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-800 font-semibold">
                <Check className="w-4 h-4" /> Formal Review Stage
              </span>
            </div>
          </div>

          {/* Tile 3: RKDF Bhopal NAAC A+ */}
          <div className="bg-cloud rounded-[28px] p-8 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-full bg-sand/60 text-ink w-fit mb-6">
                <ShieldCheck className="w-6 h-6 text-terracotta" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-1">
                Charter & Home Accreditation
              </span>
              <h3 className="text-xl font-semibold text-ink mb-2">
                NAAC A+ & UGC Recognised
              </h3>
              <p className="text-xs font-mono text-terracotta font-semibold mb-3">
                Home Campus Statutory Authority
              </p>
              <p className="text-xs text-ink-55 leading-relaxed">
                UGC recognised and AICTE approved. Your Dubai degree is awarded under the statutory academic regulations and accredited quality charters of the parent university in Bhopal.
              </p>
            </div>
            <div className="pt-6 border-t border-black/5 mt-6">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                <Check className="w-4 h-4" /> Full Senate Integration
              </span>
            </div>
          </div>
        </div>

        {/* Fourth Wide Tile with Apricot Fill: "What does this mean for my degree?" */}
        <div className="bg-apricot/40 rounded-[28px] p-8 md:p-10 border border-apricot/60 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-1">
                Transparency & Student Guidance
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-ink">
                What does this regulatory status mean for your degree?
              </h3>
            </div>
            <button
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-cloud text-ink text-xs font-semibold shadow-sm hover:bg-sand/40 transition-colors self-start sm:self-auto"
              aria-expanded={accordionOpen}
            >
              <span>{accordionOpen ? 'Hide Explanation' : 'Read Plain English Breakdown'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  accordionOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          <AnimatePresence>
            {accordionOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-6 mt-6 border-t border-black/10 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-ink-55 leading-relaxed">
                  <div className="bg-cloud/60 p-5 rounded-tile border border-black/5 space-y-2">
                    <h4 className="font-semibold text-ink text-sm">1. UAE Employment & Visas</h4>
                    <p>
                      Degrees certified by KHDA are fully recognized by all private sector employers, free zone authorities (DIFC, DSOA, DMCC), and multinational entities operating in the UAE.
                    </p>
                  </div>
                  <div className="bg-cloud/60 p-5 rounded-tile border border-black/5 space-y-2">
                    <h4 className="font-semibold text-ink text-sm">2. Federal Attestation & Civil Service</h4>
                    <p>
                      CAA Institutional Licensure is designed to facilitate automated degree attestation for UAE federal government and military public service roles.
                    </p>
                  </div>
                  <div className="bg-cloud/60 p-5 rounded-tile border border-black/5 space-y-2">
                    <h4 className="font-semibold text-ink text-sm">3. Global Postgraduate Progression</h4>
                    <p>
                      Your degree is awarded by an Indian NAAC A+ accredited university, qualifying graduates for master's and doctoral admissions across the UK, USA, Canada, Australia, and Europe.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
