import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useI18n } from '../../context/I18nContext';
import { ArchMask } from '../common/ArchMask';
import { MagneticButton } from '../common/MagneticButton';
import { BadgeChip } from '../common/BadgeChip';
import { Globe2, Wallet, TrendingUp, CheckCircle, Award } from 'lucide-react';

export const HeroArch: React.FC = () => {
  const { t, locale } = useI18n();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxScale = useTransform(scrollY, [0, 600], [1, 1.04]);

  return (
    <section className="relative pt-36 md:pt-44 pb-16 overflow-hidden bg-canvas text-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Above: Sand pill chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="inline-flex justify-center mb-6"
        >
          <BadgeChip variant="sand" size="md" className="font-semibold tracking-wider uppercase text-xs">
            {t.hero.intakeBadge}
          </BadgeChip>
        </motion.div>

        {/* H1, three lines, centred, weight 500 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.08 }}
          className="type-h1 text-ink max-w-4xl mx-auto tracking-tight"
        >
          <span className="block">{t.hero.h1Line1}</span>
          <span className="block">{t.hero.h1Line2}</span>
          <span className="block text-terracotta">{t.hero.h1Line3}</span>
        </motion.h1>

        {/* Sub, 20px, max 54ch, centred */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.16 }}
          className="text-lg md:text-xl text-ink-55 max-w-[54ch] mx-auto mt-6 mb-8 leading-relaxed font-normal"
        >
          {t.hero.sub}
        </motion.p>

        {/* Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton
            variant="terracotta"
            size="lg"
            onClick={() => (window.location.href = '/apply')}
            className="shadow-md"
          >
            {t.hero.ctaPrimary}
          </MagneticButton>

          <MagneticButton
            variant="cloud"
            size="lg"
            onClick={() => (window.location.href = '/programs')}
            className="shadow-sm border border-black/5"
          >
            {t.hero.ctaSecondary}
          </MagneticButton>
        </motion.div>

        {/* Signature Element: Building image inside large ARCH mask with Apricot glow & 3 Floating widget pills */}
        <div className="relative mx-auto max-w-[940px] px-4">
          {/* Apricot glow behind it at 30% blur */}
          <div
            className="absolute -inset-10 bg-apricot/30 rounded-[999px_999px_64px_64px] blur-3xl -z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Large Arch mask: 900px wide, rising and bleeding off the fold */}
          <motion.div
            style={shouldReduceMotion ? undefined : { scale: parallaxScale }}
            className="relative mx-auto w-full max-w-[900px] h-[480px] sm:h-[560px] md:h-[620px] rounded-[999px_999px_32px_32px] overflow-hidden shadow-lg border-4 border-cloud/80 bg-sand/30"
          >
            <img
              src="/assets/rkdf-building-enhanced.jpg"
              alt="RKDF University Dubai Iconic Campus Architecture in Academic City"
              className="w-full h-full object-cover img-warm"
              fetchPriority="high"
              width={900}
              height={620}
            />
          </motion.div>

          {/* Floating Pill 1: Left */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.35 }}
            className="absolute top-1/4 -left-2 sm:left-4 md:-left-8 bg-cloud/95 backdrop-blur-md px-4 py-2.5 rounded-pill shadow-md border border-black/5 flex items-center gap-2.5 z-20"
          >
            <span className="p-1.5 rounded-full bg-sand text-ink">
              <Globe2 className="w-4 h-4" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-ink">
              {t.hero.pillNationalities}
            </span>
          </motion.div>

          {/* Floating Pill 2: Right Top */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.45 }}
            className="absolute top-1/3 -right-2 sm:right-4 md:-right-8 bg-cloud/95 backdrop-blur-md px-4 py-2.5 rounded-pill shadow-md border border-black/5 flex items-center gap-2.5 z-20"
          >
            <span className="p-1.5 rounded-full bg-apricot/40 text-ink">
              <Wallet className="w-4 h-4" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-ink">
              {t.hero.pillTuition}
            </span>
          </motion.div>

          {/* Floating Pill 3: Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.55 }}
            className="absolute bottom-12 left-4 sm:left-12 bg-cloud/95 backdrop-blur-md px-4 py-2.5 rounded-pill shadow-md border border-black/5 flex items-center gap-2.5 z-20"
          >
            <span className="p-1.5 rounded-full bg-mint text-emerald-800">
              <TrendingUp className="w-4 h-4" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-ink">
              {t.hero.pillOutcomes}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom: Soft Sand strip with four trust chips */}
      <div className="mt-14 py-4 bg-sand/60 border-y border-black/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs font-medium text-ink/80">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-terracotta shrink-0" />
            {t.hero.trustKhda}
          </span>
          <span className="text-black/20 hidden md:inline">·</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-terracotta shrink-0" />
            {t.hero.trustMohesr}
          </span>
          <span className="text-black/20 hidden md:inline">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Award className="w-4 h-4 text-terracotta shrink-0" />
            {t.hero.trustNaac}
          </span>
          <span className="text-black/20 hidden md:inline">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Award className="w-4 h-4 text-terracotta shrink-0" />
            {t.hero.trustDegree}
          </span>
        </div>
      </div>
    </section>
  );
};
