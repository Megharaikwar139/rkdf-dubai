import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

// Look for style tags or inline styles or color codes
const colorCodes = html.match(/#[0-9a-fA-F]{3,8}|rgba?\([0-9\s,.]+\)/g) || [];
const colorCounts = {};
colorCodes.forEach(c => {
  const norm = c.toLowerCase();
  colorCounts[norm] = (colorCounts[norm] || 0) + 1;
});

const sortedColors = Object.entries(colorCounts).sort((a,b) => b[1] - a[1]);
console.log("Top colors in Home 8:", sortedColors.slice(0, 20));

// Check header style and classes
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log("Header snippet:", headerMatch[0].slice(0, 400));
} else {
  console.log("No <header> tag, checking header classes");
  const hDiv = html.match(/class="[^"]*header[^"]*"/gi);
  console.log(hDiv ? hDiv.slice(0, 10) : 'none');
}
