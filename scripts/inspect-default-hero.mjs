import fs from 'fs';

const html = fs.readFileSync('scratch_default_hero.html', 'utf8');

console.log("=== IMAGES IN HERO ===");
const imgs = html.match(/src=["']([^"']+)["']/gi) || [];
imgs.forEach(img => console.log(img));

console.log("\n=== TEXT ELEMENTS ===");
const textMatches = html.match(/<(?:h[1-6]|span|p|a|div)[^>]*>(.*?)<\/(?:h[1-6]|span|p|a|div)>/g) || [];
textMatches.slice(0, 30).forEach(t => {
  const clean = t.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (clean) console.log(clean);
});

console.log("\n=== SVGS IN HERO ===");
const svgs = html.match(/<svg[\s\S]*?<\/svg>/gi) || [];
console.log(`Found ${svgs.length} SVGs:`);
svgs.forEach((s, i) => console.log(`[SVG ${i}] snippet:`, s.slice(0, 150)));

fs.writeFileSync('scratch_hero_full_dump.txt', html);
console.log("\nFull HTML written to scratch_hero_full_dump.txt");
