import React, { useState } from 'react';
import { programmes, Programme } from '../content/programmes';
import { schools, School } from '../content/schools';
import { MagneticButton } from '../components/common/MagneticButton';
import { ArchMask } from '../components/common/ArchMask';
import { ArrowRight, CheckCircle2, Clock, Calendar, DollarSign, BookOpen, Award } from 'lucide-react';
import { FeeCalculator } from '../components/shared/FeeCalculator';

interface ProgramsPagesProps {
  programSlug?: string;
}

export const ProgramsPages: React.FC<ProgramsPagesProps> = ({ programSlug }) => {
  const currentProgramme = programmes.find((p: Programme) => p.slug === programSlug);

  // Filter state for /programs directory
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (programSlug && currentProgramme) {
    return (
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
        {/* Programme Detail Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="/programs"
                className="text-xs font-semibold text-ink-55 hover:text-ink underline"
              >
                All 38 Programmes
              </a>
              <span className="text-ink-55">/</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-sand text-ink">
                {currentProgramme.schoolName}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-apricot/40 text-ink">
                {currentProgramme.level} Degree
              </span>
            </div>

            <h1 className="type-h1 text-ink">{currentProgramme.name}</h1>
            <p className="type-body">{currentProgramme.overview}</p>

            {/* Key Fact Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-4 rounded-tile bg-cloud border border-black/5 shadow-sm">
                <span className="text-[11px] text-ink-55 block">Duration</span>
                <span className="text-sm font-semibold text-ink tabular-nums">
                  {currentProgramme.duration}
                </span>
              </div>
              <div className="p-4 rounded-tile bg-cloud border border-black/5 shadow-sm">
                <span className="text-[11px] text-ink-55 block">Intake</span>
                <span className="text-sm font-semibold text-ink">
                  {currentProgramme.intake}
                </span>
              </div>
              <div className="p-4 rounded-tile bg-cloud border border-black/5 shadow-sm">
                <span className="text-[11px] text-ink-55 block">Tuition</span>
                <span className="text-sm font-semibold text-terracotta tabular-nums">
                  {currentProgramme.feePerYearOrTotal}
                </span>
              </div>
              <div className="p-4 rounded-tile bg-cloud border border-black/5 shadow-sm">
                <span className="text-[11px] text-ink-55 block">Paid Placement</span>
                <span className="text-sm font-semibold text-emerald-800">
                  {currentProgramme.keyFacts.internshipWeeks > 0
                    ? `${currentProgramme.keyFacts.internshipWeeks} Weeks`
                    : 'Foundation'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <MagneticButton
                variant="terracotta"
                size="lg"
                onClick={() => (window.location.href = `/apply?program=${currentProgramme.slug}`)}
              >
                Apply for January 2027 Intake
              </MagneticButton>
              <MagneticButton
                variant="cloud"
                size="lg"
                onClick={() => (window.location.href = '/visit')}
              >
                Book a Faculty Consultation
              </MagneticButton>
            </div>
          </div>

          {/* Right Card: Quick Facts & Bhopal Exchange */}
          <div className="lg:col-span-4 bg-sand/40 rounded-card p-6 border border-black/5 space-y-6">
            <h3 className="text-lg font-semibold text-ink">Degree Specifications</h3>
            <div className="space-y-3 text-xs text-ink-55">
              <div className="flex justify-between py-2 border-b border-black/5">
                <span>Total Credits:</span>
                <span className="font-semibold text-ink tabular-nums">
                  {currentProgramme.keyFacts.credits} ECTS / Credits
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/5">
                <span>Bhopal Semester Exchange:</span>
                <span className="font-semibold text-ink">
                  {currentProgramme.keyFacts.bhopalSemesterAvailable
                    ? 'Eligible (Zero Fee)'
                    : 'Campus Based'}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-black/5">
                <span>Accreditation Framework:</span>
                <span className="font-semibold text-ink">
                  {currentProgramme.keyFacts.accreditationNote}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span>Placement Requirement:</span>
                <span className="font-semibold text-emerald-800">
                  Mandatory & Paid
                </span>
              </div>
            </div>

            <div className="p-4 rounded-tile bg-cloud border border-black/5 text-xs text-ink-55 space-y-1.5">
              <span className="font-semibold text-ink block">Merit Scholarship Guarantee:</span>
              <p>
                Applicants scoring ≥85% in CBSE or ≥32 IB points automatically qualify for a 25% tuition fee waiver.
              </p>
            </div>
          </div>
        </div>

        {/* Modules & Career Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Modules */}
          <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold text-ink">Core & Elective Modules</h3>
            <div className="space-y-3">
              {currentProgramme.featuredModules.map((m: string, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-tile bg-sand/30 border border-black/5 flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-ink">{m}</span>
                  <span className="text-[11px] text-ink-55 font-mono">Module 0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Roles */}
          <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold text-ink">Target Career Horizons</h3>
            <div className="space-y-3">
              {currentProgramme.careerRoles.map((role: string, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-tile bg-sky/30 border border-sky/40 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                  <span className="text-sm font-medium text-ink">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fee Calculator Hook */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-ink">Calculate Your Net Investment</h3>
          <FeeCalculator />
        </div>
      </div>
    );
  }

  // Filtered Programme Directory
  const filteredProgrammes = programmes.filter((p: Programme) => {
    if (selectedSchool !== 'all' && p.schoolId !== selectedSchool) return false;
    if (selectedLevel !== 'all' && p.level !== selectedLevel) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.overview.toLowerCase().includes(q) ||
        p.careerRoles.some((c: string) => c.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-12">
      {/* Directory Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Curriculum Directory
        </span>
        <h1 className="type-h1 text-ink mb-4">All 38 Degree Programmes</h1>
        <p className="type-body">
          Explore our complete academic offerings across Undergraduate, Postgraduate, and Foundation pathways in Dubai International Academic City.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by programme title, skill or career role..."
            className="w-full md:w-96 px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus"
          />

          <div className="flex flex-wrap items-center gap-2">
            {['all', 'UG', 'PG', 'FD'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-4 py-2 rounded-pill text-xs font-semibold transition-colors ${
                  selectedLevel === lvl
                    ? 'bg-ink text-white'
                    : 'bg-sand/30 hover:bg-sand/60 text-ink'
                }`}
              >
                {lvl === 'all' ? 'All Degrees' : lvl === 'UG' ? 'Undergraduate' : lvl === 'PG' ? "Postgraduate" : 'Foundation'}
              </button>
            ))}
          </div>
        </div>

        {/* School Filters */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
          <button
            onClick={() => setSelectedSchool('all')}
            className={`px-3 py-1.5 rounded-pill text-xs font-medium ${
              selectedSchool === 'all'
                ? 'bg-sand text-ink font-semibold'
                : 'text-ink-55 hover:text-ink'
            }`}
          >
            All 7 Schools
          </button>
          {schools.map((s: School) => (
            <button
              key={s.id}
              onClick={() => setSelectedSchool(s.id)}
              className={`px-3 py-1.5 rounded-pill text-xs font-medium ${
                selectedSchool === s.id
                  ? 'bg-sand text-ink font-semibold'
                  : 'text-ink-55 hover:text-ink'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProgrammes.map((p: Programme) => (
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
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.careerRoles.slice(0, 2).map((r: string, i: number) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded-pill bg-sky/30 text-ink/80"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-black/5 flex items-center justify-between">
              <a
                href={`/programs/${p.slug}`}
                className="text-xs font-semibold text-ink hover:text-terracotta inline-flex items-center gap-1"
              >
                Curriculum & Details →
              </a>
              <a
                href={`/apply?program=${p.slug}`}
                className="text-xs font-semibold text-terracotta hover:underline"
              >
                Apply
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
