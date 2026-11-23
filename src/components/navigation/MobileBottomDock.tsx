import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, Send, MessageCircle, Menu, X, ChevronRight, Globe2 } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';
import { MagneticButton } from '../common/MagneticButton';

interface MobileBottomDockProps {
  onOpenEnquiry: () => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({ onOpenEnquiry }) => {
  const { t, locale, toggleLocale } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuSections = [
    {
      title: 'About the University',
      links: [
        { label: 'Overview & Heritage', href: '/about' },
        { label: 'Leadership & Chancellor', href: '/about/leadership' },
        { label: 'Accreditation & Licensure', href: '/about/accreditation' },
        { label: 'Dubai Campus Facilities', href: '/about/campus' },
      ],
    },
    {
      title: 'Academics & Schools',
      links: [
        { label: 'All 38 Programmes', href: '/programs' },
        { label: 'Computing & Artificial Intelligence', href: '/academics/computing' },
        { label: 'Business & Management', href: '/academics/business' },
        { label: 'Engineering & Built Environment', href: '/academics/engineering' },
        { label: 'Health & Life Sciences', href: '/academics/health' },
        { label: 'Law & Public Policy', href: '/academics/law' },
        { label: 'Design & Media', href: '/academics/design' },
        { label: 'Foundation & Pathways', href: '/academics/foundation' },
      ],
    },
    {
      title: 'Admissions & Finance',
      links: [
        { label: 'Entry Requirements Matrix', href: '/admissions/entry-requirements' },
        { label: 'Tuition Fees & Calculator', href: '/admissions/fees' },
        { label: 'Scholarships & Grants', href: '/admissions/scholarships' },
        { label: 'How to Apply Step-by-Step', href: '/admissions/how-to-apply' },
        { label: 'Student Visa Sponsorship', href: '/admissions/visa' },
        { label: 'Education Agents', href: '/admissions/agents' },
      ],
    },
    {
      title: 'Student Life & Community',
      links: [
        { label: 'Accommodation in Academic City', href: '/student-life/accommodation' },
        { label: 'Student Clubs & Societies', href: '/student-life/clubs' },
        { label: 'Wellbeing & Academic Support', href: '/student-life/support' },
        { label: 'Book a Campus Visit', href: '/visit' },
      ],
    },
    {
      title: 'Careers & Innovation',
      links: [
        { label: 'Placements & Career Outcomes', href: '/careers' },
        { label: 'Bhopal Dual-Campus Mobility', href: '/global' },
        { label: 'Applied Research Labs', href: '/research' },
        { label: 'News & Announcements', href: '/news' },
        { label: 'Upcoming Events & Open Days', href: '/events' },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Bottom Dock Bar */}
      <div className="fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 lg:hidden pointer-events-none">
        <nav
          className="pointer-events-auto flex items-center justify-between w-full max-w-md bg-cloud/95 backdrop-blur-lg px-4 py-2.5 rounded-pill shadow-lg border border-black/10"
          aria-label="Mobile Navigation Dock"
        >
          {/* Home */}
          <a
            href="/"
            className="flex flex-col items-center gap-1 text-[11px] font-medium text-ink/75 hover:text-ink active:scale-95 transition-all p-1"
          >
            <Home className="w-5 h-5" />
            <span>{t.nav.home}</span>
          </a>

          {/* Programmes */}
          <a
            href="/programs"
            className="flex flex-col items-center gap-1 text-[11px] font-medium text-ink/75 hover:text-ink active:scale-95 transition-all p-1"
          >
            <BookOpen className="w-5 h-5" />
            <span>{t.nav.programmes}</span>
          </a>

          {/* Apply (Terracotta prominent pill) */}
          <a
            href="/apply"
            className="flex flex-col items-center justify-center -my-3 bg-terracotta text-white px-4 py-2.5 rounded-pill shadow-md font-semibold text-xs active:scale-95 transition-transform"
          >
            <span>{t.nav.apply}</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/971504187722?text=Hello%20RKDF%20University%20Dubai%20Admissions"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[11px] font-medium text-emerald-700 active:scale-95 transition-all p-1"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>{t.nav.whatsapp}</span>
          </a>

          {/* Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center gap-1 text-[11px] font-medium text-ink/75 hover:text-ink active:scale-95 transition-all p-1"
            aria-label="Open Full Menu"
          >
            <Menu className="w-5 h-5" />
            <span>{t.nav.menu}</span>
          </button>
        </nav>
      </div>

      {/* Full-screen bottom-sliding sheet menu */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Sliding rounded bottom sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="absolute inset-x-0 bottom-0 max-h-[90vh] bg-canvas rounded-t-[32px] shadow-2xl flex flex-col overflow-hidden border-t border-black/10"
            >
              {/* Sheet header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-black/5 bg-cloud/60">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/rkdf-logo.png"
                    alt="RKDF University Dubai"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleLocale}
                    className="px-3 py-1.5 text-xs font-semibold rounded-pill bg-sand text-ink"
                  >
                    {locale === 'en' ? 'عربي' : 'EN'}
                  </button>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-black/5 text-ink"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Sheet contents scroll */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {/* Apply banner */}
                <div className="bg-apricot/30 rounded-card p-5 border border-apricot/50 flex flex-col gap-3">
                  <span className="text-xs font-semibold tracking-wider text-ink/70">
                    JANUARY 2027 INTAKE OPEN
                  </span>
                  <h3 className="text-base font-semibold text-ink">
                    Begin your application in less than 10 minutes.
                  </h3>
                  <MagneticButton
                    variant="terracotta"
                    size="sm"
                    onClick={() => {
                      setMenuOpen(false);
                      window.location.href = '/apply';
                    }}
                  >
                    Start Your Application →
                  </MagneticButton>
                </div>

                {/* Navigation Sections */}
                {menuSections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-55 px-1">
                      {sec.title}
                    </h4>
                    <div className="bg-cloud rounded-tile divide-y divide-black/5 border border-black/5 overflow-hidden">
                      {sec.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center justify-between px-4 py-3 text-sm font-medium text-ink hover:bg-sand/30 transition-colors"
                        >
                          <span>{link.label}</span>
                          <ChevronRight className="w-4 h-4 opacity-40" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Contact info bar */}
                <div className="bg-sand/50 rounded-tile p-4 text-xs text-ink-55 space-y-1">
                  <p className="font-semibold text-ink">RKDF University Dubai</p>
                  <p>Block 11, Dubai International Academic City</p>
                  <p>Admissions: +971 4 428 6100 · WhatsApp: +971 50 418 7722</p>
                  <p>admissions@rkdfdubai.ac.ae</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
