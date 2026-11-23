import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');
const imgs = [...html.matchAll(/https:\/\/[^"'\s]*\.(?:webp|jpg|png)/gi)].map(x => x[0]);
const unique = [...new Set(imgs)];
console.log('Total unique images in unipix_home8.html:', unique.length);

const keywords = ['sport', 'campus', 'event', 'facility', 'research', 'gallery', 'lib', 'student', 'blog', 'news'];
for (const u of unique) {
  for (const k of keywords) {
    if (u.toLowerCase().includes(k)) {
      console.log(`[${k}]`, u);
      break;
    }
  }
}
