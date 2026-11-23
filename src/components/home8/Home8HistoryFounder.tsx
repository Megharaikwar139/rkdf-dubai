import React, { useState } from 'react';
import { Play, ArrowUpRight, X } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Home8HistoryFounder: React.FC = () => {
  const { locale } = useI18n();
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Campus History Photo with Spinning Circular Badge & Play Button */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-lg border border-black/5 bg-sand/30 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/assets/home8/rectangle-9257-1-6899b5763a08f-1.webp"
                alt="RKDF University Campus Heritage"
                className="w-full h-full object-cover img-warm hover:scale-105 transition-transform duration-700"
              />

              {/* Circular Rotating Badge with Play Button in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* Spinning SVG circle text */}
                  <svg
                    className="w-full h-full animate-[spin_12s_linear_infinite] select-none pointer-events-none"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[9.5px] font-bold uppercase tracking-[0.18em] fill-[#890C25]">
                      <textPath xlinkHref="#circlePath">
                        RKDF UNIVERSITY DUBAI • ESTD. 1995 • EXPLORE FUTURE •
                      </textPath>
                    </text>
                  </svg>

                  {/* Play Button */}
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="absolute w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-[#890C25] hover:scale-110 active:scale-95 transition-transform border border-black/5"
                    aria-label="Play Campus Tour Video"
                  >
                    <Play className="w-6 h-6 fill-[#890C25] translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, 2 Icon Boxes, Founder Quote & Signature */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#890C25] block">
                Heritage & Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-[1.2]">
                {locale === 'ar' ? (
                  <>
                    نحن مركز للتميز الأكاديمي والابتكار وتمكين الطلبة لبناء مستقبل مشرق.
                  </>
                ) : (
                  <>
                    We’re a center for academic excellence, innovation, and student growth. Join a legacy of learning that shapes the future.
                  </>
                )}
              </h2>
            </div>

            {/* Two Icon Boxes Side by Side (matching reference) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-[24px] bg-white border border-black/5 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#890C25]/10 flex items-center justify-center text-[#890C25]">
                  <svg className="w-6 h-6 text-[#890C25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M6 6h10M6 10h10M6 14h6" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-ink">University Heritage</h3>
                <p className="text-xs text-ink-55 leading-relaxed">
                  Three decades of teaching and applied research, now established at Dubai Academic City.
                </p>
              </div>

              <div className="p-6 rounded-[24px] bg-white border border-black/5 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#890C25]/10 flex items-center justify-center text-[#890C25]">
                  <svg className="w-6 h-6 text-[#890C25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-ink">Global Future</h3>
                <p className="text-xs text-ink-55 leading-relaxed">
                  38 programmes designed for the Gulf knowledge economy with dual-campus mobility.
                </p>
              </div>
            </div>

            {/* Bottom Row: About Us Button & Founder / Signature Box */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-black/5">
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-semibold text-xs px-6 py-3.5 rounded-pill shadow-sm transition-all"
              >
                <span>About Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Founder Avatar & Signature Graphic (from Home-8 assets) */}
              <div className="flex items-center gap-4">
                <img
                  src="/assets/home8/ellipse-368-1-6899b89c8124b.webp"
                  alt="Chancellor & Founder"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-ink">Founder & Chancellor</span>
                  <span className="text-[11px] text-ink-55">Dr. Sunil Kapoor</span>
                </div>
                <img
                  src="/assets/home8/signature.svg"
                  alt="Founder Signature"
                  className="h-9 w-auto object-contain opacity-80 pl-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-card overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 text-white hover:bg-white/40"
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
