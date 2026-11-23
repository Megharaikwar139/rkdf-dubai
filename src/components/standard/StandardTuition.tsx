import React, { useState } from 'react';
import { ArrowUpRight, Check, Calculator } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';
import { FeeCalculator } from '../shared/FeeCalculator';

export const StandardTuition: React.FC = () => {
  const { locale } = useI18n();
  const [showModalCalculator, setShowModalCalculator] = useState(false);

  return (
    <section className="py-24 bg-canvas border-t border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (matching reference) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block">
              Investment & Affordability
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-tight">
              {locale === 'ar' ? (
                <>الرسوم الدراسية في جامعة RKDF دبي</>
              ) : (
                <>Tuition Fees At RKDF University</>
              )}
            </h2>
            <p className="type-body text-sm leading-relaxed">
              {locale === 'ar'
                ? 'نلتزم في جامعة RKDF دبي بتقديم تعليم أكاديمي عالي الجودة بتكلفة شفافة ومدروسة تناسب العائلات الطموحة، مع خطط سداد ميسرة بدون فوائد.'
                : 'At RKDF University Dubai we are committed to providing a high-quality education that is accessible to a diverse range of students, with flexible 10-month payment plans.'}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowModalCalculator(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#9B3218] hover:brightness-110 text-white font-semibold text-xs px-6 py-3.5 rounded-pill shadow-sm transition-all"
              >
                <span>{locale === 'ar' ? 'حاسبة الرسوم المباشرة' : 'Plan Details & Calculator'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="/admissions/fees"
                className="inline-flex items-center justify-center text-xs font-semibold text-ink hover:text-terracotta px-4 py-3"
              >
                Full Fee Schedule →
              </a>
            </div>
          </div>

          {/* Right Column: 2 Cards Side-by-Side (matching reference right layout) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Card 1: Prominent Terracotta Card (Undergraduate Programs) */}
            <div className="bg-[#9B3218] text-white rounded-[24px] p-8 shadow-md flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-apricot block mb-1">
                    First Degree
                  </span>
                  <h3 className="text-xl font-semibold">Undergraduate Programs</h3>
                </div>

                {/* College 1 */}
                <div className="space-y-1.5 pb-4 border-b border-white/15">
                  <h4 className="text-sm font-semibold text-apricot">College of Computing & AI</h4>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <Check className="w-3.5 h-3.5 text-apricot shrink-0" />
                    <span>Full-Time Tuition (per year): <strong className="text-white tabular-nums">AED 62,000</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <Check className="w-3.5 h-3.5 text-apricot shrink-0" />
                    <span>Monthly Plan (10 installments): <strong className="text-white tabular-nums">AED 6,200/mo</strong></span>
                  </div>
                </div>

                {/* College 2 */}
                <div className="space-y-1.5 pb-4 border-b border-white/15">
                  <h4 className="text-sm font-semibold text-apricot">School of Business & Management</h4>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <Check className="w-3.5 h-3.5 text-apricot shrink-0" />
                    <span>Full-Time Tuition (per year): <strong className="text-white tabular-nums">AED 54,000</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <Check className="w-3.5 h-3.5 text-apricot shrink-0" />
                    <span>Monthly Plan (10 installments): <strong className="text-white tabular-nums">AED 5,400/mo</strong></span>
                  </div>
                </div>

                {/* College 3 */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-apricot">Engineering & Built Environment</h4>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <Check className="w-3.5 h-3.5 text-apricot shrink-0" />
                    <span>Full-Time Tuition (per year): <strong className="text-white tabular-nums">AED 58,000</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 mt-6 flex items-center justify-between text-xs text-white/80">
                <span>12-week paid placement included</span>
                <a href="/apply" className="font-semibold text-white underline hover:text-apricot">
                  Apply Now →
                </a>
              </div>
            </div>

            {/* Card 2: Light Clean Card (Graduate Programs & Additional Fees) */}
            <div className="bg-cloud rounded-[24px] p-8 shadow-sm border border-black/5 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-55 block mb-1">
                    Advanced Study
                  </span>
                  <h3 className="text-xl font-semibold text-ink">Graduate Programs</h3>
                </div>

                <div className="space-y-2 pb-4 border-b border-black/5">
                  <h4 className="text-sm font-semibold text-ink">Graduate School / Department</h4>
                  <div className="flex items-center gap-2 text-xs text-ink-55">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Master's Tuition (total programme): <strong className="text-ink tabular-nums">AED 68,000 – 76,000</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink-55">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Executive MBA: <strong className="text-ink tabular-nums">AED 86,000 total</strong></span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-ink">Included & Additional Fees</h4>
                  <div className="flex items-center gap-2 text-xs text-ink-55">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Technology & Laboratory Fee: <strong>AED 0 (Included)</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink-55">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Application Assessment Fee: <strong>AED 0 (Waived)</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink-55">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Merit Scholarship Discount: <strong className="text-emerald-700">Up to 25% Off</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-black/5 mt-6 flex items-center justify-between text-xs text-ink-55">
                <span>Flexible term installment options</span>
                <a href="/admissions/scholarships" className="font-semibold text-terracotta hover:underline">
                  View Scholarships →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Fee Calculator Modal Popup */}
      {showModalCalculator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModalCalculator(false)}
          />
          <div className="relative w-full max-w-4xl bg-cloud rounded-[28px] overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-black/5">
              <h3 className="text-lg font-semibold text-ink">Live Interactive Fee Calculator</h3>
              <button
                onClick={() => setShowModalCalculator(false)}
                className="px-3 py-1 rounded-pill bg-sand text-xs font-semibold text-ink hover:bg-sand/70"
              >
                Close ✕
              </button>
            </div>
            <FeeCalculator />
          </div>
        </div>
      )}
    </section>
  );
};
