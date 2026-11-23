import React, { useState, useEffect } from 'react';
import { I18nProvider, useI18n } from './context/I18nContext';
import { Home8Header } from './components/home8/Home8Header';
import { Home8Footer } from './components/home8/Home8Footer';
import { MobileBottomDock } from './components/navigation/MobileBottomDock';
import { CommandPalette } from './components/navigation/CommandPalette';
import { EnquirySheet } from './components/navigation/EnquirySheet';
import { WhatsAppBubble } from './components/common/WhatsAppBubble';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPages } from './pages/AboutPages';
import { AcademicsPages } from './pages/AcademicsPages';
import { ProgramsPages } from './pages/ProgramsPages';
import { AdmissionsPages } from './pages/AdmissionsPages';
import { StudentLifePages } from './pages/StudentLifePages';
import { ResearchPage } from './pages/ResearchPage';
import { CareersPage } from './pages/CareersPage';
import { GlobalPage } from './pages/GlobalPage';
import { NewsPages } from './pages/NewsPages';
import { EventsPage } from './pages/EventsPage';
import { VisitPage } from './pages/VisitPage';
import { ContactPage } from './pages/ContactPage';
import { ApplyPage } from './pages/ApplyPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { StyleguidePage } from './pages/StyleguidePage';
import { LegalPages } from './pages/LegalPages';

function AppContent() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [searchOpen, setSearchOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    // Intercept client-side link navigation for seamless SPA routing
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (
        target &&
        target.href &&
        target.host === window.location.host &&
        !target.hasAttribute('download') &&
        target.target !== '_blank'
      ) {
        const rawHref = target.getAttribute('href');
        const url = new URL(target.href);
        const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

        // If it's a root-relative link like /about, ensure it respects the base on GitHub Pages
        let targetPath = url.pathname;
        if (rawHref && rawHref.startsWith('/') && !rawHref.startsWith('//') && base && !rawHref.startsWith(base)) {
          targetPath = `${base}${rawHref}`;
        }

        if (!url.hash || targetPath !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState({}, '', targetPath + url.search + url.hash);
          setCurrentPath(targetPath);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('click', handleLinkClick);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('click', handleLinkClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Router resolver
  const renderRoute = () => {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    let path = currentPath.toLowerCase();
    if (base && path.startsWith(base.toLowerCase())) {
      path = path.slice(base.length);
    }
    path = path.replace(/\/$/, '') || '/';

    // Home
    if (path === '' || path === '/') return <HomePage />;

    // About routes
    if (path === '/about') return <AboutPages subRoute="index" />;
    if (path === '/about/leadership') return <AboutPages subRoute="leadership" />;
    if (path === '/about/accreditation') return <AboutPages subRoute="accreditation" />;
    if (path === '/about/campus') return <AboutPages subRoute="campus" />;

    // Academics routes
    if (path === '/academics') return <AcademicsPages />;
    if (path.startsWith('/academics/')) {
      const schoolId = path.split('/academics/')[1];
      return <AcademicsPages schoolId={schoolId} />;
    }

    // Programmes routes
    if (path === '/programs') return <ProgramsPages />;
    if (path.startsWith('/programs/')) {
      const slug = path.split('/programs/')[1];
      return <ProgramsPages programSlug={slug} />;
    }

    // Admissions routes
    if (path === '/admissions') return <AdmissionsPages subRoute="index" />;
    if (path === '/admissions/entry-requirements') return <AdmissionsPages subRoute="entry-requirements" />;
    if (path === '/admissions/fees') return <AdmissionsPages subRoute="fees" />;
    if (path === '/admissions/scholarships') return <AdmissionsPages subRoute="scholarships" />;
    if (path === '/admissions/how-to-apply') return <AdmissionsPages subRoute="how-to-apply" />;
    if (path === '/admissions/visa') return <AdmissionsPages subRoute="visa" />;
    if (path === '/admissions/agents') return <AdmissionsPages subRoute="agents" />;

    // Student life routes
    if (path === '/student-life') return <StudentLifePages subRoute="index" />;
    if (path === '/student-life/accommodation') return <StudentLifePages subRoute="accommodation" />;
    if (path === '/student-life/clubs') return <StudentLifePages subRoute="clubs" />;
    if (path === '/student-life/support') return <StudentLifePages subRoute="support" />;

    // Other core routes
    if (path === '/research') return <ResearchPage />;
    if (path === '/careers') return <CareersPage />;
    if (path === '/global') return <GlobalPage />;
    if (path === '/events') return <EventsPage />;
    if (path === '/visit') return <VisitPage />;
    if (path === '/contact') return <ContactPage />;
    if (path === '/apply') return <ApplyPage />;
    if (path === '/downloads') return <DownloadsPage />;
    if (path === '/styleguide') return <StyleguidePage />;

    // News routes
    if (path === '/news') return <NewsPages />;
    if (path.startsWith('/news/')) {
      const slug = path.split('/news/')[1];
      return <NewsPages articleSlug={slug} />;
    }

    // Legal routes
    if (path === '/privacy') return <LegalPages pageType="privacy" />;
    if (path === '/terms') return <LegalPages pageType="terms" />;
    if (path === '/accessibility') return <LegalPages pageType="accessibility" />;

    // Fallback
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      {/* Skip to Content Accessibility Anchor */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-focus text-white px-4 py-2 rounded-pill font-semibold text-xs shadow-md"
      >
        Skip to main content
      </a>

      {/* Unipix Home 8 Header */}
      <Home8Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenEnquiry={() => setEnquiryOpen(true)}
      />

      {/* Main Page Area */}
      <main id="main-content" className="flex-1 w-full">
        {renderRoute()}
      </main>

      {/* Unipix Home 8 Footer */}
      <Home8Footer />

      {/* Persistent Mobile Bottom Dock */}
      <MobileBottomDock onOpenEnquiry={() => setEnquiryOpen(true)} />

      {/* Floating WhatsApp Bubble for Desktop */}
      <WhatsAppBubble />

      {/* Command Palette (⌘K) Modal */}
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Admissions Enquiry Sheet */}
      <EnquirySheet isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}

export function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}

export default App;
