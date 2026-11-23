import React from 'react';
import { partnerOrganisations, PartnerOrganisation } from '../content/partners';
import { outcomesStats } from '../content/stats';
import { Briefcase, Building, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';

export const CareersPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Career Outcomes & Placements
        </span>
        <h1 className="type-h1 text-ink mb-4">
          Graduate Trajectory & Placements
        </h1>
        <p className="type-body">
          Every undergraduate degree incorporates a mandatory, credit-bearing, paid 12-week placement with leading employers across the UAE, converting directly into post-graduate roles.
        </p>
      </div>

      {/* Outcome Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {outcomesStats.map((st: { value: string; label: string; sub: string }, idx: number) => (
          <div key={idx} className="bg-cloud p-8 rounded-card border border-black/5 shadow-sm space-y-2">
            <span className="text-4xl font-semibold text-ink tabular-nums block">{st.value}</span>
            <h4 className="text-sm font-semibold text-ink">{st.label}</h4>
            <p className="text-xs text-ink-55">{st.sub}</p>
          </div>
        ))}
      </div>

      {/* Career Charter */}
      <div className="bg-sand/40 rounded-card p-8 md:p-12 border border-black/5 space-y-6">
        <h3 className="text-2xl font-semibold text-ink">
          The Two-Year Graduate Career Charter
        </h3>
        <p className="text-sm text-ink-55 max-w-2xl leading-relaxed">
          Our commitment doesn't end on graduation day. All alumni receive two full years of continuous placement office backing, executive recruitment introductions, and free access to campus lab equipment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-cloud p-5 rounded-tile border border-black/5 space-y-1.5">
            <span className="text-xs font-semibold text-terracotta">01 · Dedicated Officer</span>
            <h5 className="text-sm font-semibold text-ink">Personal Talent Agent</h5>
            <p className="text-xs text-ink-55">Assigned careers counselor matching your specific skill stack with hiring firms.</p>
          </div>
          <div className="bg-cloud p-5 rounded-tile border border-black/5 space-y-1.5">
            <span className="text-xs font-semibold text-terracotta">02 · Boardroom Networks</span>
            <h5 className="text-sm font-semibold text-ink">Direct Corporate Intros</h5>
            <p className="text-xs text-ink-55">Bi-monthly exclusive networking mixers hosted at DIFC, DMCC, and DIAC venues.</p>
          </div>
          <div className="bg-cloud p-5 rounded-tile border border-black/5 space-y-1.5">
            <span className="text-xs font-semibold text-terracotta">03 · Lifelong Credentialing</span>
            <h5 className="text-sm font-semibold text-ink">Executive Masterclass Access</h5>
            <p className="text-xs text-ink-55">Free enrollment in executive masterclasses to keep your technical certifications sharp.</p>
          </div>
        </div>
      </div>

      {/* Partner Network */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-ink">310 Connected Industry Placement Hosts</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partnerOrganisations.map((org: PartnerOrganisation, i: number) => (
            <div key={i} className="bg-cloud p-5 rounded-tile border border-black/5 shadow-sm space-y-1">
              <span className="text-sm font-semibold text-ink block">{org.name}</span>
              <span className="text-xs text-ink-55">{org.sector}</span>
              <span className="text-[11px] text-terracotta block">{org.city}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
