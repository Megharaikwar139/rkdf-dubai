import React, { useState, useEffect } from 'react';
import { programmes, Programme } from '../content/programmes';
import { scholarshipBands, ScholarshipBand } from '../content/fees';
import { MagneticButton } from '../components/common/MagneticButton';
import { CheckCircle2, FileUp, Sparkles, ShieldCheck } from 'lucide-react';

export const ApplyPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United Arab Emirates',
    programmeSlug: programmes[0].slug,
    intake: 'January 2027',
    curriculum: 'CBSE',
    predictedScore: '85%',
    scholarship: 'merit',
  });

  // URL query params preload
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('program');
    const s = params.get('scholarship');
    if (p && programmes.some((pr: Programme) => pr.slug === p)) {
      setFormData((prev) => ({ ...prev, programmeSlug: p }));
    }
    if (s && scholarshipBands.some((sc: ScholarshipBand) => sc.id === s)) {
      setFormData((prev) => ({ ...prev, scholarship: s }));
    }
  }, []);

  const selectedProg = programmes.find((pr: Programme) => pr.slug === formData.programmeSlug) || programmes[0];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1000px] mx-auto space-y-12">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Admissions Portal · January & September 2027
        </span>
        <h1 className="type-h1 text-ink mb-4">Official Application for Admission</h1>
        <p className="type-body">
          Complete your preliminary evaluation form in less than 8 minutes. No application submission fee required for early intake candidates.
        </p>
      </div>

      {/* Stepper Progress */}
      <div className="flex items-center justify-between max-w-md mx-auto py-2">
        {['1. Personal Details', '2. Academic Choice', '3. Transcripts & Submission'].map((st, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                step >= i + 1 ? 'bg-terracotta text-white' : 'bg-sand text-ink-55'
              }`}
            >
              {i + 1}
            </span>
            <span className="text-xs font-medium text-ink hidden sm:inline">{st}</span>
          </div>
        ))}
      </div>

      {submitted ? (
        <div className="bg-cloud p-10 md:p-14 rounded-card border border-black/5 shadow-md text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-mint text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-ink">
            Application Registered Successfully!
          </h2>
          <p className="text-sm text-ink-55 max-w-md mx-auto leading-relaxed">
            Your application reference number is <strong className="text-ink font-mono">RKDF-DXB-2027-0894</strong>. Our admissions committee will evaluate your predicted grades and issue a provisional offer letter within 48 business hours.
          </p>
          <div className="p-4 rounded-tile bg-sand/40 border border-black/5 text-xs text-ink-55 max-w-md mx-auto">
            <span>Selected Degree: <strong>{selectedProg.name}</strong></span><br />
            <span>Target Intake: <strong>{formData.intake}</strong></span>
          </div>
          <div className="pt-4">
            <MagneticButton variant="cloud" size="md" onClick={() => (window.location.href = '/')}>
              Return to University Homepage
            </MagneticButton>
          </div>
        </div>
      ) : (
        <form onSubmit={handleNext} className="bg-cloud p-8 md:p-12 rounded-card border border-black/5 shadow-sm space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-ink">Applicant Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="e.g. Omar"
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Last / Family Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="e.g. Al-Mansoor"
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">Nationality</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-ink">Academic Programme & Intended Intake</h3>
              <div>
                <label className="block text-xs font-semibold text-ink mb-1">Choose Degree Programme</label>
                <select
                  value={formData.programmeSlug}
                  onChange={(e) => setFormData({ ...formData, programmeSlug: e.target.value })}
                  className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                >
                  {programmes.map((p: Programme) => (
                    <option key={p.id} value={p.slug}>
                      {p.name} ({p.level}) — {p.feePerYearOrTotal}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Intended Intake</label>
                  <select
                    value={formData.intake}
                    onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                  >
                    <option>January 2027</option>
                    <option>September 2027</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">High School Curriculum</label>
                  <select
                    value={formData.curriculum}
                    onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                  >
                    <option>CBSE / Indian State Boards</option>
                    <option>International Baccalaureate (IB)</option>
                    <option>British A-Levels</option>
                    <option>American High School</option>
                    <option>UAE MoE (Thanawiya Amma)</option>
                    <option>WAEC / WASSCE</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-ink">Transcript Review & Documents</h3>
              <div className="border-2 border-dashed border-black/15 p-8 rounded-card text-center space-y-2 bg-sand/10">
                <FileUp className="w-8 h-8 text-terracotta mx-auto" />
                <span className="text-xs font-semibold text-ink block">Upload High School Marksheets (Optional)</span>
                <span className="text-[11px] text-ink-55 block">PDF, PNG, JPG up to 10MB</span>
                <input type="file" className="text-xs text-ink-55 mt-2" />
              </div>
              <p className="text-xs text-ink-55 leading-relaxed">
                By clicking Submit Application, you certify that all information submitted is accurate and you authorize RKDF University Dubai to verify credentials.
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-black/5">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-5 py-2.5 rounded-pill bg-sand/40 text-xs font-semibold text-ink"
              >
                ← Back
              </button>
            ) : <div />}

            <MagneticButton variant="terracotta" size="md" type="submit">
              {step === 3 ? 'Submit Application for Review' : 'Next Step →'}
            </MagneticButton>
          </div>
        </form>
      )}
    </div>
  );
};
