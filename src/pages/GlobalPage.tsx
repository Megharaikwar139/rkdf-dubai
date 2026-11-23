import React from 'react';
import { ArchMask } from '../components/common/ArchMask';
import { MagneticButton } from '../components/common/MagneticButton';
import { Globe2, Plane, CheckCircle2, ShieldCheck } from 'lucide-react';

export const GlobalPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Dual-Campus International Mobility
        </span>
        <h1 className="type-h1 text-ink mb-4">
          The Bhopal Semester Exchange
        </h1>
        <p className="type-body">
          Spend an immersive semester at our 50-acre flagship Bhopal home campus with 100% transcript credit equivalency and zero extra tuition fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-ink">
              Two Campuses. One Unified Degree.
            </h3>
            <p className="text-sm text-ink-55 leading-relaxed">
              RKDF University Bhopal features 50 acres of specialized research estates, comprehensive botanical farms, heavy mechanical testing rigs, and an active incubator hub with over 150 start-ups.
            </p>
            <p className="text-sm text-ink-55 leading-relaxed">
              Dubai campus undergraduates can elect to spend Semester 4 or 5 in Bhopal, experiencing central India’s industrial corridors, historic Mughal architectural centers, and massive national engineering networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-sand/30 rounded-card border border-black/5 space-y-1">
              <span className="text-xs font-semibold text-terracotta">Zero Tuition Surcharge</span>
              <p className="text-xs text-ink-55">You pay your normal Dubai tuition with guaranteed on-campus hostel accommodation in Bhopal.</p>
            </div>
            <div className="p-4 bg-sand/30 rounded-card border border-black/5 space-y-1">
              <span className="text-xs font-semibold text-terracotta">Full Credit Alignment</span>
              <p className="text-xs text-ink-55">Modules are mapped directly to your degree track with zero graduation delay.</p>
            </div>
          </div>

          <div className="pt-2">
            <MagneticButton variant="terracotta" size="lg" onClick={() => (window.location.href = '/apply')}>
              Apply for Dual-Campus Enrolment
            </MagneticButton>
          </div>
        </div>

        <div className="md:col-span-5 h-[400px]">
          <ArchMask variant="md" className="w-full h-full shadow-md" glow>
            <img
              src="/assets/rkdf-campus-hero.jpg"
              alt="RKDF Bhopal 50-acre Campus Estate"
              className="w-full h-full object-cover img-warm"
            />
          </ArchMask>
        </div>
      </div>
    </div>
  );
};
