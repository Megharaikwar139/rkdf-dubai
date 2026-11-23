import fs from 'fs';

const html = fs.readFileSync('unipix_home8.html', 'utf8');

function inspectContainer(id, label) {
  const re = new RegExp(`<div[^>]*elementor-element-${id}[^>]*>[\\s\\S]*?(?=<div[^>]*e-parent|$)`, 'i');
  const m = html.match(re);
  if (m) {
    fs.writeFileSync(`scratch_${label}.html`, m[0]);
    console.log(`=== ${label} (size: ${m[0].length}) ===`);
    // Extract images
    const imgs = [...m[0].matchAll(/<img[^>]*src="([^"]+)"/g)].map(x => x[1]);
    console.log('Images:', imgs);
    // Extract headings
    const headings = [...m[0].matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(x => x[1].replace(/<[^>]+>/g, '').trim());
    console.log('Headings:', headings);
  } else {
    console.log(`Container ${id} not found`);
  }
}

inspectContainer('acef9b8', 'faculties');
inspectContainer('08fd830', 'admission_form');
