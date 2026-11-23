export interface CampusEvent {
  id: string;
  title: string;
  titleAr: string;
  type: "Open Day" | "Online Info Session" | "Workshop" | "Lecture";
  date: string;
  time: string;
  location: string;
  locationAr: string;
  description: string;
  rsvpOpen: boolean;
}

export const campusEvents: CampusEvent[] = [
  {
    id: "event-1",
    title: "Campus Open Day & Architecture Tour",
    titleAr: "اليوم المفتوح وجولة الحرم الجامعي",
    type: "Open Day",
    date: "12 Dec 2026",
    time: "10:00 – 15:00 GST",
    location: "Block 11, Dubai International Academic City",
    locationAr: "المبنى 11، المدينة الأكاديمية بدبي",
    description: "Explore the new teaching labs, meet faculty deans, participate in portfolio reviews, and receive an instant preliminary offer evaluation.",
    rsvpOpen: true
  },
  {
    id: "event-2",
    title: "Online Info Session: Fees, Scholarships & Visas",
    titleAr: "جلسة افتراضية: الرسوم، المنح، وتأشيرة الإقامة للطلاب",
    type: "Online Info Session",
    date: "03 Dec 2026",
    time: "17:00 – 18:30 GST",
    location: "Live Webinar (Zoom / Teams)",
    locationAr: "عبر الإنترنت (بث مباشر)",
    description: "A comprehensive walkthrough for international families covering living costs, university visa sponsorship, installment options, and dual-campus transfer.",
    rsvpOpen: true
  },
  {
    id: "event-3",
    title: "Inaugural Intake Open Day & Academic Fair",
    titleAr: "معرض القبول واليوم المفتوح لدورة يناير",
    type: "Open Day",
    date: "17 Jan 2027",
    time: "10:00 – 16:00 GST",
    location: "Block 11, Dubai International Academic City",
    locationAr: "المبنى 11، المدينة الأكاديمية بدبي",
    description: "The final in-person consultation event before January classes commence. One-on-one meetings with admissions counselors and student mentors.",
    rsvpOpen: true
  }
];
