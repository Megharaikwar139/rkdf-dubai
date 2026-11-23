export type Locale = "en" | "ar";

export interface Translations {
  nav: {
    about: string;
    academics: string;
    admissions: string;
    campus: string;
    careers: string;
    news: string;
    apply: string;
    search: string;
    toggleLang: string;
    menu: string;
    programmes: string;
    whatsapp: string;
    home: string;
  };
  hero: {
    intakeBadge: string;
    h1Line1: string;
    h1Line2: string;
    h1Line3: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pillNationalities: string;
    pillTuition: string;
    pillOutcomes: string;
    trustKhda: string;
    trustMohesr: string;
    trustNaac: string;
    trustDegree: string;
  };
  sections: {
    figuresTitle: string;
    figuresSub: string;
    twoCampusesTitle: string;
    twoCampusesSub: string;
    accreditationTitle: string;
    accreditationSub: string;
    schoolsTitle: string;
    schoolsSub: string;
    matcherTitle: string;
    matcherSub: string;
    whyTitle: string;
    whySub: string;
    costTitle: string;
    costSub: string;
    lifeTitle: string;
    lifeSub: string;
    researchTitle: string;
    researchSub: string;
    outcomesTitle: string;
    outcomesSub: string;
    voicesTitle: string;
    voicesSub: string;
    newsTitle: string;
    newsSub: string;
    visitTitle: string;
    visitSub: string;
  };
  common: {
    viewAllProgrammes: string;
    exploreSchool: string;
    learnMore: string;
    applyNow: string;
    bookTour: string;
    readArticle: string;
    rsvp: string;
    tuitionBreakdown: string;
    calculateFees: string;
    entryRequirements: string;
    searchPlaceholder: string;
    noResults: string;
    close: string;
    intakeCountdownPrefix: string;
    intakeCountdownSuffix: string;
    daysLeft: string;
    months: string;
    perYear: string;
    totalFee: string;
    enquirySuccess: string;
    submitEnquiry: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      about: "About",
      academics: "Academics",
      admissions: "Admissions",
      campus: "Campus",
      careers: "Careers",
      news: "News",
      apply: "Apply",
      search: "Search",
      toggleLang: "عربي",
      menu: "Menu",
      programmes: "Programmes",
      whatsapp: "WhatsApp",
      home: "Home"
    },
    hero: {
      intakeBadge: "JANUARY 2027 INTAKE · APPLICATIONS OPEN",
      h1Line1: "Study in Dubai.",
      h1Line2: "Graduate into",
      h1Line3: "the world.",
      sub: "RKDF University Dubai brings three decades of Indian academic heritage to Dubai International Academic City — 38 programmes, seven schools, and cohorts small enough that your dean knows your name.",
      ctaPrimary: "Start your application",
      ctaSecondary: "Explore 38 programmes",
      pillNationalities: "46 nationalities on campus",
      pillTuition: "AED 62,000 / year average tuition",
      pillOutcomes: "94% in work within 6 months",
      trustKhda: "KHDA Permit No. DXB-HE-2026-0147 (DUMMY)",
      trustMohesr: "MoHESR/CAA licensure in progress (DUMMY)",
      trustNaac: "Home campus NAAC A+",
      trustDegree: "Dual-campus degree with Bhopal"
    },
    sections: {
      figuresTitle: "Key Figures",
      figuresSub: "A modern academic institution designed at human scale.",
      twoCampusesTitle: "Two Campuses. One Degree.",
      twoCampusesSub: "Three decades in Bhopal, now rooted in Dubai International Academic City.",
      accreditationTitle: "Accreditation & Recognition",
      accreditationSub: "Recognised academic quality, rigorous oversight, and global mobility.",
      schoolsTitle: "Seven Academic Schools",
      schoolsSub: "38 future-focused undergraduate, postgraduate, and foundation degrees.",
      matcherTitle: "Find Your Match",
      matcherSub: "Answer three short questions to discover the programme designed for your ambitions.",
      whyTitle: "Why RKDF Dubai",
      whySub: "Six architectural pillars that make our educational experience distinct.",
      costTitle: "Cost & Admissions",
      costSub: "Transparent fees, no hidden surcharges, and comprehensive scholarship tiers.",
      lifeTitle: "Life in Dubai",
      lifeSub: "A safe, hyper-connected global hub bathed in year-round sunshine.",
      researchTitle: "Applied Research",
      researchSub: "Solving pressing challenges across artificial intelligence, arid construction, and energy.",
      outcomesTitle: "Graduate Outcomes",
      outcomesSub: "Real industry placements that convert directly into full-time roles.",
      voicesTitle: "Student Voices",
      voicesSub: "Hear directly from students navigating our modern learning environment.",
      newsTitle: "News & Events",
      newsSub: "The latest campus milestones, partnerships, and upcoming open days.",
      visitTitle: "Visit Campus",
      visitSub: "Experience our state-of-the-art facilities in Dubai International Academic City."
    },
    common: {
      viewAllProgrammes: "See all 38 programmes",
      exploreSchool: "Explore School →",
      learnMore: "Learn More",
      applyNow: "Apply Now",
      bookTour: "Book a Campus Tour",
      readArticle: "Read Article",
      rsvp: "RSVP Now",
      tuitionBreakdown: "Tuition Breakdown",
      calculateFees: "Calculate My Tuition",
      entryRequirements: "Entry Requirements",
      searchPlaceholder: "Search programmes, schools, admissions...",
      noResults: "No results found matching your search.",
      close: "Close",
      intakeCountdownPrefix: "January 2027 intake closes in",
      intakeCountdownSuffix: "days",
      daysLeft: "days",
      months: "months",
      perYear: "per year",
      totalFee: "total",
      enquirySuccess: "Thank you! Your enquiry has been received. Our admissions team will reach out within 24 hours.",
      submitEnquiry: "Submit Enquiry"
    }
  },
  ar: {
    nav: {
      about: "عن الجامعة",
      academics: "الكليات والبرامج",
      admissions: "القبول والتسجيل",
      campus: "الحرم الجامعي",
      careers: "التوظيف والمستقبل",
      news: "الأخبار",
      apply: "قدّم الآن",
      search: "بحث",
      toggleLang: "EN",
      menu: "القائمة",
      programmes: "البرامج",
      whatsapp: "واتساب",
      home: "الرئيسية"
    },
    hero: {
      intakeBadge: "دورة يناير 2027 · باب القبول مفتوح الآن",
      h1Line1: "تعلّم في دبي.",
      h1Line2: "وانطلق نحو",
      h1Line3: "العالمية.",
      sub: "تنقل جامعة RKDF دبي ثلاثة عقود من الإرث الأكاديمي العريق إلى مدينة دبي الأكاديمية العالمية — 38 برنامجاً دراسياً عبر سبع كليات، بدفعات صغيرة تسمح للعميد بمعرفتك شخصياً.",
      ctaPrimary: "ابدأ طلب الالتحاق",
      ctaSecondary: "استكشف 38 برنامجاً",
      pillNationalities: "46 جنسية في الحرم الجامعي",
      pillTuition: "62,000 درهم / متوسط الرسوم السنوية",
      pillOutcomes: "94% في سوق العمل خلال 6 أشهر",
      trustKhda: "تصريح هيئة المعرفة والتنمية البشرية DXB-HE-2026-0147 (افتراضي)",
      trustMohesr: "الترخيص المؤسسي الاتحادي قيد الإجراء (افتراضي)",
      trustNaac: "الحرم الأم حاصل على تقييم NAAC A+",
      trustDegree: "شهادة مشتركة ومعتمدة مع بهوبال"
    },
    sections: {
      figuresTitle: "أرقام وإحصائيات رئيسية",
      figuresSub: "مؤسسة أكاديمية حديثة مصممة على مقياس إنساني تفاعلي.",
      twoCampusesTitle: "حرمان جامعيان. شهادة واحدة.",
      twoCampusesSub: "ثلاثة عقود من الريادة في بهوبال، والآن في قلب مدينة دبي الأكاديمية.",
      accreditationTitle: "الاعتماد والاعتراف الأكاديمي",
      accreditationSub: "جودة أكاديمية معترف بها، إشراف حكومي رصين، وتنقل دولي سلس.",
      schoolsTitle: "سبع كليات أكاديمية",
      schoolsSub: "38 برنامجاً متميزاً لمرحلة البكالوريوس والدراسات العليا والسنة التأسيسية.",
      matcherTitle: "اختر برنامجك الأكاديمي",
      matcherSub: "أجب عن 3 أسئلة سريعة لنقترح لك البرامج التي تناسب طموحاتك ومسارك.",
      whyTitle: "لماذا جامعة RKDF دبي",
      whySub: "ست ركائز جوهرية تجعل تجربتك التعليمية فريدة ومستدامة.",
      costTitle: "الرسوم والقبول",
      costSub: "رسوم سنوية شفافة دون أية تكاليف مخفية، مع منح استحقاق متنوعة.",
      lifeTitle: "الحياة في دبي",
      lifeSub: "مدينة عالمية آمنة ومترابطة تحظى بأشعة الشمس والفرص الواعدة على مدار العام.",
      researchTitle: "الأبحاث التطبيقية",
      researchSub: "ابتكار حلول عملية في الذكاء الاصطناعي وهندسة البيئات الصحراوية وتكنولوجيا الطاقة.",
      outcomesTitle: "مستقبل الخريجين",
      outcomesSub: "تدريب مهني حقيقي يتحول مباشرة إلى وظائف دائمة في كبرى المؤسسات.",
      voicesTitle: "أصوات الطلاب",
      voicesSub: "تجارب حقيقية لطلابنا في بيئة أكاديمية رحبة وداعمة.",
      newsTitle: "الأخبار والفعاليات",
      newsSub: "أحدث التطورات والشراكات ومواعيد الأيام المفتوحة القادمة.",
      visitTitle: "زيارة الحرم الجامعي",
      visitSub: "تعرف عن قرب على مختبراتنا وقاعاتنا في مدينة دبي الأكاديمية العالمية."
    },
    common: {
      viewAllProgrammes: "استعرض جميع الـ 38 برنامجاً",
      exploreSchool: "استكشف الكلية ←",
      learnMore: "اعرف المزيد",
      applyNow: "قدّم الآن",
      bookTour: "احجز جولة في الحرم",
      readArticle: "اقرأ المقال",
      rsvp: "تأكيد الحضور",
      tuitionBreakdown: "تفاصيل الرسوم الدراسية",
      calculateFees: "احسب الرسوم التقديرية",
      entryRequirements: "شروط القبول",
      searchPlaceholder: "ابحث عن البرامج، الكليات، القبول...",
      noResults: "لم يتم العثور على نتائج تطابق بحثك.",
      close: "إغلاق",
      intakeCountdownPrefix: "ينتهي التقديم لدورة يناير 2027 خلال",
      intakeCountdownSuffix: "يوماً",
      daysLeft: "يوماً",
      months: "شهراً",
      perYear: "سنوياً",
      totalFee: "إجمالي البرنامج",
      enquirySuccess: "شكراً لك! تم استلام استفسارك بنجاح وسيتواصل معك فريق القبول خلال 24 ساعة.",
      submitEnquiry: "إرسال الاستفسار"
    }
  }
};
