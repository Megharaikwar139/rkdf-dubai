import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

const idx = html.indexOf('20087c5');
while (idx !== -1) {
  console.log('Found 20087c5 at:', idx);
  console.log(html.slice(Math.max(0, idx - 100), Math.min(html.length, idx + 300)));
  break;
}

// Let's also search for post css files linked in HTML
const cssLinks = [...html.matchAll(/href="([^"]*post-12584\.css[^"]*)"/gi)].map(x => x[1]);
console.log('Post CSS link:', cssLinks);
