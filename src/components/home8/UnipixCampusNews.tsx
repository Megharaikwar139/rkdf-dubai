import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Clock, Sparkles, ArrowRight, Mail, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const UnipixCampusNews: React.FC = () => {
  const { locale } = useI18n();
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const trendingNews = [
    {
      id: 1,
      image: '/assets/rkdf-architecture.jpg',
      category: 'Sustainable Architecture',
      date: 'October 28, 2026',
      readTime: '3 min read',
      title: 'Arid Urbanism: Faculty Unveils Zero-Carbon Mega-Structure Models for the Gulf',
      slug: 'sustainable-arid-urbanism',
    },
    {
      id: 2,
      image: '/assets/rkdf-engineering.jpg',
      category: 'Industry Partnerships',
      date: 'November 08, 2026',
      readTime: '4 min read',
      title: '28 Leading UAE & GCC Enterprises Sign Direct 12-Week Placement MoUs with RKDF Dubai',
      slug: 'industry-placement-mous',
    },
    {
      id: 3,
      image: '/assets/rkdf-campus-1.jpg',
      category: 'Campus Athletics & Events',
      date: 'November 15, 2026',
      readTime: '3 min read',
      title: 'Inaugural Student Tech Conclave & Inter-University Sports League Set for 2026/2027',
      slug: 'tech-expo-sports-league',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-24 bg-[#FAF9F5] text-ink overflow-hidden border-b border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* ============================================================== */}
        {/* Header: Badge, Heading, and "See All News" Button */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#890C25] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dispatches &amp; Research Highlights · Established 2026</span>
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-ink leading-[1.1]"
              style={{
                fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
              }}
            >
              Campus News &amp; <br />
              Research Dispatches
            </h2>

            <p className="text-sm text-ink-55 leading-relaxed">
              Stay connected with groundbreaking scientific discoveries, faculty achievements, campus
              athletics tournaments, and industry partnerships from our Dubai Academic City campus.
            </p>
          </div>

          <a
            href="/news"
            className="inline-flex items-center gap-2 bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-semibold text-xs px-6 py-3.5 rounded-[10px] shadow-sm transition-all hover:scale-105"
          >
            <span>View All News &amp; Press</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ============================================================== */}
        {/* News Grid: Featured Spotlight (Left) + 3 Trending Stories (Right) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Spotlight Article (Left, 7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-[24px] overflow-hidden border border-black/[0.08] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group">
            <div>
              {/* Featured Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-sand/30">
                <img
                  src="/assets/rkdf-campus-aerial.jpg"
                  alt="RKDF University Dubai Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 img-warm"
                />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-[6px] bg-[#890C25] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Featured Spotlight
                  </span>
                  <span className="px-3 py-1.5 rounded-[6px] bg-white/95 backdrop-blur-md text-ink text-[11px] font-bold shadow-md">
                    Frontier AI &amp; Research
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 sm:p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs text-ink-55">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#890C25]" />
                    <span>November 20, 2026</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#890C25]" />
                    <span>5 min read</span>
                  </div>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-ink leading-tight group-hover:text-[#890C25] transition-colors"
                  style={{
                    fontFamily:
                      '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                  }}
                >
                  RKDF University Dubai Inaugurates State-of-the-Art AI &amp; Robotics Research Hub at
                  DIAC Campus
                </h3>

                <p className="text-sm text-ink-55 leading-relaxed line-clamp-3">
                  Equipped with enterprise-grade GPU clusters, quantum simulation nodes, and dedicated
                  cyber defense sandboxes, the new facility enables undergraduate and postgraduate
                  scholars to pioneer autonomous systems and commercial AI solutions in partnership
                  with regional industry leaders.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-7 sm:p-8 pt-0 border-t border-black/5 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/home8/ellipse-368-1-6899b89c8124b.webp"
                  alt="Dr. Tariq Al-Hashimi"
                  className="w-10 h-10 rounded-full object-cover border border-black/10"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-ink">Prof. Tariq Al-Hashimi</span>
                  <span className="text-[11px] text-ink-55">Dean of Academic Research</span>
                </div>
              </div>

              <a
                href="/news/ai-research-hub-inauguration"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#890C25] hover:underline group/btn"
              >
                <span>Read Full Dispatch</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column (3 Trending Articles, 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {trendingNews.map((item) => (
              <a
                key={item.id}
                href={`/news/${item.slug}`}
                className="bg-white rounded-[20px] p-4 sm:p-5 border border-black/[0.08] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-4 items-center group"
              >
                {/* Thumbnail */}
                <div className="w-full sm:w-36 h-28 shrink-0 rounded-[14px] overflow-hidden bg-sand/30">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 img-warm"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-ink-55">
                    <span className="font-bold text-[#890C25] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <h4
                    className="text-sm font-bold text-ink leading-snug group-hover:text-[#890C25] transition-colors line-clamp-2"
                    style={{
                      fontFamily:
                        '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
                    }}
                  >
                    {item.title}
                  </h4>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-ink-55 group-hover:text-[#890C25] pt-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}

            {/* Newsletter Subscription Card */}
            <div className="bg-[#890C25] text-white rounded-[20px] p-6 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
                <Mail className="w-4 h-4" />
                <span>Academic Dispatches Newsletter</span>
              </div>
              <h4 className="text-lg font-bold">Subscribe to Research Updates</h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Receive monthly university research summaries, scholarship deadlines, and campus
                conclave invitations directly in your inbox.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 py-2 text-xs text-emerald-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you! You are now subscribed to RKDF Dispatches.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 pt-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 rounded-[8px] bg-white text-ink text-xs outline-none placeholder:text-black/40"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-[8px] bg-[#0A091E] text-white text-xs font-bold hover:bg-black transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
