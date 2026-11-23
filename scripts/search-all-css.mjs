import fs from 'fs';
import https from 'https';

const html = fs.readFileSync('unipix_home8.html', 'utf8');
const links = [...html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi)].map(x => x[1]);

async function checkLink(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (data.includes('20087c5')) {
          console.log('Found 20087c5 in:', url);
          const idx = data.indexOf('20087c5');
          console.log(data.slice(idx, idx + 400));
        }
        resolve();
      });
    }).on('error', () => resolve());
  });
}

async function main() {
  for (const l of links) {
    if (l.includes('themewant.com')) {
      await checkLink(l);
    }
  }
}

main();
