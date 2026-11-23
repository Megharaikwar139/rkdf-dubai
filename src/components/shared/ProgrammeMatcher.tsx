import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { programmes, Programme } from '../../content/programmes';
import { useI18n } from '../../context/I18nContext';
import { Sparkles, Check, ArrowRight, RotateCcw, Filter } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { BadgeChip } from '../common/BadgeChip';

export const ProgrammeMatcher: React.FC = () => {
  const { t, locale } = useI18n();

  // Questions state
  const [stage, setStage] = useState<string>('');
  const [pull, setPull] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [matched, setMatched] = useState<Programme[]>([]);

  // Filter grid states
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedIntake, setSelectedIntake] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sync state from and to URL search params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('stage');
    const p = params.get('pull');
    const d = params.get('duration');
    if (s) setStage(s);
    if (p) setPull(p);
    if (d) setDuration(d);
  }, []);

  const updateUrlParams = (newStage: string, newPull: string, newDuration: string) => {
    const params = new URLSearchParams(window.location.search);
    if (newStage) params.set('stage', newStage);
    else params.delete('stage');
    if (newPull) params.set('pull', newPull);
    else params.delete('pull');
    if (newDuration) params.set('duration', newDuration);
    else params.delete('duration');
    const newRelativePathQuery = window.location.pathname + '?' + params.toString();
    window.history.replaceState(null, '', newRelativePathQuery);
  };

  const handleSelectStage = (val: string) => {
    setStage(val);
    updateUrlParams(val, pull, duration);
  };

  const handleSelectPull = (val: string) => {
    setPull(val);
    updateUrlParams(stage, val, duration);
  };

  const handleSelectDuration = (val: string) => {
    setDuration(val);
    updateUrlParams(stage, pull, val);
  };

  // Match logic
  useEffect(() => {
    if (!stage || !pull || !duration) {
      setMatched([]);
      return;
    }

    let candidates = programmes.filter((p) => {
      // Stage matching
      if (stage === 'After school') {
        if (p.level === 'PG') return false;
      } else if (stage === "After a bachelor's" || stage === 'Working') {
        if (p.level !== 'PG') return false;
      }

      // Pull matching
      if (pull && p.pullFactor !== pull) return false;

      // Duration matching
      if (duration === '1 year' && !(p.duration.includes('1 yr') || p.duration.includes('12 mo') || p.duration.includes('6 mo'))) {
        return false;
      }
      if (duration === '2–3 years' && !(p.duration.includes('3 yr') || p.duration.includes('18 mo'))) {
        return false;
      }
      if (duration === '4 years' && !(p.duration.includes('4 yr') || p.duration.includes('5 yr'))) {
        return false;
      }

      return true;
    });

    if (candidates.length < 3) {
      // Fallback matching to guarantee 3 tailored programmes
      const fallback = programmes.filter((p) => p.pullFactor === pull && !candidates.includes(p));
      candidates = [...candidates, ...fallback].slice(0, 3);
    }

    if (candidates.length < 3) {
      const moreFallback = programmes.filter((p) => !candidates.includes(p));
      candidates = [...candidates, ...moreFallback].slice(0, 3);
    }

    setMatched(candidates.slice(0, 3));
  }, [stage, pull, duration]);

  const resetMatcher = () => {
    setStage('');
    setPull('');
    setDuration('');
    setMatched([]);
    updateUrlParams('', '', '');
  };

  // Filtered programme grid logic
  const filteredGridProgrammes = programmes.filter((p) => {
    if (selectedSchool !== 'all' && p.schoolId !== selectedSchool) return false;
    if (selectedLevel !== 'all' && p.level !== selectedLevel) return false;
    if (selectedIntake !== 'all' && !p.intake.includes(selectedIntake)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.careerRoles.some((c) => c.toLowerCase().includes(q)) ||
        p.overview.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="w-full space-y-12">
      {/* 3-Question Standout Interactive Widget */}
      <div className="bg-cloud rounded-card p-6 md:p-10 shadow-md border border-black/5 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-black/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-sky/50 text-ink text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Interactive Match Engine</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-ink">
              Find the programme tailored to your next decade
            </h3>
            <p className="text-sm text-ink-55 mt-1">
              Three quick choices. Instant cohort, scholarship and curriculum matching.
            </p>
          </div>
          {(stage || pull || duration) && (
            <button
              onClick={resetMatcher}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-55 hover:text-ink px-3 py-1.5 rounded-pill bg-sand/50 transition-colors self-start"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Questions
            </button>
          )}
        </div>

        {/* 3 Question Rows */}
        <div className="py-8 space-y-8">
          {/* Q1 */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-55">
              Q1 · What stage are you at?
            </span>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'After school (High school senior / graduate)', val: 'After school' },
                { label: "After a bachelor's degree", val: "After a bachelor's" },
                { label: 'Working professional', val: 'Working' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => handleSelectStage(opt.val)}
                  className={`px-5 py-3 rounded-pill text-sm font-medium border transition-all ${
                    stage === opt.val
                      ? 'bg-ink text-white border-ink shadow-sm'
                      : 'bg-sand/30 hover:bg-sand/60 text-ink border-black/10'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Q2 */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-55">
              Q2 · What pulls you?
            </span>
            <div className="flex flex-wrap gap-3">
              {[
                'Building things',
                'Business & money',
                'People & health',
                'Law & policy',
                'Making & designing',
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelectPull(opt)}
                  className={`px-5 py-3 rounded-pill text-sm font-medium border transition-all ${
                    pull === opt
                      ? 'bg-ink text-white border-ink shadow-sm'
                      : 'bg-sand/30 hover:bg-sand/60 text-ink border-black/10'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Q3 */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-55">
              Q3 · How long do you have?
            </span>
            <div className="flex flex-wrap gap-3">
              {['1 year', '2–3 years', '4 years'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelectDuration(opt)}
                  className={`px-5 py-3 rounded-pill text-sm font-medium border transition-all ${
                    duration === opt
                      ? 'bg-ink text-white border-ink shadow-sm'
                      : 'bg-sand/30 hover:bg-sand/60 text-ink border-black/10'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Matched Results Spring In */}
        <AnimatePresence>
          {matched.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="mt-6 pt-8 border-t border-black/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-ink flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  3 Matched Programmes based on your answers:
                </span>
                <a
                  href="#programme-grid"
                  className="text-xs font-semibold text-terracotta hover:underline"
                >
                  Skip to full list of 38 programmes ↓
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {matched.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-sand/40 rounded-card p-6 border border-black/5 flex flex-col justify-between hover:bg-sand/60 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-cloud shadow-sm text-ink">
                          {p.level} · {p.duration}
                        </span>
                        <span className="text-xs font-semibold text-ink tabular-nums">
                          {p.feePerYearOrTotal}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-ink mb-1.5">{p.name}</h4>
                      <p className="text-xs text-ink-55 line-clamp-2 mb-4 leading-relaxed">
                        {p.overview}
                      </p>
                      <div className="p-3 rounded-tile bg-cloud/70 border border-black/5 text-[11px] text-ink-55 mb-4">
                        <span className="font-semibold text-ink block mb-0.5">Why this matched:</span>
                        Aligns with your interest in <strong className="text-ink">{p.pullFactor}</strong> and your {duration} timeframe.
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-black/5">
                      <a
                        href={`/programs/${p.slug}`}
                        className="text-xs font-semibold text-ink hover:text-terracotta transition-colors flex items-center gap-1"
                      >
                        Details & Modules <ArrowRight className="w-3.5 h-3.5" />
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filterable Full Programme Grid */}
      <div id="programme-grid" className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-ink">
              All 38 Degree Programmes
            </h3>
            <p className="text-xs text-ink-55 mt-1">
              Filter by school faculty, level, intake period, or keyword.
            </p>
          </div>

          {/* Search box */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programmes or careers..."
              className="w-full px-4 py-2.5 rounded-pill bg-cloud border border-black/10 text-xs text-ink placeholder:text-ink-55 outline-none focus:border-focus"
            />
          </div>
        </div>

        {/* Filters Strip */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {/* Level Filter */}
          <div className="flex items-center gap-1 bg-cloud p-1 rounded-pill border border-black/5 shadow-sm text-xs">
            {['all', 'UG', 'PG', 'FD'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1.5 rounded-pill font-medium transition-colors ${
                  selectedLevel === lvl ? 'bg-ink text-white' : 'text-ink-55 hover:text-ink'
                }`}
              >
                {lvl === 'all' ? 'All Levels' : lvl}
              </button>
            ))}
          </div>

          {/* Intake Filter */}
          <div className="flex items-center gap-1 bg-cloud p-1 rounded-pill border border-black/5 shadow-sm text-xs">
            {['all', 'Jan', 'Sep'].map((itk) => (
              <button
                key={itk}
                onClick={() => setSelectedIntake(itk)}
                className={`px-3 py-1.5 rounded-pill font-medium transition-colors ${
                  selectedIntake === itk ? 'bg-ink text-white' : 'text-ink-55 hover:text-ink'
                }`}
              >
                {itk === 'all' ? 'All Intakes' : `${itk} Intake`}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-xs text-ink-55">
          Showing <span className="font-semibold text-ink">{filteredGridProgrammes.length}</span> of 38 programmes
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGridProgrammes.map((p) => (
            <div
              key={p.id}
              className="bg-cloud rounded-tile p-6 border border-black/[0.04] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-pill bg-sand text-ink">
                    {p.level} · {p.duration}
                  </span>
                  <span className="text-xs font-semibold text-terracotta tabular-nums">
                    {p.feePerYearOrTotal}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-ink mb-1">{p.name}</h4>
                <p className="text-xs text-ink-55 line-clamp-2 mb-3 leading-relaxed">
                  {p.overview}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {p.careerRoles.slice(0, 2).map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="text-[11px] px-2 py-0.5 rounded-pill bg-sky/40 text-ink/80"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-black/5 text-xs">
                <span className="text-ink-55">Intake: {p.intake}</span>
                <a
                  href={`/programs/${p.slug}`}
                  className="font-semibold text-ink hover:text-terracotta flex items-center gap-1"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
