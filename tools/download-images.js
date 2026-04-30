import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const files = [
  {
    url: 'https://raw.githubusercontent.com/MrDVD858/mypctcalculator-assets/main/favicon.svg',
    dest: 'favicon.svg'
  },
  {
    url: 'https://raw.githubusercontent.com/MrDVD858/mypctcalculator-assets/main/favicon-32.png',
    dest: 'favicon-32.png'
  },
  {
    url: 'https://raw.githubusercontent.com/MrDVD858/mypctcalculator-assets/main/favicon-180.png',
    dest: 'favicon-180.png'
  },
  {
    url: 'https://raw.githubusercontent.com/MrDVD858/mypctcalculator-assets/main/favicon-512.png',
    dest: 'favicon-512.png'
  },
  {
    url: 'https://raw.githubusercontent.com/MrDVD858/mypctcalculator-assets/main/og-image.png',
    dest: 'og-image.png'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const destPath = path.join(publicDir, dest);
    const file = fs.createWriteStream(destPath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => reject(err));
    });
  });
};

console.log('Downloading static image assets to public/ directory...');

Promise.all(files.map(f => download(f.url, f.dest)))
  .then(() => {
    console.log('✅ Successfully downloaded all static image assets!');
  })
  .catch(e => {
    console.error('❌ Error downloading images:', e);
    process.exit(1);
  });