import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { programmes } from '../../content/programmes';
import { housingOptions, scholarshipBands } from '../../content/fees';
import { useI18n } from '../../context/I18nContext';
import { Calculator, ShieldCheck, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

export const FeeCalculator: React.FC = () => {
  const { t, locale } = useI18n();
  const selectId = useId();

  const [selectedProgrammeId, setSelectedProgrammeId] = useState<string>(programmes[0].id);
  const [selectedHousingId, setSelectedHousingId] = useState<string>('none');
  const [selectedScholarshipId, setSelectedScholarshipId] = useState<string>('merit');
  const [selectedIntake, setSelectedIntake] = useState<string>('January 2027');

  const currentProgramme = programmes.find((p) => p.id === selectedProgrammeId) || programmes[0];
  const currentHousing = housingOptions.find((h) => h.id === selectedHousingId) || housingOptions[0];
  const currentScholarship = scholarshipBands.find((s) => s.id === selectedScholarshipId) || scholarshipBands[0];

  // Base tuition per year (or total for FD/some PG)
  const baseTuition = currentProgramme.feeAmountAED;
  const discountAmount = Math.round((baseTuition * currentScholarship.percentage) / 100);
  const netTuition = baseTuition - discountAmount;

  // Annual housing estimated (9 months academic year)
  const annualHousingCost = currentHousing.monthlyCost * 9;
  const totalAnnualCost = netTuition + annualHousingCost;

  // 10-month flexible payment plan
  const monthlyInstallment = Math.round(totalAnnualCost / 10);

  return (
    <div className="bg-cloud rounded-card p-6 md:p-8 shadow-md border border-black/[0.04]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-full bg-apricot/40 text-ink">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-ink">
            {locale === 'ar' ? 'حاسبة الرسوم التقديرية المباشرة' : 'Live Tuition & Housing Calculator'}
          </h3>
          <p className="text-xs text-ink-55">
            Transparent breakdown with automated scholarship discounts and flexible 10-month payment plans.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Controls */}
        <div className="space-y-4">
          {/* Select Programme */}
          <div>
            <label htmlFor={`${selectId}-prog`} className="block text-xs font-semibold text-ink mb-1.5">
              1. Select Programme
            </label>
            <select
              id={`${selectId}-prog`}
              value={selectedProgrammeId}
              onChange={(e) => setSelectedProgrammeId(e.target.value)}
              className="w-full px-4 py-3 rounded-input bg-sand/30 border border-black/10 text-ink text-sm font-medium outline-none focus:border-focus"
            >
              {programmes.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.level}) — {p.feePerYearOrTotal}
                </option>
              ))}
            </select>
          </div>

          {/* Select Housing */}
          <div>
            <label htmlFor={`${selectId}-house`} className="block text-xs font-semibold text-ink mb-1.5">
              2. Housing & Accommodation Option
            </label>
            <select
              id={`${selectId}-house`}
              value={selectedHousingId}
              onChange={(e) => setSelectedHousingId(e.target.value)}
              className="w-full px-4 py-3 rounded-input bg-sand/30 border border-black/10 text-ink text-sm font-medium outline-none focus:border-focus"
            >
              {housingOptions.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.name} ({h.monthlyRangeAED})
                </option>
              ))}
            </select>
          </div>

          {/* Select Scholarship Band */}
          <div>
            <label htmlFor={`${selectId}-schol`} className="block text-xs font-semibold text-ink mb-1.5">
              3. Scholarship & Bursary Tier
            </label>
            <select
              id={`${selectId}-schol`}
              value={selectedScholarshipId}
              onChange={(e) => setSelectedScholarshipId(e.target.value)}
              className="w-full px-4 py-3 rounded-input bg-sand/30 border border-black/10 text-ink text-sm font-medium outline-none focus:border-focus"
            >
              {scholarshipBands.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-ink-55 mt-1">{currentScholarship.criteria}</p>
          </div>

          {/* Intake Selection */}
          <div>
            <label className="block text-xs font-semibold text-ink mb-1.5">
              4. Target Intake
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['January 2027', 'September 2027'].map((itk) => (
                <button
                  key={itk}
                  type="button"
                  onClick={() => setSelectedIntake(itk)}
                  className={`py-2 px-3 rounded-pill text-xs font-semibold border transition-all ${
                    selectedIntake === itk
                      ? 'bg-ink text-white border-ink'
                      : 'bg-sand/30 text-ink border-black/10 hover:bg-sand/60'
                  }`}
                >
                  {itk}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculation Result Panel */}
        <div className="bg-sand/40 rounded-card p-6 border border-black/5 flex flex-col justify-between h-full space-y-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-55">
                Estimated Net Investment
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-pill bg-mint text-emerald-900 font-semibold">
                {currentScholarship.percentage > 0 ? `${currentScholarship.percentage}% Saved` : 'Standard'}
              </span>
            </div>

            {/* Big spring count number */}
            <div className="py-4">
              <span className="text-xs text-ink-55 block mb-1">
                {currentProgramme.isTotalFee ? 'Total Programme Cost' : 'Annualised Tuition & Housing'}
              </span>
              <motion.div
                key={totalAnnualCost}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-5xl font-semibold tracking-tight text-ink tabular-nums"
              >
                AED {totalAnnualCost.toLocaleString()}
              </motion.div>
            </div>

            {/* Breakdown bars */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex justify-between text-ink-55">
                <span>Base Academic Tuition:</span>
                <span className="font-semibold text-ink tabular-nums">AED {baseTuition.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-800 font-medium">
                  <span>Scholarship Deduction ({currentScholarship.percentage}%):</span>
                  <span className="tabular-nums">- AED {discountAmount.toLocaleString()}</span>
                </div>
              )}
              {annualHousingCost > 0 && (
                <div className="flex justify-between text-ink-55">
                  <span>Campus Residence (9 months):</span>
                  <span className="font-semibold text-ink tabular-nums">+ AED {annualHousingCost.toLocaleString()}</span>
                </div>
              )}

              {/* Progress visual bar */}
              <div className="h-3 w-full bg-black/5 rounded-full overflow-hidden flex mt-3">
                <div
                  className="bg-apricot h-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (netTuition / totalAnnualCost) * 100)}%` }}
                  title="Tuition Share"
                />
                {annualHousingCost > 0 && (
                  <div
                    className="bg-sky h-full transition-all duration-500"
                    style={{ width: `${(annualHousingCost / totalAnnualCost) * 100}%` }}
                    title="Housing Share"
                  />
                )}
              </div>
              <div className="flex items-center gap-4 text-[11px] text-ink-55 pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-apricot" /> Net Tuition
                </span>
                {annualHousingCost > 0 && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky" /> Housing
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Payment Plan Card */}
          <div className="bg-cloud p-4 rounded-tile border border-black/5 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase text-ink-55 block">
                  Flexible Monthly Installment
                </span>
                <span className="text-xl font-semibold text-ink tabular-nums">
                  AED {monthlyInstallment.toLocaleString()} / mo
                </span>
              </div>
              <span className="text-[11px] px-2 py-1 bg-sand/60 rounded-pill font-medium text-ink">
                10 Months Plan
              </span>
            </div>
            <p className="text-[11px] text-ink-55 leading-relaxed">
              No interest or bank financing surcharge. Payments split across term months.
            </p>
            <MagneticButton
              variant="terracotta"
              size="sm"
              onClick={() => (window.location.href = `/apply?program=${currentProgramme.slug}&scholarship=${selectedScholarshipId}`)}
              className="w-full justify-center"
            >
              Lock in Scholarship & Apply →
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};
