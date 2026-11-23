import React, { useState } from 'react';
import { useI18n } from '../../context/I18nContext';
import { MagneticButton } from '../common/MagneticButton';
import { Send, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, locale } = useI18n();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setNewsletterSubscribed(true);
    }
  };

  const navColumns = [
    {
      title: 'Academics & Schools',
      links: [
        { label: 'Computing & Artificial Intelligence', href: '/academics/computing' },
        { label: 'Business & Management', href: '/academics/business' },
        { label: 'Engineering & Built Environment', href: '/academics/engineering' },
        { label: 'Health & Life Sciences', href: '/academics/health' },
        { label: 'Law & Public Policy', href: '/academics/law' },
        { label: 'Design & Media', href: '/academics/design' },
        { label: 'Foundation & Pathways', href: '/academics/foundation' },
        { label: 'All 38 Degree Programmes', href: '/programs' },
      ],
    },
    {
      title: 'Admissions & Finance',
      links: [
        { label: 'Entry Requirements Matrix', href: '/admissions/entry-requirements' },
        { label: 'Tuition Fees & Cost Calculator', href: '/admissions/fees' },
        { label: 'Merit & Sibling Scholarships', href: '/admissions/scholarships' },
        { label: 'How to Apply Step-by-Step', href: '/admissions/how-to-apply' },
        { label: 'UAE Student Visa Sponsorship', href: '/admissions/visa' },
        { label: 'Authorised Education Agents', href: '/admissions/agents' },
        { label: 'Prospectus Downloads', href: '/downloads' },
      ],
    },
    {
      title: 'About the University',
      links: [
        { label: 'University Heritage & Vision', href: '/about' },
        { label: 'Leadership & Chancellor Message', href: '/about/leadership' },
        { label: 'KHDA & MoHESR Accreditation', href: '/about/accreditation' },
        { label: 'Block 11 Campus Facilities', href: '/about/campus' },
        { label: 'Bhopal Dual-Campus Mobility', href: '/global' },
        { label: 'Applied Research Laboratories', href: '/research' },
        { label: 'Design System & Styleguide', href: '/styleguide' },
      ],
    },
    {
      title: 'Student Life',
      links: [
        { label: 'Student Life in Dubai DIAC', href: '/student-life' },
        { label: 'Accommodation & Residences', href: '/student-life/accommodation' },
        { label: 'Clubs & 31 Student Societies', href: '/student-life/clubs' },
        { label: 'Health & Wellbeing Center', href: '/student-life/support' },
        { label: 'Career Outcomes & Placements', href: '/careers' },
        { label: 'Campus Open Days & Events', href: '/events' },
        { label: 'Latest Campus News', href: '/news' },
      ],
    },
  ];

  return (
    <footer className="bg-sand pt-12">
      {/* 48px rounded top corners sitting on Sand */}
      <div className="bg-canvas rounded-t-[48px] px-6 md:px-12 lg:px-16 pt-16 pb-12 border-t border-black/[0.04]">
        <div className="max-w-[1400px] mx-auto">
          {/* Top Row: Logo, Newsletter & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-black/[0.06]">
            {/* Logo and mission */}
            <div className="lg:col-span-5 space-y-4">
              <div className="py-1">
                {/* 1x crest height clear space */}
                <img
                  src="/assets/rkdf-logo.png"
                  alt="RKDF University Dubai"
                  className="h-12 w-auto object-contain"
                  width={180}
                  height={48}
                />
              </div>
              <p className="text-base text-ink-55 leading-relaxed max-w-md">
                RKDF University Dubai brings three decades of Indian academic heritage to Dubai International Academic City — offering 38 accredited undergraduate, postgraduate, and foundation programmes with seminar cohorts and dual-campus mobility.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://rkdf.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-terracotta transition-colors bg-sand/60 px-3.5 py-1.5 rounded-pill"
                >
                  Visit RKDF University Bhopal (Home Campus) <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Newsletter Pill & Contact Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-ink uppercase tracking-wider mb-2">
                  Subscribe to Academic Insights & Intake Bulletins
                </h4>
                <p className="text-xs text-ink-55 mb-4">
                  Receive curated updates on January and September application windows, scholarship opportunities, and faculty lectures.
                </p>
                {newsletterSubscribed ? (
                  <div className="bg-mint/60 border border-mint text-emerald-900 px-4 py-3 rounded-pill text-xs font-medium">
                    Thank you! You are now subscribed to RKDF University Dubai updates.
                  </div>
                ) : (
                  <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-5 py-3 rounded-pill bg-sand/40 border border-black/10 focus:border-focus focus:bg-cloud text-ink text-sm outline-none transition-all"
                    />
                    <MagneticButton variant="terracotta" size="md" type="submit">
                      Subscribe
                    </MagneticButton>
                  </form>
                )}
              </div>

              {/* Quick Contact Line */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs text-ink-55 border-t border-black/[0.04]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Block 11, DIAC, Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-terracotta shrink-0" />
                  <span>+971 4 428 6100</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-terracotta shrink-0" />
                  <span>admissions@rkdfdubai.ac.ae</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-black/[0.06]">
            {navColumns.map((col, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-semibold text-ink uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-xs text-ink-55 hover:text-ink hover:underline transition-colors block py-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Regulatory Status Box */}
          <div className="py-6 my-4 bg-sand/30 rounded-card p-5 border border-black/[0.04] text-xs text-ink-55 space-y-1.5 leading-relaxed">
            <p className="font-semibold text-ink">Regulatory & Licensure Status Statement (DUMMY Data for Demonstration)</p>
            <p>
              RKDF University Dubai operates under Educational Permit No. DXB-HE-2026-0147 issued by the Knowledge and Human Development Authority (KHDA), Government of Dubai. Federal Institutional Licensure application is in progress with the Commission for Academic Accreditation (CAA), Ministry of Higher Education and Scientific Research (MoHESR), United Arab Emirates. Academic awards are conferred under the charter and NAAC A+ accredited governance of RKDF University, Bhopal, India.
            </p>
          </div>

          {/* Bottom Row: Legal, Socials, Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs text-ink-55">
            <div>
              © {currentYear} RKDF University Dubai. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="/privacy" className="hover:text-ink hover:underline">Privacy Policy</a>
              <span>·</span>
              <a href="/terms" className="hover:text-ink hover:underline">Terms of Use</a>
              <span>·</span>
              <a href="/accessibility" className="hover:text-ink hover:underline">Accessibility Statement</a>
              <span>·</span>
              <a href="/downloads" className="hover:text-ink hover:underline">Downloads & Policies</a>
              <span>·</span>
              <a href="/styleguide" className="hover:text-ink hover:underline">Design System</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
