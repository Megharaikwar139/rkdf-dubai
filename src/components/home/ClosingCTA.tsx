import React from 'react';
import { Countdown } from '../shared/Countdown';
import { MagneticButton } from '../common/MagneticButton';
import { useI18n } from '../../context/I18nContext';

export const ClosingCTA: React.FC = () => {
  const { t, locale } = useI18n();

  return (
    <section className="relative bg-apricot/30 pt-20 pb-28 overflow-hidden">
      {/* Huge arch cut out of top edge with campus aerial visible through it */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="relative bg-cloud rounded-[36px] overflow-hidden shadow-lg border border-black/5 p-8 md:p-16">
          {/* Top Arch Cutout with image visible */}
          <div className="relative mx-auto w-full max-w-2xl h-48 sm:h-64 rounded-[999px_999px_24px_24px] overflow-hidden mb-8 shadow-inner border-2 border-cloud">
            <img
              src="/assets/rkdf-campus-aerial.jpg"
              alt="RKDF University Campus Estate"
              className="w-full h-full object-cover img-warm"
              width={700}
              height={256}
            />
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-pill bg-sand text-ink inline-block">
              JANUARY 2027 ENROLMENT WINDOW
            </span>

            <h2 className="type-h2 text-ink">
              Your academic journey in Dubai begins here.
            </h2>

            <p className="type-body mx-auto">
              Small seminar cohorts, direct faculty mentorship, mandatory paid placements, and dual-campus mobility with Bhopal. Join a global student body from 46 nations.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                variant="terracotta"
                size="lg"
                onClick={() => (window.location.href = '/apply')}
                className="shadow-md"
              >
                Start Your January 2027 Application
              </MagneticButton>

              <MagneticButton
                variant="cloud"
                size="lg"
                onClick={() => (window.location.href = '/visit')}
                className="border border-black/5"
              >
                Schedule an In-Person Campus Visit
              </MagneticButton>
            </div>

            {/* Embedded Live Countdown */}
            <div className="pt-8 max-w-md mx-auto">
              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
