import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, X } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const UnipixExactHero: React.FC = () => {
  const { locale } = useI18n();
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#890C25] text-white pt-32 pb-24 px-6 lg:px-12 flex items-center justify-center overflow-hidden">
      {/* Subtle Geometric Architectural Backdrop Facets (matches Unipix hero) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-black/20 blur-3xl" />
        {/* Angled geometric background lines */}
        <svg className="w-full h-full object-cover" viewBox="0 0 1440 900" fill="none">
          <path d="M-100 0L700 900M740 0L1540 900M0 450L1440 450" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        </svg>
      </div>

      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Graduate Student Photo (matching screenshot left image) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-64 sm:w-72 lg:w-full max-w-[340px] aspect-[3/4] rounded-[18px] overflow-hidden shadow-2xl border-4 border-white/10 bg-black/10"
            >
              <img
                src="/assets/home1/img-52.webp"
                alt="Graduate Student at RKDF University Dubai"
                className="w-full h-full object-cover object-center img-warm hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Center Column: Display Typography, Hand-drawn Arrow, Spinning Play Badge, CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left order-1 lg:order-2 space-y-6">
            {/* Top Pill: Mortarboard Icon + "knowledge meets innovation" */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-pill bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium tracking-wide"
            >
              {/* Mortarboard Graduation Cap SVG (exact from Unipix) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 32 23" fill="none" className="shrink-0 text-white">
                <path d="M29.3134 12.4137L26.2577 13.5368C26.1486 11.972 25.9624 10.4411 25.703 8.97501L31.2363 7.1272C31.7003 6.97226 32 6.55338 32 6.06003C32 5.56667 31.7003 5.14773 31.2363 4.99285L16.5518 0.0891783C16.1959 -0.0297261 15.8039 -0.0297261 15.4482 0.0891783L0.763689 4.99285C0.299751 5.14779 0 5.56667 0 6.06009C0 6.5535 0.299751 6.97238 0.763689 7.12726L6.29608 8.97476C6.15651 9.76449 6.03639 10.5862 5.93857 11.4221C5.90826 11.6818 6.09201 11.9171 6.34908 11.9478C6.36776 11.95 6.38633 11.951 6.4047 11.951C6.63901 11.951 6.84145 11.7739 6.86958 11.5332C6.9597 10.7628 7.06926 10.0054 7.19564 9.27518L8.6862 9.77295V10.9503C7.93627 11.1584 7.38358 11.8525 7.38358 12.6749C7.38358 13.1708 7.58452 13.6201 7.90833 13.9443C7.67095 14.8208 7.48783 15.8479 7.3597 17.0185C7.03995 16.8339 6.80164 16.6748 6.64233 16.5609C6.59533 16.5273 6.56758 16.4718 6.56801 16.4124C6.57483 15.4776 6.61164 14.5281 6.67751 13.5903C6.69583 13.3295 6.50133 13.1032 6.24308 13.0847C5.98545 13.0665 5.76064 13.2626 5.74232 13.5234C5.67514 14.481 5.63751 15.4507 5.63051 16.4053C5.62776 16.774 5.80357 17.121 6.10057 17.3334C6.33545 17.5014 6.72264 17.7565 7.26414 18.0453C7.18464 19.0703 7.1422 20.1902 7.1372 21.4014C7.1357 21.7627 7.37683 22.078 7.72377 22.1684C8.03083 22.2483 8.52845 22.3436 9.15496 22.3436C9.78139 22.3436 10.279 22.2483 10.5861 22.1683C10.933 22.078 11.1741 21.7626 11.1726 21.4014C11.17 20.7409 11.1559 20.1081 11.131 19.5025C11.7646 19.6636 12.4229 19.7997 13.0975 19.9085C13.1153 20.2805 13.195 20.6732 13.3337 21.0578C13.5537 21.6683 13.9002 22.1985 14.3094 22.5508C14.6521 22.8459 15.0262 23 15.3802 23C15.5033 23 15.6238 22.9803 15.7398 22.9424C15.7533 22.9388 15.7667 22.9346 15.78 22.9297L23.0251 20.2668C23.0252 20.2668 23.0252 20.2668 23.0252 20.2668L23.0266 20.2663C23.3112 20.162 23.5583 20.1628 23.7821 20.2687C24.2929 20.5104 24.5982 21.2385 24.7058 21.5405C24.7766 21.7388 24.9196 21.8972 25.1087 21.9867C25.2141 22.0365 25.3266 22.0616 25.4396 22.0616C25.5298 22.0616 25.6203 22.0456 25.7076 22.0135L27.8589 21.2228C28.0712 21.1447 28.2399 20.9778 28.3214 20.7647C28.4023 20.5532 28.389 20.3172 28.2849 20.1171C27.9832 19.5378 27.5121 19.1053 26.9035 18.8412L27.6523 18.566C27.8956 18.4766 28.021 18.2049 27.9324 17.9593C27.8439 17.7136 27.5749 17.5869 27.3316 17.6764L26.0489 18.1478C26.1166 17.647 26.0522 17.0589 25.8371 16.4621C25.6297 15.8867 25.3097 15.3827 24.9309 15.0316L29.6337 13.3032C29.9127 13.2004 30.5359 13.6587 30.8786 14.6092C31.0416 15.0617 31.0997 15.5341 31.0379 15.9054C30.9924 16.1781 30.8873 16.3696 30.7564 16.4177L29.2894 16.9568C29.0462 17.0462 28.9207 17.3178 29.0093 17.5635C29.0977 17.809 29.3664 17.9358 29.6101 17.8464L31.0771 17.3073C31.536 17.1386 31.8587 16.6849 31.9624 16.0625C32.0516 15.5269 31.9796 14.8958 31.7596 14.2854C31.2652 12.9136 30.1907 12.0913 29.3134 12.4137Z" fill="white"/>
              </svg>
              <span>knowledge meets innovation</span>
            </motion.div>

            {/* Main Headline Line 1: UNIVERSITY */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white uppercase font-serif"
              style={{
                fontFamily: '"Cinzel", "Playfair Display", "Times New Roman", Georgia, serif',
                letterSpacing: '0.02em',
                lineHeight: 0.95,
              }}
            >
              UNIVERSITY
            </motion.h1>

            {/* Line 2 with Curved Arrow & Spinning Play Button Badge + "OF RKDF DUBAI" */}
            <div className="relative flex flex-col lg:flex-row items-center lg:items-center gap-4 sm:gap-6 pt-1 pb-2">
              {/* Left Wing in Line 2: Hand-Drawn Arrow & Rotating Video Play Badge */}
              <div className="flex items-center gap-2 relative">
                {/* Hand-Drawn Curved Arrow (from exact Unipix asset) */}
                <div className="w-10 sm:w-12 h-16 pointer-events-none opacity-80 shrink-0">
                  <img
                    src="/assets/home1/arrow.png"
                    alt="Curved arrow pointing to play button"
                    className="w-full h-full object-contain filter invert brightness-200"
                  />
                </div>

                {/* Spinning Rotating Circular Badge with Center Play Button */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center shrink-0">
                  {/* Spinning SVG text */}
                  <svg
                    className="w-full h-full animate-[spin_14s_linear_infinite] select-none pointer-events-none"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="unipixCircle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[10px] font-semibold uppercase tracking-[0.16em] fill-white/90">
                      <textPath xlinkHref="#unipixCircle">
                        Estd. 2026 • Explore Future • RKDF •
                      </textPath>
                    </text>
                  </svg>

                  {/* Play Triangle Trigger */}
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="absolute w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#890C25] backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
                    aria-label="Play Campus Video Tour"
                  >
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </button>
                </div>
              </div>

              {/* Line 2 Text: "OF RKDF" / "OF UNIPIX" */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white uppercase font-serif whitespace-nowrap"
                style={{
                  fontFamily: '"Cinzel", "Playfair Display", "Times New Roman", Georgia, serif',
                  letterSpacing: '0.02em',
                  lineHeight: 0.95,
                }}
              >
                OF RKDF
              </motion.h1>
            </div>

            {/* Subtitle & CTA Button Column (matching screenshot right below heading) */}
            <div className="space-y-6 pt-2 max-w-xl mx-auto lg:mx-0">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base text-white/80 leading-relaxed font-normal"
              >
                {locale === 'ar'
                  ? 'تنقل جامعة RKDF ثلاثة عقود من التميز الأكاديمي والبحثي إلى مدينة دبي الأكاديمية العالمية — 38 برنامجاً دراسياً وسبع كليات ودفعات طلابية نوعية.'
                  : 'RKDF University Dubai brings three decades of academic distinction to Dubai International Academic City — 38 accredited programmes, seven schools, and seminar cohorts.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-2 flex justify-center lg:justify-start"
              >
                <a
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/95 text-ink hover:text-[#890C25] font-semibold text-sm px-8 py-4 rounded-pill shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                >
                  <span>{locale === 'ar' ? 'استكشف برامجنا' : 'View Our Program'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Historic Campus Tower Photograph (lowered so heading text is unobstructed) */}
          <div className="lg:col-span-3 hidden lg:flex justify-end order-3 self-end pb-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-56 xl:w-64 aspect-[3/4] rounded-[20px] overflow-hidden shadow-2xl border-4 border-white/10 bg-black/10 translate-y-10 xl:translate-y-16"
            >
              <img
                src="/assets/home1/img-53.webp"
                alt="University Tower Architecture"
                className="w-full h-full object-cover object-center img-warm hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-card overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
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
