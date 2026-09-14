// Converts the print-ready forecast HTML pages into real PDF files using
// headless Chromium. Run from the repository root:
//   node build/pdf/make_pdfs.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const DIR = path.resolve(__dirname, '..', '..', 'ISS-Statistics-II-Mock', 'PDFs');

const FILES = [
  'Forecast-Linear-Models',
  'Forecast-Statistical-Inference',
];

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--headless=new'] });
  for (const name of FILES) {
    const htmlPath = path.join(DIR, name + '.html');
    const pdfPath = path.join(DIR, name + '.pdf');
    if (!fs.existsSync(htmlPath)) {
      console.error('Missing', htmlPath);
      continue;
    }
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto('file://' + htmlPath, { waitUntil: 'load' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
    });
    const stat = fs.statSync(pdfPath);
    console.log(name + '.pdf', (stat.size / 1024 / 1024).toFixed(2) + ' MB', errors.length ? 'ERRORS: ' + errors.join(';') : 'ok');
    await page.close();
  }
  await browser.close();
})();
