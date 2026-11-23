import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronDown, Send } from 'lucide-react';
import { programmes } from '../../content/programmes';
import { MagneticButton } from '../common/MagneticButton';
import { useI18n } from '../../context/I18nContext';

interface EnquirySheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquirySheet: React.FC<EnquirySheetProps> = ({ isOpen, onClose }) => {
  const { t, locale, isRtl } = useI18n();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+971',
    phone: '',
    nationality: 'United Arab Emirates',
    curriculum: 'CBSE / Indian Board',
    programme: programmes[0].name,
    intake: 'January 2027',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const curriculums = [
    'CBSE / Indian Board',
    'International Baccalaureate (IB)',
    'British Curriculum (A-Levels)',
    'American High School Diploma',
    'UAE MoE (Thanawiya Amma)',
    'WAEC / West African Senior School',
    'Undergraduate Bachelor (for PG degrees)',
    'Other International Curriculum',
  ];

  const nationalities = [
    'United Arab Emirates',
    'India',
    'Pakistan',
    'Jordan',
    'Nigeria',
    'Egypt',
    'Saudi Arabia',
    'United Kingdom',
    'Canada',
    'Other International',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Valid phone number is required';
    }
    if (!formData.consent) {
      errs.consent = 'Please confirm consent to proceed';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        // keep success state for user feedback
      }, 400);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: isRtl ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? '-100%' : '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative w-full max-w-lg bg-cloud h-full shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/5 bg-sand/30">
              <div>
                <span className="text-xs font-semibold tracking-wider text-terracotta uppercase">
                  Admissions Consultation
                </span>
                <h3 className="text-xl font-semibold text-ink">Request Programme Information</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 text-ink transition-colors"
                aria-label="Close Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-mint flex items-center justify-center text-emerald-800 shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-semibold text-ink">Enquiry Successfully Lodged</h4>
                  <p className="text-sm text-ink-55 leading-relaxed max-w-xs">
                    {t.common.enquirySuccess}
                  </p>
                  <div className="pt-4">
                    <MagneticButton variant="cloud" size="md" onClick={handleReset}>
                      Return to Site
                    </MagneticButton>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Student's Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Tariq Al-Nuaimi"
                      className="w-full px-4 py-3 rounded-input bg-sand/30 border border-black/10 focus:border-focus focus:bg-cloud text-ink text-sm outline-none transition-all"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-input bg-sand/30 border border-black/10 focus:border-focus focus:bg-cloud text-ink text-sm outline-none transition-all"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone with +971 default selector */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="px-3 py-3 rounded-input bg-sand/30 border border-black/10 text-ink text-sm font-medium outline-none"
                      >
                        <option value="+971">+971 (UAE)</option>
                        <option value="+91">+91 (India)</option>
                        <option value="+92">+92 (Pakistan)</option>
                        <option value="+962">+962 (Jordan)</option>
                        <option value="+234">+234 (Nigeria)</option>
                        <option value="+966">+966 (KSA)</option>
                        <option value="+44">+44 (UK)</option>
                      </select>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="50 123 4567"
                        className="flex-1 px-4 py-3 rounded-input bg-sand/30 border border-black/10 focus:border-focus focus:bg-cloud text-ink text-sm outline-none transition-all"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Nationality
                    </label>
                    <select
                      value={formData.nationality}
                      onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                      className="w-full px-4 py-3 rounded-input bg-sand/30 border border-black/10 text-ink text-sm outline-none"
                    >
                      {nationalities.map((n, i) => (
                        <option key={i} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Current Curriculum */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Current Curriculum / High School Board
                    </label>
                    <select
                      value={formData.curriculum}
                      onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                      className="w-full px-4 py-3 rounded-input bg-sand/30 border border-black/10 text-ink text-sm outline-none"
                    >
                      {curriculums.map((c, i) => (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Programme of Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Programme of Interest
                    </label>
                    <select
                      value={formData.programme}
                      onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                      className="w-full px-4 py-3 rounded-input bg-sand/30 border border-black/10 text-ink text-sm outline-none"
                    >
                      {programmes.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.level})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Target Intake */}
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1.5">
                      Intended Intake
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['January 2027', 'September 2027'].map((itk) => (
                        <button
                          key={itk}
                          type="button"
                          onClick={() => setFormData({ ...formData, intake: itk })}
                          className={`py-2.5 px-3 rounded-pill text-xs font-semibold border transition-all ${
                            formData.intake === itk
                              ? 'bg-ink text-white border-ink'
                              : 'bg-sand/30 text-ink border-black/10 hover:bg-sand/60'
                          }`}
                        >
                          {itk}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Consent checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-terracotta focus:ring-focus border-black/20"
                      />
                      <span className="text-xs text-ink-55 leading-relaxed">
                        I consent to RKDF University Dubai contacting me via WhatsApp and email regarding admissions, academic requirements, and scholarship eligibility.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-red-600 mt-1">{errors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <MagneticButton
                      type="submit"
                      variant="terracotta"
                      size="lg"
                      className="w-full justify-center shadow-md"
                    >
                      {t.common.submitEnquiry}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
