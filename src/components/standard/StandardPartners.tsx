import React from 'react';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

export const StandardPartners: React.FC = () => {
  return (
    <section className="py-12 bg-sand/40 border-y border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-around gap-8 text-ink/75 text-xs font-semibold text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-terracotta" />
            <span>KHDA Educational Permit No. DXB-HE-2026-0147</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-terracotta" />
            <span>MoHESR / CAA Licensure in Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-terracotta" />
            <span>Home Campus NAAC A+ Reaccreditation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-terracotta" />
            <span>Dual-Campus Bhopal Transcript Endorsement</span>
          </div>
        </div>
      </div>
    </section>
  );
};
