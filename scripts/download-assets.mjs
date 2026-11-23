import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '..', 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const assets = [
  {
    name: 'rkdf-building-enhanced.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-building-enhanced-Qoiz8ubu.jpg'
  },
  {
    name: 'rkdf-campus-hero.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-campus-hero-BAdZp6g5.jpg'
  },
  {
    name: 'rkdf-campus-aerial.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-campus-aerial-C6uFAMtL.jpg'
  },
  {
    name: 'rkdf-library.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-library-B3Exvn_A.jpg'
  },
  {
    name: 'rkdf-engineering.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-engineering-Uk_Ts8_o.jpg'
  },
  {
    name: 'rkdf-research.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-research-DwELgYro.jpg'
  },
  {
    name: 'rkdf-architecture.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-architecture-BkUXwW6n.jpg'
  },
  {
    name: 'rkdf-agriculture.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-agriculture-BO-kpOo7.jpg'
  },
  {
    name: 'rkdf-campus-1.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-campus-1-C9qmGH7_.jpg'
  },
  {
    name: 'rkdf-campus-2.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-campus-2-SJudqL4I.jpg'
  },
  {
    name: 'rkdf-campus-3.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-campus-3-DAXmLH5G.jpg'
  },
  {
    name: 'rkdf-campus-4.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-campus-4-C-4EsWiQ.jpg'
  },
  {
    name: 'rkdf-why-bg.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-why-bg-DUsjmr4J.jpg'
  },
  {
    name: 'rkdf-student-1.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-student-1-Ba3PuFFe.jpg'
  },
  {
    name: 'rkdf-student-2.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-student-2-C8j6TBD_.jpg'
  },
  {
    name: 'rkdf-student-3.jpg',
    url: 'https://rkdf2.lovable.app/assets/rkdf-student-3-DaJpUwTp.jpg'
  },
  {
    name: 'rkdf-logo.png',
    url: 'https://rkdf2.lovable.app/assets/rkdf-logo-BMeoHdFf.png'
  },
  {
    name: 'rkdf-drone.mp4',
    url: 'https://rkdf2.lovable.app/__l5e/assets-v1/dba23ca1-9f95-4815-a10a-0bac2715ea6a/rkdf-drone.mp4'
  }
];

async function downloadAsset(item) {
  const dest = path.join(assetsDir, item.name);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log(`Already exists: ${item.name} (${fs.statSync(dest).size} bytes)`);
    return;
  }
  console.log(`Downloading: ${item.name} from ${item.url}...`);
  try {
    const res = await fetch(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!res.ok) {
      console.error(`Failed ${item.name}: status ${res.status}`);
      return;
    }
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(dest, buffer);
    console.log(`Saved: ${item.name} (${buffer.length} bytes)`);
  } catch (err) {
    console.error(`Error downloading ${item.name}:`, err.message);
  }
}

async function main() {
  console.log('Downloading all RKDF University Dubai assets...');
  for (const item of assets) {
    await downloadAsset(item);
  }
  console.log('Finished downloading assets.');
}

main();
