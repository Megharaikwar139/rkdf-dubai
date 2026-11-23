import https from 'https';

https.get('https://themewant.com/products/wordpress/unipix/wp-content/uploads/elementor/css/post-12542.css?ver=1790097044', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    for (const id of ['f078461', '03fb316']) {
      const idx = data.indexOf(id);
      console.log(`\n=== SLICE FOR ${id} ===\n`, data.slice(idx, idx + 800));
    }
  });
}).on('error', err => console.error(err));
