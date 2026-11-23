import React from 'react';
import { ArchMask } from '../components/common/ArchMask';
import { MagneticButton } from '../components/common/MagneticButton';
import { BadgeChip } from '../components/common/BadgeChip';
import { SpringCounter } from '../components/common/SpringCounter';
import { Tile } from '../components/common/Tile';
import { Check, Copy } from 'lucide-react';

export const StyleguidePage: React.FC = () => {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const colors = [
    { name: 'Canvas', hex: '#FDFBF7', role: 'Page background & warm base' },
    { name: 'Cloud', hex: '#FFFFFF', role: 'Cards, widgets & modals' },
    { name: 'Sand', hex: '#F2EAD9', role: 'Alternating section bands & tile fills' },
    { name: 'Apricot', hex: '#F6C89A', role: 'Primary warm accent — arches & hover fills' },
    { name: 'Sky', hex: '#CFE3EE', role: 'Secondary — data widgets & charts' },
    { name: 'Mint', hex: '#CFE5D4', role: 'Tertiary — success & outcome states' },
    { name: 'Ink', hex: '#0F223D', role: 'Sampled from crest — headings & body copy' },
    { name: 'Ink-55', hex: '#4F5E72', role: 'Secondary copy (passes 4.5:1 WCAG AA)' },
    { name: 'Terracotta', hex: '#C0542E', role: 'The ONE saturated CTA colour (Apply blocks only)' },
    { name: 'Focus', hex: '#1B6EF3', role: 'Keyboard accessibility focus ring only' },
  ];

  const alternativeH1s = [
    {
      title: 'Current Live Headline (Hero Default)',
      h1: "Study in Dubai.\nGraduate into\nthe world.",
      sub: "Warm, aspirational, international. Centers the dual-campus springboard.",
    },
    {
      title: 'Alternative Option 1 — Heritage & Future',
      h1: "Thirty years of craft.\nNow rooted in\nAcademic City.",
      sub: "Emphasizes the 1995 founding pedigree, credibility, and purpose-built presence.",
    },
    {
      title: 'Alternative Option 2 — Human Scale & Mentorship',
      h1: "Where cohorts stay under 30,\nand your dean knows\nyour name.",
      sub: "Focuses on the high-touch, seminar-scale contrast to massive, impersonal universities.",
    },
    {
      title: 'Alternative Option 3 — Global Career Mobility',
      h1: "Dual campuses.\nPaid placements.\nA degree without borders.",
      sub: "Highlights the Bhopal semester exchange, corporate placements, and GCC employment.",
    },
  ];

  const copyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-20">
      {/* Title */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Design System & Brand Blueprint
        </span>
        <h1 className="type-h1 text-ink mb-4">
          "THE ARCH" Design System
        </h1>
        <p className="type-body max-w-3xl">
          A warm, rounded, spatial, interactive design system drawn from the arch — the defining form of Gulf and Mughal architecture — abstracted into a modern geometric UI for higher education. Light theme only.
        </p>
      </div>

      {/* 1. Palette */}
      <section className="space-y-6">
        <h2 className="type-h2 text-ink">1. Colour Palette — Daylight & Sand</h2>
        <p className="text-sm text-ink-55">
          Sampled from desert daylight and the official university crest. Every color pair tested to meet WCAG 2.2 AA contrast ratios.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {colors.map((c) => (
            <div
              key={c.name}
              onClick={() => copyHex(c.hex)}
              className="bg-cloud rounded-card p-4 border border-black/5 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <div
                className="w-full h-20 rounded-tile mb-3 border border-black/10"
                style={{ backgroundColor: c.hex }}
              />
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm text-ink">{c.name}</span>
                {copiedColor === c.hex ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <span className="text-[11px] font-mono text-ink-55">{c.hex}</span>
                )}
              </div>
              <p className="text-[11px] text-ink-55 line-clamp-2">{c.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Three Alternative H1 Options */}
      <section className="space-y-6">
        <h2 className="type-h2 text-ink">2. Headline Explorations (Warm & Direct)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alternativeH1s.map((opt, idx) => (
            <div
              key={idx}
              className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-4"
            >
              <span className="text-xs font-semibold px-3 py-1 rounded-pill bg-sand text-ink">
                {opt.title}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-ink whitespace-pre-line leading-tight">
                {opt.h1}
              </h3>
              <p className="text-xs text-ink-55 leading-relaxed">{opt.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Signature Arch Motif at Three Scales */}
      <section className="space-y-6">
        <h2 className="type-h2 text-ink">3. The Signature Arch Motif</h2>
        <p className="text-sm text-ink-55">
          Curved rectangle (<code className="bg-sand px-1.5 py-0.5 rounded text-xs font-mono">border-radius: 999px 999px 28px 28px</code>). Rendered across Small, Medium, and Hero scales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* Small Arch */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-ink-55 block">Small Arch (Tiles / Icons)</span>
            <div className="w-48 h-64 mx-auto">
              <ArchMask variant="sm" className="w-full h-full shadow-sm">
                <img
                  src="/assets/rkdf-architecture.jpg"
                  alt="Arch Small"
                  className="w-full h-full object-cover img-warm"
                />
              </ArchMask>
            </div>
          </div>

          {/* Medium Arch */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-ink-55 block">Medium Arch (Schools & Cards)</span>
            <div className="w-64 h-80 mx-auto">
              <ArchMask variant="md" className="w-full h-full shadow-md">
                <img
                  src="/assets/rkdf-engineering.jpg"
                  alt="Arch Medium"
                  className="w-full h-full object-cover img-warm"
                />
              </ArchMask>
            </div>
          </div>

          {/* Large Hero Arch */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-ink-55 block">Large Arch (Hero Portal with Glow)</span>
            <div className="w-72 h-96 mx-auto">
              <ArchMask variant="hero" glow className="w-full h-full shadow-lg">
                <img
                  src="/assets/rkdf-building-enhanced.jpg"
                  alt="Arch Hero"
                  className="w-full h-full object-cover img-warm"
                />
              </ArchMask>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Typography Hierarchy */}
      <section className="space-y-6">
        <h2 className="type-h2 text-ink">4. Typography & Numeral System</h2>
        <div className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm space-y-6 divide-y divide-black/5">
          <div className="pt-2">
            <span className="text-xs font-semibold text-ink-55 block mb-1">H1 Display / 500 Weight</span>
            <h1 className="type-h1 text-ink">Study in Dubai.</h1>
          </div>
          <div className="pt-6">
            <span className="text-xs font-semibold text-ink-55 block mb-1">H2 Section Heading / 500 Weight</span>
            <h2 className="type-h2 text-ink">Seven Academic Schools</h2>
          </div>
          <div className="pt-6">
            <span className="text-xs font-semibold text-ink-55 block mb-1">H3 Card Title / 500 Weight</span>
            <h3 className="type-h3 text-ink">Computing & Artificial Intelligence</h3>
          </div>
          <div className="pt-6">
            <span className="text-xs font-semibold text-ink-55 block mb-1">Body Text / 18px / 1.65 / max 62ch</span>
            <p className="type-body">
              RKDF University Dubai brings three decades of Indian academic heritage to Dubai International Academic City — 38 programmes, seven schools, and cohorts small enough that your dean knows your name.
            </p>
          </div>
          <div className="pt-6">
            <span className="text-xs font-semibold text-ink-55 block mb-1">Arabic Typographic Stack ("IBM Plex Sans Arabic", line-height 1.9)</span>
            <p className="font-arabic text-xl text-ink leading-[1.9]" dir="rtl">
              تنقل جامعة RKDF دبي ثلاثة عقود من الإرث الأكاديمي العريق إلى مدينة دبي الأكاديمية العالمية — 38 برنامجاً دراسياً عبر سبع كليات بدفعات مصغرة.
            </p>
          </div>
          <div className="pt-6">
            <span className="text-xs font-semibold text-ink-55 block mb-1">Tabular Lining Numerals (Weight 600)</span>
            <div className="text-4xl font-semibold tabular-nums text-ink flex gap-6">
              <span>AED 62,000</span>
              <span>2,400</span>
              <span>94%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Component States & Interactive Controls */}
      <section className="space-y-6">
        <h2 className="type-h2 text-ink">5. Component Library & Interactive States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Magnetic Buttons */}
          <div className="bg-cloud rounded-card p-6 border border-black/5 shadow-sm space-y-4">
            <h4 className="text-sm font-semibold text-ink">Magnetic Buttons (40px Cursor Spring)</h4>
            <div className="flex flex-wrap gap-3">
              <MagneticButton variant="terracotta" size="md">
                Apply Now (Terracotta)
              </MagneticButton>
              <MagneticButton variant="cloud" size="md">
                Secondary (Cloud)
              </MagneticButton>
              <MagneticButton variant="apricot" size="md">
                Apricot Button
              </MagneticButton>
              <MagneticButton variant="sand" size="md">
                Sand Button
              </MagneticButton>
            </div>
          </div>

          {/* Badge Chips */}
          <div className="bg-cloud rounded-card p-6 border border-black/5 shadow-sm space-y-4">
            <h4 className="text-sm font-semibold text-ink">Pill Chips & Badges</h4>
            <div className="flex flex-wrap gap-2.5">
              <BadgeChip variant="sand">Sand Chip</BadgeChip>
              <BadgeChip variant="apricot">Apricot Accent</BadgeChip>
              <BadgeChip variant="sky">Sky Metric</BadgeChip>
              <BadgeChip variant="mint">Mint Outcome</BadgeChip>
              <BadgeChip variant="cloud">Cloud Chip</BadgeChip>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
