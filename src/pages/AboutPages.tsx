import React from 'react';
import { ArchMask } from '../components/common/ArchMask';
import { MagneticButton } from '../components/common/MagneticButton';
import { ShieldCheck, Award, Building, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  subRoute?: 'index' | 'leadership' | 'accreditation' | 'campus';
}

export const AboutPages: React.FC<AboutPageProps> = ({ subRoute = 'index' }) => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          {subRoute === 'leadership' && 'University Governance & Senate'}
          {subRoute === 'accreditation' && 'Regulatory Permits & Licensure'}
          {subRoute === 'campus' && 'Block 11 Academic City Facilities'}
          {subRoute === 'index' && 'About RKDF University Dubai'}
        </span>
        <h1 className="type-h1 text-ink mb-4">
          {subRoute === 'leadership' && 'Chancellor & Academic Leadership'}
          {subRoute === 'accreditation' && 'Accreditation, KHDA & MoHESR'}
          {subRoute === 'campus' && 'Our Campus in Academic City'}
          {subRoute === 'index' && 'Three Decades of Indian Academic Heritage'}
        </h1>
        <p className="type-body">
          {subRoute === 'leadership' && 'Guided by senior scholars, industry fellows, and founding leadership committed to seminar-scale mentorship.'}
          {subRoute === 'accreditation' && 'Operating under KHDA Educational Permit No. DXB-HE-2026-0147 with federal institutional licensure underway.'}
          {subRoute === 'campus' && 'A 180,000 sq ft purpose-configured architectural campus designed around daylight, collaborative commons, and advanced robotics.'}
          {subRoute === 'index' && 'Established in Bhopal in 1995, RKDF Group brings its educational legacy to Dubai International Academic City — 38 degrees, NAAC A+ charter, and dual-campus mobility.'}
        </p>
      </div>

      {/* Subpage Nav Pills */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-black/5">
        {[
          { label: 'Overview & Heritage', href: '/about' },
          { label: 'Leadership & Chancellor', href: '/about/leadership' },
          { label: 'Accreditation & Licensure', href: '/about/accreditation' },
          { label: 'Campus Facilities (Block 11)', href: '/about/campus' },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="px-4 py-2 rounded-pill text-xs font-semibold bg-cloud border border-black/5 hover:bg-sand/60 text-ink shadow-sm transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Detailed Content depending on subroute */}
      {subRoute === 'leadership' && (
        <div className="space-y-12">
          {/* Chancellor Address */}
          <div className="bg-sand rounded-[28px] p-8 md:p-12 border border-black/5 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cloud shadow-lg shrink-0">
              <img
                src="/assets/rkdf-student-2.jpg"
                alt="Shri Sunil Kapoor"
                className="w-full h-full object-cover img-warm"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-ink">
                Message from the Chancellor
              </h2>
              <p className="text-sm text-ink-55 leading-relaxed">
                "When we founded RKDF in 1995 in Bhopal, our premise was simple: Indian students deserve rigorous technical and humanistic education that directly links to nation-building. As Dubai establishes itself as the crossroads of global innovation, our campus in DIAC ensures our students bridge the fastest growing economies of India and the GCC."
              </p>
              <p className="text-xs font-semibold text-ink">
                Shri Sunil Kapoor · <span className="font-normal text-ink-55">Chancellor, RKDF University</span>
              </p>
            </div>
          </div>

          {/* Academic Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cloud rounded-[20px] p-6 border border-black/5 shadow-sm space-y-3">
              <h3 className="text-base font-semibold text-ink">Prof. Amira Al-Hashimi</h3>
              <span className="text-xs text-terracotta font-medium block">Founding Vice-Chancellor (PhD Cambridge)</span>
              <p className="text-xs text-ink-55 leading-relaxed">
                Oversees institutional strategy, academic senate standards, research governance, and UAE regulatory relations.
              </p>
            </div>
            <div className="bg-cloud rounded-[20px] p-6 border border-black/5 shadow-sm space-y-3">
              <h3 className="text-base font-semibold text-ink">Dr. B. K. Sharma</h3>
              <span className="text-xs text-terracotta font-medium block">Director of Dual-Campus Mobility (PhD IIT Delhi)</span>
              <p className="text-xs text-ink-55 leading-relaxed">
                Coordinates seamless credit equivalencies, Bhopal research semesters, and shared faculty exchange programmes.
              </p>
            </div>
            <div className="bg-cloud rounded-[20px] p-6 border border-black/5 shadow-sm space-y-3">
              <h3 className="text-base font-semibold text-ink">Aisha Al-Falasi</h3>
              <span className="text-xs text-terracotta font-medium block">Dean of Students & Corporate Relations</span>
              <p className="text-xs text-ink-55 leading-relaxed">
                Directs the mandatory 12-week paid internship programme, career placement office, and student pastoral wellness.
              </p>
            </div>
          </div>
        </div>
      )}

      {subRoute === 'accreditation' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4">
              <div className="p-3 rounded-full bg-sand/60 w-fit">
                <Building className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="text-xl font-semibold text-ink">KHDA Educational Permit</h3>
              <p className="text-xs font-mono text-terracotta font-semibold">
                Permit No. DXB-HE-2026-0147 (DUMMY Data)
              </p>
              <p className="text-xs text-ink-55 leading-relaxed">
                Issued by the Knowledge and Human Development Authority of Dubai. Authorises RKDF University Dubai to operate higher education programmes at Block 11, DIAC. Degrees certified under KHDA are valid for all employment and commercial licensing in the private and free zone sectors across Dubai.
              </p>
            </div>

            <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4">
              <div className="p-3 rounded-full bg-sand/60 w-fit">
                <Award className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="text-xl font-semibold text-ink">Federal CAA Institutional Licensure</h3>
              <p className="text-xs font-mono text-terracotta font-semibold">
                Application in progress (DUMMY Data)
              </p>
              <p className="text-xs text-ink-55 leading-relaxed">
                Under evaluation by the Commission for Academic Accreditation (CAA), Ministry of Higher Education and Scientific Research (MoHESR), UAE. Upon completion, unlocks federal government degree attestation across UAE ministerial bodies.
              </p>
            </div>
          </div>

          <div className="bg-sand/40 p-6 rounded-card border border-black/5 text-xs text-ink-55 space-y-2">
            <span className="font-semibold text-ink block">Parent Charter Authority:</span>
            <p>
              All academic awards are conferred under the statutory authority of RKDF University, Bhopal, established under Madhya Pradesh Act No. 17 of 2011, recognised by the University Grants Commission (UGC), approved by AICTE, and reaccredited with NAAC A+ grade in 2024.
            </p>
          </div>
        </div>
      )}

      {subRoute === 'campus' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-7 rounded-card overflow-hidden shadow-md h-96">
              <img
                src="/assets/rkdf-building-enhanced.jpg"
                alt="Block 11 Campus Exterior"
                className="w-full h-full object-cover img-warm"
              />
            </div>
            <div className="md:col-span-5 bg-cloud rounded-card p-8 border border-black/5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-terracotta uppercase tracking-wider block mb-1">
                  Purpose-Built Architecture
                </span>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  Block 11, Dubai Academic City
                </h3>
                <p className="text-xs text-ink-55 leading-relaxed space-y-2">
                  <span>180,000 square feet designed around natural daylight, acoustically engineered seminar rooms, and dedicated studio pods.</span>
                  <br /><br />
                  <span>Includes 22 teaching laboratories, an advanced computing cluster, a mock moot court for law students, a robotics flight pen, and an expansive learning commons.</span>
                </p>
              </div>
              <div className="pt-4 border-t border-black/5">
                <MagneticButton variant="terracotta" size="sm" onClick={() => (window.location.href = '/visit')}>
                  Book an In-Person Tour →
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {subRoute === 'index' && (
        <div className="space-y-12">
          {/* Bento layout for about */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-3">
              <span className="text-2xl font-semibold text-ink block tabular-nums">1995</span>
              <h4 className="text-base font-semibold text-ink">Three Decades of Growth</h4>
              <p className="text-xs text-ink-55 leading-relaxed">
                Started as the Ram Krishna Dharmarth Foundation, evolving into a premier multidisciplinary research university educating 40,000+ students on campus.
              </p>
            </div>
            <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-3">
              <span className="text-2xl font-semibold text-ink block tabular-nums">NAAC A+</span>
              <h4 className="text-base font-semibold text-ink">Premier Accreditation</h4>
              <p className="text-xs text-ink-55 leading-relaxed">
                Ranked in the top tier of Indian higher education institutions for curriculum depth, laboratory infrastructure, and faculty citation impact.
              </p>
            </div>
            <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-3">
              <span className="text-2xl font-semibold text-ink block tabular-nums">Zero</span>
              <h4 className="text-base font-semibold text-ink">Extra Mobility Tuition</h4>
              <p className="text-xs text-ink-55 leading-relaxed">
                Spend a semester or summer research term at the Bhopal campus with 100% transcript credit transfer and zero additional tuition surcharges.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
