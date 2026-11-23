import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const Home8Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101828] text-white/80 pt-16 pb-8 border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Top 4-Column Grid (matching Home 8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Logo & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white px-4 py-2.5 rounded-tile inline-block">
              <img
                src="/assets/rkdf-logo.png"
                alt="RKDF University Dubai"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              RKDF University Dubai brings three decades of Indian academic heritage to Dubai International Academic City — offering 38 accredited undergraduate, postgraduate, and foundation programmes with seminar cohorts and dual-campus mobility.
            </p>
            <div className="pt-2 text-xs text-apricot">
              <a
                href="https://rkdf.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1"
              >
                Visit Home Campus (Bhopal, India) <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Campus / Faculties */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Our Campus & Faculties
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="/academics/computing" className="hover:text-white">Faculty of Computing & AI</a></li>
              <li><a href="/academics/business" className="hover:text-white">Faculty of Business & Management</a></li>
              <li><a href="/academics/engineering" className="hover:text-white">Faculty of Engineering & Architecture</a></li>
              <li><a href="/academics/health" className="hover:text-white">Faculty of Health & Life Sciences</a></li>
              <li><a href="/academics/law" className="hover:text-white">Faculty of Law & Public Policy</a></li>
              <li><a href="/academics/foundation" className="hover:text-white">Foundation & Academic Pathways</a></li>
            </ul>
          </div>

          {/* Column 3: Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Pages
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="/about" className="hover:text-white">About the University</a></li>
              <li><a href="/programs" className="hover:text-white">38 Degree Programmes</a></li>
              <li><a href="/admissions/fees" className="hover:text-white">Tuition & Calculator</a></li>
              <li><a href="/admissions/scholarships" className="hover:text-white">Scholarships & Grants</a></li>
              <li><a href="/admissions/visa" className="hover:text-white">Student Visa Support</a></li>
              <li><a href="/student-life" className="hover:text-white">Student Life & Housing</a></li>
              <li><a href="/events" className="hover:text-white">Upcoming Events</a></li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Campus Location
            </h4>
            <div className="space-y-2 text-xs text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#890C25] shrink-0 mt-0.5" />
                <span>Block 11, Dubai International Academic City, Dubai, UAE</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#890C25] shrink-0" />
                <span>+971 4 428 6100</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#890C25] shrink-0" />
                <span>admissions@rkdfdubai.ae</span>
              </p>
            </div>
            <div className="pt-3">
              <a
                href="/apply"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-pill bg-[#890C25] text-white hover:brightness-110"
              >
                Apply for January 2027 Intake →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Regulatory Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} RKDF University Dubai. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>KHDA Educational Permit No. DXB-HE-2026-0147</span>
            <span>•</span>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
            <span>•</span>
            <a href="/accessibility" className="hover:underline">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
