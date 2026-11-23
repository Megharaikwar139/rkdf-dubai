import React from 'react';
import { Sparkles } from 'lucide-react';

export const Home8Marquee: React.FC = () => {
  const items = [
    'Empowering Minds, Enriching Lives',
    'Established 1995',
    'Dubai International Academic City',
    '38 Degree Programmes',
    '7 Academic Schools',
    'Dual-Campus Global Mobility',
    '100% Student Visa Sponsorship',
    'KHDA Educational Permit DXB-HE-2026-0147',
  ];

  return (
    <div className="bg-[#890C25] text-white py-4 overflow-hidden border-y border-black/10 select-none">
      <div className="flex w-max animate-marquee">
        {/* Repeat list twice for smooth seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 px-6 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span>{text}</span>
            <Sparkles className="w-4 h-4 text-white/50 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
