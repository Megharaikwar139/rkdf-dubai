import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

const idx = html.indexOf('Admission At');
if (idx !== -1) {
  console.log('Found "Admission At" at:', idx);
  console.log(html.slice(Math.max(0, idx - 800), Math.min(html.length, idx + 1200)));
} else {
  console.log('"Admission At" not found directly, searching for "Admission"...');
}
