import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

function findCss(id) {
  const re = new RegExp(`\\.elementor-element-${id}[^{]*\\{[^}]*\\}`, 'gi');
  const m = html.match(re);
  console.log(`CSS for ${id}:`, m);
}

findCss('20087c5');
findCss('f078461');
findCss('03fb316');
