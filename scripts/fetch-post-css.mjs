import https from 'https';

https.get('https://themewant.com/products/wordpress/unipix/wp-content/uploads/elementor/css/post-12584.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('post-12584.css status:', res.statusCode, 'length:', data.length);
    for (const id of ['20087c5', 'f078461', '03fb316']) {
      const idx = data.indexOf(id);
      if (idx !== -1) {
        console.log(`Found ${id}:`, data.slice(idx, idx + 400));
      }
    }
  });
}).on('error', err => console.error(err));
