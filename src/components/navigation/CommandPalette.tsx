import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, FileText, Newspaper, ArrowRight, X } from 'lucide-react';
import { programmes } from '../../content/programmes';
import { newsArticles } from '../../content/news';
import { useI18n } from '../../context/I18nContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const { locale, isRtl } = useI18n();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Static site pages
  const staticPages = [
    { title: 'About RKDF Dubai Heritage & Vision', url: '/about', category: 'Pages' },
    { title: 'University Leadership & Chancellor', url: '/about/leadership', category: 'Pages' },
    { title: 'Accreditation, KHDA & MoHESR Licensure', url: '/about/accreditation', category: 'Pages' },
    { title: 'Dubai Campus Facilities & Block 11', url: '/about/campus', category: 'Pages' },
    { title: 'All 38 Degree Programmes', url: '/programs', category: 'Pages' },
    { title: 'Entry Requirements Matrix (CBSE, IB, A-Levels)', url: '/admissions/entry-requirements', category: 'Pages' },
    { title: 'Tuition Fees & Live Calculator', url: '/admissions/fees', category: 'Pages' },
    { title: 'Scholarships & Merit Grants (up to 25%)', url: '/admissions/scholarships', category: 'Pages' },
    { title: 'How to Apply Step-by-Step Guide', url: '/admissions/how-to-apply', category: 'Pages' },
    { title: 'Student Visa Sponsorship (1-Year Renewable)', url: '/admissions/visa', category: 'Pages' },
    { title: 'Student Accommodation in DIAC', url: '/student-life/accommodation', category: 'Pages' },
    { title: 'Student Societies & Campus Clubs', url: '/student-life/clubs', category: 'Pages' },
    { title: 'Health & Wellbeing Services', url: '/student-life/support', category: 'Pages' },
    { title: 'Career Outcomes & Placements', url: '/careers', category: 'Pages' },
    { title: 'Bhopal Dual-Campus Semester Exchange', url: '/global', category: 'Pages' },
    { title: 'Applied Research Laboratories', url: '/research', category: 'Pages' },
    { title: 'Book an In-Person Campus Visit', url: '/visit', category: 'Pages' },
    { title: 'Contact Admissions & WhatsApp', url: '/contact', category: 'Pages' },
    { title: 'Online Application Portal', url: '/apply', category: 'Pages' },
    { title: 'Design System & Styleguide', url: '/styleguide', category: 'Design' },
  ];

  // Combined search results
  const filteredProgrammes = programmes
    .filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.schoolName.toLowerCase().includes(query.toLowerCase()) ||
      p.careerRoles.some((c) => c.toLowerCase().includes(query.toLowerCase())) ||
      (locale === 'ar' && p.nameAr.includes(query))
    )
    .slice(0, 5)
    .map((p) => ({
      title: locale === 'ar' ? p.nameAr : p.name,
      subtitle: `${p.level} · ${p.duration} · ${p.feePerYearOrTotal}`,
      url: `/programs/${p.slug}`,
      category: 'Programmes',
      icon: BookOpen,
    }));

  const filteredPages = staticPages
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 4)
    .map((p) => ({
      title: p.title,
      subtitle: 'Official Site Page',
      url: p.url,
      category: p.category,
      icon: FileText,
    }));

  const filteredNews = newsArticles
    .filter((n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      (locale === 'ar' && n.titleAr.includes(query))
    )
    .slice(0, 3)
    .map((n) => ({
      title: locale === 'ar' ? n.titleAr : n.title,
      subtitle: `${n.date} · ${n.category}`,
      url: `/news/${n.slug}`,
      category: 'News',
      icon: Newspaper,
    }));

  const allResults = [...filteredProgrammes, ...filteredPages, ...filteredNews];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (allResults.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (allResults.length || 1)) % (allResults.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (allResults[selectedIndex]) {
          window.location.href = allResults[selectedIndex].url;
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, allResults, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative w-full max-w-2xl bg-cloud rounded-[28px] shadow-2xl border border-black/10 overflow-hidden z-10 flex flex-col"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-black/5 bg-sand/20">
              <Search className="w-5 h-5 text-ink-55 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder={locale === 'ar' ? "ابحث عن البرامج، الكليات، شروط القبول..." : "Search programmes, schools, admissions (or press Esc)..."}
                className="w-full bg-transparent text-ink placeholder:text-ink-55 text-base outline-none"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-black/5 text-ink-55 hover:text-ink"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-3 space-y-1">
              {allResults.length === 0 ? (
                <div className="p-8 text-center text-ink-55 text-sm">
                  {locale === 'ar'
                    ? "لم يتم العثور على أية نتائج مطابقة لبحثك."
                    : "No matching programmes or pages found. Try searching for 'AI', 'Civil', 'Fees', or 'Visa'."}
                </div>
              ) : (
                allResults.map((item, idx) => {
                  const Icon = item.icon || FileText;
                  const isSelected = idx === selectedIndex;
                  return (
                    <a
                      key={idx}
                      href={item.url}
                      onClick={onClose}
                      className={`flex items-center justify-between p-3 rounded-tile transition-colors ${
                        isSelected ? 'bg-sand/60 text-ink' : 'hover:bg-sand/30 text-ink/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-cloud border border-black/5 text-ink shadow-sm">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-ink">{item.title}</p>
                          <p className="text-xs text-ink-55">{item.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-pill bg-black/5 text-ink-55">
                          {item.category}
                        </span>
                        <ArrowRight className="w-4 h-4 text-ink-55" />
                      </div>
                    </a>
                  );
                })
              )}
            </div>

            {/* Footer Bar */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-black/5 bg-sand/10 text-xs text-ink-55">
              <div className="flex items-center gap-4">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>esc Close</span>
              </div>
              <span>RKDF University Dubai Knowledge Base</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
