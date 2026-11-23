import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { studentVoices, StudentVoice } from '../../content/voices';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const CardStack: React.FC = () => {
  const { locale } = useI18n();
  const [cards, setCards] = useState<StudentVoice[]>(studentVoices);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = () => {
    setCards((prev) => {
      const copy = [...prev];
      const first = copy.shift()!;
      copy.push(first);
      return copy;
    });
  };

  const handlePrev = () => {
    setCards((prev) => {
      const copy = [...prev];
      const last = copy.pop()!;
      copy.unshift(last);
      return copy;
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Draggable Stack Area */}
      <div className="relative w-full max-w-2xl h-[340px] flex items-center justify-center">
        {cards.map((card, idx) => {
          // Visible stack depth (top 3 cards)
          const isTop = idx === 0;
          const isSecond = idx === 1;
          const isThird = idx === 2;

          if (idx > 2) return null;

          const yOffset = idx * 12;
          const scale = 1 - idx * 0.05;
          const opacity = 1 - idx * 0.15;

          return (
            <motion.div
              key={card.id}
              layout
              drag={isTop && !shouldReduceMotion ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 80) {
                  handleNext();
                }
              }}
              style={{
                zIndex: 10 - idx,
                transformOrigin: 'top center',
              }}
              animate={{
                y: yOffset,
                scale,
                opacity,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="absolute inset-x-0 mx-auto w-full max-w-xl bg-cloud rounded-[28px] p-8 md:p-10 shadow-md border border-black/5 cursor-grab active:cursor-grabbing select-none"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Portrait in circle mask */}
                  <div
                    className="w-14 h-14 rounded-full overflow-hidden border-2 border-cloud shadow-sm shrink-0"
                    style={{ backgroundColor: card.avatarBg }}
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover img-warm"
                      width={56}
                      height={56}
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink">
                      {locale === 'ar' ? card.nameAr : card.name}
                    </h4>
                    <p className="text-xs text-ink-55">
                      {card.programme} · {locale === 'ar' ? card.countryAr : card.country} · {card.classYear}
                    </p>
                  </div>
                </div>
                <div className="p-2.5 rounded-full bg-sand/40 text-terracotta shrink-0">
                  <Quote className="w-5 h-5" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl font-medium text-ink leading-relaxed">
                "{locale === 'ar' ? card.quoteAr : card.quote}"
              </blockquote>
            </motion.div>
          );
        })}
      </div>

      {/* Stack Navigation Controls */}
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-cloud border border-black/10 hover:bg-sand/40 text-ink shadow-sm transition-colors"
          aria-label="Previous Student Testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-semibold text-ink-55">
          Drag cards or use arrows
        </span>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-cloud border border-black/10 hover:bg-sand/40 text-ink shadow-sm transition-colors"
          aria-label="Next Student Testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
