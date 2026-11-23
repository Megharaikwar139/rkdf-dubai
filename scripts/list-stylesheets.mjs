import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

const css = [...html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi)].map(x => x[1]);
console.log('Total stylesheets:', css.length);
console.log(css.slice(0, 10));
