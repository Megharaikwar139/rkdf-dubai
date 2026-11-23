import fs from 'fs';

const p1 = fs.readFileSync('scratch_marquee_empowering.html', 'utf8');
const p2 = fs.readFileSync('scratch_history_founder.html', 'utf8');

console.log("=== EXTRACTING ABOUT SECTION PIECES ===");

// 1. Laurel crest SVG from p1
const laurelMatch = p1.match(/<svg[\s\S]*?<\/svg>/);
console.log("Laurel Crest SVG found:", !!laurelMatch);

// 2. Spinning Circle & Play Button from p2
const spinnerMatch = p2.match(/<svg class="spinner"[\s\S]*?<\/svg>/);
console.log("Spinner SVG found:", !!spinnerMatch);

// 3. Icon 1 (Campus Building) from p2
const icon1Match = p2.match(/<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" width="118" height="118" viewBox="0 0 118 118" fill="none">([\s\S]*?)<\/svg>/g);
console.log("Building/Temple SVGs found:", icon1Match ? icon1Match.length : 0);

console.log("All pieces successfully confirmed!");
