import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, X, Plus } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

interface Home8HeaderProps {
  onOpenSearch: () => void;
  onOpenEnquiry: () => void;
}

export const Home8Header: React.FC<Home8HeaderProps> = ({ onOpenSearch, onOpenEnquiry }) => {
  const { t, locale, toggleLocale } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full transition-all duration-300">
      {/* Main Navigation Bar (Seamless Deep Crimson #890C25 matching screenshot) */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#890C25]/95 backdrop-blur-md shadow-lg py-3.5 border-b border-white/10 text-white'
            : 'bg-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo on Left (Strictly preserved logo with light background + clear space per constraint #2) */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="bg-white px-3 py-1.5 rounded-pill shadow-sm transition-transform group-hover:scale-105 flex items-center">
              <img
                src="/assets/rkdf-logo.png"
                alt="RKDF University Dubai"
                className="h-8 sm:h-9 w-auto object-contain"
                width={140}
                height={36}
              />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-sm font-bold tracking-wider uppercase text-white font-serif">
                RKDF UNIVERSITY
              </span>
              <span className="text-[10px] tracking-widest text-white/70 uppercase">
                DUBAI CAMPUS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (matching screenshot: Home +, Pages +, Academics +, Student Services +, Blog +, Contact) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/95" aria-label="Main Navigation">
            <a href="/" className="hover:text-white transition-colors flex items-center gap-1 font-semibold">
              <span>Home</span>
              <span className="text-xs opacity-70">+</span>
            </a>

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('pages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 hover:text-white transition-colors py-2"
                onClick={() => (window.location.href = '/about')}
              >
                <span>Pages</span>
                <span className="text-xs opacity-70">+</span>
              </button>
              {activeDropdown === 'pages' && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-card shadow-2xl border border-black/5 p-3 space-y-1 z-50 text-ink animate-in fade-in slide-in-from-top-2">
                  <a href="/about" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Overview & Heritage</a>
                  <a href="/about/leadership" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Leadership & Chancellor</a>
                  <a href="/about/accreditation" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Accreditation & KHDA</a>
                  <a href="/about/campus" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Block 11 Campus Facilities</a>
                  <a href="/visit" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Schedule Campus Tour</a>
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
                className="flex items-center gap-1 hover:text-white transition-colors py-2"
                onClick={() => (window.location.href = '/academics')}
              >
                <span>Academics</span>
                <span className="text-xs opacity-70">+</span>
              </button>
              {activeDropdown === 'academics' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-card shadow-2xl border border-black/5 p-3 space-y-1 z-50 text-ink animate-in fade-in slide-in-from-top-2">
                  <a href="/programs" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-semibold text-[#890C25]">All 38 Degree Programmes →</a>
                  <a href="/academics/computing" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Computing & AI</a>
                  <a href="/academics/business" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Business & Management</a>
                  <a href="/academics/engineering" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Engineering & Built Environment</a>
                  <a href="/academics/health" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Health & Life Sciences</a>
                  <a href="/academics/law" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Law & Public Policy</a>
                  <a href="/academics/foundation" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Foundation Studies</a>
                </div>
              )}
            </div>

            {/* Student Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 hover:text-white transition-colors py-2"
                onClick={() => (window.location.href = '/student-life')}
              >
                <span>Student Services</span>
                <span className="text-xs opacity-70">+</span>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-card shadow-2xl border border-black/5 p-3 space-y-1 z-50 text-ink animate-in fade-in slide-in-from-top-2">
                  <a href="/admissions/fees" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Tuition Fees & Calculator</a>
                  <a href="/admissions/scholarships" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Scholarships & Financial Aid</a>
                  <a href="/admissions/visa" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Student Visa Sponsorship</a>
                  <a href="/student-life/accommodation" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Student Accommodation</a>
                  <a href="/student-life/support" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Wellbeing & Academic Support</a>
                </div>
              )}
            </div>

            {/* Blog + Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('blog')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 hover:text-white transition-colors py-2"
                onClick={() => (window.location.href = '/news')}
              >
                <span>Blog</span>
                <span className="text-xs opacity-70">+</span>
              </button>
              {activeDropdown === 'blog' && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-card shadow-2xl border border-black/5 p-3 space-y-1 z-50 text-ink animate-in fade-in slide-in-from-top-2">
                  <a href="/news" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Campus News & Research</a>
                  <a href="/events" className="block px-3 py-2 text-xs rounded-tile hover:bg-sand/40 font-medium">Upcoming Events</a>
                </div>
              )}
            </div>

            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Tools (matching screenshot: Search icon, ENG globe, Menu hamburger) */}
          <div className="flex items-center gap-4 text-white">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              aria-label="Search (⌘K)"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4 stroke-[2.2]" />
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-pill hover:bg-white/10 text-white transition-colors"
            >
              <span className="tracking-wider">{locale === 'en' ? 'ENG' : 'عربي'}</span>
              <Globe className="w-3.5 h-3.5 opacity-90" />
            </button>

            {/* Offcanvas Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-tile hover:bg-white/10 text-white transition-colors"
              aria-label="Toggle Navigation Drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.2]" /> : <Menu className="w-5 h-5 stroke-[2.2]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="bg-[#890C25] text-white border-b border-white/10 px-8 py-8 space-y-5 shadow-2xl">
          <a href="/" className="block text-base font-bold text-white hover:opacity-80">Home</a>
          <a href="/about" className="block text-sm font-medium text-white/90 hover:text-white">About RKDF Dubai</a>
          <a href="/programs" className="block text-sm font-medium text-white/90 hover:text-white">38 Degree Programmes</a>
          <a href="/admissions/fees" className="block text-sm font-medium text-white/90 hover:text-white">Tuition Fees & Calculator</a>
          <a href="/student-life" className="block text-sm font-medium text-white/90 hover:text-white">Student Life & Housing</a>
          <a href="/events" className="block text-sm font-medium text-white/90 hover:text-white">Campus Events</a>
          <a href="/news" className="block text-sm font-medium text-white/90 hover:text-white">News & Insights</a>
          <a href="/contact" className="block text-sm font-medium text-white/90 hover:text-white">Contact Admissions</a>
          <div className="pt-4">
            <a
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#890C25] font-bold text-xs px-8 py-3.5 rounded-pill shadow-lg hover:bg-white/90"
            >
              Apply for January 2027 Intake →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
