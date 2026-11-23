import React, { useState } from 'react';
import { Play, X, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const UnipixExactAdmission: React.FC = () => {
  const { locale } = useI18n();
  const [videoOpen, setVideoOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    date: '',
    comments: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email) {
      setSubmitted(true);
    }
  };

  const topMarqueePhrases = [
    'University Admission Open 2026',
    'RKDF University Dubai',
    'Apply For Fall 2026',
    'Knowledge Meets Innovation',
    'University Admission Open 2026',
    'RKDF University Dubai',
    'Apply For Fall 2026',
    'Knowledge Meets Innovation',
  ];

  const bottomPhotoMarqueePhrases = [
    'University',
    'RKDF University',
    'Dubai Campus',
    'Estd. 2026',
    'University',
    'RKDF University',
    'Dubai Campus',
    'Estd. 2026',
  ];

  return (
    <section className="pt-16 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 bg-[#0D0B24] text-white relative border-t border-white/10 select-none overflow-x-clip z-20">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#890C25]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ============================================================== */}
          {/* 1. LEFT COLUMN: Students Photo with Bottom Marquee OVER IT     */}
          {/* Defines the natural bottom edge of the navy background         */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] bg-slate-900 group">
              {/* Students Photo on Stone Steps */}
              <img
                src="/assets/home8/img-6-689ac6deede56.webp"
                alt="Students on university steps"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
              />

              {/* Bottom Subtle Gradient Shading */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

              {/* BOTTOM MARQUEE: Slides right-to-left over the photo bottom */}
              <div className="absolute inset-x-0 bottom-3.5 overflow-hidden pointer-events-none z-10 py-1">
                <div
                  className="flex animate-marquee whitespace-nowrap items-center will-change-transform"
                  style={{ animationDuration: '30s' }}
                >
                  {bottomPhotoMarqueePhrases
                    .concat(bottomPhotoMarqueePhrases)
                    .map((text, idx) => (
                      <div key={idx} className="flex items-center shrink-0">
                        <span
                          className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white drop-shadow-lg px-3.5 leading-none select-none"
                          style={{
                            fontFamily:
                              '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                          }}
                        >
                          {text}
                        </span>
                        <span className="text-[#890C25] text-xl font-serif px-1.5">
                          ✻
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 2. RIGHT AREA: Top Marquee + Content & Overhanging Form        */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between space-y-6">
            {/* TOP MARQUEE: Slower, bigger text, sliding in reverse direction */}
            <div className="relative overflow-hidden w-full pb-4 border-b border-white/10">
              <div
                className="flex animate-marquee-reverse whitespace-nowrap items-center will-change-transform"
                style={{ animationDuration: '52s' }}
              >
                {topMarqueePhrases
                  .concat(topMarqueePhrases)
                  .map((text, idx) => (
                    <div key={idx} className="flex items-center shrink-0">
                      <span
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[102px] 2xl:text-[114px] font-bold tracking-tight text-white/95 leading-none px-6 select-none"
                        style={{
                          fontFamily:
                            '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                        }}
                      >
                        {text}
                      </span>
                      <span className="text-[#890C25] text-3xl lg:text-5xl font-serif px-3">
                        ✻
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* CONTENT & FORM ROW: Exactly matching Image 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-1">
              {/* Left Sub-Column (md:col-span-5): Paragraph, Signature & Spinning Video Badge */}
              <div className="md:col-span-5 space-y-6 pt-1">
                <div className="space-y-2.5">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[#F3A469] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Admissions 2026 Open</span>
                  </span>

                  <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                    Begin your academic journey with us. At RKDF University Dubai, we welcome
                    students from diverse backgrounds to join our vibrant learning community.
                  </p>
                </div>

                {/* Cursive Signature Graphic */}
                <div className="pt-1">
                  <img
                    src="/assets/home8/title.svg"
                    alt="Founder Signature Jon Kibria"
                    className="h-14 sm:h-16 w-auto object-contain brightness-0 invert opacity-95"
                  />
                  <span className="block text-[11px] text-white/50 tracking-wider uppercase mt-1">
                    Founder &amp; Chancellor
                  </span>
                </div>

                {/* Rotating Circular Text Badge with Center Play Button */}
                <div className="pt-2 flex items-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                    {/* Spinning SVG text */}
                    <svg
                      className="w-full h-full animate-[spin_12s_linear_infinite] select-none"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <path
                          id="admissionSpinnerCircleExactV4"
                          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                        />
                      </defs>
                      <text className="text-[9.5px] font-bold uppercase tracking-[0.16em] fill-white/90">
                        <textPath xlinkHref="#admissionSpinnerCircleExactV4">
                          Explore Future • Estd. 2026 • RKDF •
                        </textPath>
                      </text>
                    </svg>

                    {/* Central Play Triangle Button */}
                    <button
                      onClick={() => setVideoOpen(true)}
                      className="absolute w-12 h-12 rounded-full bg-white text-[#890C25] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                      aria-label="Play Campus Tour Video"
                      title="Watch Dubai Campus Tour"
                    >
                      <Play className="w-5 h-5 fill-[#890C25] translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Sub-Column (md:col-span-7): Admission Form */}
              {/* Negative margin ensures the navy background DOES NOT stretch down */}
              {/* The form card hangs down into the white section below, exactly like Image 2 */}
              <div className="md:col-span-7 relative z-30">
                <div className="bg-white text-ink rounded-[26px] p-6 sm:p-7 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-black/5 relative select-auto mb-[-180px] sm:mb-[-220px] md:mb-[-240px] lg:mb-[-260px]">
                  <div className="mb-5 text-center">
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-ink"
                      style={{
                        fontFamily:
                          '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                      }}
                    >
                      Admission Form
                    </h3>
                    <p className="text-xs text-ink-55 mt-1 font-medium">
                      Apply for Fall 2026 Academic Cohort
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-10 text-center space-y-4">
                      <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                      <h4 className="text-xl font-bold text-ink">Application Received!</h4>
                      <p className="text-xs text-ink-55 leading-relaxed">
                        Thank you, <span className="font-semibold text-ink">{formData.firstName}</span>.
                        Our Admissions Office in Dubai Academic City will contact you at{' '}
                        <span className="font-semibold text-ink">{formData.email}</span> within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-semibold text-[#890C25] underline pt-2 cursor-pointer"
                      >
                        Submit another application
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* First Name & Last Name */}
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] transition-all"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] transition-all"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="email"
                          required
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] transition-all"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] transition-all"
                        />
                      </div>

                      {/* Address & City */}
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Address"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] transition-all"
                        />
                        <input
                          type="text"
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] transition-all"
                        />
                      </div>

                      {/* Country & Zip Code */}
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Country"
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({ ...formData, country: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] transition-all"
                        />
                        <input
                          type="text"
                          placeholder="Zip Code"
                          value={formData.zipCode}
                          onChange={(e) =>
                            setFormData({ ...formData, zipCode: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] transition-all"
                        />
                      </div>

                      {/* Date Input */}
                      <div>
                        <input
                          type="text"
                          placeholder="Preferred Date (dd/mm/yy)"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] transition-all"
                        />
                      </div>

                      {/* Comments textarea */}
                      <div>
                        <textarea
                          rows={2}
                          placeholder="Enter your Academic Interests or Comments"
                          value={formData.comments}
                          onChange={(e) =>
                            setFormData({ ...formData, comments: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-sand/30 border border-black/15 text-xs text-ink outline-none focus:border-[#890C25] focus:ring-1 focus:ring-[#890C25] resize-none transition-all"
                        />
                      </div>

                      {/* Deep Crimson "Apply Now →" Button */}
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-[8px] bg-[#890C25] hover:bg-[#6e0a1e] active:scale-[0.99] text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-card overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src="/assets/rkdf-drone.mp4"
              controls
              autoPlay
              className="w-full h-auto aspect-video"
            />
          </div>
        </div>
      )}
    </section>
  );
};
