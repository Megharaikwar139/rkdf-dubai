export interface StudentVoice {
  id: string;
  name: string;
  nameAr: string;
  programme: string;
  country: string;
  countryAr: string;
  classYear: string;
  quote: string;
  quoteAr: string;
  image: string;
  avatarBg: string;
}

export const studentVoices: StudentVoice[] = [
  {
    id: "voice-1",
    name: "Yusuf Rahman",
    nameAr: "يوسف رحمن",
    programme: "BSc Computer Science (AI)",
    country: "Pakistan",
    countryAr: "باكستان",
    classYear: "Class of 2031",
    quote: "I chose Dubai over London for the placement, and stayed for it.",
    quoteAr: "اخترت دبي بدلاً من لندن من أجل فرصة التدريب الميداني الحقيقية، وبقيت من أجلها.",
    image: "/assets/rkdf-student-1.jpg",
    avatarBg: "#F6C89A"
  },
  {
    id: "voice-2",
    name: "Lina Haddad",
    nameAr: "لينا حداد",
    programme: "MBA Executive",
    country: "Jordan",
    countryAr: "الأردن",
    classYear: "Class of 2028",
    quote: "Thirty people in my cohort. The dean knows my name. That was the point.",
    quoteAr: "ثلاثون شخصاً فقط في دفعتي. العميد يعرفني بالاسم. كان هذا جوهر اختياري.",
    image: "/assets/rkdf-student-2.jpg",
    avatarBg: "#CFE3EE"
  },
  {
    id: "voice-3",
    name: "Chidi Okonkwo",
    nameAr: "تشيدي أوكونكو",
    programme: "BEng Civil Engineering",
    country: "Nigeria",
    countryAr: "نيجيريا",
    classYear: "Class of 2031",
    quote: "The Bhopal semester was the cheapest, strangest, best thing I did.",
    quoteAr: "فصل بهوبال الدراسي كان أكثر التجارب تميزاً وقيمة وتنوعاً في مسيرتي.",
    image: "/assets/rkdf-student-3.jpg",
    avatarBg: "#CFE5D4"
  },
  {
    id: "voice-4",
    name: "Ananya Pillai",
    nameAr: "أنانيا بيلاي",
    programme: "BBA",
    country: "India",
    countryAr: "الهند",
    classYear: "Class of 2030",
    quote: "Fees I could show my parents on one page. No surprises later.",
    quoteAr: "رسوم دراسية واضحة في صفحة واحدة استطعت عرضها على عائلتي دون أي تكاليف خفية.",
    image: "/assets/rkdf-student-1.jpg",
    avatarBg: "#F2EAD9"
  }
];
