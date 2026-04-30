
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://mypctcalculator.com';
const LAST_MOD = '2026-04-25';

const staticRoutes = [
  // Homepage (1)
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  // Static calculators (8)
  { path: '/tip-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/discount-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/grade-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/sales-tax-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/percentage-change-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/percentage-difference-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/margin-calculator', priority: '0.9', changefreq: 'monthly' },
  { path: '/what-percent-calculator', priority: '0.9', changefreq: 'monthly' },
  // Quick Answers index (1)
  { path: '/quick-answers', priority: '0.6', changefreq: 'monthly' },
  // About / Contact (2)
  { path: '/about', priority: '0.3', changefreq: 'yearly' },
  { path: '/contact', priority: '0.3', changefreq: 'yearly' },
  // Privacy / Terms (2)
  { path: '/privacy', priority: '0.1', changefreq: 'yearly' },
  { path: '/terms', priority: '0.1', changefreq: 'yearly' },
];

// Set 1: 13 percentages * 17 values = 221 combinations
const percentages = [5, 10, 15, 20, 25, 30, 33, 40, 50, 60, 75, 80, 90];
const values = [20, 25, 50, 75, 100, 150, 200, 250, 300, 400, 500, 750, 1000, 1500, 2000, 5000, 10000];

// Set 2: 16 percentages * 16 values = 256 additional combinations (Total dynamic = 477)
const additionalPercentages = [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19];
const additionalValues = [10, 30, 40, 60, 70, 80, 90, 110, 120, 130, 140, 160, 170, 180, 190, 210];

const dynamicRoutes = [];

// Generate primary combinations (221)
for (const pct of percentages) {
  for (const val of values) {
    dynamicRoutes.push({
      path: `/what-is-${pct}-percent-of-${val}`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  }
}

// Generate additional combinations (256)
for (const pct of additionalPercentages) {
  for (const val of additionalValues) {
    dynamicRoutes.push({
      path: `/what-is-${pct}-percent-of-${val}`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  }
}

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const xmlUrls = allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${LAST_MOD}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');

// Ensure public directory exists
const publicDir = path.dirname(outputPath);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(outputPath, sitemapXml.trim());

// Validation Output Logging
console.log("\n=== SITEMAP GENERATION SCRIPT OUTPUT ===");
console.log(`(1) Homepage (/): 1 URL - Priority: 1.0, Changefreq: weekly`);
console.log(`(2) Static calculators: 8 URLs - Priority: 0.9, Changefreq: monthly`);
console.log(`(3) Quick Answers index: 1 URL - Priority: 0.6, Changefreq: monthly`);
console.log(`(4) Quick Answer 'what-is' pages: ${dynamicRoutes.length} URLs - Priority: 0.7, Changefreq: monthly`);
console.log(`    - Primary combinations: ${percentages.length * values.length} URLs`);
console.log(`    - Additional combinations: ${additionalPercentages.length * additionalValues.length} URLs`);
console.log(`(5) About and Contact: 2 URLs - Priority: 0.3, Changefreq: yearly`);
console.log(`(6) Privacy Policy and Terms of Use: 2 URLs - Priority: 0.1, Changefreq: yearly`);
console.log("-----------------------------------------");
console.log(`SUCCESS: Generated sitemap.xml with exactly ${allRoutes.length} URLs at ${outputPath}\n`);
