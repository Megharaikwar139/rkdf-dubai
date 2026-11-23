import https from 'https';

https.get('https://themewant.com/products/wordpress/unipix/wp-content/uploads/elementor/css/post-12584.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const bgImgs = [...data.matchAll(/background(?:-image)?:\s*url\(([^)]+)\)/gi)].map(x => x[1]);
    console.log('Background images in post-12584.css:', bgImgs);
  });
}).on('error', err => console.error(err));
