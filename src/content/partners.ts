export interface PartnerOrganisation {
  name: string;
  sector: string;
  city: string;
}

export const partnerOrganisations: PartnerOrganisation[] = [
  { name: "Meridian Gulf Logistics", sector: "Freight & Port Automation", city: "Dubai" },
  { name: "Nakhla Capital", sector: "Growth Equity & Private Markets", city: "DIFC" },
  { name: "Orbit Health Group", sector: "Specialized Healthcare Networks", city: "Dubai Healthcare City" },
  { name: "Falcon Systems", sector: "Autonomous Aerospace & Robotics", city: "Abu Dhabi" },
  { name: "Deira TechWorks", sector: "Enterprise Cloud Platforms", city: "Dubai" },
  { name: "Zahra Energy", sector: "Solar Microgrids & Clean Tech", city: "Sharjah" },
  { name: "Khaleej Build", sector: "Sustainable Structural Engineering", city: "Dubai" },
  { name: "Arcadia Retail Group", sector: "Omnichannel Consumer Networks", city: "Dubai" },
  { name: "Jumeirah Analytics", sector: "Quantitative Big Data Systems", city: "Dubai Media City" },
  { name: "Sahab Cloud", sector: "High-Performance Cloud Infrastructure", city: "Dubai Internet City" },
  { name: "Nawras Legal", sector: "Commercial Arbitration & Maritime", city: "DIFC Courts" },
  { name: "Emirates Design Collective", sector: "Spatial & Industrial Design", city: "Dubai Design District (d3)" }
];

export const whyRkdfPoints = [
  {
    number: "01",
    title: "Dual-campus mobility",
    titleAr: "التنقل بين الحرمين الجامعيين",
    body: "Spend a semester at our 50-acre Bhopal home campus with full credit transfer and zero additional tuition.",
    bodyAr: "اقضِ فصلاً دراسياً في الحرم الأم ببهوبال مع معادلة كاملة للساعات وبدون أي رسوم إضافية.",
    icon: "Plane"
  },
  {
    number: "02",
    title: "Cohorts under 30",
    titleAr: "دفعات صغيرة لا تتجاوز 30 طالباً",
    body: "Every core module is taught at intimate seminar scale. Your professors and academic deans know your name and career ambitions.",
    bodyAr: "يتم تدريس كل مقرر في حلقات دراسية تفاعلية مصغرة، حيث يعرفك الأساتذة والعمداء شخصياً.",
    icon: "Users"
  },
  {
    number: "03",
    title: "Paid 12-week placement",
    titleAr: "تدريب عملي مدفوع لمدة 12 أسبوعاً",
    body: "Built directly into every undergraduate degree, embedded with partner employers across Dubai, DIFC, and regional hubs.",
    bodyAr: "مدمج في كل برنامج بكالوريوس لدى كبرى الشركات والمؤسسات الرائدة في دبي ومنطقة الخليج.",
    icon: "Briefcase"
  },
  {
    number: "04",
    title: "40% below Western branch campuses",
    titleAr: "رسوم أقل بنسبة 40% من الفروع الغربية",
    body: "World-class faculty, accredited curricula, and premier Dubai facilities at a transparent tuition rate designed for global families.",
    bodyAr: "تعليم جامعي عالمي معتمد بمرافق استثنائية وبرسوم سنوية مدروسة تناسب العائلات الطموحة.",
    icon: "Coins"
  },
  {
    number: "05",
    title: "Faculty with active industry practice",
    titleAr: "هيئة تدريس تمارس العمل الميداني",
    body: "61% of our academic staff hold doctorates from elite universities; 44% continue active consultancies or professional practice.",
    bodyAr: "61% من الأساتذة حاصلون على الدكتوراه و44% يمارسون استشارات حقيقية في كبرى القطاعات.",
    icon: "GraduationCap"
  },
  {
    number: "06",
    title: "Two years of graduate careers support",
    titleAr: "سنتان من الدعم المهني بعد التخرج",
    body: "Dedicated alumni placement officers, interview coaching, executive CV reviews, and direct corporate introductions after graduation.",
    bodyAr: "خدمات توجيه مهني مستمرة، ومقابلات توظيف، وشبكة علاقات واسعة لمدة عامين كاملين بعد تخرجك.",
    icon: "Sparkles"
  }
];

export const researchLabs = [
  {
    id: "gulf-ai",
    title: "Gulf AI Applications Lab",
    titleAr: "مختبر تطبيقات الذكاء الاصطناعي الخليجي",
    focus: "Arabic NLP, logistics optimisation, computer vision",
    focusAr: "معالجة اللغة العربية الطبيعية، وتحسين اللوجستيات، والرؤية الحاسوبية",
    image: "/assets/rkdf-research.jpg",
    metric: "4 funded projects"
  },
  {
    id: "desert-materials",
    title: "Desert Construction & Materials",
    titleAr: "مواد وتشييد البيئات الصحراوية",
    focus: "Low-carbon concrete, passive cooling, solar thermal storage",
    focusAr: "خرسانة منخفضة الكربون، والتبريد السلبي، والعزل الحراري المتقدم",
    image: "/assets/rkdf-architecture.jpg",
    metric: "3 patents pending"
  },
  {
    id: "fintech-studio",
    title: "Fintech & Digital Assets Studio",
    titleAr: "استوديو التكنولوجيا المالية والأصول الرقمية",
    focus: "Payments infrastructure, regulatory tech, cross-border remittance",
    focusAr: "بنية المدفوعات التحتية، والأنظمة الرقابية الذكية، والتحويلات المالية",
    image: "/assets/rkdf-engineering.jpg",
    metric: "Partnered with DIFC firms"
  },
  {
    id: "public-health",
    title: "Public Health in Hot Climates",
    titleAr: "الصحة العامة في المناخات الحارة",
    focus: "Heat stress physiology, occupational safety, epidemiologic data",
    focusAr: "فيزيولوجيا الإجهاد الحراري، والصحة المهنية، ونظم الرصد الوبائي",
    image: "/assets/rkdf-agriculture.jpg",
    metric: "AED 3.8M grant pool"
  }
];
