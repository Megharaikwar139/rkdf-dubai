import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Globe, MessageCircle } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';
import { MagneticButton } from '../common/MagneticButton';

interface StandardHeaderProps {
  onOpenSearch: () => void;
  onOpenEnquiry: () => void;
}

export const StandardHeader: React.FC<StandardHeaderProps> = ({ onOpenSearch, onOpenEnquiry }) => {
  const { t, locale, toggleLocale, isRtl } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-sand/70 text-ink text-[11px] font-medium py-1.5 px-6 border-b border-black/[0.04]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>Block 11, Dubai International Academic City</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="hidden sm:inline">Admissions: +971 4 428 6100</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-terracotta font-semibold">January 2027 Intake Applications Open</span>
            <span className="opacity-30">|</span>
            <a
              href="https://wa.me/971504187722"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 font-semibold text-emerald-800"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Standard Nav Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cloud/95 backdrop-blur-md shadow-md py-3.5 border-b border-black/5'
            : 'bg-cloud/90 backdrop-blur-sm py-5 border-b border-black/[0.06]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Left Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-ink" aria-label="Main Navigation">
            <a href="/" className="hover:text-terracotta transition-colors font-semibold">
              {t.nav.home}
            </a>

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 hover:text-terracotta transition-colors py-2"
                onClick={() => (window.location.href = '/about')}
              >
                <span>{t.nav.about}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-60 bg-cloud rounded-card shadow-lg border border-black/5 p-3 space-y-1 z-50">
                  <a href="/about" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Overview & Heritage</a>
                  <a href="/about/leadership" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Leadership & Chancellor</a>
                  <a href="/about/accreditation" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Accreditation & KHDA</a>
                  <a href="/about/campus" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Block 11 Campus Facilities</a>
                </div>
              )}
            </div>

            {/* Academics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('academics')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 hover:text-terracotta transition-colors py-2"
                onClick={() => (window.location.href = '/academics')}
              >
                <span>{t.nav.academics}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === 'academics' && (
                <div className="absolute top-full left-0 w-72 bg-cloud rounded-card shadow-lg border border-black/5 p-3 space-y-1 z-50">
                  <a href="/programs" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-semibold text-terracotta">All 38 Degree Programmes →</a>
                  <a href="/academics/computing" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Computing & AI</a>
                  <a href="/academics/business" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Business & Management</a>
                  <a href="/academics/engineering" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Engineering & Built Environment</a>
                  <a href="/academics/health" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Health & Life Sciences</a>
                  <a href="/academics/law" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Law & Public Policy</a>
                  <a href="/academics/design" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Design & Media</a>
                  <a href="/academics/foundation" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Foundation & Pathways</a>
                </div>
              )}
            </div>

            {/* Admissions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('admissions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 hover:text-terracotta transition-colors py-2"
                onClick={() => (window.location.href = '/admissions')}
              >
                <span>{t.nav.admissions}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === 'admissions' && (
                <div className="absolute top-full left-0 w-64 bg-cloud rounded-card shadow-lg border border-black/5 p-3 space-y-1 z-50">
                  <a href="/admissions/entry-requirements" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Entry Requirements Matrix</a>
                  <a href="/admissions/fees" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Tuition Fees & Calculator</a>
                  <a href="/admissions/scholarships" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Scholarships & Grants</a>
                  <a href="/admissions/how-to-apply" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">How to Apply</a>
                  <a href="/admissions/visa" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Student Visa Sponsorship</a>
                </div>
              )}
            </div>

            <a href="/events" className="hover:text-terracotta transition-colors">
              Events
            </a>
            <a href="/news" className="hover:text-terracotta transition-colors">
              Blog & News
            </a>
            <a href="/contact" className="hover:text-terracotta transition-colors">
              Contact
            </a>
          </nav>

          {/* Centered University Logo / Crest (matches reference center branding) */}
          <div className="flex items-center justify-center">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/assets/rkdf-logo.png"
                alt="RKDF University Dubai"
                className="h-10 sm:h-12 w-auto object-contain"
                width={180}
                height={48}
              />
            </a>
          </div>

          {/* Right Tools: Search, Language, Apply Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full hover:bg-sand/60 text-ink transition-colors"
              aria-label="Search site (⌘K)"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 text-xs font-semibold rounded-pill bg-sand/60 hover:bg-sand text-ink transition-colors"
            >
              {locale === 'en' ? 'عربي' : 'ENG'}
            </button>

            <a
              href="/apply"
              className="hidden sm:inline-flex items-center justify-center bg-terracotta hover:brightness-105 active:brightness-95 text-white text-xs font-semibold px-5 py-2.5 rounded-pill shadow-sm transition-all"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
