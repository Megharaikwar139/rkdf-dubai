import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { schools } from '../../content/schools';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ArchMask } from '../common/ArchMask';
import { useI18n } from '../../context/I18nContext';

export const DragCarousel: React.FC = () => {
  const { locale, isRtl } = useI18n();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = () => {
    if (currentIndex < schools.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const tileWidth = 380 + 20; // width + gap
    carouselRef.current.scrollTo({
      left: isRtl ? -index * tileWidth : index * tileWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.closest('#schools-carousel-container')) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          if (isRtl) handlePrev();
          else handleNext();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          if (isRtl) handleNext();
          else handlePrev();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isRtl]);

  return (
    <div id="schools-carousel-container" className="relative w-full space-y-6" tabIndex={0}>
      {/* Header controls & progress indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {schools.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                scrollToIndex(idx);
              }}
              className={`h-2 rounded-pill transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-ink' : 'w-2 bg-black/15 hover:bg-black/30'
              }`}
              aria-label={`Go to School slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-cloud border border-black/10 hover:bg-sand/40 disabled:opacity-30 disabled:cursor-not-allowed text-ink transition-colors"
            aria-label="Previous School"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === schools.length - 1}
            className="p-3 rounded-full bg-cloud border border-black/10 hover:bg-sand/40 disabled:opacity-30 disabled:cursor-not-allowed text-ink transition-colors"
            aria-label="Next School"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Draggable carousel container with momentum */}
      <div
        ref={carouselRef}
        className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {schools.map((school, idx) => (
          <motion.div
            key={school.id}
            className="snap-start shrink-0 w-[340px] sm:w-[380px] bg-cloud rounded-[28px] border border-black/[0.05] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            whileHover={!shouldReduceMotion ? { y: -4 } : undefined}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          >
            <div>
              {/* Arch-masked image for the school */}
              <div className="w-full h-52 mb-6">
                <ArchMask variant="sm" className="w-full h-full">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover img-warm"
                    width={380}
                    height={208}
                  />
                </ArchMask>
              </div>

              {/* Number and programme count */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-sand text-ink">
                  School {school.number}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-apricot/30 text-ink">
                  {school.programmesCount} Programmes
                </span>
              </div>

              {/* School Name */}
              <h4 className="text-xl font-semibold text-ink mb-2">
                {locale === 'ar' ? school.nameAr : school.name}
              </h4>
              <p className="text-xs text-ink-55 leading-relaxed mb-4">
                {locale === 'ar' ? school.descriptionAr : school.description}
              </p>

              {/* Four discipline chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {school.disciplines.map((d, dIdx) => (
                  <span
                    key={dIdx}
                    className="text-[11px] px-2.5 py-1 rounded-pill bg-sand/40 text-ink/80 font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Dean attribution & Explore link */}
            <div className="pt-4 border-t border-black/5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-ink block">{school.dean}</span>
                <span className="text-[10px] text-ink-55">{school.deanRole}</span>
              </div>
              <a
                href={`/academics/${school.id}`}
                className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
              >
                Explore →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
