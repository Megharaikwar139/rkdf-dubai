import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowUpRight,
  GraduationCap,
  Linkedin,
  Twitter,
  Mail,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ExternalLink,
} from 'lucide-react';

interface Professor {
  id: number;
  name: string;
  designation: string;
  dept: string;
  almaMater: string;
  specialization: string;
  image: string;
  email: string;
  linkedin: string;
  twitter: string;
}

export const UnipixModernProfessors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [cardsPerView, setCardsPerView] = useState<number>(4);
  const [activeMobileId, setActiveMobileId] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const professors: Professor[] = [
    {
      id: 0,
      name: 'Dr. Thomas Fred, Ph.D.',
      designation: 'Dean & Associate Professor of AI',
      dept: 'School of Computing & AI',
      almaMater: 'Ph.D. Imperial College London · Ex-DeepMind',
      specialization: 'Generative AI & Autonomous Neural Systems',
      image: '/assets/home8/2-668a3b38785e6.webp',
      email: 't.fred@rkdf.ac.ae',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 1,
      name: 'Prof. C. Hannah Ueno, M.Arch',
      designation: 'Head of Architecture & Design',
      dept: 'School of Architecture & Built Env',
      almaMater: 'M.Arch Harvard Graduate School of Design',
      specialization: 'Arid Bioclimatic Mega-structures & Urbanism',
      image: '/assets/home8/1-668a3b3758d6f.webp',
      email: 'h.ueno@rkdf.ac.ae',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 2,
      name: 'Prof. Jennifer Aarons, Ph.D.',
      designation: 'Professor of Management & MBA Dean',
      dept: 'School of Business & Leadership',
      almaMater: 'Ph.D. London Business School · Ex-McKinsey',
      specialization: 'Cross-Border FinTech Strategy & Leadership',
      image: '/assets/home8/3-668a3b38c2618.webp',
      email: 'j.aarons@rkdf.ac.ae',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 3,
      name: 'Dr. Michael McGarvey, LL.D.',
      designation: 'Professor of Public Policy & Law',
      dept: 'School of Law & Governance',
      almaMater: 'LL.D. Oxford University · DIFC Arbitrator',
      specialization: 'International Arbitration & Digital Asset Law',
      image: '/assets/home8/4-668a3b39cf942.webp',
      email: 'm.mcgarvey@rkdf.ac.ae',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 4,
      name: 'Dr. Sarah Al-Maktoum, Ph.D.',
      designation: 'Chair of Robotics & Autonomous Systems',
      dept: 'Department of Robotics & Mechatronics',
      almaMater: 'Ph.D. MIT · IEEE Senior Fellow',
      specialization: 'Cognitive Humanoid Robotics & Industrial Automation',
      image: '/assets/home8/prof-5.webp',
      email: 's.almaktoum@rkdf.ac.ae',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 5,
      name: 'Prof. Tariq Mansour, D.Eng.',
      designation: 'Director of Clean Energy & Smart Grids',
      dept: 'School of Sustainable Engineering',
      almaMater: 'D.Eng. ETH Zürich · Masdar Advisor',
      specialization: 'Solar Thermal Micro-Grids & Desalination Systems',
      image: '/assets/home8/prof-6.webp',
      email: 't.mansour@rkdf.ac.ae',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 6,
      name: 'Dr. Elena Rostova, Ph.D.',
      designation: 'Director of Quantitative Finance Lab',
      dept: 'Department of FinTech & Econometrics',
      almaMater: 'Ph.D. University of Chicago Booth · CFA',
      specialization: 'Algorithmic Sovereign Fund Allocation & Blockchains',
      image: '/assets/home8/prof-7.webp',
      email: 'e.rostova@rkdf.ac.ae',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 7,
      name: 'Prof. David Vance, Ph.D.',
      designation: 'Professor of Cyber Security & Cryptography',
      dept: 'School of Computing & AI',
      almaMater: 'Ph.D. Cambridge University · UAE Cyber Council',
      specialization: 'Post-Quantum Cryptography & Zero-Knowledge Proofs',
      image: '/assets/home8/prof-8.webp',
      email: 'd.vance@rkdf.ac.ae',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  ];

  // Tripled list for infinite looping without visual gaps
  const extendedProfessors = [...professors, ...professors, ...professors];

  // Update cards per view dynamically based on screen width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Handle auto-sliding
  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % professors.length);
    }, 3200);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, professors.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % professors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + professors.length) % professors.length);
  };

  return (
    <section className="py-24 bg-[#FAF8F5] text-ink overflow-hidden border-b border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-10">
        {/* ============================================================== */}
        {/* Section Header: Minimal, Clean, Tabs REMOVED, Slider Controls Added */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#890C25] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>World-Class Mentorship · Global Scholars · Established 2026</span>
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-ink leading-[1.1]"
              style={{
                fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
              }}
            >
              Distinguished Faculty <br />
              &amp; Academic Deans
            </h2>

            <p className="text-sm sm:text-base text-ink-55 leading-relaxed">
              Mentors with terminal doctorates from Oxford, Harvard, MIT, and Cambridge,
              bringing real-world patents and research innovation directly to your seminar room.
            </p>
          </div>

          {/* Slider Auto-Slide Navigation & Status Controls (Replaces Tabs) */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Auto-Slide Indicator Pill */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-black/10 text-xs font-semibold text-ink-55 hover:text-ink hover:border-black/20 shadow-xs transition-all cursor-pointer"
              title={isPaused ? 'Resume Auto-Slide' : 'Pause Auto-Slide'}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'
                }`}
              />
              <span>{isPaused ? 'Paused' : 'Auto-Sliding'}</span>
              {isPaused ? (
                <Play className="w-3 h-3 text-ink ml-0.5" />
              ) : (
                <Pause className="w-3 h-3 text-ink-55 ml-0.5" />
              )}
            </button>

            {/* Slide Index Pill */}
            <div className="px-3.5 py-2 rounded-full bg-white border border-black/10 text-xs font-bold text-ink shadow-xs">
              <span className="text-[#890C25]">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-black/30 mx-1">/</span>
              <span>{String(professors.length).padStart(2, '0')}</span>
            </div>

            {/* Prev & Next Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white hover:bg-[#890C25] hover:text-white border border-black/10 text-ink shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous Professor"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#890C25] hover:bg-[#6e0a1e] text-white shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next Professor"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Auto-Sliding Faculty Cards Carousel */}
        {/* - Pure image when not hovered (zero card clutter) */}
        {/* - Hover reveals Name, Designation, Pedigree & Social Media Icons */}
        {/* - Pauses automatically on mouse enter so user can read/click */}
        {/* ============================================================== */}
        <div
          className="relative overflow-hidden py-3 -my-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {extendedProfessors.map((prof, idx) => {
              const isMobileActive = activeMobileId === prof.id;

              return (
                <div
                  key={`${prof.id}-${idx}`}
                  style={{ width: `${100 / cardsPerView}%` }}
                  className="shrink-0 px-3 sm:px-3.5"
                >
                  <div
                    onClick={() =>
                      setActiveMobileId(isMobileActive ? null : prof.id)
                    }
                    className="relative rounded-[28px] overflow-hidden aspect-[3/4.2] shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_22px_55px_rgba(137,12,37,0.24)] transition-all duration-500 cursor-pointer group bg-sand/30 border border-black/[0.04]"
                  >
                    {/* 1. Full-Bleed High-Definition Portrait Image (Pure & Simple) */}
                    <img
                      src={prof.image}
                      alt={prof.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 select-none"
                      loading="lazy"
                    />

                    {/* 2. Sleek Floating Interaction Hint Corner Badge */}
                    <div
                      className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md shadow-md flex items-center justify-center text-[#890C25] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#890C25] group-hover:text-white ${
                        isMobileActive ? 'bg-[#890C25] text-white scale-110' : ''
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                    </div>

                    {/* 3. Smooth Hover Overlay (Reveals Name, Designation, Pedigree & Social Media Icons) */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/25 backdrop-blur-[3px] transition-all duration-400 p-6 sm:p-7 flex flex-col justify-end text-white z-10 ${
                        isMobileActive
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <div
                        className={`transform transition-all duration-400 ease-out space-y-3 ${
                          isMobileActive
                            ? 'translate-y-0'
                            : 'translate-y-6 group-hover:translate-y-0'
                        }`}
                      >
                        {/* Department Tag */}
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-[#890C25] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            {prof.dept}
                          </span>
                        </div>

                        {/* Professor Name & Designation */}
                        <div>
                          <h3
                            className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-sm"
                            style={{
                              fontFamily:
                                '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                            }}
                          >
                            {prof.name}
                          </h3>
                          <p className="text-xs text-white/85 font-medium mt-1">
                            {prof.designation}
                          </p>
                        </div>

                        {/* Doctor of Philosophy Pedigree & Research Specialization */}
                        <div className="pt-2 border-t border-white/20 space-y-1">
                          <div className="flex items-center gap-1.5 text-[11px] text-[#F3A469] font-semibold">
                            <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{prof.almaMater}</span>
                          </div>
                          <p className="text-[11px] text-white/70 line-clamp-2 leading-relaxed">
                            {prof.specialization}
                          </p>
                        </div>

                        {/* Social Media & Contact Row */}
                        <div className="pt-2 flex items-center justify-between border-t border-white/10">
                          <div
                            className="flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a
                              href={prof.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#890C25] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md"
                              aria-label={`${prof.name} LinkedIn Profile`}
                              title="LinkedIn"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                              href={prof.twitter}
                              target="_blank"
                              rel="noreferrer"
                              className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#890C25] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md"
                              aria-label={`${prof.name} Twitter Profile`}
                              title="Twitter / X"
                            >
                              <Twitter className="w-4 h-4" />
                            </a>
                            <a
                              href={`mailto:${prof.email}`}
                              className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#890C25] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md"
                              aria-label={`Email ${prof.name}`}
                              title="Send Direct Email"
                            >
                              <Mail className="w-4 h-4" />
                            </a>
                          </div>

                          {/* Direct Profile View Link */}
                          <a
                            href="/about/leadership"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-black text-[11px] font-bold transition-all shadow-sm"
                          >
                            <span>Profile</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* Slider Pagination Dots & Bottom Action */}
        {/* ============================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {professors.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx
                    ? 'w-8 bg-[#890C25]'
                    : 'w-2.5 bg-black/15 hover:bg-black/35'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <p className="text-xs text-ink-55 font-medium flex items-center gap-2">
            <span>Hover on any professor to pause auto-slide &amp; view profiles</span>
          </p>
        </div>
      </div>
    </section>
  );
};
