import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

const idx = html.indexOf('vibrant learning community');
const parentStart = html.lastIndexOf('e-parent', idx);
console.log('Parent container start around:', parentStart);
console.log(html.slice(parentStart - 60, parentStart + 800));
