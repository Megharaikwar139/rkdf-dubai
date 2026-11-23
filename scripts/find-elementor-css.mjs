import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

const css = [...html.matchAll(/href="([^"]*elementor\/css\/post-[^"]*)"/gi)].map(x => x[1]);
console.log('Elementor post CSS:', css);
