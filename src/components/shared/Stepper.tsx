import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Stepper: React.FC = () => {
  const { locale } = useI18n();

  const steps = [
    {
      num: '01',
      title: 'Choose',
      titleAr: 'اختر البرنامج',
      desc: 'Select from 38 accredited undergraduate or postgraduate pathways.',
    },
    {
      num: '02',
      title: 'Apply',
      titleAr: 'قدّم إلكترونياً',
      desc: 'Submit predicted transcripts, passport copy, and statement online.',
    },
    {
      num: '03',
      title: 'Assess',
      titleAr: 'التقييم الأكاديمي',
      desc: '48-hour document evaluation and automated scholarship review.',
    },
    {
      num: '04',
      title: 'Offer',
      titleAr: 'عرض القبول',
      desc: 'Receive your conditional or unconditional formal offer letter.',
    },
    {
      num: '05',
      title: 'Enrol',
      titleAr: 'التسجيل والإقامة',
      desc: 'Pay deposit, secure student visa sponsorship, and select housing.',
    },
  ];

  return (
    <div className="bg-cloud rounded-card p-6 md:p-8 border border-black/5 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-black/5">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-55">
            Admissions Roadmap
          </span>
          <h4 className="text-xl font-semibold text-ink">5 Simple Steps to Enrolment</h4>
        </div>
        <span className="text-xs px-3 py-1 rounded-pill bg-mint text-emerald-900 font-semibold">
          Fast-Track Portal
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {steps.map((st, idx) => (
          <div
            key={idx}
            className="p-4 rounded-tile bg-sand/30 border border-black/5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-terracotta block mb-1">
                Step {st.num}
              </span>
              <h5 className="text-sm font-semibold text-ink mb-1">
                {locale === 'ar' ? st.titleAr : st.title}
              </h5>
              <p className="text-xs text-ink-55 leading-relaxed">{st.desc}</p>
            </div>
            {idx < steps.length - 1 && (
              <div className="pt-3 hidden sm:flex justify-end text-black/20">
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
