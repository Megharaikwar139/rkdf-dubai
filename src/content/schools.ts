export interface School {
  id: string;
  number: string;
  name: string;
  nameAr: string;
  programmesCount: number;
  image: string;
  dean: string;
  deanRole: string;
  disciplines: string[];
  description: string;
  descriptionAr: string;
  leadSnippet: string;
}

export const schools: School[] = [
  {
    id: "computing",
    number: "01",
    name: "Computing & Artificial Intelligence",
    nameAr: "الحوسبة والذكاء الاصطناعي",
    programmesCount: 7,
    image: "/assets/rkdf-engineering.jpg",
    dean: "Prof. Tariq Al-Mansoor",
    deanRole: "Dean, School of Computing & AI (PhD Imperial College)",
    disciplines: ["Artificial Intelligence", "Cybersecurity", "Data Science", "Software Architecture"],
    description: "Equipping next-generation engineers with deep foundations in neural architectures, cyber defence, and real-time cloud scale systems.",
    descriptionAr: "تأهيل مهندسي الجيل القادم بأسس عميقة في البنى العصبية والدفاع السيبراني والأنظمة السحابية.",
    leadSnippet: "7 industry-aligned degrees built alongside Dubai's top technology studios."
  },
  {
    id: "business",
    number: "02",
    name: "Business & Management",
    nameAr: "الأعمال والإدارة",
    programmesCount: 6,
    image: "/assets/rkdf-campus-1.jpg",
    dean: "Dr. Maya S. Kirloskar",
    deanRole: "Dean, School of Business (DBA INSEAD, ex-McKinsey)",
    disciplines: ["Fintech & Banking", "Executive Leadership", "Global Supply Chain", "Digital Growth"],
    description: "Developing modern operators ready for GCC commerce, venture finance, and cross-border emerging market operations.",
    descriptionAr: "تطوير قادة الأعمال المعاصرين للأسواق الإقليمية والتمويل الجريء وسلاسل التوريد العالمية.",
    leadSnippet: "Real venture capstones, boardroom simulations, and DIFC industry immersions."
  },
  {
    id: "engineering",
    number: "03",
    name: "Engineering & Built Environment",
    nameAr: "الهندسة والبيئة العمرانية",
    programmesCount: 6,
    image: "/assets/rkdf-architecture.jpg",
    dean: "Prof. Rajesh Varma",
    deanRole: "Dean, Built Environment (FICE, MTech IIT Roorkee)",
    disciplines: ["Civil Infrastructure", "Mechatronics & Robotics", "Renewable Power", "Low-Carbon Architecture"],
    description: "Fusing rigorous physical engineering with sustainable desert design and automated smart city infrastructure.",
    descriptionAr: "دمج الهندسة التطبيقية الدقيقة مع التصميم المستدام للمناطق الصحراوية والبنية التحتية الذكية.",
    leadSnippet: "State-of-the-art materials testing, robotics labs, and LEED platinum modeling suites."
  },
  {
    id: "health",
    number: "04",
    name: "Health & Life Sciences",
    nameAr: "العلوم الصحية والحياتية",
    programmesCount: 5,
    image: "/assets/rkdf-agriculture.jpg",
    dean: "Dr. Farah Qasim",
    deanRole: "Dean, Health Sciences (MBBS, DPhil Oxford)",
    disciplines: ["Biomedical Tech", "Epidemiology", "Clinical Informatics", "Hot-Climate Physiology"],
    description: "Advancing preventative care, genetic analytics, and occupational wellness tailored for arid environments.",
    descriptionAr: "تعزيز الرعاية الصحية الوقائية والتحليلات الجينية وصحة العمل في البيئات الحارة.",
    leadSnippet: "Translational research clusters partnered with leading UAE healthcare systems."
  },
  {
    id: "law",
    number: "05",
    name: "Law & Public Policy",
    nameAr: "القانون والسياسات العامة",
    programmesCount: 4,
    image: "/assets/rkdf-library.jpg",
    dean: "Adv. Humaid Al-Zaabi",
    deanRole: "Dean of Law (LLM Harvard Law, Senior GCC Counsel)",
    disciplines: ["UAE Commercial Code", "Arbitration & Maritime", "Digital Governance", "Diplomatic Studies"],
    description: "Bridging civil law foundations with common law financial courts and international regulatory frameworks.",
    descriptionAr: "الربط بين القانون المدني والمحاكم المالية والقوانين الدولية المنظمة للأعمال.",
    leadSnippet: "Moot court chamber, bilingual pleadings training, and direct internships with regional chambers."
  },
  {
    id: "design",
    number: "06",
    name: "Design & Media",
    nameAr: "التصميم والإعلام",
    programmesCount: 5,
    image: "/assets/rkdf-campus-3.jpg",
    dean: "Elena Rostova",
    deanRole: "Head of School (MDes Royal College of Art, ex-Pentagram)",
    disciplines: ["Interaction & Product", "Spatial Systems", "Media Production", "Brand Storytelling"],
    description: "Where spatial computing, narrative craft, and tactile materials meet modern human-centered interfaces.",
    descriptionAr: "حيث يلتقي التصميم التفاعلي والحوسبة المكانية ورواية القصص بالواجهات الحديثة.",
    leadSnippet: "Fabrication labs, immersive soundstages, and direct critique sessions with design studios."
  },
  {
    id: "foundation",
    number: "07",
    name: "Foundation & Pathways",
    nameAr: "السنة التأسيسية والمسارات",
    programmesCount: 5,
    image: "/assets/rkdf-campus-2.jpg",
    dean: "Dr. Arthur Pendelton",
    deanRole: "Director of Academic Transition (EdD Columbia University)",
    disciplines: ["Academic English", "STEM Fundamentals", "Business Analytics", "Design Foundations"],
    description: "Accelerating global high school graduates into rigorous university curricula with 1-on-1 mentorship.",
    descriptionAr: "تهيئة خريجي المدارس الثانوية للانتقال السلس للدراسة الجامعية مع إشراف أكاديمي مباشر.",
    leadSnippet: "Guaranteed progression into Year 1 upon completion with small seminar cohorts."
  }
];
