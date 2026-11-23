import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');
const idx = html.indexOf('Academics &amp; Program');
const start = html.lastIndexOf('<div class="elementor-element', idx - 200);
const end = html.indexOf('Student Life', idx);
const block = html.slice(start, end);

fs.writeFileSync('scratch_academics_program.html', block);
console.log("Saved scratch_academics_program.html, length:", block.length);

const headings = (block.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || []).map(x => x.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
const imgs = (block.match(/src="([^"]+)"/gi) || []).map(x => x.replace(/src="|"/g, ''));
const text = block.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

console.log("HEADINGS:", headings);
console.log("IMAGES:", imgs);
console.log("TEXT PREVIEW:", text.slice(0, 300));
