import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

// Find all data-widget_type in html
const widgets = [];
const regex = /data-widget_type="([^"]+)"/g;
let m;
while ((m = regex.exec(html)) !== null) {
  widgets.push(m[1]);
}
console.log("Distinct widgets:", Array.from(new Set(widgets)));

// Let's find all text blocks with their surrounding context
const matches = html.match(/<(?:h[1-6]|p|a|span|button)[^>]*>(.*?)<\/(?:h[1-6]|p|a|span|button)>/g) || [];
console.log(`Total text tags: ${matches.length}`);

// Let's write an HTML outline of Home 8
// Find all elementor containers
const containers = [];
const cRegex = /<div class="elementor-element elementor-element-([a-z0-9]+)[^"]*e-parent"[^>]*>/g;
let cm;
while ((cm = cRegex.exec(html)) !== null) {
  containers.push({ id: cm[1], index: cm.index });
}

console.log(`Found ${containers.length} top-level elementor parent containers:`);
for (let i = 0; i < containers.length; i++) {
  const start = containers[i].index;
  const end = (i + 1 < containers.length) ? containers[i+1].index : html.indexOf('</body>');
  const slice = html.slice(start, end);
  
  // Extract text, headings, images
  const h = (slice.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || []).map(x => x.replace(/<[^>]+>/g, '').trim());
  const imgs = (slice.match(/src="([^"]+)"/gi) || []).map(x => x.replace(/src="|"/g, ''));
  const p = (slice.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || []).map(x => x.replace(/<[^>]+>/g, '').trim());
  const btns = (slice.match(/<a[^>]*class="[^"]*(?:btn|button)[^"]*"[^>]*>([\s\S]*?)<\/a>/gi) || []).map(x => x.replace(/<[^>]+>/g, '').trim());
  
  console.log(`\n================== CONTAINER #${i+1} (ID: ${containers[i].id}) ==================`);
  if (h.length) console.log("Headings:", h);
  if (p.length) console.log("Paragraphs:", p.slice(0, 3));
  if (btns.length) console.log("Buttons:", btns);
  if (imgs.length) console.log("Images:", imgs.slice(0, 4));
}
