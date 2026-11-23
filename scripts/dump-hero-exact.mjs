import fs from 'fs';

const html = fs.readFileSync('scratch_unipix_hero_complete.html', 'utf8');

console.log("=== FULL COMPLETE HERO MARKUP DUMP ===");
fs.writeFileSync('scratch_hero_pretty.html', html);

// Extract the 3 SVGs in full
const svgs = html.match(/<svg[\s\S]*?<\/svg>/gi) || [];
svgs.forEach((s, i) => {
  console.log(`\n--- SVG #${i} FULL ---`);
  console.log(s);
});

// Extract all text and buttons
const btns = html.match(/<a[^>]*class="[^"]*(?:btn|button)[^"]*"[^>]*>([\s\S]*?)<\/a>/gi) || [];
console.log("\n--- BUTTONS ---");
btns.forEach(b => console.log(b));
