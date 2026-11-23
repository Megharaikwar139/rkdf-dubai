import React, { useState, useEffect } from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

interface CountdownProps {
  className?: string;
  targetDate?: string; // ISO date string
}

export const Countdown: React.FC<CountdownProps> = ({
  className = '',
  targetDate = '2026-12-18T23:59:59',
}) => {
  const { t, locale } = useI18n();

  const calculateTimeLeft = () => {
    const diff = +new Date(targetDate) - +new Date();
    if (diff <= 0) {
      return { days: 25, hours: 14, minutes: 32, seconds: 10 };
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`bg-cloud rounded-card p-6 border border-black/5 shadow-sm ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
          January 2027 Intake Priority Window
        </span>
      </div>

      <p className="text-sm font-semibold text-ink mb-4">
        {locale === 'ar'
          ? `ينتهي باب التقديم المبكر لدورة يناير 2027 خلال ${timeLeft.days} يوماً`
          : `January 2027 intake closes in ${timeLeft.days} days`}
      </p>

      {/* Tabular counter blocks */}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-sand/40 p-2.5 rounded-tile border border-black/5">
          <span className="block text-2xl font-semibold text-ink tabular-nums">
            {timeLeft.days}
          </span>
          <span className="text-[10px] text-ink-55 uppercase font-medium">Days</span>
        </div>
        <div className="bg-sand/40 p-2.5 rounded-tile border border-black/5">
          <span className="block text-2xl font-semibold text-ink tabular-nums">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-ink-55 uppercase font-medium">Hours</span>
        </div>
        <div className="bg-sand/40 p-2.5 rounded-tile border border-black/5">
          <span className="block text-2xl font-semibold text-ink tabular-nums">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-ink-55 uppercase font-medium">Mins</span>
        </div>
        <div className="bg-sand/40 p-2.5 rounded-tile border border-black/5">
          <span className="block text-2xl font-semibold text-ink tabular-nums">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-ink-55 uppercase font-medium">Secs</span>
        </div>
      </div>
    </div>
  );
};
