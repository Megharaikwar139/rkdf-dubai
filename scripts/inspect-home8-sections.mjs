import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

// Find all elements with classes that look like major sections or widgets
console.log("=== MAIN CONTENT ANALYSIS OF HOME-8 ===");

// Let's find the main element or the content container
const bodyIndex = html.indexOf('<body');
const bodyContent = html.slice(bodyIndex);

// Let's look for elementor-section or e-parent or container
const sectionRegex = /<div class="elementor-element[^"]*e-parent[^"]*"[^>]*>([\s\S]*?)(?=<div class="elementor-element[^"]*e-parent|$)/g;

let count = 0;
let match;
while ((match = sectionRegex.exec(bodyContent)) !== null) {
  count++;
  const sectionHtml = match[0];
  // extract text and headings and images
  const headings = (sectionHtml.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
  const subheadings = (sectionHtml.match(/class="[^"]*(?:sub-title|subtitle|rt-subtitle)[^"]*"[^>]*>([\s\S]*?)<\/[^>]+>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const images = (sectionHtml.match(/src="([^"]+)"/gi) || []).map(s => s.replace(/src="|"/g, ''));
  const textSnippets = (sectionHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || []).map(p => p.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
  
  console.log(`\n--- SECTION #${count} ---`);
  console.log("Headings:", headings);
  console.log("Subheadings:", subheadings);
  console.log("Images Count:", images.length, images.slice(0, 3));
  console.log("Paragraphs:", textSnippets.slice(0, 2));
}

console.log("\nTotal Parent Sections:", count);
