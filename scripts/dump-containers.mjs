import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

function dumpContainer(id, name) {
  const match = html.match(new RegExp(`<div class="elementor-element elementor-element-${id}[^"]*e-parent"[^>]*>([\\s\\S]*?)(?=<div class="elementor-element elementor-element-[a-z0-9]+[^"]*e-parent"|$)`, 'i'));
  if (match) {
    fs.writeFileSync(`scratch_${name}.html`, match[0]);
    console.log(`Saved scratch_${name}.html (size: ${match[0].length})`);
  } else {
    console.log(`Container ${id} (${name}) not found`);
  }
}

dumpContainer('dcac6f5', 'hero_banner');
dumpContainer('474f759', 'marquee_empowering');
dumpContainer('ec3011b', 'history_founder');
dumpContainer('c7104b9', 'academics_program');
dumpContainer('dd8b89e', 'student_life');
dumpContainer('acef9b8', 'faculties');
dumpContainer('e216796', 'professors');
dumpContainer('22d4114', 'upcoming_event');
dumpContainer('08fd830', 'admission_form');
dumpContainer('861b973', 'testimonials');
dumpContainer('7974ed2', 'counters');
dumpContainer('b0c9542', 'campus_news');
dumpContainer('64752a8', 'cta_shape_future');
dumpContainer('19fdd5b', 'footer');
