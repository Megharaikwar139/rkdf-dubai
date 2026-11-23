import fs from 'fs';

const html = fs.readFileSync('unipix_default.html', 'utf8');

const idx = html.indexOf('knowledge meets innovation');
console.log("Found at:", idx);

// Find parent section start (elementor-element with e-parent)
const before = html.slice(0, idx);
const parentIdx = before.lastIndexOf('e-parent');
const divStart = before.lastIndexOf('<div class="elementor-element', parentIdx);

// Find next parent section
const after = html.slice(idx);
const nextParentIdx = after.indexOf('e-parent');
const divEnd = after.lastIndexOf('<div class="elementor-element', nextParentIdx);

const sectionHtml = html.slice(divStart, idx + divEnd);
fs.writeFileSync('scratch_unipix_hero_complete.html', sectionHtml);
console.log("Saved scratch_unipix_hero_complete.html, length:", sectionHtml.length);

// Extract all images
const imgs = (sectionHtml.match(/src="([^"]+)"/gi) || []).map(x => x.replace(/src="|"/g, ''));
console.log("Images found:", imgs);

// Extract all SVGs
const svgs = sectionHtml.match(/<svg[\s\S]*?<\/svg>/gi) || [];
console.log("SVGs count:", svgs.length);
svgs.forEach((s, i) => console.log(`SVG #${i}:`, s.slice(0, 100)));

// Extract all headings and text
const h = sectionHtml.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [];
console.log("Headings:", h.map(x => x.replace(/<[^>]+>/g, '').trim()));
