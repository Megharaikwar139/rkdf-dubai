import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles, GraduationCap } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

interface FacultyItem {
  id: number;
  title: string;
  verticalTitle: string;
  image: string;
  description: string;
  degreesCount: string;
  departments: string[];
  link: string;
}

export const UnipixExactFaculties: React.FC = () => {
  const { locale } = useI18n();
  const [activeId, setActiveId] = useState<number>(0);

  const faculties: FacultyItem[] = [
    {
      id: 0,
      title: 'Faculty Of Science',
      verticalTitle: 'Faculty Of Science',
      image: '/assets/home8/faculty-science.webp',
      description:
        'Pioneering research in artificial intelligence, bio-informatics, data science, and quantum computing with DIAC high-performance clusters.',
      degreesCount: '14 Specialized Programs',
      departments: [
        'Artificial Intelligence & Applied Robotics',
        'Cyber Security & Cloud Defense',
        'Biotechnology & Genomic Sciences',
        'Data Engineering & Advanced Analytics',
      ],
      link: '/academics/computing',
    },
    {
      id: 1,
      title: 'Faculty Of Commerce',
      verticalTitle: 'Faculty Of Commerce',
      image: '/assets/home8/faculty-commerce.webp',
      description:
        'Cultivating global business executives, FinTech innovators, and entrepreneurial leaders connected with UAE and international financial centres.',
      degreesCount: '12 Executive & Bachelor Tracks',
      departments: [
        'International Banking & Wealth Management',
        'FinTech & Digital Financial Systems',
        'Global Supply Chain & Logistics',
        'Executive Leadership MBA',
      ],
      link: '/academics/business',
    },
    {
      id: 2,
      title: 'Faculty of Arts',
      verticalTitle: 'Faculty of Arts',
      image: '/assets/home8/faculty-arts.webp',
      description:
        'Merging sustainable architecture, digital media design, and heritage humanities to shape resilient urban futures across the Gulf.',
      degreesCount: '12 Creative & Built Env Programs',
      departments: [
        'Sustainable Architecture & Urbanism (B.Arch)',
        'Digital Media & Visual Communication',
        'International Law & Diplomatic Relations',
        'Environmental Policy & Urban Systems',
      ],
      link: '/academics/architecture',
    },
  ];

  return (
    <section className="py-24 bg-white text-ink overflow-hidden border-b border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ============================================================== */}
          {/* Left Column: Heading, Subtitle, and Deep Red "Explore Now" Button */}
          {/* (Matching Screenshot media_1795428145773_f30c9f91.jpg Exactly) */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#890C25] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Academic Structure</span>
              </span>

              <h2
                className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-ink leading-[1.12]"
                style={{
                  fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                }}
              >
                Our Faculties <br />
                &amp; Departments
              </h2>

              <p className="text-base text-ink-55 leading-relaxed max-w-md">
                At our university, academic excellence is driven by diverse faculties and specialized
                departments. Each faculty encompasses multiple departments.
              </p>
            </div>

            {/* Deep Crimson "Explore Now" Button with right-arrow in white box */}
            <div>
              <a
                href="/academics"
                className="inline-flex items-center gap-3 bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-semibold text-xs px-7 py-3.5 rounded-[10px] shadow-md transition-all hover:scale-105 group"
              >
                <span>Explore Now</span>
                <span className="w-5 h-5 rounded-[4px] bg-white text-[#890C25] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* Right Column: 3 Horizontal Expanding Accordion Cards */}
          {/* (Matching Screenshot media_1795428145773_f30c9f91.jpg Exactly) */}
          {/* ============================================================== */}
          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 h-auto sm:h-[500px] lg:h-[540px]">
              {faculties.map((fac) => {
                const isActive = activeId === fac.id;

                return (
                  <motion.div
                    key={fac.id}
                    layout
                    transition={{
                      layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                    }}
                    onMouseEnter={() => setActiveId(fac.id)}
                    onClick={() => setActiveId(fac.id)}
                    className={`relative rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer select-none transition-shadow ${
                      isActive
                        ? 'flex-[3] sm:flex-[2.8] shadow-2xl border-2 border-[#890C25]/40 min-h-[440px] sm:min-h-0'
                        : 'flex-[1] shadow-md border border-black/5 hover:border-black/20 min-h-[140px] sm:min-h-0'
                    }`}
                  >
                    {/* Background Image */}
                    <motion.img
                      src={fac.image}
                      alt={fac.title}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                      animate={{
                        scale: isActive ? 1.05 : 1.0,
                        filter: isActive ? 'brightness(0.92)' : 'brightness(0.82)',
                      }}
                      transition={{ duration: 0.7 }}
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                        isActive
                          ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/10'
                          : 'bg-gradient-to-t from-black/75 via-black/40 to-black/20 hover:from-black/85'
                      }`}
                    />

                    {/* ========================================================== */}
                    {/* INACTIVE STATE: Centered Vertical Rotated Serif Text (-90deg) */}
                    {/* (Exactly as in uploaded Screenshot media_1795428145773_f30c9f91.jpg) */}
                    {/* ========================================================== */}
                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <span
                          className="text-white text-xl sm:text-2xl font-bold tracking-wide whitespace-nowrap drop-shadow-md sm:-rotate-90 select-none"
                          style={{
                            fontFamily:
                              '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                          }}
                        >
                          {fac.verticalTitle}
                        </span>
                      </div>
                    )}

                    {/* ========================================================== */}
                    {/* ACTIVE STATE: Expanded Card Details */}
                    {/* ========================================================== */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-8 text-white"
                        >
                          {/* Top Badge */}
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold text-white uppercase tracking-wider">
                              <GraduationCap className="w-3.5 h-3.5 text-apricot" />
                              <span>{fac.degreesCount}</span>
                            </span>

                            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </div>

                          {/* Bottom Content Area */}
                          <div className="space-y-4">
                            <div>
                              <h3
                                className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 leading-tight"
                                style={{
                                  fontFamily:
                                    '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                                }}
                              >
                                {fac.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-white/85 line-clamp-2 leading-relaxed">
                                {fac.description}
                              </p>
                            </div>

                            {/* Key Departments with Checkmarks */}
                            <div className="pt-2 border-t border-white/15 space-y-1.5 hidden sm:block">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-apricot block mb-1">
                                Core Departments &amp; Labs:
                              </span>
                              <div className="grid grid-cols-1 gap-1 text-[11px] text-white/90">
                                {fac.departments.slice(0, 3).map((dept, i) => (
                                  <div key={i} className="flex items-center gap-2">
                                    <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                                    <span className="truncate">{dept}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* View Faculty Link */}
                            <div className="pt-2">
                              <a
                                href={fac.link}
                                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#890C25] hover:brightness-110 px-5 py-2.5 rounded-[8px] shadow-sm transition-all hover:scale-105"
                              >
                                <span>Explore Curriculum</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
