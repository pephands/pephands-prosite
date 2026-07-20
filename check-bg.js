const fs = require('fs');
const path = require('path');

const components = [
  'home-hero', 'home-about', 'home-specialday', 'home-medical', 'home-sdg',
  'home-actions', 'home-carefund', 'home-recentevents', 'home-education',
  'home-counts', 'home-programmes', 'home-partners', 'home-giveinkind', 'home-blog', 'volunteer-ad'
];

components.forEach(comp => {
  const cssFile = path.join('src/app/components', comp, `${comp}.css`);
  const scssFile = path.join('src/app/components', comp, `${comp}.scss`);
  
  let content = '';
  if (fs.existsSync(cssFile)) content = fs.readFileSync(cssFile, 'utf8');
  else if (fs.existsSync(scssFile)) content = fs.readFileSync(scssFile, 'utf8');
  else return;

  const bgMatch = content.match(/background(?:-color)?:\s*([^;]+);/);
  if (bgMatch) {
    console.log(`${comp.padEnd(20)}: ${bgMatch[1].substring(0, 50)}`);
  } else {
    console.log(`${comp.padEnd(20)}: NO BG DEFINED (Defaults to white)`);
  }
});
