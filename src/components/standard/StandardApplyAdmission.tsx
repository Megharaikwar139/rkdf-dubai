import React, { useState } from 'react';
import { programmes } from '../../content/programmes';
import { useI18n } from '../../context/I18nContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const StandardApplyAdmission: React.FC = () => {
  const { locale } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programme: programmes[0].name,
    intake: 'January 2027',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-24 bg-canvas overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
            Begin Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight">
            {locale === 'ar' ? 'التقديم والالتحاق بالجامعة' : 'Apply For Admission'}
          </h2>
          <p className="type-body text-sm mt-2">
            Submit your preliminary candidate details for 48-hour conditional review and automated scholarship evaluation.
          </p>
        </div>

        {/* Split Layout (matching reference: Photo on left, Form card on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left: Real Student Collaboration Photo */}
          <div className="lg:col-span-6 rounded-[28px] overflow-hidden shadow-md h-[400px] lg:h-auto min-h-[360px] relative">
            <img
              src="/assets/rkdf-student-1.jpg"
              alt="Students collaborating at RKDF Dubai"
              className="w-full h-full object-cover img-warm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-6 text-white">
              <span className="text-xs font-medium">
                Collaborative Commons & Seminar Suites · Block 11
              </span>
            </div>
          </div>

          {/* Right: Embedded Application Card (matching reference right form) */}
          <div className="lg:col-span-6 bg-cloud rounded-[28px] p-8 sm:p-10 shadow-md border border-black/5 flex flex-col justify-between">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-semibold text-ink">Application Received!</h3>
                <p className="text-xs text-ink-55 leading-relaxed">
                  Thank you, {formData.name}. Our admissions office will review your details and connect via email ({formData.email}) within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-1">
                    Application Form (Fast-Track)
                  </h3>
                  <p className="text-xs text-ink-55 mb-4">
                    Early January 2027 intake consideration with zero application fee.
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Student's Full Name *"
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="WhatsApp / Phone Number (+971...) *"
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus"
                  />
                </div>

                <div>
                  <select
                    value={formData.programme}
                    onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                  >
                    {programmes.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.level})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-pill bg-[#9B3218] hover:brightness-110 active:brightness-95 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Outline Watermark Text (matching reference visual) */}
        <div className="pt-10 text-center select-none pointer-events-none">
          <span
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent block"
            style={{
              WebkitTextStroke: '1.5px rgba(15, 34, 61, 0.08)',
            }}
          >
            Admission Open
          </span>
        </div>
      </div>
    </section>
  );
};
