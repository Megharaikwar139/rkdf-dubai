import fs from 'fs';

const html = fs.readFileSync('scratch_hero_pretty.html', 'utf8');

const match = html.match(/xlink:href="data:image\/png;base64,([^"]+)"/);
if (match) {
  const buffer = Buffer.from(match[1], 'base64');
  fs.writeFileSync('public/assets/home1/arrow.png', buffer);
  console.log("Saved public/assets/home1/arrow.png (size: " + buffer.length + ")");
} else {
  console.log("No base64 image found in SVG #1");
}
