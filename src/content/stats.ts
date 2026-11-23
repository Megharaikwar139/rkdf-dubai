export interface StatFigure {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  labelAr: string;
  caption: string;
  iconName: string;
}

export const keyFigures: StatFigure[] = [
  {
    id: "students",
    value: 2400,
    prefix: "",
    suffix: "",
    label: "Student capacity",
    labelAr: "طاقة استيعابية للطلاب",
    caption: "Across purpose-built campus in DIAC Block 11",
    iconName: "Users"
  },
  {
    id: "faculty",
    value: 180,
    prefix: "",
    suffix: "",
    label: "World-class faculty",
    labelAr: "عضو هيئة تدريس متميز",
    caption: "61% hold doctorates from premier global institutions",
    iconName: "GraduationCap"
  },
  {
    id: "nationalities",
    value: 46,
    prefix: "",
    suffix: "+",
    label: "Nationalities",
    labelAr: "جنسية في الحرم الجامعي",
    caption: "A multicultural microcosm reflecting Dubai's global ethos",
    iconName: "Globe2"
  },
  {
    id: "labs",
    value: 22,
    prefix: "",
    suffix: "",
    label: "Labs & studios",
    labelAr: "مختبر واستوديو متقدم",
    caption: "AI clusters, materials testing rigs, and design fabrication suites",
    iconName: "FlaskConical"
  },
  {
    id: "outcomes",
    value: 94,
    prefix: "",
    suffix: "%",
    label: "Graduate outcomes",
    labelAr: "نسبة توظيف الخريجين",
    caption: "Employed or in graduate school within 6 months",
    iconName: "Briefcase"
  },
  {
    id: "societies",
    value: 31,
    prefix: "",
    suffix: "",
    label: "Student societies",
    labelAr: "نادياً ومجتمعاً طلابياً",
    caption: "From robotics and model UN to cricket and design collectives",
    iconName: "Sparkles"
  }
];

export const breakdownStats = {
  total: 38,
  ug: 26,
  pg: 7,
  fd: 5,
  schoolsCount: 7
};

export const outcomesStats = [
  {
    value: "94%",
    numeric: 94,
    label: "In work or further study within 6 months",
    labelAr: "في سوق العمل أو الدراسات العليا خلال 6 أشهر",
    sub: "Surveyed across inaugural tracking cohort"
  },
  {
    value: "AED 11,500",
    numeric: 11500,
    label: "Median starting salary",
    labelAr: "متوسط الراتب المبدئي للخريجين",
    sub: "Across technology, engineering and finance roles"
  },
  {
    value: "68%",
    numeric: 68,
    label: "Retained by placement host",
    labelAr: "تم توظيفهم لدى جهات التدريب الميداني",
    sub: "Transitioned directly from 12-week placements"
  },
  {
    value: "310",
    numeric: 310,
    label: "Partner organisations",
    labelAr: "شريك توظيف وتدريب مؤسسي",
    sub: "Direct industry linkages across UAE & GCC"
  }
];

export const researchStats = {
  labs: 22,
  fundedProjects: 9,
  researchBudgetAED: "14M",
  patentsFiled: 6
};
