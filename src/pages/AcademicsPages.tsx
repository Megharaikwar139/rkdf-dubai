import React from 'react';
import { schools, School } from '../content/schools';
import { programmes, Programme } from '../content/programmes';
import { ArchMask } from '../components/common/ArchMask';
import { MagneticButton } from '../components/common/MagneticButton';
import { ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';

interface AcademicsPagesProps {
  schoolId?: string;
}

export const AcademicsPages: React.FC<AcademicsPagesProps> = ({ schoolId }) => {
  const currentSchool = schools.find((s: School) => s.id === schoolId);
  const schoolProgrammes = schoolId
    ? programmes.filter((p: Programme) => p.schoolId === schoolId)
    : [];

  if (schoolId && currentSchool) {
    return (
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
        {/* School Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-pill bg-sand text-ink">
                Faculty {currentSchool.number}
              </span>
              <span className="text-xs font-semibold text-terracotta">
                {currentSchool.programmesCount} Accredited Programmes
              </span>
            </div>
            <h1 className="type-h1 text-ink">{currentSchool.name}</h1>
            <p className="type-body">{currentSchool.description}</p>
            <div className="p-4 rounded-tile bg-sand/40 border border-black/5 text-xs text-ink-55 space-y-1 max-w-lg">
              <span className="font-semibold text-ink block">{currentSchool.dean}</span>
              <span>{currentSchool.deanRole}</span>
            </div>
          </div>
          <div className="lg:col-span-5 h-[340px] md:h-[420px]">
            <ArchMask variant="md" className="w-full h-full shadow-md" glow>
              <img
                src={currentSchool.image}
                alt={currentSchool.name}
                className="w-full h-full object-cover img-warm"
              />
            </ArchMask>
          </div>
        </div>

        {/* School Disciplines */}
        <div className="flex flex-wrap gap-2 pt-2">
          {currentSchool.disciplines.map((d: string, i: number) => (
            <span
              key={i}
              className="px-4 py-2 rounded-pill bg-cloud border border-black/5 text-xs font-semibold text-ink shadow-sm"
            >
              {d}
            </span>
          ))}
        </div>

        {/* Programmes under this School */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-ink">
            Degree Programmes in {currentSchool.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolProgrammes.map((p: Programme) => (
              <div
                key={p.id}
                className="bg-cloud rounded-card p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-sand text-ink">
                      {p.level} · {p.duration}
                    </span>
                    <span className="text-xs font-semibold text-terracotta tabular-nums">
                      {p.feePerYearOrTotal}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-1.5">{p.name}</h3>
                  <p className="text-xs text-ink-55 line-clamp-3 mb-4 leading-relaxed">
                    {p.overview}
                  </p>
                  <div className="space-y-1 text-[11px] text-ink-55 mb-4">
                    <span className="font-semibold text-ink block">Featured Modules:</span>
                    {p.featuredModules.slice(0, 2).map((m: string, idx: number) => (
                      <span key={idx} className="block">• {m}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <a
                    href={`/programs/${p.slug}`}
                    className="text-xs font-semibold text-ink hover:text-terracotta inline-flex items-center gap-1"
                  >
                    Curriculum & Careers →
                  </a>
                  <a
                    href={`/apply?program=${p.slug}`}
                    className="text-xs font-semibold text-terracotta hover:underline"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // All Schools Overview
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Academic Structure
        </span>
        <h1 className="type-h1 text-ink mb-4">Seven Academic Schools</h1>
        <p className="type-body">
          Explore our 38 undergraduate, postgraduate, and foundation programmes designed around small seminar cohorts, active industry consultancies, and laboratory research.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schools.map((s: School) => (
          <div
            key={s.id}
            className="bg-cloud rounded-card p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-48 mb-5">
                <ArchMask variant="sm" className="w-full h-full">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover img-warm"
                  />
                </ArchMask>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-pill bg-sand text-ink">
                  School {s.number}
                </span>
                <span className="text-xs font-semibold text-terracotta">
                  {s.programmesCount} Programmes
                </span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">{s.name}</h3>
              <p className="text-xs text-ink-55 leading-relaxed mb-4">{s.description}</p>
            </div>
            <div className="pt-4 border-t border-black/5 flex items-center justify-between">
              <span className="text-xs text-ink-55">{s.dean}</span>
              <a
                href={`/academics/${s.id}`}
                className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
              >
                View Programmes →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
