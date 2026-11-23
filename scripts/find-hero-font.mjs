import fs from 'fs';

const html = fs.readFileSync('unipix_default.html', 'utf8');

// Search for google font links
const gf = html.match(/fonts\.googleapis\.com\/css2\?[^"']+/gi) || [];
console.log("Google Fonts:", gf);

// Search for font-family in stylesheet links or style blocks
const styles = html.match(/font-family:\s*["'][^"']+["']/gi) || [];
console.log("Font styles:", Array.from(new Set(styles)));
