import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

const idx = html.indexOf('vibrant learning community');
if (idx !== -1) {
  console.log('Found "vibrant learning community" at:', idx);
  console.log(html.slice(Math.max(0, idx - 600), Math.min(html.length, idx + 800)));
}
