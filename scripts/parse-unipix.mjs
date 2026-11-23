import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

console.log("=== HEADINGS ===");
const headings = html.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [];
headings.forEach(h => {
  const clean = h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (clean) console.log(clean);
});

console.log("\n=== STRUCTURE BLOCKS (sections / wrappers) ===");
const sectionMatches = html.match(/<(?:section|div)[^>]*(?:class|id)=["'][^"']*(?:rt-|banner|hero|about|program|tuition|campus|admission|event|cta|footer|header|partner|brand)[^"']*["'][^>]*>/gi) || [];
console.log("Total matched section tags:", sectionMatches.length);
sectionMatches.slice(0, 40).forEach(s => console.log(s.slice(0, 150)));

console.log("\n=== ALL IMAGES IN HOME-8 ===");
const imgMatches = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi) || [];
const uniqueImg = Array.from(new Set(imgMatches.map(img => {
  const m = img.match(/src=["']([^"']+)["']/i);
  return m ? m[1] : '';
}))).filter(Boolean);

console.log(`Found ${uniqueImg.length} unique images:`);
uniqueImg.forEach(s => console.log(s));
