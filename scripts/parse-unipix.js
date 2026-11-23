const fs = require('fs');

const html = fs.readFileSync('unipix_home8.html', 'utf8');

console.log("=== HEADINGS ===");
const headings = html.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [];
headings.forEach(h => {
  const clean = h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (clean) console.log(clean);
});

console.log("\n=== KEY SECTION / ELEMENTOR CLASSES ===");
const elWidgets = html.match(/class="[^"]*(?:rt-|elementor-widget-|section-|banner-|header-|footer-)[^"]*"/gi) || [];
const uniqueClasses = new Set();
elWidgets.forEach(w => {
  w.match(/class="([^"]+)"/)[1].split(' ').forEach(c => {
    if (c.includes('banner') || c.includes('about') || c.includes('program') || c.includes('tuition') || c.includes('campus') || c.includes('admission') || c.includes('event') || c.includes('header') || c.includes('footer')) {
      uniqueClasses.add(c);
    }
  });
});
console.log(Array.from(uniqueClasses).slice(0, 50));

console.log("\n=== ALL IMAGES IN HOME-8 ===");
const imgMatches = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi) || [];
const images = [];
imgMatches.forEach(img => {
  const src = img.match(/src=["']([^"']+)["']/i);
  const alt = img.match(/alt=["']([^"']*)["']/i);
  if (src) images.push({ src: src[1], alt: alt ? alt[1] : '' });
});
console.log(`Found ${images.length} images. Unique:`);
const uniqueImg = Array.from(new Set(images.map(i => i.src)));
uniqueImg.forEach(s => console.log(s));
