import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');
const imgs = [...html.matchAll(/https:\/\/[^"'\s]*\.(?:webp|jpg|png)/gi)].map(x => x[0]);
const unique = [...new Set(imgs)];
console.log(unique);
