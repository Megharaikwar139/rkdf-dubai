import React from 'react';
import { researchLabs } from '../content/partners';
import { researchStats } from '../content/stats';
import { ArchMask } from '../components/common/ArchMask';
import { FlaskConical, Atom, Cpu, ShieldCheck } from 'lucide-react';

export const ResearchPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Research Clusters & Innovation Labs
        </span>
        <h1 className="type-h1 text-ink mb-4">Applied Gulf Research</h1>
        <p className="type-body">
          Our research ethos prioritises translational impact across artificial intelligence, sustainable construction materials for hyper-arid climates, fintech rails, and public occupational health.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm">
          <span className="text-4xl font-semibold text-ink tabular-nums block mb-1">
            {researchStats.labs}
          </span>
          <span className="text-xs text-ink-55 uppercase font-medium">Research Laboratories</span>
        </div>
        <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm">
          <span className="text-4xl font-semibold text-ink tabular-nums block mb-1">
            {researchStats.fundedProjects}
          </span>
          <span className="text-xs text-ink-55 uppercase font-medium">Funded Research Projects</span>
        </div>
        <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm">
          <span className="text-4xl font-semibold text-ink tabular-nums block mb-1">
            AED {researchStats.researchBudgetAED}
          </span>
          <span className="text-xs text-ink-55 uppercase font-medium">Combined Research Budget</span>
        </div>
        <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm">
          <span className="text-4xl font-semibold text-ink tabular-nums block mb-1">
            {researchStats.patentsFiled}
          </span>
          <span className="text-xs text-ink-55 uppercase font-medium">Patents Filed & Pending</span>
        </div>
      </div>

      {/* 4 Core Research Centers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchLabs.map((lab: { id: string; title: string; metric: string; focus: string; image: string }) => (
          <div
            key={lab.id}
            className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4"
          >
            <div className="w-full h-48 rounded-tile overflow-hidden mb-4">
              <img
                src={lab.image}
                alt={lab.title}
                className="w-full h-full object-cover img-warm"
              />
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-sand text-ink">
              {lab.metric}
            </span>
            <h3 className="text-xl font-semibold text-ink">{lab.title}</h3>
            <p className="text-xs text-ink-55 leading-relaxed">{lab.focus}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
