import React from 'react';
import { housingOptions } from '../content/fees';
import { ArchMask } from '../components/common/ArchMask';
import { MagneticButton } from '../components/common/MagneticButton';
import { Users, Bed, Shield, HeartHandshake, Compass, CheckCircle } from 'lucide-react';

interface StudentLifePagesProps {
  subRoute?: 'index' | 'accommodation' | 'clubs' | 'support';
}

export const StudentLifePages: React.FC<StudentLifePagesProps> = ({ subRoute = 'index' }) => {
  const societies = [
    { name: 'Gulf Robotics & Drone Collective', cat: 'Technology' },
    { name: 'Model United Nations & Diplomacy', cat: 'Academic' },
    { name: 'Fintech & Algorithmic Trading Society', cat: 'Finance' },
    { name: 'Architecture & Spatial Design Forum', cat: 'Arts' },
    { name: 'Cricket & Football Athletic Club', cat: 'Sports' },
    { name: 'Debating & Moot Court Society', cat: 'Public Policy' },
    { name: 'Biomedical & Arid Agriculture Guild', cat: 'Sciences' },
    { name: 'Film & Digital Storytellers', cat: 'Media' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          {subRoute === 'accommodation' && 'Residences & Living in DIAC'}
          {subRoute === 'clubs' && 'Student Organizations & Campus Life'}
          {subRoute === 'support' && 'Health, Pastoral Wellness & Mentorship'}
          {subRoute === 'index' && 'Vibrant Student Community'}
        </span>
        <h1 className="type-h1 text-ink mb-4">
          {subRoute === 'accommodation' && 'Student Accommodation & Residences'}
          {subRoute === 'clubs' && '31 Student Clubs & Societies'}
          {subRoute === 'support' && 'Student Wellbeing & Counseling'}
          {subRoute === 'index' && 'Life in Dubai Academic City'}
        </h1>
        <p className="type-body">
          {subRoute === 'accommodation' && 'Modern, safe, air-conditioned studio and twin suites located within walking distance or dedicated shuttle to Block 11.'}
          {subRoute === 'clubs' && 'From competitive robotics leagues and moot courts to cultural festivals and desert athletic treks.'}
          {subRoute === 'support' && 'Comprehensive 24/7 student pastoral care, academic tutoring centers, and mental health counseling.'}
          {subRoute === 'index' && 'A hyper-connected global crossroads where 46 nationalities study, collaborate, and launch their careers.'}
        </p>
      </div>

      {/* Nav Pills */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-black/5">
        {[
          { label: 'Student Life Overview', href: '/student-life' },
          { label: 'Accommodation & Housing', href: '/student-life/accommodation' },
          { label: '31 Clubs & Societies', href: '/student-life/clubs' },
          { label: 'Health & Wellbeing Support', href: '/student-life/support' },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="px-4 py-2 rounded-pill text-xs font-semibold bg-cloud border border-black/5 hover:bg-sand/60 text-ink shadow-sm transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Content */}
      {subRoute === 'accommodation' && (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-sand text-ink">
                Twin En-Suite
              </span>
              <h3 className="text-xl font-semibold text-ink">Shared Student Residence</h3>
              <p className="text-2xl font-semibold text-terracotta tabular-nums">
                AED 2,800 – 4,200 / month
              </p>
              <p className="text-xs text-ink-55 leading-relaxed">
                Furnished bedroom with two individual study pods, en-suite bathroom, high-speed Wi-Fi, weekly cleaning service, and campus shuttle bus access.
              </p>
              <ul className="space-y-1.5 text-xs text-ink-55 pt-2">
                <li className="flex items-center gap-2">✓ Gym and swimming pool access included</li>
                <li className="flex items-center gap-2">✓ 24/7 security and biometric access</li>
                <li className="flex items-center gap-2">✓ Communal lounge & study rooms</li>
              </ul>
            </div>

            <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-apricot/30 text-ink">
                Private Studio
              </span>
              <h3 className="text-xl font-semibold text-ink">Solo Studio Apartment</h3>
              <p className="text-2xl font-semibold text-terracotta tabular-nums">
                AED 4,500 – 6,500 / month
              </p>
              <p className="text-xs text-ink-55 leading-relaxed">
                Self-contained private studio apartment with personal kitchenette, private bathroom, smart TV, high-speed fiber internet, and quiet study zone.
              </p>
              <ul className="space-y-1.5 text-xs text-ink-55 pt-2">
                <li className="flex items-center gap-2">✓ Complete privacy and individual climate control</li>
                <li className="flex items-center gap-2">✓ Kitchenette with refrigerator and microwave</li>
                <li className="flex items-center gap-2">✓ 5-minute walk to campus buildings</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {subRoute === 'clubs' && (
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-ink">Featured Student Societies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {societies.map((s, idx) => (
              <div
                key={idx}
                className="p-5 rounded-card bg-cloud border border-black/5 shadow-sm space-y-2"
              >
                <span className="text-[11px] font-semibold text-terracotta">{s.cat}</span>
                <h4 className="text-sm font-semibold text-ink">{s.name}</h4>
                <p className="text-xs text-ink-55">
                  Regular weekly workshops, guest lectures, and intercollegiate GCC competitions.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {subRoute === 'support' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm space-y-2">
              <HeartHandshake className="w-6 h-6 text-terracotta" />
              <h4 className="text-base font-semibold text-ink">Pastoral Wellbeing</h4>
              <p className="text-xs text-ink-55 leading-relaxed">
                Confidential counseling, stress management workshops, and 24/7 multilingual mental health hotlines.
              </p>
            </div>
            <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm space-y-2">
              <Users className="w-6 h-6 text-terracotta" />
              <h4 className="text-base font-semibold text-ink">Academic Tutoring</h4>
              <p className="text-xs text-ink-55 leading-relaxed">
                Free 1-on-1 math clinics, coding lab office hours, and academic writing mentoring.
              </p>
            </div>
            <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm space-y-2">
              <Compass className="w-6 h-6 text-terracotta" />
              <h4 className="text-base font-semibold text-ink">International Student Desk</h4>
              <p className="text-xs text-ink-55 leading-relaxed">
                Bank account setup, UAE phone SIM registration, local transit passes, and cultural orientation.
              </p>
            </div>
          </div>
        </div>
      )}

      {subRoute === 'index' && (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 h-96 rounded-card overflow-hidden shadow-md">
              <img
                src="/assets/rkdf-campus-1.jpg"
                alt="Student Life Campus Quad"
                className="w-full h-full object-cover img-warm"
              />
            </div>
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-2xl font-semibold text-ink">
                A Global Campus Experience
              </h3>
              <p className="text-xs text-ink-55 leading-relaxed">
                Located in Dubai International Academic City, students enjoy access to shared sports facilities, Olympic pools, multi-cuisine cafeterias, and a lively cosmopolitan student community.
              </p>
              <div className="pt-2">
                <MagneticButton variant="terracotta" size="md" onClick={() => (window.location.href = '/visit')}>
                  Book a Campus Visit →
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
