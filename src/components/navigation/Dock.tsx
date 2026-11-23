import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, ChevronDown, Sparkles, BookOpen, GraduationCap, Building2, Briefcase, Newspaper } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';
import { MagneticButton } from '../common/MagneticButton';

interface DockProps {
  onOpenSearch: () => void;
  onOpenEnquiry: () => void;
  currentSection?: string;
}

interface DropdownItem {
  label: string;
  href: string;
  desc?: string;
}

interface DropdownConfig {
  items: DropdownItem[];
  preview: {
    title: string;
    desc: string;
    image: string;
    link: string;
  };
}

export const Dock: React.FC<DockProps> = ({
  onOpenSearch,
  onOpenEnquiry,
  currentSection = 'Home',
}) => {
  const { t, locale, toggleLocale, isRtl } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownData: Record<string, DropdownConfig> = {
    about: {
      items: [
        { label: 'Overview & Heritage', href: '/about', desc: 'Three decades of educational excellence' },
        { label: 'Leadership & Chancellor', href: '/about/leadership', desc: 'Message from Shri Sunil Kapoor' },
        { label: 'Accreditation & Licensure', href: '/about/accreditation', desc: 'KHDA permit and MoHESR licensure' },
        { label: 'Dubai Campus Facilities', href: '/about/campus', desc: 'Block 11 Academic City facilities' },
      ],
      preview: {
        title: 'Dubai & Bhopal Campuses',
        desc: 'Semester mobility with zero additional tuition fees.',
        image: '/assets/rkdf-campus-hero.jpg',
        link: '/about',
      },
    },
    academics: {
      items: [
        { label: 'Computing & Artificial Intelligence', href: '/academics/computing', desc: '7 programmes in AI and cloud systems' },
        { label: 'Business & Management', href: '/academics/business', desc: '6 programmes in finance and growth' },
        { label: 'Engineering & Built Environment', href: '/academics/engineering', desc: '6 programmes in civil and architecture' },
        { label: 'Health & Life Sciences', href: '/academics/health', desc: '5 programmes in biotech and health' },
        { label: 'Law & Public Policy', href: '/academics/law', desc: '4 dual-jurisdiction programmes' },
        { label: 'Design & Media', href: '/academics/design', desc: '5 spatial and media programmes' },
        { label: 'Foundation & Pathways', href: '/academics/foundation', desc: 'Guaranteed university progression' },
      ],
      preview: {
        title: '38 Accredited Programmes',
        desc: 'Explore all 7 faculties and hands-on laboratory modules.',
        image: '/assets/rkdf-engineering.jpg',
        link: '/programs',
      },
    },
    admissions: {
      items: [
        { label: 'Entry Requirements', href: '/admissions/entry-requirements', desc: 'CBSE, IB, A-Levels, American, WAEC' },
        { label: 'Tuition Fees & Calculator', href: '/admissions/fees', desc: 'Transparent fees and monthly payment plans' },
        { label: 'Scholarships & Grants', href: '/admissions/scholarships', desc: 'Up to 25% Merit Excellence Awards' },
        { label: 'How to Apply', href: '/admissions/how-to-apply', desc: 'Step-by-step application walkthrough' },
        { label: 'Student Visa Sponsorship', href: '/admissions/visa', desc: '1-year renewable UAE student visas' },
        { label: 'Education Agents Portal', href: '/admissions/agents', desc: 'Partnership and accreditation resources' },
      ],
      preview: {
        title: 'January 2027 Admissions Open',
        desc: 'Fast-track evaluations and priority residence allocation.',
        image: '/assets/rkdf-library.jpg',
        link: '/apply',
      },
    },
    campus: {
      items: [
        { label: 'Student Life Overview', href: '/student-life', desc: 'Vibrant community in Academic City' },
        { label: 'Accommodation & Housing', href: '/student-life/accommodation', desc: 'Twin & studio suites in DIAC' },
        { label: 'Clubs & 31 Societies', href: '/student-life/clubs', desc: 'Robotics, cultural, sports & arts' },
        { label: 'Health & Wellbeing Support', href: '/student-life/support', desc: '24/7 student counseling & wellness' },
        { label: 'Book a Campus Visit', href: '/visit', desc: 'Guided architectural lab tours' },
      ],
      preview: {
        title: 'Life in Dubai Academic City',
        desc: 'Metro shuttles, sports fields, prayer rooms, and 24/7 study pods.',
        image: '/assets/rkdf-campus-1.jpg',
        link: '/student-life',
      },
    },
    careers: {
      items: [
        { label: 'Placements & Internships', href: '/careers', desc: '12-week mandatory paid work experience' },
        { label: 'Industry Partners Network', href: '/careers#partners', desc: '310 corporate relationships in the UAE' },
        { label: 'Global Mobility & Bhopal', href: '/global', desc: 'Spend a semester in India at zero tuition' },
        { label: 'Applied Research Labs', href: '/research', desc: 'Gulf AI, desert materials & green energy' },
      ],
      preview: {
        title: '94% Graduate Employment',
        desc: '68% of undergraduates retained by their placement hosts.',
        image: '/assets/rkdf-research.jpg',
        link: '/careers',
      },
    },
    news: {
      items: [
        { label: 'Campus News & Announcements', href: '/news', desc: 'Block 11 developments and appointments' },
        { label: 'Upcoming Events & Open Days', href: '/events', desc: 'RSVP for in-person and online sessions' },
        { label: 'Prospectus Downloads', href: '/downloads', desc: 'Course guides and admission handbooks' },
      ],
      preview: {
        title: 'Next Open Day: 12 Dec 2026',
        desc: 'Meet deans and tour high-performance computing labs.',
        image: '/assets/rkdf-building-enhanced.jpg',
        link: '/events',
      },
    },
  };

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        className="pointer-events-auto relative flex items-center bg-cloud/95 backdrop-blur-md rounded-pill shadow-dock border border-white/80 transition-all"
        style={{
          height: isScrolled ? '60px' : '72px',
          paddingInline: isScrolled ? '18px' : '24px',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        aria-label="Main Navigation"
      >
        {/* Logo with 1x crest height clear space */}
        <a
          href="/"
          className="flex items-center gap-3 pr-4 rtl:pr-0 rtl:pl-4 focus-visible:outline-2 focus-visible:outline-focus rounded-pill"
          aria-label="RKDF University Dubai Home"
        >
          <div className="relative py-1 flex items-center">
            {/* Attached real logo only */}
            <img
              src="/assets/rkdf-logo.png"
              alt="RKDF University Dubai Crest"
              className="h-10 w-auto object-contain select-none"
              width={160}
              height={40}
            />
          </div>
        </a>

        {/* Full Nav Links (Desktop, visible when not collapsed) */}
        <div className={`hidden lg:flex items-center gap-1 transition-opacity duration-300 ${isScrolled ? 'hidden' : 'flex'}`}>
          <div className="h-6 w-px bg-black/10 mx-2" aria-hidden="true" />

          {/* About */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-ink hover:text-ink/70 rounded-pill transition-colors"
              onClick={() => (window.location.href = '/about')}
              aria-expanded={activeDropdown === 'about'}
            >
              {t.nav.about}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>

          {/* Academics */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('academics')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-ink hover:text-ink/70 rounded-pill transition-colors"
              onClick={() => (window.location.href = '/academics')}
              aria-expanded={activeDropdown === 'academics'}
            >
              {t.nav.academics}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>

          {/* Admissions */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('admissions')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-ink hover:text-ink/70 rounded-pill transition-colors"
              onClick={() => (window.location.href = '/admissions')}
              aria-expanded={activeDropdown === 'admissions'}
            >
              {t.nav.admissions}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>

          {/* Campus */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('campus')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-ink hover:text-ink/70 rounded-pill transition-colors"
              onClick={() => (window.location.href = '/student-life')}
              aria-expanded={activeDropdown === 'campus'}
            >
              {t.nav.campus}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>

          {/* Careers */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('careers')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-ink hover:text-ink/70 rounded-pill transition-colors"
              onClick={() => (window.location.href = '/careers')}
              aria-expanded={activeDropdown === 'careers'}
            >
              {t.nav.careers}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>

          {/* News */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('news')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-ink hover:text-ink/70 rounded-pill transition-colors"
              onClick={() => (window.location.href = '/news')}
              aria-expanded={activeDropdown === 'news'}
            >
              {t.nav.news}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>
        </div>

        {/* Compact scroll state display */}
        {isScrolled && (
          <div className="hidden lg:flex items-center gap-3 px-3">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-ink/70">
              {currentSection}
            </span>
          </div>
        )}

        {/* Right tools: Search, EN/AR toggle, Apply CTA */}
        <div className="flex items-center gap-2 pl-3 rtl:pl-0 rtl:pr-3">
          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-full hover:bg-sand/50 text-ink/80 transition-colors focus-visible:outline-2 focus-visible:outline-focus"
            aria-label="Search programmes and pages (⌘K)"
            title="Search (⌘K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* EN / عربي toggle */}
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 text-xs font-semibold rounded-full bg-sand/60 hover:bg-sand text-ink transition-colors focus-visible:outline-2 focus-visible:outline-focus"
            aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
          >
            {locale === 'en' ? 'عربي' : 'EN'}
          </button>

          {/* Apply Pill in Terracotta */}
          <MagneticButton
            variant="terracotta"
            size={isScrolled ? 'sm' : 'md'}
            onClick={() => (window.location.href = '/apply')}
            className="font-semibold shadow-sm"
          >
            {t.nav.apply}
          </MagneticButton>
        </div>

        {/* Dropdown panel beneath the dock with spring scale-in */}
        <AnimatePresence>
          {activeDropdown && dropdownData[activeDropdown] && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onMouseEnter={() => handleMouseEnter(activeDropdown)}
              onMouseLeave={handleMouseLeave}
              className="absolute top-[84px] left-1/2 -translate-x-1/2 w-[720px] bg-cloud/98 backdrop-blur-xl rounded-[28px] p-6 shadow-lg border border-black/[0.05] z-50 pointer-events-auto"
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                {/* Links column */}
                <div className="col-span-7 flex flex-col gap-1.5">
                  {dropdownData[activeDropdown].items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="group p-2.5 rounded-tile hover:bg-sand/35 transition-colors flex flex-col focus-visible:outline-2 focus-visible:outline-focus"
                    >
                      <span className="text-sm font-semibold text-ink group-hover:text-terracotta transition-colors flex items-center justify-between">
                        {item.label}
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </span>
                      {item.desc && (
                        <span className="text-xs text-ink-55 line-clamp-1">{item.desc}</span>
                      )}
                    </a>
                  ))}
                </div>

                {/* Illustrated preview tile with arch aesthetic */}
                <div className="col-span-5 bg-sand/40 rounded-card p-4 flex flex-col justify-between h-full border border-black/5">
                  <div className="relative w-full h-32 rounded-[999px_999px_16px_16px] overflow-hidden mb-3">
                    <img
                      src={dropdownData[activeDropdown].preview.image}
                      alt={dropdownData[activeDropdown].preview.title}
                      className="w-full h-full object-cover img-warm"
                      width={280}
                      height={128}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink mb-1">
                      {dropdownData[activeDropdown].preview.title}
                    </h4>
                    <p className="text-xs text-ink-55 leading-relaxed mb-3">
                      {dropdownData[activeDropdown].preview.desc}
                    </p>
                    <a
                      href={dropdownData[activeDropdown].preview.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta hover:underline"
                    >
                      {t.common.learnMore} →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
