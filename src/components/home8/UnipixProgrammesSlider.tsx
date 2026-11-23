import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Clock,
  Building2,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

interface ProgrammeCard {
  id: string;
  name: string;
  school: string;
  level: 'UG' | 'PG';
  degreeTag: string;
  duration: string;
  fees: string;
  internship: string;
  image: string;
  category: string;
  description: string;
  slug: string;
}

export const UnipixProgrammesSlider: React.FC = () => {
  const { locale } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'UG' | 'PG'>('ALL');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 8 Authentic programmes with real, relative campus photography (Zero generic art)
  const programmes: ProgrammeCard[] = [
    {
      id: 'p1',
      name: 'B.Tech in Artificial Intelligence & Data Science',
      school: 'School of Computing & AI',
      level: 'UG',
      degreeTag: 'B.Tech',
      duration: '4 Years Full-Time',
      fees: 'AED 58,000 / Year',
      internship: '12-Wk FinTech AI Placement',
      image: '/assets/rkdf-engineering.jpg',
      category: 'Computing & AI',
      description:
        'Hands-on engineering with neural networks, machine learning clusters, robotics automation, and big data systems in DIAC.',
      slug: 'btech-artificial-intelligence',
    },
    {
      id: 'p2',
      name: 'B.Tech in Computer Science & Cyber Defense',
      school: 'School of Computing & AI',
      level: 'UG',
      degreeTag: 'B.Tech',
      duration: '4 Years Full-Time',
      fees: 'AED 56,000 / Year',
      internship: 'Enterprise Cyber Ops Residency',
      image: '/assets/rkdf-research.jpg',
      category: 'Computing & AI',
      description:
        'Zero-trust security, cloud infrastructure, cryptography, and penetration testing with certified Gulf cyber partners.',
      slug: 'btech-cyber-security',
    },
    {
      id: 'p3',
      name: 'Bachelor of Sustainable Architecture (B.Arch)',
      school: 'School of Architecture & Built Environment',
      level: 'UG',
      degreeTag: 'B.Arch',
      duration: '5 Years Full-Time',
      fees: 'AED 64,000 / Year',
      internship: 'Gulf Urban Planning Studio',
      image: '/assets/rkdf-architecture.jpg',
      category: 'Architecture',
      description:
        'Pioneering arid bioclimatic architecture, 3D modular construction, parametric design, and zero-carbon Gulf urbanism.',
      slug: 'barch-sustainable-architecture',
    },
    {
      id: 'p4',
      name: 'Bachelor of Business Administration (BBA)',
      school: 'School of Business & Leadership',
      level: 'UG',
      degreeTag: 'BBA',
      duration: '3 Years Full-Time',
      fees: 'AED 52,000 / Year',
      internship: 'Multinational Corporate Placement',
      image: '/assets/home8/h8_p4.webp',
      category: 'Business & MBA',
      description:
        'Global trade, digital marketing analytics, financial strategy, and venture creation designed for Dubai’s global commercial hub.',
      slug: 'bachelor-business-administration',
    },
    {
      id: 'p5',
      name: 'Executive MBA in Digital Strategy & FinTech',
      school: 'School of Business & Leadership',
      level: 'PG',
      degreeTag: 'Executive MBA',
      duration: '2 Years (Weekend Cohorts)',
      fees: 'AED 72,000 / Year',
      internship: 'C-Suite Strategic Consulting',
      image: '/assets/home8/faculty-commerce.webp',
      category: 'Business & MBA',
      description:
        'Tailored for working corporate executives driving enterprise digital transformation, AI adoption, and cross-border finance.',
      slug: 'executive-mba-digital-strategy',
    },
    {
      id: 'p6',
      name: 'B.Sc in Biomedical Informatics & Gene Tech',
      school: 'School of Health Sciences',
      level: 'UG',
      degreeTag: 'B.Sc',
      duration: '4 Years Full-Time',
      fees: 'AED 60,000 / Year',
      internship: 'Hospital Diagnostics Practicum',
      image: '/assets/rkdf-agriculture.jpg',
      category: 'Sciences',
      description:
        'Computational epidemiology, clinical telemetry, molecular diagnostics, and biostatistics in modern university laboratories.',
      slug: 'bsc-biomedical-informatics',
    },
    {
      id: 'p7',
      name: 'Master of Public Health (MPH) in Global Health',
      school: 'School of Health Sciences',
      level: 'PG',
      degreeTag: 'MPH',
      duration: '2 Years Full-Time / Evening',
      fees: 'AED 54,000 / Year',
      internship: 'WHO & Gulf Health Policy Fieldwork',
      image: '/assets/home8/h8_p3.webp',
      category: 'Sciences',
      description:
        'Epidemiological surveillance, healthcare operations, environmental health policy, and pandemic resilience frameworks.',
      slug: 'master-public-health',
    },
    {
      id: 'p8',
      name: 'LLM International Commercial & Maritime Law',
      school: 'School of Law & Governance',
      level: 'PG',
      degreeTag: 'LLM',
      duration: '1 Year Intensive',
      fees: 'AED 62,000 / Year',
      internship: 'DIFC Arbitration Court Moot',
      image: '/assets/rkdf-library.jpg',
      category: 'Law',
      description:
        'Cross-border digital asset regulations, international dispute resolution, maritime admiralty, and smart contract legal compliance.',
      slug: 'llm-international-commercial-law',
    },
  ];

  const categories = ['All', 'Computing & AI', 'Architecture', 'Business & MBA', 'Sciences', 'Law'];

  const filteredProgrammes = programmes.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesLevel = selectedLevel === 'ALL' || p.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, filteredProgrammes.length));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProgrammes.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-[#FAF9F5] text-ink overflow-hidden border-b border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* ============================================================== */}
        {/* Top Header: Badge, Title & Contemporary Slider Controls */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#890C25] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Academic Curriculum · 38 Accredited Programmes</span>
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-ink leading-[1.1]"
              style={{
                fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
              }}
            >
              Explore Our <br />
              Degree Programmes
            </h2>

            <p className="text-sm text-ink-55 leading-relaxed">
              Every degree pathway integrates a mandatory 12-week paid industry internship in Dubai,
              active faculty mentorship, and international career credentialing.
            </p>
          </div>

          {/* Slider Navigation Buttons + Live Progress Counter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Live Slide Counter */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 shadow-sm text-xs font-bold text-ink">
              <span className="text-[#890C25]">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-black/30">/</span>
              <span className="text-ink-55">
                {String(Math.max(1, filteredProgrammes.length)).padStart(2, '0')}
              </span>
            </div>

            {/* Circular Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center text-ink hover:bg-[#890C25] hover:text-white hover:border-[#890C25] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous programme"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center text-ink hover:bg-[#890C25] hover:text-white hover:border-[#890C25] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next programme"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Filters: Degree Level Switch (UG / PG) + Discipline Chips */}
        {/* ============================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Level Switch */}
          <div className="inline-flex p-1 rounded-full bg-black/[0.05] border border-black/5 shadow-inner">
            {(['ALL', 'UG', 'PG'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  setSelectedLevel(lvl);
                  setCurrentIndex(0);
                }}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-[#890C25] text-white shadow-sm'
                    : 'text-ink-55 hover:text-ink'
                }`}
              >
                {lvl === 'ALL'
                  ? 'All Levels (38)'
                  : lvl === 'UG'
                  ? 'Undergraduate (26)'
                  : 'Postgraduate (12)'}
              </button>
            ))}
          </div>

          {/* Discipline Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white border-2 border-[#890C25] text-[#890C25] shadow-sm font-bold'
                    : 'bg-white border border-black/10 text-ink-55 hover:border-black/30 hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* Contemporary Clean Card Slider (Zero Arch Border-Radius on Images) */}
        {/* (Matching User Request: Clean Geometry, Relative Real Images) */}
        {/* ============================================================== */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProgrammes
              .slice(currentIndex, currentIndex + 3)
              .concat(
                filteredProgrammes.slice(
                  0,
                  Math.max(0, currentIndex + 3 - filteredProgrammes.length)
                )
              )
              .slice(0, 3)
              .map((prog, cardIdx) => (
                <motion.div
                  key={prog.id + cardIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: cardIdx * 0.08 }}
                  className="bg-white rounded-[22px] overflow-hidden shadow-sm hover:shadow-2xl border border-black/[0.08] flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1.5"
                >
                  <div>
                    {/* Clean Full-Bleed Top Image Container (NO Arch Curve, Clean Modern Aspect) */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-sand/30">
                      <img
                        src={prog.image}
                        alt={prog.name}
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 img-warm"
                      />

                      {/* Subtle Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                      {/* Top Badges (Level + Duration) */}
                      <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-[6px] bg-[#890C25] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                          {prog.degreeTag}
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-white/95 backdrop-blur-md text-ink text-[11px] font-bold shadow-md">
                          <Clock className="w-3.5 h-3.5 text-[#890C25]" />
                          <span>{prog.duration}</span>
                        </span>
                      </div>

                      {/* Bottom Caption on Image */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/90 font-medium">
                        <span>Intake: Jan &amp; Sep 2027</span>
                        <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Admissions Open</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 space-y-3.5">
                      {/* School Tag */}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#890C25] block">
                        {prog.school}
                      </span>

                      {/* Programme Title */}
                      <h3
                        className="text-xl sm:text-[22px] font-bold text-ink leading-snug group-hover:text-[#890C25] transition-colors"
                        style={{
                          fontFamily:
                            '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                        }}
                      >
                        {prog.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-ink-55 leading-relaxed line-clamp-2">
                        {prog.description}
                      </p>

                      {/* Data Value Chips */}
                      <div className="pt-2 flex flex-col gap-2 text-xs">
                        <div className="flex items-center gap-2 text-ink-55">
                          <Award className="w-4 h-4 text-[#890C25] shrink-0" />
                          <span className="text-ink font-semibold">{prog.internship}</span>
                        </div>
                        <div className="flex items-center gap-2 text-ink-55">
                          <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span className="text-ink font-semibold">{prog.fees}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Action Links */}
                  <div className="p-6 sm:p-7 pt-0 border-t border-black/5 mt-4 flex items-center justify-between">
                    <a
                      href={`/programs/${prog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-[#890C25] transition-colors group/btn"
                    >
                      <span>View Curriculum</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href="/apply"
                      className="inline-flex items-center gap-2 bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-bold text-xs px-5 py-2.5 rounded-[8px] shadow-sm transition-all hover:scale-105"
                    >
                      <span>Apply</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Slider Progress Indicator Bar */}
          <div className="w-full bg-black/10 h-1.5 rounded-full mt-10 overflow-hidden">
            <motion.div
              className="bg-[#890C25] h-full rounded-full"
              animate={{
                width: `${
                  ((currentIndex + 1) / Math.max(1, filteredProgrammes.length)) * 100
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
