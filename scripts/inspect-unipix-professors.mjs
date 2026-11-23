import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

const idx = html.indexOf('e216796');
if (idx !== -1) {
  console.log('Professors snippet in Unipix:');
  console.log(html.slice(idx, idx + 2000));
}
