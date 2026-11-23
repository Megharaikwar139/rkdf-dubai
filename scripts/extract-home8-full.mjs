import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

// Find all elements with data-element_type="container" or section
// Let's parse out the top level containers
const containerRegex = /<div class="elementor-element elementor-element-[a-z0-9]+ e-[^"]* e-parent"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*(?=<div class="elementor-element elementor-element-[a-z0-9]+ e-[^"]* e-parent"|$)/gi;

// Or simpler: let's inspect the sections that appear sequentially in the main content.
// Let's find the header, hero, and all sections.
const mainIdx = html.indexOf('class="elementor elementor-13589"');
const content = html.slice(mainIdx);

// Let's find all widgets and their titles and texts
const widgets = [];
const widgetRegex = /data-widget_type="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
let wm;
while ((wm = widgetRegex.exec(content)) !== null) {
  const type = wm[1];
  const inner = wm[2].replace(/<script[\s\S]*?<\/script>/gi, '');
  const text = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length > 0 && text.length < 500) {
    widgets.push({ type, text: text.slice(0, 200) });
  }
}

console.log("Found widgets:", widgets.length);
widgets.forEach((w, i) => {
  console.log(`[${i}] ${w.type} => ${w.text}`);
});
