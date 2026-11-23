import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { programmes } from '../../content/programmes';
import { useI18n } from '../../context/I18nContext';

export const Home8AdmissionTestimonials: React.FC = () => {
  const { locale } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programme: programmes[0]?.name || 'B.Tech Artificial Intelligence',
    intake: 'January 2027',
  });

  const testimonials = [
    {
      name: 'Emma Elizabeth',
      role: 'B.Tech Artificial Intelligence & Robotics, Cohort 2025',
      image: '/assets/home8/author-1-66854088eb598.webp',
      quote:
        'The hands-on computing clusters and seminar cohorts at RKDF University Dubai gave me immediate practical competence. The faculty directly connected me with a premier Gulf FinTech firm for my 12-week paid placement.',
    },
    {
      name: 'Zent Ekizie',
      role: 'Executive MBA Candidate, Class of 2026',
      image: '/assets/home8/author-2-66854088e2b71.webp',
      quote:
        'Balancing executive leadership with weekend coursework in Dubai Academic City has transformed how our regional teams deploy AI infrastructure. The faculty are true subject-matter leaders.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Embedded Fast-Track Admission Form (Home 8 style) */}
          <div className="lg:col-span-6 bg-white rounded-[28px] p-8 sm:p-10 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#890C25] block mb-1">
                Admissions Portal
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-2">
                {locale === 'ar' ? 'استمارة القبول والتسجيل' : 'Admission Form'}
              </h2>
              <p className="text-xs text-ink-55 mb-6">
                Direct submission for 48-hour conditional review and automated scholarship assessment.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-ink">Application Submitted!</h3>
                  <p className="text-xs text-ink-55 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.firstName}. Our DIAC Admissions Office will send conditional offer guidelines to {formData.email} within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-[#890C25]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-[#890C25]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-[#890C25]"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp (+971) *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-[#890C25]"
                      />
                    </div>
                  </div>

                  <div>
                    <select
                      value={formData.programme}
                      onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                      className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-[#890C25]"
                    >
                      {programmes.slice(0, 15).map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.level})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <select
                      value={formData.intake}
                      onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
                      className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-[#890C25]"
                    >
                      <option value="January 2027">January 2027 Intake (Applications Active)</option>
                      <option value="September 2027">September 2027 Intake (Early Bird Open)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-pill bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Submit Application for 48-Hour Review</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 border-t border-black/5 mt-6 flex items-center justify-between text-[11px] text-ink-55">
              <span>Zero application fees for early applicants</span>
              <span>100% Visa Support</span>
            </div>
          </div>

          {/* Right Column: Testimonial Reviews & Student Voice (Home 8 style) */}
          <div className="lg:col-span-6 bg-white rounded-[28px] p-8 sm:p-10 shadow-sm border border-black/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#890C25]">
                  Student Testimonials
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-ink font-normal leading-relaxed italic">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-black/5">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#890C25]"
                />
                <div>
                  <h4 className="text-base font-bold text-ink">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-xs text-ink-55">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Nav Arrows */}
            <div className="pt-6 border-t border-black/5 mt-6 flex items-center justify-between">
              <span className="text-xs text-ink-55">
                Verified Student Cohort Review {activeTestimonial + 1} of {testimonials.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveTestimonial(
                      (activeTestimonial - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="p-2 rounded-full border border-black/10 hover:bg-sand/60 text-ink"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial((activeTestimonial + 1) % testimonials.length)
                  }
                  className="p-2 rounded-full border border-black/10 hover:bg-sand/60 text-ink"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
