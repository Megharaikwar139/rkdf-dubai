import React from 'react';

export const UnipixDualMarquee: React.FC = () => {
  const academicDisciplines = [
    'Applied Mathematics',
    'Biomedical Engineering',
    'Anthropology',
    'Astrophysics',
    'Artificial Intelligence',
    'Sustainable Architecture',
    'Cyber Security',
    'Data Science & Analytics',
    'Robotics & Automation',
    'International Commercial Law',
    'Genomic Biotechnology',
    'Executive Leadership MBA',
  ];

  const noticesAndNews = [
    'January 2027 Intake Applications Active',
    'Dubai International Academic City Campus',
    '100% Guaranteed 12-Week Industry Internships',
    'UGC & Global MoE Recognized Degrees',
    '10-Month Flexible Installment Payment Plans',
    'Merit Scholarships Up To 50% Available',
    '48-Hour Fast-Track Conditional Offer Review',
    'World-Class International Faculty & Labs',
  ];

  return (
    <section className="w-full overflow-hidden select-none border-y border-black/10">
      {/* ============================================================== */}
      {/* Bar 1 (Top): Deep Midnight Navy Background - Slides Right-to-Left */}
      {/* (Matching Screenshot media_1795429208433_1abf38b3.png Exactly) */}
      {/* ============================================================== */}
      <div className="bg-[#09081E] text-white py-3 sm:py-3.5 overflow-hidden flex items-center border-b border-white/10">
        <div className="animate-marquee flex items-center shrink-0">
          {[...academicDisciplines, ...academicDisciplines].map((item, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              <span
                className="text-sm sm:text-base md:text-lg font-medium text-white/95 px-6 tracking-wide"
                style={{
                  fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                }}
              >
                {item}
              </span>
              <span className="text-white/60 text-base sm:text-lg select-none px-2">
                ✻
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* Bar 2 (Bottom): Deep Crimson Background - Slides Left-to-Right (Opposite Direction) */}
      {/* (Matching Screenshot media_1795429208433_1abf38b3.png Exactly) */}
      {/* ============================================================== */}
      <div className="bg-[#890C25] text-white py-3 sm:py-3.5 overflow-hidden flex items-center">
        <div className="animate-marquee-reverse flex items-center shrink-0">
          {[...noticesAndNews, ...noticesAndNews].map((item, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              <span
                className="text-sm sm:text-base md:text-lg font-medium text-white px-6 tracking-wide"
                style={{
                  fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                }}
              >
                {item}
              </span>
              <span className="text-white/70 text-base sm:text-lg select-none px-2">
                ✻
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
