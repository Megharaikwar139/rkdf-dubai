export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  category: "Campus" | "Admissions" | "Faculty" | "Partnerships" | "Research";
  categoryAr: string;
  date: string;
  isoDate: string;
  summary: string;
  summaryAr: string;
  featured?: boolean;
  image?: string;
  body: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "news-1",
    slug: "block-11-campus-confirmed-diac-opening-january-2027",
    title: "Block 11 campus confirmed in Dubai International Academic City, opening January 2027",
    titleAr: "تأكيد مقر الحرم الجامعي في المبنى 11 بالمدينة الأكاديمية بدبي، والافتتاح في يناير 2027",
    category: "Campus",
    categoryAr: "الحرم الجامعي",
    date: "18 Nov 2026",
    isoDate: "2026-11-18",
    featured: true,
    image: "/assets/rkdf-building-enhanced.jpg",
    summary: "RKDF University Dubai secures landmark Block 11 facility in Dubai International Academic City, featuring 22 high-tech laboratories and seminar suites.",
    summaryAr: "جامعة RKDF دبي تؤكد تجهيز مرافقها في المبنى 11 بالمدينة الأكاديمية مع 22 مختبراً وقاعات دراسية متطورة.",
    body: [
      "RKDF University Dubai has finalized arrangements for its flagship campus situated at Block 11 in Dubai International Academic City (DIAC). Spanning 180,000 square feet of purposefully configured spatial architecture, the campus represents a major milestone in Indian-UAE academic cooperation.",
      "The newly configured facility features 22 specialized teaching laboratories, a high-performance computing cluster, dedicated design studios, and an expansive learning commons. Designed around natural daylight and traditional regional arch motifs, the campus accommodates 2,400 students across undergraduate, postgraduate, and foundation cohorts.",
      "With licensing and regulatory permits underway through the Knowledge and Human Development Authority (KHDA), the campus is scheduled to welcome its inaugural cohort in January 2027."
    ]
  },
  {
    id: "news-2",
    slug: "january-intake-open-38-programmes",
    title: "January intake now open across 38 programmes",
    titleAr: "فتح باب القبول لدورة يناير عبر 38 برنامجاً أكاديمياً",
    category: "Admissions",
    categoryAr: "القبول والتسجيل",
    date: "11 Nov 2026",
    isoDate: "2026-11-11",
    featured: false,
    image: "/assets/rkdf-library.jpg",
    summary: "Applications are officially open for early entry across Computing, Business, Engineering, Health Sciences, Law, and Design.",
    summaryAr: "بدء استقبال طلبات الالتحاق لبرامج البكالوريوس والدراسات العليا والمسار التأسيسي لدورة يناير.",
    body: [
      "The Office of Admissions has announced the opening of candidate portals for the inaugural January 2027 intake. Prospected students can apply online for 38 programmes spanning 7 academic schools.",
      "Early applicants benefit from guaranteed priority campus housing in Academic City and automated eligibility reviews for Merit Excellence Awards offering up to 25% tuition fee reduction."
    ]
  },
  {
    id: "news-3",
    slug: "prof-amira-al-hashimi-appointed-vice-chancellor",
    title: "Prof. Amira Al-Hashimi appointed founding Vice-Chancellor",
    titleAr: "تعيين الدكتورة أميرة الهاشمي نائباً مؤسساً لرئيس الجامعة",
    category: "Faculty",
    categoryAr: "الهيئة التدريسية",
    date: "04 Nov 2026",
    isoDate: "2026-11-04",
    featured: false,
    image: "/assets/rkdf-campus-hero.jpg",
    summary: "Distinguished researcher and former Cambridge fellow takes the helm of RKDF University Dubai to lead its academic mission.",
    summaryAr: "الأكاديمية والباحثة البارزة تتولى قيادة الجامعة لتحقيق رؤيتها الأكاديمية والبحثية المتميزة.",
    body: [
      "The Board of Trustees has announced the appointment of Professor Amira Al-Hashimi as the founding Vice-Chancellor of RKDF University Dubai. Bringing over two decades of international leadership experience across higher education institutions in the UK, Singapore, and the UAE, Prof. Al-Hashimi will oversee academic governance and research clusters."
    ]
  },
  {
    id: "news-4",
    slug: "placement-agreement-meridian-gulf-logistics",
    title: "Placement agreement with Meridian Gulf Logistics",
    titleAr: "اتفاقية تدريب ميداني وتوظيف مع ميريديان الخليج للخدمات اللوجستية",
    category: "Partnerships",
    categoryAr: "الشراكات المؤسسية",
    date: "28 Oct 2026",
    isoDate: "2026-10-28",
    featured: false,
    image: "/assets/rkdf-engineering.jpg",
    summary: "Strategic corporate tie-up guarantees paid 12-week placements and executive mentorship for logistics, supply chain and AI undergraduates.",
    summaryAr: "شراكة استراتيجية تضمن تدريباً عملياً مدفوع الأجر لمدة 12 أسبوعاً وفرص توظيف لخريجي الهندسة وسلاسل التوريد.",
    body: [
      "RKDF University Dubai has signed an extensive partnership memorandum with regional logistics titan Meridian Gulf Logistics. The agreement reserves 35 annual placement seats with direct commercial rotations at Jebel Ali Port and Al Maktoum International airport logistics corridors."
    ]
  },
  {
    id: "news-5",
    slug: "fitout-begins-22-teaching-laboratories",
    title: "Fit-out begins on 22 teaching laboratories",
    titleAr: "بدء تجهيز 22 مختبراً تعليمياً وتطبيقياً متخصصاً",
    category: "Campus",
    categoryAr: "الحرم الجامعي",
    date: "15 Oct 2026",
    isoDate: "2026-10-15",
    featured: false,
    image: "/assets/rkdf-research.jpg",
    summary: "Specialist contractors commence installation of cleanrooms, robotics testing pens, and spatial design fabrication equipment.",
    summaryAr: "المقاولون المتخصصون يبدأون تركيب أحدث المعدات لمختبرات الذكاء الاصطناعي والروبوتات والمواد المتقدمة.",
    body: [
      "Phase two construction work inside Block 11 has commenced with turnkey laboratory engineering contractors. The facilities encompass a dedicated Gulf AI Compute Room, a low-carbon concrete environmental test rig, and an autonomous navigation flight zone for mechatronics students."
    ]
  }
];
