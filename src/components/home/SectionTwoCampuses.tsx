import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArchMask } from '../common/ArchMask';
import { useI18n } from '../../context/I18nContext';
import { Calendar, Quote, CheckCircle2 } from 'lucide-react';

export const SectionTwoCampuses: React.FC = () => {
  const { t, locale } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  const timelineEvents = [
    { year: '1995', title: 'RKDF Group founded in Bhopal', desc: 'Pioneered private engineering and technical education in central India.' },
    { year: '2011', title: 'University Status under MP Act', desc: 'Chartered as a full multi-disciplinary state private university.' },
    { year: '2019', title: 'First International Partnerships', desc: 'Bilateral research pacts and student exchange programmes across Asia.' },
    { year: '2024', title: 'NAAC A+ Reaccreditation', desc: 'Achieved premier national accreditation tier for curriculum and research.' },
    { year: '2026', title: 'Dubai Campus Licensing Begins', desc: 'Permit secured in Dubai International Academic City Block 11.' },
    { year: '2027', title: 'Dubai Campus Opens — January Intake', desc: 'Welcoming inaugural cohorts across 38 accredited degree programmes.' },
  ];

  const [activeYear, setActiveYear] = useState('2027');

  return (
    <section className="py-24 md:py-32 bg-canvas">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
            Section 02 · Institutional Pedigree
          </span>
          <h2 className="type-h2 text-ink">
            {t.sections.twoCampusesTitle}
          </h2>
          <p className="type-body mt-2">
            {t.sections.twoCampusesSub}
          </p>
        </div>

        {/* Asymmetric Bento: 2x1 copy tile, 1x2 arch-masked image tile, 2x1 interactive timeline tile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 2x1 Copy Tile (Col-span 7) */}
          <div className="lg:col-span-7 bg-cloud rounded-[28px] p-8 md:p-10 shadow-md border border-black/5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                Dual-Campus Degree Advantage
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-ink leading-snug">
                One unified academic senate. Seamless mobility between the Gulf and India.
              </h3>
              <p className="text-sm text-ink-55 leading-relaxed">
                Founded in 1995, RKDF Group has educated over 150,000 alumni across engineering, biotechnology, medicine, and management. RKDF University Dubai is not a remote franchise; it is our international home campus.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-tile bg-sand/40 border border-black/5">
                  <span className="text-xs font-semibold text-ink block mb-1">
                    Bhopal Home Campus
                  </span>
                  <p className="text-xs text-ink-55">
                    50-acre research estate, 40,000+ alumni network, NAAC A+ accredited labs, and deep industrial incubator ties.
                  </p>
                </div>
                <div className="p-4 rounded-tile bg-apricot/30 border border-apricot/50">
                  <span className="text-xs font-semibold text-ink block mb-1">
                    Dubai International Campus
                  </span>
                  <p className="text-xs text-ink-55">
                    Block 11 Academic City, 180,000 sq ft purpose-built space, mandatory 12-week UAE industry placements.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-black/5 flex items-center justify-between text-xs text-ink-55">
              <span>Degree awarded with dual-campus transcript endorsement</span>
              <a href="/about" className="font-semibold text-terracotta hover:underline">
                Read Full University History →
              </a>
            </div>
          </div>

          {/* 1x2 Arch-Masked Image Tile (Col-span 5) */}
          <div className="lg:col-span-5 relative h-full min-h-[380px]">
            <ArchMask variant="lg" className="w-full h-full shadow-md" glow>
              <img
                src="/assets/rkdf-campus-hero.jpg"
                alt="RKDF University Campus Grounds"
                className="w-full h-full object-cover img-warm"
                width={500}
                height={600}
              />
            </ArchMask>
          </div>

          {/* 2x1 Interactive Timeline Tile with Draggable/Clickable Year Markers (Col-span 12) */}
          <div className="lg:col-span-12 bg-cloud rounded-[28px] p-8 md:p-10 shadow-md border border-black/5">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-55">
                  Interactive Heritage Journey
                </span>
                <h4 className="text-xl font-semibold text-ink">From 1995 to Dubai 2027</h4>
              </div>
              <span className="text-xs px-3 py-1 bg-sand rounded-pill font-medium text-ink">
                3 Decades of Excellence
              </span>
            </div>

            {/* Draggable/Selectable Timeline Markers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {timelineEvents.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`p-4 rounded-tile text-left border transition-all ${
                    activeYear === item.year
                      ? 'bg-ink text-white border-ink shadow-md'
                      : 'bg-sand/30 hover:bg-sand/60 text-ink border-black/5'
                  }`}
                >
                  <span className="text-xl font-semibold block mb-1 tabular-nums">{item.year}</span>
                  <h5 className="text-xs font-semibold mb-1 line-clamp-1">{item.title}</h5>
                  <p className="text-[11px] opacity-75 line-clamp-2 leading-relaxed">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Chancellor Quote Wide Sand Tile */}
          <div className="lg:col-span-12 bg-sand rounded-[28px] p-8 md:p-10 border border-black/5 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cloud shadow-md shrink-0">
              <img
                src="/assets/rkdf-student-2.jpg"
                alt="Shri Sunil Kapoor · Chancellor, RKDF University"
                className="w-full h-full object-cover img-warm"
                width={80}
                height={80}
              />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="type-h3 text-ink italic leading-snug">
                "Our mission in Dubai is simple: deliver academic rigor without corporate detachment. Every student who enters our campus will be challenged, mentored, and connected to real industry."
              </h3>
              <p className="text-xs font-semibold text-ink tracking-wide">
                Shri Sunil Kapoor · <span className="font-normal text-ink-55">Chancellor, RKDF University</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
