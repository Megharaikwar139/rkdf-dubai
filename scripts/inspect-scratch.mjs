import fs from 'fs';

const files = [
  'scratch_hero_banner.html',
  'scratch_marquee_empowering.html',
  'scratch_history_founder.html',
  'scratch_student_life.html',
  'scratch_faculties.html',
  'scratch_professors.html',
  'scratch_upcoming_event.html',
  'scratch_admission_form.html',
  'scratch_testimonials.html',
  'scratch_counters.html',
  'scratch_campus_news.html',
  'scratch_cta_shape_future.html'
];

for (const f of files) {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    console.log(`\n===================== ${f} =====================`);
    const headings = (content.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || []).map(x => x.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
    const imgs = (content.match(/src="([^"]+)"/gi) || []).map(x => x.replace(/src="|"/g, ''));
    const buttons = (content.match(/<a[^>]*class="[^"]*(?:btn|button|rt-e-button)[^"]*"[^>]*>([\s\S]*?)<\/a>/gi) || []).map(x => x.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
    const text = content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    
    console.log("HEADINGS:", headings);
    if (buttons.length) console.log("BUTTONS:", buttons);
    if (imgs.length) console.log("IMAGES:", imgs);
    console.log("PREVIEW TEXT:", text.slice(0, 300));
  }
}
