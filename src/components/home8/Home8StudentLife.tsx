import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Home8StudentLife: React.FC = () => {
  const { locale } = useI18n();
  const [slideIndex, setSlideIndex] = useState(0);

  const carouselImages = [
    { src: '/assets/home8/img-7-689ac6deceee5.webp', title: 'Campus Courtyard & Sports' },
    { src: '/assets/home8/frame-447-68a1bfd477f55.webp', title: 'Student Innovation Hub' },
    { src: '/assets/home8/frame-448-68a1bfd45e5c1.webp', title: 'Hostel Lounges & Study Pods' },
  ];

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large Student Life Photograph */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] overflow-hidden shadow-lg border border-black/5 aspect-[4/5] bg-sand/30 relative">
              <img
                src="/assets/home8/img-6-689ac6deede56.webp"
                alt="Student Life at RKDF Dubai"
                className="w-full h-full object-cover img-warm hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <span className="text-xs font-semibold text-apricot uppercase tracking-wider block mb-1">
                    Student Community
                  </span>
                  <h3 className="text-xl font-semibold">46 Nationalities. One Family in Dubai.</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Component SVG, Tabs, Carousel */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 rounded-[28px] bg-white border border-black/5 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <img
                  src="/assets/home8/Component-13.svg"
                  alt="Decorative Motif"
                  className="w-16 h-16 object-contain opacity-90"
                />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#890C25]">
                  Vibrant Campus Life
                </span>
              </div>

              <p className="text-sm sm:text-base text-ink-55 leading-relaxed font-normal">
                {locale === 'ar'
                  ? 'انطلق في تجربة جامعية متكاملة توازن بين التفوق الأكاديمي والأنشطة الطلابية والرياضية في قلب دبي.'
                  : 'Embark on a journey of knowledge, discovery, and growth at RKDF University Dubai with over 31 student societies and sports clubs.'}
              </p>

              {/* Quick Pillars */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <a
                  href="/student-life/clubs"
                  className="p-4 rounded-[16px] bg-sand/30 hover:bg-[#890C25] hover:text-white transition-all text-center group"
                >
                  <h4 className="text-xs font-bold text-ink group-hover:text-white mb-1">Arts & Culture</h4>
                  <span className="text-[10px] text-ink-55 group-hover:text-white/80 block">12 Clubs</span>
                </a>

                <a
                  href="/student-life/clubs"
                  className="p-4 rounded-[16px] bg-sand/30 hover:bg-[#890C25] hover:text-white transition-all text-center group"
                >
                  <h4 className="text-xs font-bold text-ink group-hover:text-white mb-1">Athletics</h4>
                  <span className="text-[10px] text-ink-55 group-hover:text-white/80 block">Sports Arena</span>
                </a>

                <a
                  href="/student-life/accommodation"
                  className="p-4 rounded-[16px] bg-sand/30 hover:bg-[#890C25] hover:text-white transition-all text-center group"
                >
                  <h4 className="text-xs font-bold text-ink group-hover:text-white mb-1">Residences</h4>
                  <span className="text-[10px] text-ink-55 group-hover:text-white/80 block">Hostel Suites</span>
                </a>
              </div>

              <div className="pt-2 flex justify-start">
                <a
                  href="/student-life"
                  className="inline-flex items-center gap-2 bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-semibold text-xs px-6 py-3.5 rounded-pill shadow-sm transition-all"
                >
                  <span>Explore Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom Mini Carousel (Campus Life in Home 8) */}
            <div className="relative rounded-[24px] overflow-hidden shadow-sm border border-black/5 bg-white p-4">
              <div className="flex items-center justify-between pb-3 px-2">
                <h4 className="text-sm font-bold text-ink">Campus Life Gallery</h4>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSlideIndex((slideIndex - 1 + carouselImages.length) % carouselImages.length)}
                    className="p-1.5 rounded-full hover:bg-sand/60 text-ink"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSlideIndex((slideIndex + 1) % carouselImages.length)}
                    className="p-1.5 rounded-full hover:bg-sand/60 text-ink"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative h-44 rounded-[18px] overflow-hidden">
                <img
                  src={carouselImages[slideIndex].src}
                  alt={carouselImages[slideIndex].title}
                  className="w-full h-full object-cover img-warm transition-opacity duration-300"
                />
                <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-pill bg-white/90 backdrop-blur-md text-[11px] font-semibold text-ink">
                  {carouselImages[slideIndex].title}
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-1.5 pt-3">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === slideIndex ? 'bg-[#890C25] w-5' : 'bg-black/20'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
