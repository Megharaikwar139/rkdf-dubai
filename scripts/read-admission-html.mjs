import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

const idx = html.indexOf('08fd830');
if (idx !== -1) {
  console.log('Admission snippet:');
  console.log(html.slice(Math.max(0, idx - 400), Math.min(html.length, idx + 1500)));
}
