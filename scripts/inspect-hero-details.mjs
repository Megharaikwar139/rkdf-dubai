import fs from 'fs';

const html = fs.readFileSync('scratch_unipix_hero_complete.html', 'utf8');

// Print all elements with class and their inner content
const lines = html.split('\n');
console.log(`Total lines: ${lines.length}`);
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.includes('class=') || line.includes('<h') || line.includes('<p') || line.includes('<a') || line.includes('<img')) {
    console.log(`[Line ${i}] ${line.slice(0, 140)}`);
  }
}
