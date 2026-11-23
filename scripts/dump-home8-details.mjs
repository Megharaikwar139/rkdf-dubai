import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

// Let's inspect the sections in more detail
const sections = [
  "SECTION 7: Banner / Hero",
  "SECTION 8: Marquee / Empowering Minds",
  "SECTION 9: University History / Founder",
  "SECTION 10: Academics & Program",
  "SECTION 11: Student Life / Arts & Culture / Athletics",
  "SECTION 13: Faculties & Departments",
  "SECTION 14: University Professors",
  "SECTION 15 & 16: Upcoming Event & Title",
  "SECTION 17: Admission Form",
  "SECTION 18: Testimonials / Voices",
  "SECTION 19: Counters / Statistics",
  "SECTION 20: Campus News",
  "SECTION 21: CTA Shape Your Future",
  "SECTION 22: Footer"
];

console.log("=== INSPECTING DETAILED SECTIONS ===");

// Let's write a helper to extract text and details
function searchKeywords(keyword) {
  const idx = html.indexOf(keyword);
  if (idx !== -1) {
    console.log(`\n=== FOUND KEYWORD "${keyword}" ===`);
    console.log(html.slice(Math.max(0, idx - 200), Math.min(html.length, idx + 800)));
  } else {
    console.log(`Keyword "${keyword}" not found`);
  }
}

searchKeywords('h8_banner-img');
searchKeywords('Empowering Minds, Enriching Lives');
searchKeywords('University History');
searchKeywords('Academics &amp; Program');
searchKeywords('Student Life');
searchKeywords('Our Faculties &amp; Departments');
searchKeywords('University Professors');
searchKeywords('Career Carnival');
searchKeywords('Admission Form');
searchKeywords('Campus News');
searchKeywords('Shape your future');
