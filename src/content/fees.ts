export interface HousingOption {
  id: string;
  name: string;
  nameAr: string;
  monthlyRangeAED: string;
  monthlyCost: number;
  description: string;
}

export const housingOptions: HousingOption[] = [
  {
    id: "none",
    name: "No university housing (Day student / Local resident)",
    nameAr: "بدون سكن جامعي (طالب مقيم)",
    monthlyRangeAED: "AED 0",
    monthlyCost: 0,
    description: "Living with family or arranging independent private housing in Dubai."
  },
  {
    id: "shared",
    name: "Shared Student Residence (Twin en-suite in Academic City)",
    nameAr: "سكن طلابي مشترك (غرفة مزدوجة مع حمام خاص)",
    monthlyRangeAED: "AED 2,800 – 4,200 / mo",
    monthlyCost: 3500,
    description: "Modern shared apartments with study desks, gym, swimming pool, high-speed Wi-Fi, and shuttle bus to campus."
  },
  {
    id: "studio",
    name: "Private Studio Apartment (Solo en-suite in Academic City)",
    nameAr: "استوديو خاص مستقل في المدينة الأكاديمية",
    monthlyRangeAED: "AED 4,500 – 6,500 / mo",
    monthlyCost: 5500,
    description: "Self-contained private studio with kitchenette, private bathroom, 24/7 security, and dedicated workspace."
  }
];

export interface ScholarshipBand {
  id: string;
  name: string;
  nameAr: string;
  percentage: number;
  criteria: string;
  criteriaAr: string;
}

export const scholarshipBands: ScholarshipBand[] = [
  {
    id: "none",
    name: "Standard Tuition (No Scholarship)",
    nameAr: "الرسوم العادية (بدون منحة)",
    percentage: 0,
    criteria: "Standard fee schedule payable in semester installments or monthly plan.",
    criteriaAr: "جدول الرسوم القياسي قابل للتقسيط الفصلي أو الشهري."
  },
  {
    id: "merit",
    name: "Merit Excellence Award (25% off)",
    nameAr: "منحة التميز الأكاديمي (خصم 25%)",
    percentage: 25,
    criteria: "Awarded to high-achieving applicants (CBSE >85%, IB >32 points, or GPA >3.5).",
    criteriaAr: "تمنح للطلاب المتفوقين دراسياً الحاصلين على أعلى المعدلات."
  },
  {
    id: "early",
    name: "Early-Bird Commitment Grant (10% off)",
    nameAr: "منحة التسجيل المبكر (خصم 10%)",
    percentage: 10,
    criteria: "Applicable to admissions confirmed and deposited before deadline.",
    criteriaAr: "تسري على طلبات القبول المؤكدة مع سداد الوديعة قبل الموعد المحدد."
  },
  {
    id: "sibling",
    name: "Family & Sibling Bursary (15% off)",
    nameAr: "منحة الأخوة والعائلة (خصم 15%)",
    percentage: 15,
    criteria: "Granted where two or more siblings are concurrently enrolled at RKDF campuses.",
    criteriaAr: "تمنح عند تسجيل شقيقين أو أكثر في الجامعة بنفس الفترة."
  },
  {
    id: "alumni",
    name: "RKDF Global Alumni & Continuing Scholar (10% off)",
    nameAr: "منحة خريجي RKDF لمواصلة الدراسات العليا (خصم 10%)",
    percentage: 10,
    criteria: "For graduates of RKDF University Bhopal progressing to Dubai postgraduate programmes.",
    criteriaAr: "لخريجي الحرم الجامعي في بهوبال الملتحقين ببرامج الدراسات العليا بدبي."
  }
];

export const livingExpensesInDubai = [
  { item: "Metro pass (Nol Card)", cost: "AED 350 / mo", icon: "Train" },
  { item: "Campus meal (subsidised cafeteria)", cost: "AED 28 avg", icon: "Utensils" },
  { item: "University student visa sponsorship", cost: "1-year renewable", icon: "Passport" },
  { item: "Phone + 5G mobile data", cost: "AED 120 / mo", icon: "Smartphone" }
];
