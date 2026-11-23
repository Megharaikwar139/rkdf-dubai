export interface CurriculumRequirement {
  id: string;
  name: string;
  nameAr: string;
  requirement: string;
  requirementAr: string;
  notes: string;
  notesAr: string;
}

export const academicRequirements: CurriculumRequirement[] = [
  {
    id: "cbse-icse",
    name: "CBSE / ICSE / Indian State Boards",
    nameAr: "شهادة الثانوية الهندية (CBSE / ICSE)",
    requirement: "65% aggregate across 5 main subjects",
    requirementAr: "معدل 65% في المواد الخمس الأساسية",
    notes: "Minimum 70% in Mathematics and Physics required for Engineering and Computing majors.",
    notesAr: "يشترط 70% كحد أدنى في الرياضيات والفيزياء للتخصصات الهندسية والحوسبة."
  },
  {
    id: "ib",
    name: "International Baccalaureate (IB)",
    nameAr: "البكالوريا الدولية (IB)",
    requirement: "26 total points minimum",
    requirementAr: "26 نقطة كحد أدنى",
    notes: "Must include HL Mathematics/Physics at grade 4 or above for STEM programmes.",
    notesAr: "يشترط دراسة الرياضيات أو الفيزياء في المستوى العالي (HL) بدرجة 4 على الأقل لبرامج العلوم والتكنولوجيا."
  },
  {
    id: "a-level",
    name: "British Curriculum (A-Levels / Cambridge)",
    nameAr: "المنهاج البريطاني (A-Levels)",
    requirement: "BCC grades across 3 A-Levels",
    requirementAr: "درجات BCC في 3 مواد A-Level",
    notes: "Plus at least 5 IGCSE subjects with grades 9–4 (A*–C) including English and Mathematics.",
    notesAr: "بالإضافة إلى 5 مواد IGCSE بدرجات لا تقل عن C بما فيها الإنجليزية والرياضيات."
  },
  {
    id: "american-hs",
    name: "American High School Diploma",
    nameAr: "الدبلومة الأمريكية للثانوية العامة",
    requirement: "Cumulative GPA 2.8 / 4.0",
    requirementAr: "معدل تراكمي 2.8 من 4.0",
    notes: "SAT score of 1050+ or ACT 22+ recommended for direct entry to computing/engineering.",
    notesAr: "يوصى بالحصول على 1050+ في اختبار SAT أو 22+ في ACT لبرامج الهندسة والحوسبة."
  },
  {
    id: "uae-moe",
    name: "UAE Ministry of Education (Thanawiya Amma)",
    nameAr: "منهاج وزارة التربية والتعليم الإماراتية (الثانوية العامة)",
    requirement: "70% aggregate (Advanced Track) or 75% (General Track)",
    requirementAr: "معدل 70% (المسار المتقدم) أو 75% (المسار العام)",
    notes: "EmSAT scores accepted in lieu of standardised placement tests.",
    notesAr: "تقبل اختبارات إمسات (EmSAT) كبديل لاختبارات تحديد المستوى."
  },
  {
    id: "waec",
    name: "West African Examinations Council (WAEC / WASSCE)",
    nameAr: "شهادة الثانوية لغرب أفريقيا (WAEC / WASSCE)",
    requirement: "5 credit passes (C6 or better)",
    requirementAr: "5 درجات اجتياز بدرجة C6 أو أعلى",
    notes: "Must include English Language, Mathematics, and relevant science subjects.",
    notesAr: "يجب أن تشمل اللغة الإنجليزية، الرياضيات، والمواد العلمية ذات الصلة."
  }
];

export const englishRequirements = [
  { test: "IELTS Academic", score: "6.0 overall (no band < 5.5)" },
  { test: "TOEFL iBT", score: "72 overall (min 17 writing)" },
  { test: "EmSAT Achieve English", score: "1250" },
  { test: "PTE Academic", score: "54 overall" },
  { test: "Duolingo English Test", score: "105" }
];
