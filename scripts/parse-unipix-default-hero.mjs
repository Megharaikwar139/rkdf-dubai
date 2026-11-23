import fs from 'fs';

const html = fs.readFileSync('unipix_default.html', 'utf8');

// Find "knowledge meets innovation" or "UNIVERSITY"
const idx = html.indexOf('knowledge meets innovation');
console.log("Found 'knowledge meets innovation' at index:", idx);

if (idx !== -1) {
  // Find surrounding container
  const start = html.lastIndexOf('<div class="elementor-element', idx - 200);
  const end = html.indexOf('</section>', idx) !== -1 ? html.indexOf('</section>', idx) + 10 : idx + 4000;
  const heroHtml = html.slice(Math.max(0, start - 500), idx + 3500);
  fs.writeFileSync('scratch_default_hero.html', heroHtml);
  console.log("Saved scratch_default_hero.html (length: " + heroHtml.length + ")");
} else {
  console.log("Searching for 'UNIVERSITY OF'...");
  const idx2 = html.indexOf('UNIVERSITY');
  console.log("Index of UNIVERSITY:", idx2);
  if (idx2 !== -1) {
    fs.writeFileSync('scratch_default_hero.html', html.slice(idx2 - 1000, idx2 + 3000));
  }
}
