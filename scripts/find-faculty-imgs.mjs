import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

const matches23 = [...html.matchAll(/https:\/\/[^"'\s]*img-23[^"'\s]*/gi)].map(x => x[0]);
console.log('Matches for img-23:', matches23);

const matches24 = [...html.matchAll(/https:\/\/[^"'\s]*img-24[^"'\s]*/gi)].map(x => x[0]);
console.log('Matches for img-24:', matches24);

const matches7 = [...html.matchAll(/https:\/\/[^"'\s]*img-7[^"'\s]*/gi)].map(x => x[0]);
console.log('Matches for img-7:', matches7);
