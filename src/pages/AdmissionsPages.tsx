import React from 'react';
import { FeeCalculator } from '../components/shared/FeeCalculator';
import { Stepper } from '../components/shared/Stepper';
import { Countdown } from '../components/shared/Countdown';
import { academicRequirements, CurriculumRequirement } from '../content/requirements';
import { scholarshipBands, ScholarshipBand } from '../content/fees';
import { MagneticButton } from '../components/common/MagneticButton';
import { ShieldCheck, FileCheck2, Plane, DollarSign, Award, HelpCircle } from 'lucide-react';

interface AdmissionsPagesProps {
  subRoute?: 'index' | 'entry-requirements' | 'fees' | 'scholarships' | 'how-to-apply' | 'visa' | 'agents';
}

export const AdmissionsPages: React.FC<AdmissionsPagesProps> = ({ subRoute = 'index' }) => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          {subRoute === 'entry-requirements' && 'High School Equivalency & Standards'}
          {subRoute === 'fees' && 'Tuition Schedules & Installment Options'}
          {subRoute === 'scholarships' && 'Merit Excellence Grants & Family Bursaries'}
          {subRoute === 'how-to-apply' && 'Application Guide & Documentation'}
          {subRoute === 'visa' && 'UAE Student Residence Visa Sponsorship'}
          {subRoute === 'agents' && 'Authorised Education Counselors Portal'}
          {subRoute === 'index' && 'Admissions & Enrolment'}
        </span>
        <h1 className="type-h1 text-ink mb-4">
          {subRoute === 'entry-requirements' && 'Academic Entry Requirements'}
          {subRoute === 'fees' && 'Tuition Fees & Cost Structure'}
          {subRoute === 'scholarships' && 'Scholarships & Merit Awards'}
          {subRoute === 'how-to-apply' && 'How to Apply in Five Simple Steps'}
          {subRoute === 'visa' && 'Student Visa Sponsorship & Guidance'}
          {subRoute === 'agents' && 'Education Agent Partnerships'}
          {subRoute === 'index' && 'Join RKDF University Dubai'}
        </h1>
        <p className="type-body">
          {subRoute === 'entry-requirements' && 'Clear, standardized thresholds mapped for CBSE, IB, A-Levels, American, WAEC, and UAE Ministry curricula.'}
          {subRoute === 'fees' && 'Transparent annual tuition, zero hidden campus surcharges, and flexible 10-month installment plans.'}
          {subRoute === 'scholarships' && 'Up to 25% tuition fee waiver based on academic excellence, early registration, or family alumni status.'}
          {subRoute === 'how-to-apply' && 'A straightforward, fully digital application process with 48-hour preliminary conditional evaluation.'}
          {subRoute === 'visa' && 'One-year renewable university-sponsored student visas for international and relocating scholars.'}
          {subRoute === 'agents' && 'Accredited agency portal providing fast-track client submissions, commission schedules, and promotional media.'}
          {subRoute === 'index' && 'Applications are now open for the January and September 2027 intakes. Small cohorts, guaranteed corporate placements, and dual-campus mobility.'}
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-black/5">
        {[
          { label: 'Admissions Overview', href: '/admissions' },
          { label: 'Entry Requirements', href: '/admissions/entry-requirements' },
          { label: 'Tuition Fees & Calculator', href: '/admissions/fees' },
          { label: 'Scholarships & Grants', href: '/admissions/scholarships' },
          { label: 'How to Apply', href: '/admissions/how-to-apply' },
          { label: 'Student Visa Sponsorship', href: '/admissions/visa' },
          { label: 'Education Agents Portal', href: '/admissions/agents' },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="px-4 py-2 rounded-pill text-xs font-semibold bg-cloud border border-black/5 hover:bg-sand/60 text-ink shadow-sm transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Subpage Contents */}
      {subRoute === 'fees' && (
        <div className="space-y-8">
          <FeeCalculator />
          <div className="bg-sand/40 p-6 rounded-card border border-black/5 text-xs text-ink-55 space-y-2">
            <span className="font-semibold text-ink block">Payment Terms & Guarantee:</span>
            <p>
              Tuition fees are locked for the normal duration of your degree programme. No annual inflation indexation applied to active students. Installments can be settled via credit card, bank transfer, or post-dated cheques in 10 equal monthly distributions.
            </p>
          </div>
        </div>
      )}

      {subRoute === 'scholarships' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipBands.filter((s: ScholarshipBand) => s.percentage > 0).map((s: ScholarshipBand) => (
              <div
                key={s.id}
                className="bg-cloud rounded-card p-6 border border-black/5 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-terracotta tabular-nums">
                    {s.percentage}% Off
                  </span>
                  <Award className="w-5 h-5 text-terracotta" />
                </div>
                <h3 className="text-base font-semibold text-ink">{s.name}</h3>
                <p className="text-xs text-ink-55 leading-relaxed">{s.criteria}</p>
                <div className="pt-3 border-t border-black/5">
                  <a
                    href={`/apply?scholarship=${s.id}`}
                    className="text-xs font-semibold text-ink hover:text-terracotta"
                  >
                    Check Eligibility & Apply →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {subRoute === 'how-to-apply' && (
        <div className="space-y-8">
          <Stepper />
          <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold text-ink">Required Documents Checklist</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-ink-55">
              <li className="p-3 bg-sand/30 rounded-tile flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Official High School Transcripts / Mark Sheets (last 2 years)
              </li>
              <li className="p-3 bg-sand/30 rounded-tile flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Color Passport Copy with minimum 6 months validity
              </li>
              <li className="p-3 bg-sand/30 rounded-tile flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                English Proficiency Score (IELTS, TOEFL, EmSAT) or waiver request
              </li>
              <li className="p-3 bg-sand/30 rounded-tile flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Personal Statement of Intent (350–500 words)
              </li>
            </ul>
            <div className="pt-4">
              <MagneticButton variant="terracotta" size="md" onClick={() => (window.location.href = '/apply')}>
                Open Digital Application Form →
              </MagneticButton>
            </div>
          </div>
        </div>
      )}

      {subRoute === 'visa' && (
        <div className="space-y-8">
          <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-sand">
                <Plane className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink">
                  UAE Student Residence Visa Sponsorship
                </h3>
                <p className="text-xs text-ink-55">
                  Full 1-year renewable university sponsorship under Dubai GDRFA protocols.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-ink-55">
              <div className="p-4 bg-sand/30 rounded-tile space-y-2">
                <h4 className="font-semibold text-ink text-sm">Step 1: Entry Permit</h4>
                <p>
                  Upon fee deposit and passport submission, the university issues an official 60-day student entry permit to enter the UAE.
                </p>
              </div>
              <div className="p-4 bg-sand/30 rounded-tile space-y-2">
                <h4 className="font-semibold text-ink text-sm">Step 2: Medical & Biometrics</h4>
                <p>
                  University visa officers escort students to Dubai Health Authority centers for required blood tests, chest X-ray, and Emirates ID fingerprinting.
                </p>
              </div>
              <div className="p-4 bg-sand/30 rounded-tile space-y-2">
                <h4 className="font-semibold text-ink text-sm">Step 3: Emirates ID Issuance</h4>
                <p>
                  Your physical Emirates ID card and residency sticker are delivered directly to the campus student registry office within 10 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {subRoute === 'agents' && (
        <div className="space-y-8">
          <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold text-ink">Global Education Agent Accreditation</h3>
            <p className="text-xs text-ink-55 leading-relaxed max-w-2xl">
              RKDF University Dubai partners with certified international education consultants across India, Pakistan, Central Asia, Nigeria, Kenya, and the GCC. We offer tier-based commission frameworks, 24-hour fast-track admissions evaluations, and marketing support.
            </p>
            <div className="pt-2">
              <MagneticButton variant="terracotta" size="md" onClick={() => (window.location.href = '/contact')}>
                Register as an Education Partner
              </MagneticButton>
            </div>
          </div>
        </div>
      )}

      {(subRoute === 'index' || subRoute === 'entry-requirements') && (
        <div className="space-y-12">
          {/* Entry requirements matrix */}
          <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-6">
            <h3 className="text-xl font-semibold text-ink">Curriculum Equivalency Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {academicRequirements.map((cur: CurriculumRequirement) => (
                <div key={cur.id} className="p-5 bg-sand/30 rounded-tile space-y-2 border border-black/5">
                  <h4 className="font-semibold text-ink text-sm">{cur.name}</h4>
                  <p className="text-xs font-semibold text-terracotta">{cur.requirement}</p>
                  <p className="text-[11px] text-ink-55">{cur.notes}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <FeeCalculator />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <Countdown />
              <Stepper />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
