import fs from 'fs';
import path from 'path';
import https from 'https';

const assetsDir = path.resolve('public/assets/home8');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const urls = [
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/h8_banner-img.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/rectangle-9257-1-6899b5763a08f-1.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/ellipse-368-1-6899b89c8124b.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/signature.svg',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/h8_p4.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/h8_p3.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/rectangle-9274-689ab595d9071.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/img-6-689ac6deede56.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/Component-13.svg',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/img-7-689ac6deceee5.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/07/1-668a3b3758d6f.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/07/2-668a3b38785e6.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/07/3-668a3b38c2618.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/07/4-668a3b39cf942.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/title.svg',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/12/author-1-66854088eb598.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/12/author-2-66854088e2b71.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/08/img-23-300x340.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/08/img-24-150x150.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2024/06/frame_522_1x-150x150.webp',
  'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/rectangle-9313-68a1780b910c7.webp'
];

function download(url) {
  return new Promise((resolve) => {
    const filename = path.basename(new URL(url).pathname);
    const dest = path.join(assetsDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      console.log(`Already exists: ${filename}`);
      return resolve();
    }
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
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        resolve();
      }
    }).on('error', (err) => {
      console.warn(`Error downloading ${url}:`, err.message);
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve();
    });
  });
}

async function run() {
  console.log("Downloading Home-8 assets...");
  for (const u of urls) {
    await download(u);
  }
  console.log("Done downloading Home-8 assets.");
}

run();
