import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Cpu,
  BookOpen,
  Home,
  Users,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

interface FacilityItem {
  id: string;
  category: 'Sports' | 'Research' | 'Library' | 'Housing' | 'Auditorium';
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  stats: string;
  highlights: string[];
  description: string;
}

export const UnipixCampusFacilities: React.FC = () => {
  const { locale } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const facilities: FacilityItem[] = [
    {
      id: 'f1',
      category: 'Sports',
      title: 'Championship Sports Arena & Olympic Grounds',
      subtitle: 'FIFA-Standard Football Turf, Indoor Courts & Fitness Studios',
      image: '/assets/rkdf-campus-hero.jpg',
      badge: 'Sports & Athletics',
      stats: '31+ Sports Clubs · FIFA Turf · Olympic Pool',
      highlights: [
        'Multi-court indoor arena for basketball, volleyball & badminton',
        'Olympic-dimension heated swimming facility & aquatic trainers',
        'Championship outdoor football & cricket sports complex',
        'State-of-the-art cardiovascular gymnasium & fitness trainers',
      ],
      description:
        'Engineered for competitive athletics and daily wellness, the sports complex hosts the annual UAE Inter-University Championship and over 31 active student clubs.',
    },
    {
      id: 'f2',
      category: 'Research',
      title: 'Advanced AI & Robotics Computing Center',
      subtitle: 'Tier-3 GPU Supercomputing Infrastructure & Innovation Labs',
      image: '/assets/rkdf-research.jpg',
      badge: 'Research & Labs',
      stats: '14 Specialized Research Hubs · 100Gbps Fibre',
      highlights: [
        'Dedicated generative AI, computer vision & autonomous systems labs',
        'High-speed enterprise GPU clusters for machine learning training',
        'Cyber security war-room & forensic threat investigation sandbox',
        'Biotechnology genomic sequencing & bioinformatics stations',
      ],
      description:
        'Our DIAC research facility provides undergraduate and postgraduate scholars with direct enterprise compute power, collaborating with UAE government and tech partners.',
    },
    {
      id: 'f3',
      category: 'Library',
      title: 'Innovation Commons & Central Digital Library',
      subtitle: 'Multi-Tier Quiet Pods, Tech Incubator & Global Repositories',
      image: '/assets/rkdf-library.jpg',
      badge: 'Library & Commons',
      stats: '150,000+ Digital Volumes · 40 Study Pods',
      highlights: [
        '24/7 quiet research zones and private thesis writing pods',
        'Comprehensive access to IEEE Xplore, ScienceDirect, and Scopus',
        'High-tech presentation suites and collaborative brainstorming pods',
        'Dedicated academic librarians and patent research advisors',
      ],
      description:
        'A light-filled architectural marvel spanning multiple tiers, offering students an inspiring intellectual sanctuary with 360-degree digital connectivity.',
    },
    {
      id: 'f4',
      category: 'Auditorium',
      title: 'Grand University Convention Center & Theater',
      subtitle: '1,200-Seat Acoustic Auditorium for Global Summits & Events',
      image: '/assets/rkdf-campus-2.jpg',
      badge: 'Events & Convocations',
      stats: '1,200 Seating Capacity · Broadcast Studio',
      highlights: [
        'Broadcast-grade 4K LED backdrops and spatial surround acoustics',
        'Annual Dubai Innovation Summit and inter-varsity hackathons',
        'Distinguished global guest lectures and diplomatic symposiums',
        'Annual graduation ceremonies and performing arts festivals',
      ],
      description:
        'The ceremonial center of campus life, hosting world-renowned academic keynote speakers, global industry conclaves, and annual student cultural festivals.',
    },
    {
      id: 'f5',
      category: 'Housing',
      title: 'Premium Student Residences & Dining Suites',
      subtitle: 'Modern En-Suite Living in Dubai International Academic City',
      image: '/assets/rkdf-campus-4.jpg',
      badge: 'Student Residences',
      stats: 'Single & Twin En-Suite · 24/7 Security',
      highlights: [
        'Fully furnished private en-suite rooms with ergonomic study stations',
        'High-speed Wi-Fi, air conditioning, and biometric security entry',
        'Vibrant student lounges, cinema rooms, and communal kitchenettes',
        'Multi-cuisine dining hall serving nutritious international meals',
      ],
      description:
        'Safe, contemporary on-campus living designed to foster lifelong friendships among our 46+ nationalities in the heart of Dubai Academic City.',
    },
    {
      id: 'f6',
      category: 'Sports',
      title: 'Recreational Plaza & Open-Air Amphitheater',
      subtitle: 'Student Union Hub, Outdoor Cafés & Cultural Event Commons',
      image: '/assets/rkdf-campus-3.jpg',
      badge: 'Campus Life & Community',
      stats: 'Open 7 Days · Shaded Pergolas · Coffee Lounges',
      highlights: [
        'Landscaped open-air amphitheater for music, poetry & debate meets',
        'Artisan coffee bar, smoothie stations, and outdoor dining terraces',
        'Recreational gaming lounge with pool tables, table tennis & VR sets',
        'Vibrant student council offices and career counseling helpdesks',
      ],
      description:
        'The social heartbeat of the university where students gather between lectures, host weekend flea markets, open-mic nights, and peer study circles.',
    },
  ];

  const categories = [
    { label: 'All Facilities', value: 'All' },
    { label: 'Sports & Athletics', value: 'Sports' },
    { label: 'Research & AI Labs', value: 'Research' },
    { label: 'Library & Commons', value: 'Library' },
    { label: 'Events & Auditorium', value: 'Auditorium' },
    { label: 'Student Residences', value: 'Housing' },
  ];

  const filteredFacilities =
    activeCategory === 'All'
      ? facilities
      : facilities.filter((f) => f.category === activeCategory);

  return (
    <section className="py-24 bg-white text-ink overflow-hidden border-b border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* ============================================================== */}
        {/* Section Header: Badge, Heading, and Filter Tabs */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#890C25] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>World-Class Infrastructure · DIAC Campus · Estd. 2026</span>
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-ink leading-[1.1]"
              style={{
                fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
              }}
            >
              Campus Facilities <br />
              &amp; Student Life
            </h2>

            <p className="text-sm text-ink-55 leading-relaxed">
              Experience an inspiring university campus in Dubai International Academic City engineered
              for holistic development—combining championship sports arenas, cutting-edge AI research
              clusters, grand innovation libraries, and luxury student residences.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/visit"
              className="inline-flex items-center gap-2.5 bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-semibold text-xs px-6 py-3.5 rounded-[10px] shadow-sm transition-all hover:scale-105"
            >
              <span>Book a Campus Tour</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#890C25] text-white shadow-md'
                  : 'bg-sand/40 border border-black/10 text-ink-55 hover:text-ink hover:border-black/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ============================================================== */}
        {/* Facilities Bento Grid Showcase */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFacilities.map((fac, idx) => (
              <motion.div
                key={fac.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-[22px] overflow-hidden border border-black/[0.08] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Clean High-Resolution Facility Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-sand/30">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 img-warm"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                    {/* Badge on Top-Left */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-[6px] bg-[#890C25] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                        {fac.badge}
                      </span>
                    </div>

                    {/* Key Stat on Bottom */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] font-semibold text-white/95 bg-black/40 backdrop-blur-md px-3 py-1 rounded-[6px]">
                        {fac.stats}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3
                        className="text-xl sm:text-[22px] font-bold text-ink leading-snug group-hover:text-[#890C25] transition-colors"
                        style={{
                          fontFamily:
                            '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                        }}
                      >
                        {fac.title}
                      </h3>
                      <p className="text-xs text-ink-55 font-medium mt-1">
                        {fac.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-ink-55 leading-relaxed line-clamp-2">
                      {fac.description}
                    </p>

                    {/* Key Highlights with Checkmarks */}
                    <div className="pt-2 border-t border-black/5 space-y-2">
                      {fac.highlights.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-ink/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#890C25] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 sm:p-7 pt-0 border-t border-black/5 mt-4 flex items-center justify-between">
                  <a
                    href="/about/campus"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-[#890C25] transition-colors"
                  >
                    <span>Explore Virtual Tour</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#890C25]" />
                  </a>

                  <span className="text-[11px] font-bold text-[#890C25] uppercase tracking-wider">
                    DIAC Hub
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
