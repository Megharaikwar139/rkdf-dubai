import fs from 'fs';
import path from 'path';
import https from 'https';

const assetsDir = path.resolve('public/assets/home1');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const urls = [
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/09/img-52.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/09/img-53.webp'
];

function download(url) {
  return new Promise((resolve) => {
    const filename = path.basename(new URL(url).pathname);
    const dest = path.join(assetsDir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.warn(`Failed ${url}: HTTP ${res.statusCode}`);
        file.close();
        resolve();
      }
    }).on('error', (err) => {
      console.warn(`Error ${url}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const u of urls) {
    await download(u);
  }
}

run();
