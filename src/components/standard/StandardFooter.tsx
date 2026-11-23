import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export const StandardFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121B27] text-white/80 pt-16 pb-8 border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Top 4-Column Grid (matching reference bottom layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white px-3 py-2 rounded-tile inline-block">
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

          {/* Column 2: Our Majors */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Our Majors & Faculties
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="/academics/computing" className="hover:text-white">Computing & Artificial Intelligence</a></li>
              <li><a href="/academics/business" className="hover:text-white">Business & Management</a></li>
              <li><a href="/academics/engineering" className="hover:text-white">Engineering & Built Environment</a></li>
              <li><a href="/academics/health" className="hover:text-white">Health & Life Sciences</a></li>
              <li><a href="/academics/law" className="hover:text-white">Law & Public Policy</a></li>
              <li><a href="/academics/design" className="hover:text-white">Design & Media</a></li>
              <li><a href="/academics/foundation" className="hover:text-white">Foundation & Pathways</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="/about" className="hover:text-white">About the University</a></li>
              <li><a href="/admissions/fees" className="hover:text-white">Tuition Fees & Calculator</a></li>
              <li><a href="/admissions/scholarships" className="hover:text-white">Scholarships & Grants</a></li>
              <li><a href="/admissions/entry-requirements" className="hover:text-white">Entry Requirements</a></li>
              <li><a href="/admissions/visa" className="hover:text-white">Student Visa Sponsorship</a></li>
              <li><a href="/student-life/accommodation" className="hover:text-white">Student Accommodation</a></li>
              <li><a href="/careers" className="hover:text-white">Career Placements</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & DIAC Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Campus Location
            </h4>
            <div className="space-y-2 text-xs text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <span>Block 11, Dubai International Academic City, Al Ruwayyah 2, Dubai, UAE</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta shrink-0" />
                <span>+971 4 428 6100</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <span>admissions@rkdfdubai.ac.ae</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-terracotta shrink-0" />
                <span>Sun – Thu: 08:00 – 17:00 GST</span>
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 rounded-tile bg-white/5 border border-white/10 text-[11px] text-white/60 leading-relaxed">
          <strong className="text-white">Regulatory Status Notice:</strong> RKDF University Dubai operates under Educational Permit No. DXB-HE-2026-0147 issued by the Knowledge and Human Development Authority (KHDA), Government of Dubai. Federal Institutional Licensure application is in progress with the Commission for Academic Accreditation (CAA), Ministry of Higher Education and Scientific Research (MoHESR), United Arab Emirates. Academic awards are conferred under the statutory authority of RKDF University Bhopal (NAAC A+ accredited).
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 pt-4">
          <div>
            © {currentYear} RKDF University Dubai. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-white">Terms of Use</a>
            <span>•</span>
            <a href="/accessibility" className="hover:text-white">Accessibility</a>
            <span>•</span>
            <a href="/styleguide" className="hover:text-white">Styleguide</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
