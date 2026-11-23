import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Briefcase, Landmark, Check } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Home8Faculties: React.FC = () => {
  const { locale } = useI18n();
  const [activeFaculty, setActiveFaculty] = useState<number>(0);

  const faculties = [
    {
      id: 0,
      title: 'Faculty Of Computing & Science',
      shortTitle: 'Computing & Science',
      icon: Cpu,
      departments: ['Artificial Intelligence Lab', 'Cyber Security Center', 'Software Architecture', 'Data Science & Analytics'],
      image: '/assets/rkdf-engineering.jpg',
      link: '/academics/computing',
      color: 'from-amber-900/80 to-[#890C25]',
    },
    {
      id: 1,
      title: 'Faculty Of Commerce & Business',
      shortTitle: 'Commerce & Business',
      icon: Briefcase,
      departments: ['International Banking & Finance', 'Digital Marketing & AI', 'Global Supply Chain', 'Executive Leadership MBA'],
      image: '/assets/rkdf-campus-1.jpg',
      link: '/academics/business',
      color: 'from-[#890C25] to-rose-950',
    },
    {
      id: 2,
      title: 'Faculty Of Engineering & Arts',
      shortTitle: 'Engineering & Built Environment',
      icon: Landmark,
      departments: ['Sustainable Architecture', 'Robotics & Automation', 'Civil & Environmental Systems', 'Digital Media Production'],
      image: '/assets/rkdf-architecture.jpg',
      link: '/academics/engineering',
      color: 'from-orange-950 to-[#890C25]',
    },
  ];

  return (
    <section className="py-24 bg-canvas border-t border-black/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/5">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#890C25]">
              Academic Structure
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight">
              {locale === 'ar' ? 'كلياتنا وأقسامنا الأكاديمية' : 'Our Faculties & Departments'}
            </h2>
            <p className="text-sm text-ink-55 leading-relaxed">
              At our university, academic excellence is driven by diverse faculties and specialized departments. Each faculty encompasses multiple degree pathways.
            </p>
          </div>

          <a
            href="/academics"
            className="inline-flex items-center gap-2 bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-semibold text-xs px-6 py-3.5 rounded-pill shadow-sm transition-all"
          >
            <span>Explore All Faculties</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Interactive Horizontal Expandable Cards (matching Home-8 vertical transform layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {faculties.map((fac, idx) => {
            const Icon = fac.icon;
            const isSelected = activeFaculty === idx;

            return (
              <div
                key={fac.id}
                onMouseEnter={() => setActiveFaculty(idx)}
                onClick={() => setActiveFaculty(idx)}
                className={`relative rounded-[28px] overflow-hidden p-8 transition-all duration-500 cursor-pointer border flex flex-col justify-between min-h-[380px] sm:min-h-[420px] ${
                  isSelected
                    ? 'border-[#890C25] shadow-xl text-white bg-gradient-to-br ' + fac.color
                    : 'border-black/5 bg-white shadow-sm text-ink hover:border-black/20'
                }`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isSelected ? 'opacity-30 scale-105' : 'opacity-10'
                    }`}
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#890C25]/10 text-[#890C25]'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-pill ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-sand text-ink'
                      }`}
                    >
                      Faculty #{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-2 leading-tight">
                      {fac.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected ? 'text-white/85' : 'text-ink-55'
                      }`}
                    >
                      Accredited by regulatory authorities and aligned with industry certifications.
                    </p>
                  </div>

                  {/* Department list */}
                  <div className="space-y-2 pt-2">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider block ${
                        isSelected ? 'text-apricot' : 'text-[#890C25]'
                      }`}
                    >
                      Key Departments:
                    </span>
                    <ul className="space-y-1.5">
                      {fac.departments.map((dept, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs">
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isSelected ? 'text-apricot' : 'text-emerald-700'
                            }`}
                          />
                          <span className={isSelected ? 'text-white/95' : 'text-ink'}>
                            {dept}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-current/15 mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold">10-Month Flexible Installments</span>
                  <a
                    href={fac.link}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-pill transition-all ${
                      isSelected
                        ? 'bg-white text-[#890C25] hover:bg-white/90'
                        : 'bg-[#890C25] text-white hover:brightness-110'
                    }`}
                  >
                    <span>View Courses</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
