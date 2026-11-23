import https from 'https';
import fs from 'fs';
import path from 'path';

const targets = [
  {
    url: 'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/group-48095735-689adf1568325.webp',
    name: 'faculty-science.webp'
  },
  {
    url: 'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/group-48095736-689adf13681a1.webp',
    name: 'faculty-commerce.webp'
  },
  {
    url: 'https://themewant.com/products/wordpress/unipix/wp-content/uploads/2025/08/group-48095734-689adf1371713.webp',
    name: 'faculty-arts.webp'
  }
];

for (const t of targets) {
  const dest = path.join('public', 'assets', 'home8', t.name);
  const file = fs.createWriteStream(dest);
  https.get(t.url, res => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Saved ${t.name} (status: ${res.statusCode})`);
    });
  }).on('error', err => console.error(err));
}
