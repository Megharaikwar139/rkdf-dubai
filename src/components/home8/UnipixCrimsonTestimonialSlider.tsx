import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  program: string;
  country: string;
  image: string;
  rating: number;
  quote: string;
}

export const UnipixCrimsonTestimonialSlider: React.FC = () => {
  const { locale } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Emma Elizabeth',
      role: 'Class of 2027',
      program: 'B.Tech in Artificial Intelligence & Data Science',
      country: 'United Kingdom',
      image: '/assets/rkdf-student-1.jpg',
      rating: 5,
      quote:
        'The hands-on computing clusters and seminar cohorts at RKDF University Dubai gave me immediate practical competence. The faculty directly connected me with a premier Gulf FinTech firm for my 12-week paid placement before graduation.',
    },
    {
      id: 2,
      name: 'Zayed Al-Mansoor',
      role: 'Executive Cohort 2026',
      program: 'Executive MBA in Digital Strategy & FinTech',
      country: 'United Arab Emirates',
      image: '/assets/rkdf-student-2.jpg',
      rating: 5,
      quote:
        'Balancing executive leadership with weekend coursework in Dubai Academic City has transformed how our regional teams deploy enterprise AI infrastructure. The professors are true subject-matter leaders who bring real boardroom dilemmas to class.',
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Class of 2027',
      program: 'Bachelor of Sustainable Architecture & Urbanism (B.Arch)',
      country: 'India',
      image: '/assets/rkdf-student-3.jpg',
      rating: 5,
      quote:
        'Designing for arid climates with 3D modular modeling in our dedicated studio has been an incredible creative journey. RKDF Dubai’s professors treat you as future architects, not just students, with direct access to Gulf urban planning projects.',
    },
    {
      id: 4,
      name: 'Dr. Marcus Vance',
      role: 'Verified Parent',
      program: 'Parent of B.Tech Computing Scholar',
      country: 'Canada / UAE',
      image: '/assets/home8/author-1-66854088eb598.webp',
      rating: 5,
      quote:
        'As an expatriate parent in Dubai, finding an accredited institution that combines academic rigor with personalized dean-level mentorship was vital. RKDF Dubai’s visa facilitation and transparent fee structure gave us total peace of mind.',
    },
    {
      id: 5,
      name: 'Fatima Al-Zahra',
      role: 'Cohort 2026',
      program: 'B.Tech in Computer Science & Cyber Defense',
      country: 'Oman / UAE',
      image: '/assets/home8/author-2-66854088e2b71.webp',
      rating: 5,
      quote:
        'The zero-trust cybersecurity sandboxes and certified ethical hacking labs gave me hands-on skills that directly matched UAE government defense standards. The DIAC campus community is vibrant and globally diverse.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative py-24 bg-[#890C25] text-white overflow-hidden">
      {/* Decorative Title SVG Backdrop from Home-8 */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <img
          src="/assets/home8/title.svg"
          alt="Title Backdrop"
          className="w-full max-w-5xl object-contain brightness-0 invert"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 space-y-12">
        {/* ============================================================== */}
        {/* Section Header: Badge, Heading & White Controls */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/15">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-apricot" />
                <span>Student Success &amp; Global Cohorts · Estd. 2026</span>
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.1]"
              style={{
                fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
              }}
            >
              What Our Scholars <br />
              &amp; Parents Say
            </h2>

            <p className="text-sm text-white/80 leading-relaxed">
              Real testimonials from undergraduate scholars, executive MBA fellows, and parents
              thriving in Dubai International Academic City.
            </p>
          </div>

          {/* Rating Badge + White Circular Navigation Arrows */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold text-white">
              <div className="flex text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <span>4.9 / 5.0</span>
              <span className="text-white/70">(420+ Reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#890C25] backdrop-blur-md border border-white/25 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#890C25] backdrop-blur-md border border-white/25 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Crisp White Testimonials Slider Cards */}
        {/* (Replacing Carnival Box with White Cards Slider) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .concat(
              testimonials.slice(0, Math.max(0, currentIndex + 3 - testimonials.length))
            )
            .slice(0, 3)
            .map((t, idx) => (
              <motion.div
                key={t.id + '-' + idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white text-ink rounded-[24px] p-7 sm:p-8 shadow-2xl border border-white/20 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-500 relative"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-6 text-black/5 group-hover:text-[#890C25]/10 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm text-ink leading-relaxed font-normal italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-black/8 mt-6 flex items-center gap-4 relative z-10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#890C25]/30 group-hover:border-[#890C25] transition-colors shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-ink truncate">{t.name}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-[11px] text-[#890C25] font-semibold truncate">
                      {t.program}
                    </p>
                    <p className="text-[10px] text-ink-55 truncate">
                      {t.role} • {t.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === i ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
