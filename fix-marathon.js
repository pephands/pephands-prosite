const fs = require('fs');
const path = require('path');

const scssPath = path.join(__dirname, 'src/app/pages/marathon-2026/marathon-2026.scss');
let content = fs.readFileSync(scssPath, 'utf8');

// 1. Replace variables
content = content.replace(/\$ph-primary:\s*#[a-fA-F0-9]+;/, '$ph-primary: #5b1a6b;'); // Purple
content = content.replace(/\$ph-accent:\s*#[a-fA-F0-9]+;/, '$ph-accent: #e8a33d;'); // Gold
content = content.replace(/\$ph-dark:\s*#[a-fA-F0-9]+;/, '$ph-dark: #260f2e;'); // Ink
content = content.replace(/\$ph-gray:\s*#555555;/, '$ph-gray: #555555;');
content = content.replace(/\$ph-light:\s*#f4f6f9;/, '$ph-light: #fbf6f9;'); // Bg
content = content.replace(/\$ph-white:\s*#ffffff;/, '$ph-white: #ffffff;');
content = content.replace(/\$ph-border:\s*#e0e0e0;/, '$ph-border: #e0e0e0;');

// Also add a magenta variable just in case
if (!content.includes('$ph-magenta')) {
    content = content.replace(/\$ph-border:\s*#e0e0e0;/, '$ph-border: #e0e0e0;\n$ph-magenta: #a6266f;');
}

// 2. Add heading-box styles if missing
if (!content.includes('.heading-box')) {
    const headingBoxStyles = `
// ── SECTION HEADINGS ─────────────────────────────────
.heading-box {
  margin-bottom: 2rem;
  
  .topic-label {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: $ph-accent;
    background: rgba(232, 163, 61, 0.1);
    padding: 6px 14px;
    border-radius: 20px;
    margin-bottom: 12px;
    &.white-badge {
      color: $ph-primary;
      background: $ph-white;
    }
  }

  .main-title {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    color: $ph-primary;
    line-height: 1.2;
    margin-bottom: 0;
    &.white {
      color: $ph-white;
    }
  }

  .accent-line {
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, $ph-primary, $ph-accent);
    border-radius: 2px;
    margin-top: 16px;
    &.white-line {
      background: $ph-accent;
    }
  }

  .sub-heading {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    font-weight: 400;
    &.mild-purple {
      color: rgba(91, 26, 107, 0.8);
    }
    &.white {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
`;
    // Insert after Shared Utilities
    content = content.replace('// ── HERO ─────────────────────────────────────────────', headingBoxStyles + '\n// ── HERO ─────────────────────────────────────────────');
}

// 3. Fix hero padding to prevent hitting the header
content = content.replace(/(\.m26-hero\s*\{[^}]*?)padding:\s*100px\s+0;/, '$1padding: 160px 0 100px 0;');

// 4. Replace hardcoded colors in the file
content = content.replace(/#1c061d/g, '$ph-dark');
content = content.replace(/#350f36/g, '$ph-dark');
content = content.replace(/#c135d6/g, '$ph-magenta');
content = content.replace(/#d500f9/g, '$ph-accent');
content = content.replace(/rgba\(156,\s*39,\s*176/g, 'rgba(91, 26, 107'); // old purple to new purple rgb
content = content.replace(/rgba\(\$ph-accent,\s*0\.35\)/g, 'rgba(232, 163, 61, 0.35)'); // old purple to new purple rgb

fs.writeFileSync(scssPath, content, 'utf8');
console.log('Successfully updated marathon-2026.scss');
